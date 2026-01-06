# Fix SSH Access - Step by Step

## The Problem
Your RSA key is being offered to the server, but the server is rejecting it because it's not in the authorized_keys file on the Oracle Cloud instance.

## Solution: Add the Public Key via Oracle Cloud Console

### Step 1: Copy Your Public Key
```bash
cat ~/.ssh/oracle_cloud_rsa.pub
```

Copy this entire line (it starts with `ssh-rsa` and ends with your email):
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC2SgU6OjDd2uzYUF/Wom/PEVjRCkERLCDucte3bSKZisrJ1zAOhxEbYY/tsOb1cMq6wMQJS3c2c55lgam3iOysjOr82sqFwagNsLhw4+ytZ3z8HMw4xeumN5LStFNRc1lfI23h7thhRktlJ7KB0f6vxyN9hmXw25VjHbhxpj2FsoFoowKvv2mTqKFqFhjim5YlM3W73pb5kUQjVBzQwkrNPFaTNcAwyfuw7KSrUduYGe5NHouM4EltG608lIQUDjM64Sfw1Cn49gfVkNoURmoMF27f2CKXvjulVT4JnLNkCiqRw25PSqTFuEahzXqry84JhZ8Gswt9sr9P0EqC/X2brincy+R4mC8Fwh/O3LLE5VZXOye5qrF4jEi4JkykXGJ0qcHVyfHZUFqtuZz6c8YNcjR+ykeoXITo/cw96l2DccJ5Y3P/4HHp4/iPNpQDLR3TBsGlcUUrSJUf6Im+nZ4twEJhQivWmk+JymXW/IYhFtMRyMvMoJp48cvN5WZ4w19PgcRA+cbCDQVGSqJoZc5Yn3A4x9nGuI9pSxkvrl8aNNtPo/fCKqLZhteWkirSK11brngwdHG1lu8LbVJbkzzK3DIgoEPgMpJgeIMJnvu4ArkhRFpQGdcTxSDtE0qsj7CCOteMRbheshokV4zpxMfpjjr2eKOPUpSTqoxiR0/ozQ== acheampong0805@outlook.com
```

### Step 2: Access Oracle Cloud Instance Console

#### Method A: Via Cloud Console (Browser-Based Serial Console)
1. Go to https://cloud.oracle.com and log in
2. Navigate to: **☰ Menu** → **Compute** → **Instances**
3. Click on your instance (the one with IP 170.9.254.152)
4. Scroll down and click **Console Connection** in the left sidebar
5. Click **Launch Cloud Shell Connection**
6. Log in with your instance credentials (username: `opc`)

#### Method B: Add SSH Key via Instance Metadata (Simpler - Recommended)
1. Go to https://cloud.oracle.com and log in
2. Navigate to: **☰ Menu** → **Compute** → **Instances**
3. Click on your instance (170.9.254.152)
4. Look for **Instance Details** section
5. Click **Edit** next to "SSH keys"
6. Click **Add SSH Keys**
7. Select **Paste SSH keys**
8. Paste the ENTIRE public key from Step 1
9. Click **Save changes**

**Important**: This method adds the key to instance metadata. If your instance is configured to read SSH keys from metadata at boot, you may need to restart the instance OR use Method A to manually add it.

### Step 3: If Using Method A (Console Connection), Add Key Manually
Once logged into the serial console:

```bash
# Create .ssh directory if it doesn't exist
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Add your public key to authorized_keys
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC2SgU6OjDd2uzYUF/Wom/PEVjRCkERLCDucte3bSKZisrJ1zAOhxEbYY/tsOb1cMq6wMQJS3c2c55lgam3iOysjOr82sqFwagNsLhw4+ytZ3z8HMw4xeumN5LStFNRc1lfI23h7thhRktlJ7KB0f6vxyN9hmXw25VjHbhxpj2FsoFoowKvv2mTqKFqFhjim5YlM3W73pb5kUQjVBzQwkrNPFaTNcAwyfuw7KSrUduYGe5NHouM4EltG608lIQUDjM64Sfw1Cn49gfVkNoURmoMF27f2CKXvjulVT4JnLNkCiqRw25PSqTFuEahzXqry84JhZ8Gswt9sr9P0EqC/X2brincy+R4mC8Fwh/O3LLE5VZXOye5qrF4jEi4JkykXGJ0qcHVyfHZUFqtuZz6c8YNcjR+ykeoXITo/cw96l2DccJ5Y3P/4HHp4/iPNpQDLR3TBsGlcUUrSJUf6Im+nZ4twEJhQivWmk+JymXW/IYhFtMRyMvMoJp48cvN5WZ4w19PgcRA+cbCDQVGSqJoZc5Yn3A4x9nGuI9pSxkvrl8aNNtPo/fCKqLZhteWkirSK11brngwdHG1lu8LbVJbkzzK3DIgoEPgMpJgeIMJnvu4ArkhRFpQGdcTxSDtE0qsj7CCOteMRbheshokV4zpxMfpjjr2eKOPUpSTqoxiR0/ozQ== acheampong0805@outlook.com" >> ~/.ssh/authorized_keys

# Set correct permissions
chmod 600 ~/.ssh/authorized_keys

# Verify it was added
cat ~/.ssh/authorized_keys
```

### Step 4: Test SSH Connection
From your local machine:
```bash
ssh -i ~/.ssh/oracle_cloud_rsa opc@170.9.254.152
```

If successful, you should see:
```
[opc@instance-name ~]$
```

---

## Alternative: Check for Existing Keys

If you previously had SSH access working, there might be an old key on the instance. You can check your local SSH directory for other keys:

```bash
ls -la ~/.ssh/
```

Look for any other key files (id_rsa, id_rsa.pub, id_ecdsa, etc.) that might have been used before.

---

## Common Issues

### Issue 1: Instance Not Reading Metadata
If Method B doesn't work after adding the key via console, the instance might not be configured to read SSH keys from instance metadata. Use Method A instead.

### Issue 2: SELinux Blocking
If you added the key but still can't connect, SELinux might be blocking. Via serial console:
```bash
sudo restorecon -Rv ~/.ssh
```

### Issue 3: Wrong Permissions
SSH is very particular about permissions:
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Issue 4: Multiple Keys in authorized_keys
Check if there are old/conflicting keys:
```bash
cat ~/.ssh/authorized_keys
```

---

## Next Steps After SSH Works

1. Test connection: `ssh -i ~/.ssh/oracle_cloud_rsa opc@170.9.254.152`
2. Get private key for GitHub: `cat ~/.ssh/oracle_cloud_rsa`
3. Add secrets to GitHub repo
4. Deploy!

# Restart Oracle Cloud Instance to Apply SSH Key

Since you added the SSH key via the Oracle Cloud Console, you just need to restart the instance for it to take effect.

## Steps to Restart Instance

1. In your Oracle Cloud Console (where you added the SSH key)
2. Make sure you're on the instance details page (IP: 170.9.254.152)
3. Click the **"More Actions"** button (three dots) or look for **"Reboot"** button
4. Select **"Reboot"** (NOT "Stop" - Reboot is safer)
5. Confirm the reboot
6. Wait 1-2 minutes for the instance to come back online

## Why This Works

When an Oracle Cloud instance boots:
- Cloud-init service runs automatically
- It reads SSH keys from instance metadata
- It writes them to `/home/opc/.ssh/authorized_keys`
- Your newly added key will be available for SSH access

## After Reboot

Once the instance is back online (you'll see it's status as "Running" in the console), test the connection:

```bash
ssh -i ~/.ssh/oracle_cloud_rsa opc@170.9.254.152
```

If it works, you're ready to deploy!

## Alternative: Force Stop and Start

If a simple reboot doesn't work, try:
1. **Stop** the instance (wait for it to fully stop)
2. **Start** the instance again
3. Wait for it to be "Running"
4. Test SSH connection

This forces a complete reinit of the instance.

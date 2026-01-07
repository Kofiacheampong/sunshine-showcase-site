# Quick Start - Deploy Your Portfolio in 3 Steps

Your React portfolio is built, committed, and ready to deploy! Just 3 simple steps:

---

## Step 1: Add SSH Key via Oracle Console (1 time only)

1. Go to Oracle Cloud Console → Your Instance
2. Click **"Console connection"** → **"Launch Cloud Shell connection"**
3. When the terminal opens, paste this ONE command and press Enter:

```bash
mkdir -p ~/.ssh && echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC2SgU6OjDd2uzYUF/Wom/PEVjRCkERLCDucte3bSKZisrJ1zAOhxEbYY/tsOb1cMq6wMQJS3c2c55lgam3iOysjOr82sqFwagNsLhw4+ytZ3z8HMw4xeumN5LStFNRc1lfI23h7thhRktlJ7KB0f6vxyN9hmXw25VjHbhxpj2FsoFoowKvv2mTqKFqFhjim5YlM3W73pb5kUQjVBzQwkrNPFaTNcAwyfuw7KSrUduYGe5NHouM4EltG608lIQUDjM64Sfw1Cn49gfVkNoURmoMF27f2CKXvjulVT4JnLNkCiqRw25PSqTFuEahzXqry84JhZ8Gswt9sr9P0EqC/X2brincy+R4mC8Fwh/O3LLE5VZXOye5qrF4jEi4JkykXGJ0qcHVyfHZUFqtuZz6c8YNcjR+ykeoXITo/cw96l2DccJ5Y3P/4HHp4/iPNpQDLR3TBsGlcUUrSJUf6Im+nZ4twEJhQivWmk+JymXW/IYhFtMRyMvMoJp48cvN5WZ4w19PgcRA+cbCDQVGSqJoZc5Yn3A4x9nGuI9pSxkvrl8aNNtPo/fCKqLZhteWkirSK11brngwdHG1lu8LbVJbkzzK3DIgoEPgMpJgeIMJnvu4ArkhRFpQGdcTxSDtE0qsj7CCOteMRbheshokV4zpxMfpjjr2eKOPUpSTqoxiR0/ozQ== acheampong0805@outlook.com" >> ~/.ssh/authorized_keys && chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys && echo "✅ SSH key added! You can close this console now."
```

**That's it!** You'll see "✅ SSH key added!" when it's done.

---

## Step 2: Add GitHub Secrets (3 minutes)

Go to https://github.com/Kofiacheampong/sunshine-showcase-site/settings/secrets/actions

Click "New repository secret" and add these 4 secrets:

### Secret 1: SSH_PRIVATE_KEY
```bash
cat ~/.ssh/oracle_cloud_rsa
```
Copy the ENTIRE output (including `-----BEGIN` and `-----END` lines)

### Secret 2: REMOTE_HOST
```
170.9.254.152
```

### Secret 3: REMOTE_USER
```
opc
```

### Secret 4: REMOTE_PATH
```
/var/www/portfolio
```

---

## Step 3: Deploy!

### Option A: Automatic (Recommended)
Just push any change to main branch and it deploys automatically!

### Option B: Manual Trigger
1. Go to https://github.com/Kofiacheampong/sunshine-showcase-site/actions
2. Click "Deploy to Oracle Cloud"
3. Click "Run workflow"
4. Watch it deploy!

---

## What Happens Next?

- Your new React portfolio goes live at **https://kofiarcher.com**
- Every time you push to `main`, it auto-deploys
- Takes about 2-3 minutes per deployment
- You'll see the deployment status in GitHub Actions

---

## Need to Test SSH?

After Step 1, you can test SSH locally:
```bash
ssh -i ~/.ssh/oracle_cloud_rsa opc@170.9.254.152
```

If it connects, you're all set!

---

## Summary

- ✅ React site built and optimized for SEO
- ✅ All 5 projects added with details
- ✅ GitHub Actions CI/CD pipeline ready
- ✅ Deployment scripts configured
- 🎯 Just need to: Add SSH key → Add secrets → Deploy!

Your new portfolio is ready to go live! 🚀

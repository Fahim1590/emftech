# Deployment Guide for EMFTECH on Namecheap

To make your website live on Namecheap, follow these steps. Since we are using a **Single-File Build** strategy, the process is extremely simple.

## Option 1: Namecheap Shared Hosting (cPanel)

1. **Build the Project**:
   Run the following command in your local environment:
   ```bash
   npm run build
   ```
   This will generate a `dist/index.html` file. This file contains **everything** (HTML, CSS, and JavaScript).

2. **Login to Namecheap cPanel**:
   Navigate to your Namecheap account and open the cPanel for your hosting.

3. **File Manager**:
   - Open the **File Manager**.
   - Navigate to `public_html` (the root directory for your domain).

4. **Upload**:
   - Click **Upload** and select the `dist/index.html` file.
   - If you want the site to be your main homepage, ensure it is named exactly `index.html`.

5. **Assets (Optional)**:
   - If you have any files in the `public/` folder (like a favicon or OG image), upload them to the same `public_html` directory.

6. **SSL (HTTPS)**:
   - Ensure you have **Namecheap SSL** or **AutoSSL** enabled to provide the secure padlock icon (Required for the QR generator features).

## Option 2: Namecheap VPS (Node.js)

If you have a VPS, you can run the project using a simple server:

1. **Connect via SSH**:
   ```bash
   ssh root@your_vps_ip
   ```

2. **Install Node.js & PM2**:
   ```bash
   curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   npm install -g pm2
   ```

3. **Deploy**:
   Upload your `dist/` folder and use a simple server like `serve`:
   ```bash
   npm install -g serve
   pm2 start "serve -s dist -p 80" --name "emftech-site"
   ```

## Namecheap Domain Setup

- Ensure your **Nameservers** are pointed to Namecheap BasicDNS or Web Hosting DNS.
- Check the **Advanced DNS** tab to ensure the "A Record" points to your hosting IP.

---

### Need Help?
Contact the EMFTECH engineering team at irobiul159@gmail.com.

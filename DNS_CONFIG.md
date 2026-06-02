# DNS Configuration

## Bing Verification CNAME Record

Add the following CNAME record to your DNS provider (Cloudflare dashboard):

| Type  | Name                              | Value           |
|-------|-----------------------------------|-----------------|
| CNAME | 63137c716f0425c93820e9999d98da18 | verify.bing.com |

### Steps (Cloudflare)
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your domain
3. Go to **DNS > Records**
4. Click **Add record**
5. Select **CNAME** as the type
6. Enter `63137c716f0425c93820e9999d98da18` as the Name
7. Enter `verify.bing.com` as the Target/Value
8. Save the record

# Mangaale App Downloads

This directory contains the Mangaale mobile app APK files.

## APK Files

- `mangaale-latest.apk` - Latest stable version (always points to the current version)
- `mangaale-v1.0.apk` - Version 1.0
- `mangaale-v1.1.apk` - Version 1.1
- `mangaale-v1.2.apk` - Version 1.2

## Version Management

### How to Add New Versions

1. Upload the new APK file with version number: `mangaale-v1.x.apk`
2. Update `mangaale-latest.apk` to point to the latest version
3. Update the version info in `version-info.json`

### File Upload Command (Example)

```bash
# Using SCP
scp mangaale-v1.2.apk user@mangaale.com:/path/to/downloads/mangaale/

# Or using FTP/SFTP
# Configure your FTP client to upload to downloads/mangaale/
```

## Security Considerations

- All APK files should be served over HTTPS
- Consider using a CDN for faster downloads
- Implement file integrity checks using MD5/SHA256 hashes
- Keep backup copies of all released versions

## Direct Download Links

- Latest: https://www.mangaale.com/downloads/mangaale/mangaale-latest.apk
- v1.0: https://www.mangaale.com/downloads/mangaale/mangaale-v1.0.apk
- v1.1: https://www.mangaale.com/downloads/mangaale/mangaale-v1.1.apk
- v1.2: https://www.mangaale.com/downloads/mangaale/mangaale-v1.2.apk

## Nginx Configuration

Add this to your nginx.conf to serve APK files with correct headers:

```nginx
location /downloads/ {
    alias /var/www/mangaale/downloads/;
    
    # Set correct MIME type for APK
    types {
        application/vnd.android.package-archive apk;
    }
    
    # Force download
    add_header Content-Disposition "attachment; filename=$request_filename";
    
    # Cache control
    expires 30d;
    add_header Cache-Control "public, immutable";
    
    # Security headers
    add_header X-Content-Type-Options "nosniff";
}
```

## File Hashing (for integrity verification)

Generate MD5/SHA256 hashes for your APK files:

```bash
# MD5
md5sum mangaale-latest.apk > mangaale-latest.apk.md5

# SHA256
sha256sum mangaale-latest.apk > mangaale-latest.apk.sha256
```

Store these hashes for user verification.

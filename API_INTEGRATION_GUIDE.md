# Download App - API Integration Guide

This document outlines the APIs and backend requirements for the Mangaale app download system.

## Overview

The download system includes:
1. **APK Hosting** - Direct download from CDN/server
2. **Version Management** - Track and manage app versions
3. **Update Notifications** - Notify users about available updates
4. **Download Analytics** - Track download counts and user metrics

---

## 1. Version Check API

### Endpoint
```
GET /api/app/version
```

### Description
Returns the latest app version information and all available versions.

### Request
```bash
curl -X GET https://api.mangaale.com/api/app/version
```

### Response (200 OK)
```json
{
  "success": true,
  "data": {
    "versions": [
      {
        "version": "1.0.0",
        "versionCode": 1,
        "releaseDate": "2026-03-16T00:00:00Z",
        "size": "35 MB",
        "minAndroidVersion": "7.0",
        "downloadUrl": "/downloads/mangaale/mangaale-v1.0.apk",
        "hash": {
          "md5": "abc123def456",
          "sha256": "abc123def456789..."
        },
        "releaseNotes": "Initial release of Mangaale app",
        "isCritical": false,
        "downloadCount": 1500
      }
    ],
    "latest": {
      "version": "1.2.0",
      "versionCode": 3,
      "releaseDate": "2026-04-15T00:00:00Z",
      "downloadUrl": "/downloads/mangaale/mangaale-latest.apk",
      "size": "37 MB",
      "minAndroidVersion": "7.0",
      "isCritical": false,
      "releaseNotes": "New features and UI improvements",
      "hash": {
        "md5": "xyz789abc123",
        "sha256": "xyz789abc123def456..."
      }
    },
    "maintenance": {
      "inMaintenance": false,
      "message": "",
      "estimatedRestorationTime": null
    }
  },
  "timestamp": "2026-03-16T10:30:00Z"
}
```

### Error Response (500 Server Error)
```json
{
  "success": false,
  "error": {
    "code": "SERVER_ERROR",
    "message": "Failed to fetch version information"
  }
}
```

---

## 2. Download Tracking API

### Endpoint
```
POST /api/app/download
```

### Description
Records app download events for analytics.

### Request Body
```json
{
  "version": "1.2.0",
  "platform": "Android",
  "deviceModel": "Samsung Galaxy S21",
  "androidVersion": "12",
  "referrer": "home_page",
  "timestamp": "2026-03-16T10:30:00Z"
}
```

### Request Example
```bash
curl -X POST https://api.mangaale.com/api/app/download \
  -H "Content-Type: application/json" \
  -d '{
    "version": "1.2.0",
    "platform": "Android",
    "deviceModel": "Samsung Galaxy S21",
    "androidVersion": "12",
    "referrer": "home_page"
  }'
```

### Response (201 Created)
```json
{
  "success": true,
  "data": {
    "downloadId": "dl_abc123def456",
    "version": "1.2.0",
    "trackingId": "track_123abc",
    "recordedAt": "2026-03-16T10:30:00Z"
  }
}
```

---

## 3. App Feedback/Crash Reporting API

### Endpoint
```
POST /api/app/feedback
```

### Description
Allows users to report crashes, bugs, or provide feedback.

### Request Body
```json
{
  "appVersion": "1.2.0",
  "userId": "user_optional_id",
  "feedbackType": "crash|bug|feedback",
  "title": "App crashes on order checkout",
  "description": "The app crashes when I try to complete payment",
  "stackTrace": "optional stack trace",
  "deviceInfo": {
    "model": "Samsung Galaxy S21",
    "osVersion": "12",
    "brand": "Samsung"
  },
  "timestamp": "2026-03-16T10:30:00Z"
}
```

### Response (201 Created)
```json
{
  "success": true,
  "data": {
    "feedbackId": "fb_abc123def456",
    "status": "received",
    "recipientEmail": "support@mangaale.com"
  }
}
```

---

## 4. Update Notification System

### Client-Side Implementation

The frontend uses the `useAppVersionCheck` hook to:

1. Check version info every 24 hours
2. Compare with locally stored app version
3. Show `AppUpdateNotification` component if update available

### Backend Requirements

1. **Version Compatibility Check:**
   - Maintain version code (incremental integer)
   - Specify minimum Android version per release
   - Mark critical updates that must be installed

2. **Update Force Logic:**
   ```
   if (installedVersionCode < minRequiredVersionCode) {
     // Force update UI - disable app features
   } else if (latestVersionCode > installedVersionCode) {
     // Show optional update notification
   }
   ```

3. **Critical Updates:**
   ```json
   {
     "isCritical": true,
     "forceUpdateAfterDays": 7,
     "message": "Security update required. Please update immediately."
   }
   ```

---

## 5. CDN / Download Optimization

### Recommended Configuration

```nginx
# Nginx Cache Configuration
location /downloads/ {
    # Set to public CDN location
    proxy_pass https://cdn.mangaale.com/downloads/;
    
    # Cache for 30 days
    proxy_cache_valid 200 30d;
    
    # Add cache headers
    add_header Cache-Control "public, max-age=2592000";
    
    # Gzip compression
    gzip on;
    gzip_types application/vnd.android.package-archive;
}
```

### S3 Configuration (Alternative)

```json
{
  "bucket": "mangaale-downloads",
  "region": "us-east-1",
  "publicRead": true,
  "versioning": "enabled",
  "lifecycle": {
    "noncurrentVersionExpiration": 90,
    "abortIncompleteMultipartUpload": 7
  }
}
```

---

## 6. Security Best Practices

### 1. APK Signing & Verification

```bash
# Generate release key
keytool -genkey -v -keystore mangaale-release.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias MangaaleRelease

# Sign APK
jarsigner -verbose -sigalg SHA1withRSA \
  -digestalg SHA1 -keystore mangaale-release.jks \
  app/build/outputs/apk/release/app-release.apk \
  MangaaleRelease

# Verify signature
jarsigner -verify -verbose app/build/outputs/apk/release/app-release.apk
```

### 2. Hash Verification

```bash
# Generate SHA256 hash
openssl dgst -sha256 mangaale-v1.2.apk > mangaale-v1.2.apk.sha256

# Verify download integrity
sha256sum -c mangaale-v1.2.apk.sha256
```

### 3. HTTPS Requirements

- All download URLs must be HTTPS
- Use valid SSL/TLS certificates
- Implement HSTS headers
- Enable certificate pinning in app (optional)

---

## 7. Analytics & Monitoring

### Metrics to Track

1. **Download Metrics:**
   - Total downloads per version
   - Downloads per platform
   - Geographic download distribution
   - Peak download times

2. **User Retention:**
   - Active app sessions
   - Installation to first use time
   - User churn rate
   - Feature usage analytics

3. **Crash Reporting:**
   - Crash rate per version
   - Top crash locations
   - Device/OS breakdowns
   - Stack trace aggregation

### Example Analytics Endpoint

```
GET /api/analytics/downloads
Query Params:
  - startDate: 2026-03-01
  - endDate: 2026-03-31
  - groupBy: version|platform|country

Response:
{
  "total": 5000,
  "byVersion": {
    "1.2.0": 3500,
    "1.1.0": 1200,
    "1.0.0": 300
  },
  "byPlatform": {
    "Android": 4800,
    "iOS": 200
  },
  "byCountry": {
    "IN": 3000,
    "US": 1000,
    "UK": 500
  }
}
```

---

## 8. Version Release Checklist

Before releasing a new version:

- [ ] Update APK on server/CDN
- [ ] Generate and verify hash (MD5/SHA256)
- [ ] Update `version-info.json` with new version details
- [ ] Test download on multiple devices
- [ ] Verify installation instructions are correct
- [ ] Notify marketing team for promotion
- [ ] Monitor crash reports for the first 24 hours
- [ ] Update release notes in backend
- [ ] Configure rollback plan if needed
- [ ] Archive previous APK versions

---

## 9. Rollback Procedure

If a version has critical bugs:

```bash
# 1. Update mangaale-latest.apk symlink
ln -sf /downloads/mangaale/mangaale-v1.1.apk \
  /downloads/mangaale/mangaale-latest.apk

# 2. Update version-info.json latest pointer
{
  "latest": {
    "version": "1.1.0",
    "versionCode": 2
  }
}

# 3. Notify users via push notification
# 4. Mark rolled-back version as deprecated
# 5. Post-mortem on issue
```

---

## 10. Testing Checklist

### Download Testing
- [ ] Download works on WiFi
- [ ] Download works on mobile data (4G/5G)
- [ ] Download resumes after interruption
- [ ] File integrity verified (hash match)
- [ ] APK size validation

### Installation Testing
- [ ] Installation works on Android 7.0+
- [ ] Unknown source installation permission handled
- [ ] App opens successfully after installation
- [ ] App data persists after update

### Version Check Testing
- [ ] Version check works offline
- [ ] Version check works online
- [ ] Update notification shows correctly
- [ ] Download link works from notification
- [ ] Analytics tracking fires

---

## 11. Support & Troubleshooting

### Common Issues

**Issue: Download interrupted**
- Solution: Implement download resume functionality
- Code: Store `Last-Byte-Received` header

**Issue: "Unknown App" warning**
- Solution: Sign APK with valid certificate
- Code: Use production signing key

**Issue: High crash rate on new version**
- Solution: Implement gradual rollout (A/B testing)
- Feature: Roll out to 5% → 25% → 100% of users

### Support Contact
- Email: support@mangaale.com
- In-app: Help & Support section
- Issue Tracker: [Link to GitHub issues]

---

## 12. Future Enhancements

1. **In-App Updates:**
   - Use Android In-App Update API
   - Show update prompt without app restart

2. **Feature Flags:**
   - Enable/disable features per version
   - A/B test new features

3. **Beta Distribution:**
   - Google Play Beta/TestFlight
   - Firebase App Tester

4. **Staged Rollout:**
   - Auto-rollback if crash rate > threshold
   - Gradual user percentage increase

5. **Push Notifications:**
   - Notify users of critical updates
   - Notify of new features

---

## Contact & Questions

For questions about this integration, contact:
- **Tech Lead:** [contact]
- **DevOps:** [contact]
- **Product:** [contact]

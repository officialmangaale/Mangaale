# Backend Development - Quick Reference

## Overview

This quick reference guide helps backend developers understand what APIs and endpoints are needed to complete the Mangaale app download system.

---

## 🎯 Required Endpoints (Priority Order)

### Phase 1: Core Functionality (Required for MVP)

#### 1. **Version Check Endpoint** (HIGH PRIORITY)
```
GET /api/app/version
Required by: Frontend version check hook
Updates: Every 24 hours
Purpose: Provide latest app version info
```

**Response:**
```json
{
  "success": true,
  "data": {
    "latest": {
      "version": "1.2.0",
      "versionCode": 3,
      "downloadUrl": "/downloads/mangaale/mangaale-latest.apk",
      "minAndroidVersion": "7.0",
      "releaseNotes": "New features"
    }
  }
}
```

### Phase 2: Analytics (Recommended)

#### 2. **Download Tracking Endpoint** (MEDIUM PRIORITY)
```
POST /api/app/download
Required by: Analytics system
Purpose: Track download count, device info
```

**Payload:**
```json
{
  "version": "1.2.0",
  "platform": "Android",
  "deviceModel": "Samsung Galaxy S21",
  "androidVersion": "12",
  "referrer": "home_page"
}
```

#### 3. **Crash Reporting Endpoint** (MEDIUM PRIORITY)
```
POST /api/app/feedback
Required by: Error tracking and bug fixes
Purpose: Collect crash reports and user feedback
```

**Payload:**
```json
{
  "appVersion": "1.2.0",
  "feedbackType": "crash",
  "title": "App crashes on checkout",
  "description": "Crashes when completing payment",
  "stackTrace": "optional"
}
```

#### 4. **Analytics Dashboard Endpoint** (LOW PRIORITY)
```
GET /api/analytics/downloads
Purpose: View download statistics
Query: startDate, endDate, groupBy

Response: Download count by version/platform/country
```

---

## 📋 Implementation Checklist

### Backend Developer Tasks

- [ ] Create database schema for app versions
- [ ] Create database schema for download tracking
- [ ] Create database schema for crash reports
- [ ] Implement `/api/app/version` endpoint
- [ ] Implement `/api/app/download` endpoint
- [ ] Implement `/api/app/feedback` endpoint
- [ ] Set up version history tracking
- [ ] Add caching for version endpoint
- [ ] Set up monitoring/alerting for crashes
- [ ] Create analytics dashboard
- [ ] Implement rate limiting
- [ ] Add proper error handling
- [ ] Document all endpoints
- [ ] Write tests for endpoints
- [ ] Deploy to production
- [ ] Monitor API performance

---

## 🔧 Database Schema Suggestions

### App_Versions Table
```sql
CREATE TABLE app_versions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  version VARCHAR(20) UNIQUE,
  version_code INT UNIQUE,
  platform VARCHAR(50),
  size VARCHAR(20),
  download_url VARCHAR(255),
  release_date DATETIME,
  release_notes TEXT,
  md5_hash VARCHAR(32),
  sha256_hash VARCHAR(64),
  is_critical BOOLEAN,
  min_android_version VARCHAR(10),
  download_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Download_Tracking Table
```sql
CREATE TABLE download_tracking (
  id INT PRIMARY KEY AUTO_INCREMENT,
  download_id VARCHAR(50) UNIQUE,
  version_id INT,
  platform VARCHAR(50),
  device_model VARCHAR(255),
  android_version VARCHAR(20),
  referrer VARCHAR(100),
  user_agent TEXT,
  ip_address VARCHAR(45),
  country_code VARCHAR(2),
  timestamp DATETIME,
  FOREIGN KEY (version_id) REFERENCES app_versions(id)
);
```

### Crash_Reports Table
```sql
CREATE TABLE crash_reports (
  id INT PRIMARY KEY AUTO_INCREMENT,
  report_id VARCHAR(50) UNIQUE,
  app_version VARCHAR(20),
  user_id VARCHAR(100),
  feedback_type VARCHAR(50),
  title VARCHAR(255),
  description TEXT,
  stack_trace TEXT,
  device_model VARCHAR(255),
  os_version VARCHAR(20),
  status VARCHAR(50) DEFAULT 'received',
  reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  resolved_at TIMESTAMP NULL
);
```

---

## 💾 Sample Implementation (Node.js/Express)

### Version Check Endpoint
```javascript
// GET /api/app/version
app.get('/api/app/version', async (req, res) => {
  try {
    // Get latest version from database
    const latest = await db.query(
      'SELECT * FROM app_versions ORDER BY version_code DESC LIMIT 1'
    );
    
    // Get all versions for history
    const versions = await db.query(
      'SELECT * FROM app_versions ORDER BY version_code DESC'
    );

    res.json({
      success: true,
      data: {
        latest: latest[0],
        versions: versions,
        maintenance: {
          inMaintenance: false,
          message: ''
        }
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: error.message }
    });
  }
});
```

### Download Tracking Endpoint
```javascript
// POST /api/app/download
app.post('/api/app/download', async (req, res) => {
  try {
    const { version, platform, deviceModel, androidVersion, referrer } = req.body;
    
    // Find version ID
    const versionData = await db.query(
      'SELECT id FROM app_versions WHERE version = ?',
      [version]
    );

    // Record download
    const downloadId = `dl_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    await db.query(
      'INSERT INTO download_tracking (download_id, version_id, platform, device_model, android_version, referrer, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        downloadId,
        versionData[0].id,
        platform,
        deviceModel,
        androidVersion,
        referrer,
        req.ip
      ]
    );

    // Increment download count
    await db.query(
      'UPDATE app_versions SET download_count = download_count + 1 WHERE id = ?',
      [versionData[0].id]
    );

    res.status(201).json({
      success: true,
      data: {
        downloadId: downloadId,
        version: version,
        recordedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: error.message }
    });
  }
});
```

### Crash Reporting Endpoint
```javascript
// POST /api/app/feedback
app.post('/api/app/feedback', async (req, res) => {
  try {
    const { appVersion, feedbackType, title, description, stackTrace, deviceInfo } = req.body;
    
    const reportId = `fb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    await db.query(
      'INSERT INTO crash_reports (report_id, app_version, feedback_type, title, description, stack_trace, device_model, os_version) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        reportId,
        appVersion,
        feedbackType,
        title,
        description,
        stackTrace || null,
        deviceInfo?.model,
        deviceInfo?.osVersion
      ]
    );

    res.status(201).json({
      success: true,
      data: {
        feedbackId: reportId,
        status: 'received',
        recipientEmail: 'support@mangaale.com'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: { code: 'SERVER_ERROR', message: error.message }
    });
  }
});
```

---

## 🔄 Integration Checklist

### Before Production Deployment

- [ ] **Test Version Endpoint**
  - Add test version to database
  - Call endpoint and verify response format
  - Check response time (< 200ms)

- [ ] **Test Download Tracking**
  - Make test download requests
  - Verify entries in database
  - Check download count increment
  - Verify IP address capture

- [ ] **Test Crash Reporting**
  - Submit test crash reports
  - Verify data saved correctly
  - Test stack trace handling
  - Verify email notifications

- [ ] **Load Testing**
  - Simulate 100+ concurrent requests
  - Check response times under load
  - Verify database handles load
  - Monitor server resources

- [ ] **Error Handling**
  - Test with missing fields
  - Test with invalid data types
  - Test network timeouts
  - Test database failures

- [ ] **Security**
  - Implement rate limiting
  - Add CORS headers if needed
  - Validate input data
  - Add API authentication
  - Add IP whitelisting (optional)

- [ ] **Performance**
  - Add database indexes
  - Implement caching for version endpoint
  - Use CDN for APK downloads
  - Monitor response times

- [ ] **Monitoring**
  - Set up error alerts
  - Monitor API uptime
  - Track performance metrics
  - Set up crash report aggregation

---

## 📊 Sample Version Info for Database

Insert this as initial data:

```sql
INSERT INTO app_versions (version, version_code, platform, size, download_url, release_date, release_notes, is_critical, min_android_version) VALUES
('1.0.0', 1, 'Android', '35 MB', '/downloads/mangaale/mangaale-v1.0.apk', '2026-03-16', 'Initial release', 0, '7.0'),
('1.1.0', 2, 'Android', '36 MB', '/downloads/mangaale/mangaale-v1.1.apk', '2026-04-01', 'Bug fixes and improvements', 0, '7.0'),
('1.2.0', 3, 'Android', '37 MB', '/downloads/mangaale/mangaale-v1.2.apk', '2026-04-15', 'New features and UI improvements', 0, '7.0');

UPDATE app_versions SET download_count = 3500 WHERE version = '1.2.0';
UPDATE app_versions SET download_count = 1200 WHERE version = '1.1.0';
UPDATE app_versions SET download_count = 300 WHERE version = '1.0.0';
```

---

## 🚀 Deployment Instructions

### 1. Environment Variables
```env
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=mangaale_db
API_PORT=3000
NODE_ENV=production
```

### 2. Deploy Steps
```bash
# 1. Pull latest code
git pull origin main

# 2. Install dependencies
npm install

# 3. Run database migrations
npm run migrate

# 4. Start server
npm start

# 5. Verify endpoints
curl https://api.mangaale.com/api/app/version
```

### 3. Monitoring
```bash
# Check API health
curl https://api.mangaale.com/health

# Monitor logs
tail -f /var/log/mangaale-api.log

# Monitor database
mysql> SELECT COUNT(*) FROM download_tracking;
```

---

## 📞 Contact & Support

**Questions about implementation?**
- Check `API_INTEGRATION_GUIDE.md` for detailed specs
- Review sample implementations above
- Check database schema suggestions
- Contact DevOps team for deployment

---

## ✅ Success Criteria

All endpoints are working correctly when:
- ✅ Version endpoint returns latest version info
- ✅ Download tracking records all downloads
- ✅ Crash reports are captured with full details
- ✅ Response times are under 200ms
- ✅ Database has proper indexes for performance
- ✅ Error handling returns proper error messages
- ✅ Analytics dashboard shows download trends
- ✅ Mobile app receives update notifications

---

**Status:** Backend implementation ready for development  
**Priority:** Version endpoint is HIGH priority - implement first!  
**Timeline:** Target 1-2 weeks for complete backend

Good luck! 🚀

# Canadian TV Simulator - Web Streaming Setup Guide

## Overview

This is a complete web-based streaming solution for the Canadian TV Simulator. The Python Flask backend serves the TV simulator data via REST API, and the HTML/JavaScript frontend provides an interactive web interface.

## Features

✨ **Real-time Streaming:**
- Live TV channel information
- Current program display
- TV schedule updates
- Commercial information

🎮 **Interactive Controls:**
- Power on/off
- Channel changing
- Volume control
- TV guide viewing

📡 **Network Access:**
- Stream over local network
- Access from any device with a web browser
- Internet-accessible (with proper routing)

## Requirements

### Server
- Python 3.6+
- Flask 2.3.0+
- Flask-CORS 4.0.0+

### Client
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for streaming)

## Installation

### Step 1: Install Python Dependencies

```bash
# Navigate to the project directory
cd canadian-tv-simulator

# Install required packages
pip install -r requirements-server.txt
```

### Step 2: Start the Server

```bash
# Run the Flask server
python server.py
```

You should see output like:
```
============================================================
Canadian TV Simulator - Web Server
============================================================

🌐 Server starting...
📺 Access the simulator at: http://localhost:5000
🔗 Or from another device: http://<YOUR_IP>:5000

📊 Status: http://localhost:5000/api/status
📋 Full Guide: http://localhost:5000/api/guide

Press CTRL+C to stop the server
```

### Step 3: Access the Web Interface

**Local Access:**
- Open your web browser
- Go to: `http://localhost:5000`

**Network Access (Same Network):**
- Find your computer's IP address
- On Windows: `ipconfig` (look for IPv4 Address)
- On Mac/Linux: `ifconfig` (look for inet address)
- Go to: `http://<YOUR_IP>:5000` from another device

## API Endpoints

### Power Control
```
POST /api/power
Body: { "power": true/false }
Response: { "success": bool, "power": bool, "message": string }
```

### Channel Management
```
GET /api/channel
Response: { "channel": string }

POST /api/channel
Body: { "channel": "CBC" }
Response: { "success": bool, "channel": string }
```

### Volume Control
```
GET /api/volume
Response: { "volume": 0-100 }

POST /api/volume
Body: { "volume": 50 }
Response: { "success": bool, "volume": 0-100 }
```

### Get Current Program
```
GET /api/current-program
Response: {
  "success": bool,
  "channel": string,
  "current_program": Program object,
  "next_program": Program object,
  "timestamp": ISO 8601
}
```

### Get Channel Schedule
```
GET /api/schedule/<channel_name>
Response: {
  "success": bool,
  "channel": string,
  "programs": [Program objects],
  "total": integer
}
```

### Get All Channels
```
GET /api/channels
Response: {
  "success": bool,
  "channels": [strings],
  "categorized": { category: [strings] },
  "total": integer
}
```

### Get Commercial
```
GET /api/commercial
Response: {
  "success": bool,
  "ads": [strings],
  "duration": 30
}
```

### Get Full Status
```
GET /api/status
Response: {
  "success": bool,
  "power": bool,
  "channel": string,
  "volume": 0-100,
  "current_program": Program object,
  "timestamp": ISO 8601
}
```

### Get Full TV Guide
```
GET /api/guide
Response: {
  "success": bool,
  "guide": { channel: [Program objects] },
  "timestamp": ISO 8601
}
```

## Internet Access (Advanced)

### Option 1: Port Forwarding
1. Log into your router
2. Find Port Forwarding settings
3. Forward external port (e.g., 8080) to your computer's IP on port 5000
4. Access from internet: `http://YOUR_PUBLIC_IP:8080`

### Option 2: Ngrok (Easy Tunneling)
```bash
# Install ngrok from https://ngrok.com

# Create tunnel
ngrok http 5000

# Access from anywhere
http://<ngrok_id>.ngrok.io
```

### Option 3: Cloud Hosting
1. Deploy to AWS EC2, DigitalOcean, Heroku, or similar
2. Update Flask to: `app.run(host='0.0.0.0', port=5000)`
3. Access via: `http://YOUR_SERVER_IP:5000`

## Docker Deployment

### Create Dockerfile
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements-server.txt .
RUN pip install -r requirements-server.txt

COPY . .

EXPOSE 5000

CMD ["python", "server.py"]
```

### Build and Run
```bash
# Build image
docker build -t tv-simulator .

# Run container
docker run -p 5000:5000 tv-simulator
```

## Troubleshooting

### "Address already in use"
```bash
# Change port in server.py
app.run(host='0.0.0.0', port=5001, debug=True)
```

### CORS Errors
- Flask-CORS is already enabled
- If issues persist, check browser console for specific errors

### Can't Connect from Another Device
1. Ensure both devices are on same network
2. Check firewall settings
3. Verify IP address: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
4. Test with: `curl http://<YOUR_IP>:5000`

### Slow Performance
- Reduce `/api/guide` frequency
- Use CDN for static files
- Enable caching in Flask

## Performance Optimization

### Enable Caching
```python
from flask_caching import Cache
cache = Cache(app, config={'CACHE_TYPE': 'simple'})
```

### Use Gunicorn for Production
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 server:app
```

## Security Considerations

1. **Authentication:** Add login if needed
2. **HTTPS:** Use SSL certificate for internet access
3. **Rate Limiting:** Implement to prevent abuse
4. **Input Validation:** Already handled in API

## Example Use Cases

1. **Home Entertainment System:** Display on living room TV via browser
2. **Educational Demo:** Show how TV worked in 2011
3. **Party Activity:** Multiple people control channels
4. **Mobile Remote:** Use phone to control simulator
5. **Network Broadcast:** Stream throughout office/home

## Next Steps

- Add user authentication
- Store settings in database
- Add HLS video streaming (for actual video)
- Create mobile app
- Add chat/comments feature
- Implement recording functionality

## Support

For issues, check:
1. Browser console for errors
2. Server terminal for logs
3. GitHub repository issues

## License

Open source - feel free to modify and extend!

---

**Enjoy streaming your Canadian TV Simulator!** 📺🍁

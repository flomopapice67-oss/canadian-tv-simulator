const express = require('express');
const path = require('path');
const channels = require('./data/channels');
const { programs, commercials } = require('./data/programs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API Routes

// Get all channels
app.get('/api/channels', (req, res) => {
  res.json(channels);
});

// Get specific channel info
app.get('/api/channels/:id', (req, res) => {
  const channel = channels.find(c => c.id === parseInt(req.params.id));
  if (!channel) {
    return res.status(404).json({ error: 'Channel not found' });
  }
  res.json(channel);
});

// Get channel schedule/programs
app.get('/api/schedule/:channelId', (req, res) => {
  const channelId = parseInt(req.params.channelId);
  const schedule = programs[channelId] || [];
  res.json(schedule);
});

// Get current program on a channel
app.get('/api/current/:channelId', (req, res) => {
  const channelId = parseInt(req.params.channelId);
  const schedule = programs[channelId] || [];
  
  const now = new Date();
  const currentHour = String(now.getHours()).padStart(2, '0');
  const currentMin = String(now.getMinutes()).padStart(2, '0');
  const currentTime = `${currentHour}:${currentMin}`;
  
  let currentProgram = null;
  
  for (let program of schedule) {
    const [progHour, progMin] = program.time.split(':');
    const progStart = parseInt(progHour) * 60 + parseInt(progMin);
    const progEnd = progStart + program.duration;
    const current = parseInt(currentHour) * 60 + parseInt(currentMin);
    
    if (current >= progStart && current < progEnd) {
      currentProgram = program;
      break;
    }
  }
  
  if (!currentProgram) {
    currentProgram = schedule[0] || { title: 'Off Air', type: 'Offline', description: 'Station offline' };
  }
  
  res.json(currentProgram);
});

// Get commercials
app.get('/api/commercials', (req, res) => {
  res.json(commercials);
});

// Get random commercial
app.get('/api/commercial/random', (req, res) => {
  const random = commercials[Math.floor(Math.random() * commercials.length)];
  res.json(random);
});

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🇨🇦 Canadian TV Simulator running on http://localhost:${PORT}`);
  console.log(`📺 Open your browser and tune in to your favorite Canadian channel!`);
});

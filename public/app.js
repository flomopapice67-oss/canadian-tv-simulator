// Canadian TV Simulator - Main Application
let currentChannelId = 1;
let allChannels = [];
let isPoweredOn = true;
let commercialInterval = null;
let updateInterval = null;

// Sound effects
const soundEnabled = true;

// Initialize application
async function init() {
    try {
        // Fetch channels
        const channelsResponse = await fetch('/api/channels');
        allChannels = await channelsResponse.json();
        
        // Initialize UI
        renderChannelList();
        await tuneToChannel(currentChannelId);
        updateDisplay();
        startPeriodicUpdates();
        
        console.log('🇨🇦 Canadian TV Simulator initialized!');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
}

// Render channel list
function renderChannelList() {
    const channelList = document.getElementById('channelList');
    channelList.innerHTML = '';
    
    allChannels.forEach(channel => {
        const button = document.createElement('button');
        button.className = 'channel-btn';
        if (channel.id === currentChannelId) {
            button.classList.add('active');
        }
        button.textContent = `${channel.number} - ${channel.name}`;
        button.onclick = () => tuneToChannel(channel.id);
        channelList.appendChild(button);
    });
}

// Tune to a specific channel
async function tuneToChannel(channelId) {
    currentChannelId = channelId;
    
    // Play channel change sound
    playSound('channelSwitch');
    
    // Update UI
    renderChannelList();
    document.getElementById('channelNumber').textContent = 
        allChannels.find(c => c.id === channelId)?.number || '1';
    
    // Fetch current program
    try {
        const response = await fetch(`/api/current/${channelId}`);
        const program = await response.json();
        
        const channel = allChannels.find(c => c.id === channelId);
        document.getElementById('channelLogo').textContent = channel.logo;
        document.getElementById('programTitle').textContent = program.title;
        document.getElementById('programDetails').textContent = program.description;
        
        // Update schedule
        await updateScheduleDisplay(channelId);
        
        // Randomly trigger commercial break
        if (Math.random() < 0.3) {
            triggerCommercialBreak();
        }
    } catch (error) {
        console.error('Error tuning to channel:', error);
    }
}

// Update schedule display
async function updateScheduleDisplay(channelId) {
    try {
        const response = await fetch(`/api/schedule/${channelId}`);
        const schedule = await response.json();
        
        const scheduleContent = document.getElementById('scheduleContent');
        scheduleContent.innerHTML = '';
        
        schedule.forEach(program => {
            const item = document.createElement('div');
            item.className = 'schedule-item';
            item.innerHTML = `
                <span class="schedule-time">${program.time}</span>
                <span class="schedule-program">${program.title} (${program.duration} min)</span>
            `;
            scheduleContent.appendChild(item);
        });
    } catch (error) {
        console.error('Error updating schedule:', error);
    }
}

// Trigger commercial break
async function triggerCommercialBreak() {
    try {
        const response = await fetch('/api/commercial/random');
        const commercial = await response.json();
        
        const overlay = document.getElementById('commercialOverlay');
        document.getElementById('commercialTitle').textContent = commercial.title;
        overlay.style.display = 'flex';
        
        // Countdown
        let counter = commercial.duration;
        document.getElementById('adCounter').textContent = counter;
        
        const countInterval = setInterval(() => {
            counter--;
            document.getElementById('adCounter').textContent = counter;
            
            if (counter <= 0) {
                clearInterval(countInterval);
                overlay.style.display = 'none';
            }
        }, 1000);
    } catch (error) {
        console.error('Error triggering commercial:', error);
    }
}

// Update display with current time
function updateDisplay() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('broadcastTime').textContent = `${hours}:${minutes}`;
    
    // Update frame counter
    const frameCount = (now.getSeconds() * 30 + now.getMilliseconds() / 1000 * 30).toFixed(0);
    document.querySelector('.frame-count').textContent = 
        `00:${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(frameCount).padStart(2, '0')}`;
}

// Start periodic updates
function startPeriodicUpdates() {
    // Update display every 100ms
    updateInterval = setInterval(() => {
        updateDisplay();
    }, 100);
    
    // Update program info every 60 seconds
    setInterval(async () => {
        await tuneToChannel(currentChannelId);
    }, 60000);
}

// Navigation functions
function nextChannel() {
    const currentIndex = allChannels.findIndex(c => c.id === currentChannelId);
    const nextIndex = (currentIndex + 1) % allChannels.length;
    tuneToChannel(allChannels[nextIndex].id);
}

function previousChannel() {
    const currentIndex = allChannels.findIndex(c => c.id === currentChannelId);
    const prevIndex = currentIndex === 0 ? allChannels.length - 1 : currentIndex - 1;
    tuneToChannel(allChannels[prevIndex].id);
}

function togglePower() {
    isPoweredOn = !isPoweredOn;
    const powerLight = document.getElementById('powerLight');
    
    if (isPoweredOn) {
        powerLight.style.background = '#00ff00';
        document.querySelector('.screen-inner').style.opacity = '1';
        tuneToChannel(currentChannelId);
        playSound('powerOn');
    } else {
        powerLight.style.background = '#ff0000';
        document.querySelector('.screen-inner').style.opacity = '0.2';
        playSound('powerOff');
        clearInterval(updateInterval);
    }
}

// Sound effects
function playSound(soundType) {
    if (!soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    switch (soundType) {
        case 'channelSwitch':
            playTone(audioContext, 800, 0.1, 0.05);
            playTone(audioContext, 600, 0.1, 0.1);
            break;
        case 'powerOn':
            playTone(audioContext, 440, 0.2, 0.1);
            playTone(audioContext, 880, 0.2, 0.2);
            break;
        case 'powerOff':
            playTone(audioContext, 440, 0.15, 0.15);
            playTone(audioContext, 220, 0.15, 0.3);
            break;
        case 'static':
            playStatic(audioContext, 0.5, 0.3);
            break;
    }
}

// Helper to play tone
function playTone(audioContext, frequency, volume, duration) {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
}

// Helper to play static sound
function playStatic(audioContext, volume, duration) {
    const bufferSize = audioContext.sampleRate * duration;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }
    
    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    
    source.buffer = buffer;
    source.connect(gain);
    gain.connect(audioContext.destination);
    
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    source.start(audioContext.currentTime);
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextChannel();
    if (e.key === 'ArrowLeft') previousChannel();
    if (e.key === ' ') togglePower();
});

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

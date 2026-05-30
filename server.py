"""
Canadian TV Simulator - Web Streaming Server
Flask-based server to stream the TV simulator to web browsers
"""

from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import json
import random
import threading
import time
from datetime import datetime, timedelta
from enum import Enum
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Global state
class Network(Enum):
    """Canadian TV Networks - 2011 Era"""
    CBC = "CBC"
    CTV = "CTV"
    GLOBAL = "Global"
    CTEE = "CTV Two"
    SPORTSNET = "Sportsnet"
    TSN = "TSN"
    CITY = "City"
    CITYTV = "CityTV"
    MUCHMUSIC = "Much Music"
    MUSICPLUS = "MuchMusic+"
    BRAVO = "Bravo!"
    SPACE = "Space"
    SCIFI = "Sci-Fi"
    FUSE = "Fuse"
    MOVIE_CENTRAL = "Movie Central"
    SUPER_ECRAN = "Super Écran"
    HBO_CANADA = "HBO Canada"
    TMNTV = "TMN TV"
    DISCOVERY = "Discovery Channel"
    ANIMALPLANET = "Animal Planet"
    HISTORY = "History Channel"
    NATIONALGEOGRAPHIC = "National Geographic"
    SLICE = "Slice"
    W = "W Network"
    HGTV = "HGTV Canada"
    FOODNETWORK = "Food Network"
    CNN_INT = "CNN International"
    BBC = "BBC"
    WEATHERNETWORK = "Weather Network"
    TREEHOUSE = "Treehouse TV"
    YTV = "YTV"
    CARTOON = "Cartoon Network"
    DISNEY = "Disney Channel"
    NICKELODEON = "Nickelodeon"
    FAMILY = "Family Channel"
    SPORTSNET360 = "Sportsnet360"
    SPORTSNETWEST = "Sportsnet West"
    SPORTSNETONEZERO = "Sportsnet One"
    RSNO = "Regional Sports Net Ontario"
    SPIKE = "Spike"
    SHOWCASE = "Showcase"
    CHCH = "CH CH News"
    TELETOON_F = "Teletoon Français"
    RAINCITY = "Raincity"
    CANAL_D = "Canal D"

class Program:
    """Represents a TV program"""
    
    def __init__(self, name, network, duration, genre, start_time):
        self.name = name
        self.network = network
        self.duration = duration
        self.genre = genre
        self.start_time = start_time
        self.end_time = start_time + timedelta(minutes=duration)
        self.commercial_count = max(2, duration // 20)
    
    def to_dict(self):
        return {
            'name': self.name,
            'network': self.network.value,
            'duration': self.duration,
            'genre': self.genre,
            'start_time': self.start_time.isoformat(),
            'end_time': self.end_time.isoformat(),
            'commercial_count': self.commercial_count
        }

class CommercialBreak:
    """Represents a commercial break"""
    
    CANADIAN_ADS = [
        "Tim Hortons - 'Always Fresh'",
        "Molson Canadian - 'I am Canadian'",
        "Royal Bank - Financial Services",
        "Bell Canada - Mobility",
        "Roots - Canadian Lifestyle",
        "Loblaws - Grocery Selection",
        "Rogers Communications - Telecom",
        "Shoppers Drug Mart - Pharmacy",
        "Air Canada - Travel",
        "Canadian Tire - Hardware & Auto",
        "Telus - Mobile Service",
        "BMO - Banking",
        "Scotiabank - Financial Services",
        "Petro-Canada - Gas Station",
        "Maple Leaf Foods - Meat & Deli",
        "Labatt Blue - Beer",
        "Danone - Yogurt",
        "Kleenex - Tissues",
        "Old Navy - Clothing",
        "Hudson's Bay - Department Store",
        "PC Optimum - Loyalty Program",
        "VIA Rail - Train Travel",
        "CIBC - Banking",
        "TD Bank - Financial Services",
        "Rogers Video - Rentals",
        "Future Shop - Electronics",
        "Best Buy - Electronics",
        "Staples - Office Supplies",
        "Rona - Home Improvement",
        "Home Depot - Hardware",
    ]
    
    def __init__(self, break_num):
        self.break_num = break_num
        self.ads = random.sample(self.CANADIAN_ADS, min(3, len(self.CANADIAN_ADS)))
    
    def get_ads(self):
        return self.ads

class TVGuide:
    """Represents the TV guide"""
    
    CANADIAN_PROGRAMS = {
        "CBC": ["The National", "Rick Mercer Report", "Corner Gas", "Hockey Night in Canada", "Downton Abbey", "News at 11", "Dragon's Den"],
        "CTV": ["CTV News at Six", "Much Music", "Law & Order: SVU", "CSI: Crime Scene Investigation", "The Amazing Race Canada", "MuchOnDemand"],
        "Global": ["Global News", "The Mentalist", "Glee", "Top Gear", "Gossip Girl", "Global News Hour"],
        "CityTV": ["Much Music", "Video On Trial", "The NewMusic Show", "Electric Circus"],
        "TSN": ["Sports Desk", "NHL Hockey", "CFL Football", "ATP Tennis", "Baseball Tonight", "SportsCentre"],
        "Sportsnet": ["Sportsnet Headlines", "Toronto Blue Jays", "Major League Baseball", "Soccer Central", "NBA Basketball"],
        "Much Music": ["Much Music", "Sounding Board", "Video On Trial", "The NewMusic Show"],
        "Bravo!": ["Top Chef Canada", "Real Housewives", "The Real Housewives of Beverly Hills"],
        "Space": ["Dark Matter", "Continuum", "Stargate Universe", "The Twilight Zone"],
        "Discovery Channel": ["MythBusters", "Dirty Jobs", "How It's Made", "Gold Rush", "Deadliest Catch"],
        "Animal Planet": ["Animal Precinct", "Emergency Vets", "The Crocodile Hunter"],
        "History Channel": ["The Tudors", "Ice Road Truckers", "Ax Men", "Pawn Stars"],
        "National Geographic": ["Planet Earth", "The Universe", "Life", "Explorer"],
        "YTV": ["Undergrads", "League of Super Evil", "Totally Rad"],
        "Treehouse TV": ["Toopy and Binoo", "Ni Hao, Kai-Lan", "Backyardigans"],
        "Cartoon Network": ["The Powerpuff Girls", "Dexter's Laboratory", "Ben 10"],
        "Disney Channel": ["Hannah Montana", "Wizards of Waverly Place", "Suite Life of Zack & Cody"],
        "Nickelodeon": ["SpongeBob SquarePants", "Drake & Josh", "Victorious"],
        "Showcase": ["Dexter", "Weeds", "Shameless"],
        "Food Network": ["Iron Chef", "Chopped", "The Pioneer Woman"],
        "HGTV Canada": ["Design Inc", "Love It or List It", "Property Brothers"],
        "W Network": ["Real Housewives", "The Fashion Show"],
        "Movie Central": ["Movie Central Original", "Film Premiere"],
        "CNN International": ["Anderson Cooper 360", "International Desk"],
        "Weather Network": ["Canada AM Weather", "Your Weather Today"],
    }
    
    GENRES = ["Drama", "Comedy", "News", "Sports", "Reality", "Game Show", "Documentary", "Kids"]
    
    def __init__(self):
        self.programs = []
        self.generate_schedule()
    
    def generate_schedule(self):
        """Generate a day's TV schedule"""
        start_time = datetime.now().replace(hour=6, minute=0, second=0, microsecond=0)
        
        networks = [
            Network.CBC, Network.CTV, Network.GLOBAL, Network.TSN, Network.SPORTSNET,
            Network.MUCHMUSIC, Network.BRAVO, Network.SPACE, Network.DISCOVERY,
            Network.ANIMALPLANET, Network.HISTORY, Network.YTV, Network.TREEHOUSE,
            Network.CARTOON, Network.DISNEY, Network.SHOWCASE, Network.FOODNETWORK,
            Network.NATIONALGEOGRAPHIC, Network.HGTV, Network.W, Network.CNN_INT,
            Network.WEATHERNETWORK, Network.CITYTV
        ]
        
        for network in networks:
            current_time = start_time
            channel_programs = self.CANADIAN_PROGRAMS.get(network.value, ["Generic Programming"])
            
            while current_time.hour < 23:
                program_name = random.choice(channel_programs)
                duration = random.choice([30, 45, 60, 90, 120])
                genre = random.choice(self.GENRES)
                
                program = Program(program_name, network, duration, genre, current_time)
                self.programs.append(program)
                
                current_time = program.end_time
    
    def get_programs_by_network(self, network_name):
        """Get programs for a specific network"""
        return [p for p in self.programs if p.network.value == network_name]
    
    def get_current_program(self, network_name):
        """Get current program for a network"""
        now = datetime.now()
        programs = self.get_programs_by_network(network_name)
        for program in programs:
            if program.start_time <= now < program.end_time:
                return program
        return None
    
    def get_next_program(self, network_name):
        """Get next program for a network"""
        now = datetime.now()
        programs = self.get_programs_by_network(network_name)
        for program in programs:
            if program.start_time > now:
                return program
        return None

# Initialize TV Guide
tv_guide = TVGuide()

# Server state
server_state = {
    'is_on': False,
    'current_channel': 'CBC',
    'volume': 50,
    'channels': [n.value for n in Network],
}

# Routes

@app.route('/')
def index():
    """Serve the main HTML page"""
    return render_template('index.html')

@app.route('/api/power', methods=['POST'])
def toggle_power():
    """Toggle TV power on/off"""
    data = request.json
    server_state['is_on'] = data.get('power', False)
    logger.info(f"TV Power: {server_state['is_on']}")
    return jsonify({
        'success': True,
        'power': server_state['is_on'],
        'message': 'TV powered on' if server_state['is_on'] else 'TV powered off'
    })

@app.route('/api/channel', methods=['GET', 'POST'])
def manage_channel():
    """Get or set current channel"""
    if request.method == 'POST':
        data = request.json
        channel = data.get('channel')
        if channel in server_state['channels']:
            server_state['current_channel'] = channel
            logger.info(f"Channel changed to: {channel}")
            return jsonify({'success': True, 'channel': channel})
        return jsonify({'success': False, 'error': 'Invalid channel'}), 400
    else:
        return jsonify({'channel': server_state['current_channel']})

@app.route('/api/volume', methods=['GET', 'POST'])
def manage_volume():
    """Get or set volume"""
    if request.method == 'POST':
        data = request.json
        volume = max(0, min(100, data.get('volume', 50)))
        server_state['volume'] = volume
        logger.info(f"Volume set to: {volume}")
        return jsonify({'success': True, 'volume': volume})
    else:
        return jsonify({'volume': server_state['volume']})

@app.route('/api/current-program')
def get_current_program():
    """Get current program info"""
    if not server_state['is_on']:
        return jsonify({'success': False, 'error': 'TV is off'}), 400
    
    channel = server_state['current_channel']
    current = tv_guide.get_current_program(channel)
    next_prog = tv_guide.get_next_program(channel)
    
    return jsonify({
        'success': True,
        'channel': channel,
        'current_program': current.to_dict() if current else None,
        'next_program': next_prog.to_dict() if next_prog else None,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/schedule/<channel_name>')
def get_schedule(channel_name):
    """Get TV schedule for a channel"""
    programs = tv_guide.get_programs_by_network(channel_name)
    return jsonify({
        'success': True,
        'channel': channel_name,
        'programs': [p.to_dict() for p in programs[:10]],  # Limit to first 10
        'total': len(programs)
    })

@app.route('/api/channels')
def get_channels():
    """Get all available channels"""
    channels_by_category = {
        'MAJOR NETWORKS': ['CBC', 'CTV', 'Global', 'CTV Two', 'CityTV'],
        'SPORTS': ['TSN', 'Sportsnet', 'Sportsnet360', 'Sportsnet West'],
        'ENTERTAINMENT': ['Much Music', 'Bravo!', 'Space', 'Sci-Fi', 'Fuse'],
        'MOVIES': ['Movie Central', 'HBO Canada', 'Showcase'],
        'DOCUMENTARY': ['Discovery Channel', 'Animal Planet', 'History Channel', 'National Geographic', 'Food Network', 'HGTV Canada', 'W Network'],
        'KIDS': ['Treehouse TV', 'YTV', 'Cartoon Network', 'Disney Channel', 'Nickelodeon', 'Family Channel'],
        'NEWS': ['CNN International', 'BBC', 'Weather Network'],
    }
    
    return jsonify({
        'success': True,
        'channels': server_state['channels'],
        'categorized': channels_by_category,
        'total': len(server_state['channels'])
    })

@app.route('/api/commercial')
def get_commercial():
    """Get a random commercial"""
    ads = CommercialBreak(1).get_ads()
    return jsonify({
        'success': True,
        'ads': ads,
        'duration': 30  # seconds
    })

@app.route('/api/status')
def get_status():
    """Get current server status"""
    current = tv_guide.get_current_program(server_state['current_channel']) if server_state['is_on'] else None
    
    return jsonify({
        'success': True,
        'power': server_state['is_on'],
        'channel': server_state['current_channel'],
        'volume': server_state['volume'],
        'current_program': current.to_dict() if current else None,
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/guide')
def get_full_guide():
    """Get the full TV guide"""
    guide_data = {}
    for network in Network:
        programs = tv_guide.get_programs_by_network(network.value)
        guide_data[network.value] = [p.to_dict() for p in programs[:5]]  # First 5 programs
    
    return jsonify({
        'success': True,
        'guide': guide_data,
        'timestamp': datetime.now().isoformat()
    })

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Run the Flask server
    print("\n" + "="*60)
    print("Canadian TV Simulator - Web Server")
    print("="*60)
    print(f"\n🌐 Server starting...")
    print(f"📺 Access the simulator at: http://localhost:5000")
    print(f"🔗 Or from another device: http://<YOUR_IP>:5000")
    print(f"\n📊 Status: http://localhost:5000/api/status")
    print(f"📋 Full Guide: http://localhost:5000/api/guide")
    print(f"\nPress CTRL+C to stop the server\n")
    
    app.run(host='0.0.0.0', port=5000, debug=True)

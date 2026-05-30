"""
Canadian TV Simulator - 2011 Era
A nostalgic simulation of Canadian television from the 2011 era.
"""

import random
import time
from datetime import datetime, timedelta
from enum import Enum


class Network(Enum):
    """Canadian TV Networks - 2011 Era"""
    # Major Networks
    CBC = "CBC"
    CTV = "CTV"
    GLOBAL = "Global"
    CTEE = "CTV Two"
    
    # Specialty Channels
    SPORTSNET = "Sportsnet"
    TSN = "TSN"
    CITY = "City"
    CITYTV = "CityTV"
    
    # Entertainment
    MUCHMUSIC = "Much Music"
    MUSICPLUS = "MuchMusic+"
    BRAVO = "Bravo!"
    SPACE = "Space"
    SCIFI = "Sci-Fi"
    FUSE = "Fuse"
    
    # Drama & Movies
    MOVIE_CENTRAL = "Movie Central"
    SUPER_ECRAN = "Super Écran"
    PEACHESMONSTRUM = "Peaches Monster"
    HBO_CANADA = "HBO Canada"
    TMNTV = "TMN TV"
    
    # Documentary & Lifestyle
    DISCOVERY = "Discovery Channel"
    ANIMALPLANET = "Animal Planet"
    HISTORY = "History Channel"
    NATIONALGEOGRAPHIC = "National Geographic"
    SLICE = "Slice"
    W = "W Network"
    HGTV = "HGTV Canada"
    FOODNETWORK = "Food Network"
    
    # News
    CNN_INT = "CNN International"
    BBC = "BBC"
    WEATHERNETWORK = "Weather Network"
    
    # Kids
    TREEHOUSE = "Treehouse TV"
    YTV = "YTV"
    CARTOON = "Cartoon Network"
    DISNEY = "Disney Channel"
    NICKELODEON = "Nickelodeon"
    FAMILY = "Family Channel"
    
    # Sports (Additional)
    SPORTSNET360 = "Sportsnet360"
    SPORTSNETWEST = "Sportsnet West"
    SPORTSNETONEZERO = "Sportsnet One"
    RSNO = "Regional Sports Net Ontario"
    
    # Adult
    SPIKE = "Spike"
    SHOWCASE = "Showcase"
    CHCH = "CH CH News"
    
    # French
    TELETOON_F = "Teletoon Français"
    RAINCITY = "Raincity"
    CANAL_D = "Canal D"


class Program:
    """Represents a TV program"""
    
    def __init__(self, name, network, duration, genre, start_time):
        self.name = name
        self.network = network
        self.duration = duration  # in minutes
        self.genre = genre
        self.start_time = start_time
        self.end_time = start_time + timedelta(minutes=duration)
        self.commercial_count = max(2, duration // 20)  # Approx 10 mins of ads per hour
    
    def __str__(self):
        return f"{self.start_time.strftime('%H:%M')} - {self.name} ({self.duration} min)"


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
    
    def display(self):
        print("\n" + "="*60)
        print(f"COMMERCIAL BREAK #{self.break_num}")
        print("="*60)
        for ad in self.ads:
            print(f"  ► {ad} [30s]")
        print("="*60 + "\n")


class TVGuide:
    """Represents the TV guide"""
    
    CANADIAN_PROGRAMS = {
        "CBC": [
            "The National",
            "Rick Mercer Report",
            "Corner Gas",
            "Hockey Night in Canada",
            "Downton Abbey",
            "News at 11",
            "Dragon's Den",
            "Coronation Street",
            "Man in the High Castle",
        ],
        "CTV": [
            "CTV News at Six",
            "Much Music",
            "Law & Order: SVU",
            "CSI: Crime Scene Investigation",
            "The Amazing Race Canada",
            "MuchOnDemand",
            "The Bachelor",
            "Flashpoint",
        ],
        "Global": [
            "Global News",
            "The Mentalist",
            "Glee",
            "Top Gear",
            "Gossip Girl",
            "Global News Hour",
            "Parenthood",
            "Person of Interest",
        ],
        "CityTV": [
            "Much Music",
            "Video On Trial",
            "The NewMusic Show",
            "Electric Circus",
        ],
        "TSN": [
            "Sports Desk",
            "NHL Hockey",
            "CFL Football",
            "ATP Tennis",
            "Baseball Tonight",
            "SportsCentre",
            "NBA Basketball",
            "Curling",
        ],
        "Sportsnet": [
            "Sportsnet Headlines",
            "Toronto Blue Jays",
            "Major League Baseball",
            "Soccer Central",
            "NBA Basketball",
            "Hockey Tonight",
        ],
        "Much Music": [
            "Much Music",
            "Sounding Board",
            "Video On Trial",
            "The NewMusic Show",
        ],
        "Bravo!": [
            "Top Chef Canada",
            "Real Housewives",
            "The Real Housewives of Beverly Hills",
            "Watch What Happens Live",
        ],
        "Space": [
            "Dark Matter",
            "Continuum",
            "Stargate Universe",
            "The Twilight Zone",
            "Outer Limits",
        ],
        "Discovery Channel": [
            "MythBusters",
            "Dirty Jobs",
            "How It's Made",
            "Gold Rush",
            "Deadliest Catch",
        ],
        "Animal Planet": [
            "Animal Precinct",
            "Emergency Vets",
            "The Crocodile Hunter",
            "It's Me or the Dog",
        ],
        "History Channel": [
            "The Tudors",
            "Ice Road Truckers",
            "Ax Men",
            "Pawn Stars",
        ],
        "National Geographic": [
            "Planet Earth",
            "The Universe",
            "Life",
            "Explorer",
        ],
        "YTV": [
            "Undergrads",
            "League of Super Evil",
            "Totally Rad",
            "Snit Happens",
        ],
        "Treehouse TV": [
            "Toopy and Binoo",
            "Ni Hao, Kai-Lan",
            "Backyardigans",
            "Caillou",
        ],
        "Cartoon Network": [
            "The Powerpuff Girls",
            "Dexter's Laboratory",
            "Ben 10",
            "Adventure Time",
        ],
        "Disney Channel": [
            "Hannah Montana",
            "Wizards of Waverly Place",
            "Suite Life of Zack & Cody",
            "That's So Raven",
        ],
        "Nickelodeon": [
            "SpongeBob SquarePants",
            "Drake & Josh",
            "Victorious",
            "iCarly",
        ],
        "Showcase": [
            "Dexter",
            "Weeds",
            "Shameless",
            "The Borgias",
        ],
        "Food Network": [
            "Iron Chef",
            "Chopped",
            "The Pioneer Woman",
            "Good Eats",
        ],
        "HGTV Canada": [
            "Design Inc",
            "Love It or List It",
            "Property Brothers",
            "Disaster DIY",
        ],
        "W Network": [
            "Real Housewives",
            "The Fashion Show",
            "Living in the Material World",
        ],
        "Movie Central": [
            "Movie Central Original",
            "Film Premiere",
            "Action Movie Night",
        ],
        "CNN International": [
            "Anderson Cooper 360",
            "International Desk",
            "World Report",
        ],
        "Weather Network": [
            "Canada AM Weather",
            "Your Weather Today",
            "Weather Vane",
        ],
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
    
    def display_guide(self):
        """Display the TV guide"""
        print("\n" + "="*80)
        print("CANADIAN TV GUIDE - 2011 ERA")
        print(f"Date: {datetime.now().strftime('%A, %B %d, %Y')}")
        print("="*80)
        
        by_network = {}
        for program in self.programs:
            if program.network.value not in by_network:
                by_network[program.network.value] = []
            by_network[program.network.value].append(program)
        
        for network in sorted(by_network.keys()):
            print(f"\n{network}:")
            print("-" * 80)
            for program in sorted(by_network[network], key=lambda p: p.start_time)[:5]:  # Show first 5
                print(f"  {program}")
            if len(by_network[network]) > 5:
                print(f"  ... and {len(by_network[network]) - 5} more programs")


class Broadcaster:
    """The TV broadcaster that simulates a channel"""
    
    def __init__(self, network):
        self.network = network
        self.guide = TVGuide()
        self.current_program_index = 0
    
    def get_current_program(self):
        """Get the current program"""
        now = datetime.now()
        for program in sorted(self.guide.programs, key=lambda p: p.start_time):
            if program.network == self.network:
                if program.start_time <= now < program.end_time:
                    return program
        return None
    
    def get_next_program(self):
        """Get the next program"""
        now = datetime.now()
        for program in sorted(self.guide.programs, key=lambda p: p.start_time):
            if program.network == self.network and program.start_time > now:
                return program
        return None
    
    def display_info(self):
        """Display broadcaster info"""
        print("\n" + "█"*60)
        print(f"  CHANNEL: {self.network.value}")
        print("█"*60)
        
        current = self.get_current_program()
        next_prog = self.get_next_program()
        
        if current:
            print(f"\n📺 NOW PLAYING:")
            print(f"   {current.name}")
            print(f"   Genre: {current.genre}")
            print(f"   Duration: {current.duration} minutes")
            print(f"   Time: {current.start_time.strftime('%H:%M')} - {current.end_time.strftime('%H:%M')}")
        else:
            print(f"\n📺 No program currently airing")
        
        if next_prog:
            print(f"\n📺 COMING UP NEXT:")
            print(f"   {next_prog.name}")
            print(f"   Starts at: {next_prog.start_time.strftime('%H:%M')}")
        
        print("\n" + "█"*60)


class CanadianTVSimulator:
    """Main TV Simulator"""
    
    def __init__(self):
        # Create channels for all networks
        self.channels = {}
        for network in Network:
            self.channels[network] = Broadcaster(network)
        
        self.current_channel = Network.CBC
        self.volume = 50
        self.is_on = False
    
    def power_on(self):
        """Turn on the TV"""
        self.is_on = True
        print("\n🔴 TV POWERING ON...")
        print("📶 Tuning to Canadian networks...")
        time.sleep(1)
        print("✓ Ready!\n")
    
    def power_off(self):
        """Turn off the TV"""
        self.is_on = False
        print("\n🔴 TV TURNING OFF...")
        time.sleep(1)
        print("⚫ Goodbye!\n")
    
    def change_channel(self, network):
        """Change to a different channel"""
        self.current_channel = network
        print(f"\n⏏️  Changing channel to {network.value}...")
        time.sleep(0.5)
        self.display_current()
    
    def set_volume(self, level):
        """Set volume level"""
        self.volume = max(0, min(100, level))
        bar = "█" * (self.volume // 10) + "░" * (10 - self.volume // 10)
        print(f"\n🔊 Volume: [{bar}] {self.volume}%")
    
    def display_current(self):
        """Display current channel info"""
        if not self.is_on:
            print("\n⚫ TV is OFF. Turn it on first!")
            return
        
        self.channels[self.current_channel].display_info()
    
    def watch(self, minutes=5):
        """Simulate watching TV"""
        if not self.is_on:
            print("\n⚫ TV is OFF. Turn it on first!")
            return
        
        current = self.channels[self.current_channel].get_current_program()
        
        if current:
            print(f"\n▶️  Watching: {current.name}")
            print(f"🎬 Enjoy your {current.genre} program!")
            
            # Simulate watching with commercial breaks
            for break_num in range(current.commercial_count):
                time.sleep(0.5)
                print(f"\n   ...watching {current.name}...")
                
                # Show commercial break
                ad_break = CommercialBreak(break_num + 1)
                ad_break.display()
            
            time.sleep(0.5)
            print(f"\n✓ Finished watching {current.name}")
        else:
            print("\n📺 No program currently airing on this channel.")
    
    def view_guide(self):
        """View the TV guide"""
        self.channels[self.current_channel].guide.display_guide()
    
    def list_all_channels(self):
        """List all available channels"""
        print("\n" + "="*80)
        print("ALL CANADIAN TV CHANNELS - 2011 ERA")
        print("="*80)
        
        categories = {
            "MAJOR NETWORKS": [Network.CBC, Network.CTV, Network.GLOBAL, Network.CTEE, Network.CITYTV],
            "SPORTS": [Network.TSN, Network.SPORTSNET, Network.SPORTSNET360, Network.SPORTSNETWEST],
            "ENTERTAINMENT & MUSIC": [Network.MUCHMUSIC, Network.BRAVO, Network.SPACE, Network.SCIFI, Network.FUSE],
            "MOVIES": [Network.MOVIE_CENTRAL, Network.HBO_CANADA, Network.SHOWCASE],
            "DOCUMENTARY & LIFESTYLE": [Network.DISCOVERY, Network.ANIMALPLANET, Network.HISTORY, Network.NATIONALGEOGRAPHIC, Network.FOODNETWORK, Network.HGTV, Network.W],
            "KIDS": [Network.TREEHOUSE, Network.YTV, Network.CARTOON, Network.DISNEY, Network.NICKELODEON, Network.FAMILY],
            "NEWS & WEATHER": [Network.CNN_INT, Network.BBC, Network.WEATHERNETWORK],
            "OTHER": [Network.SLICE, Network.CANAL_D, Network.TELETOON_F],
        }
        
        for i, (category, networks) in enumerate(categories.items(), 1):
            print(f"\n{category}:")
            for j, network in enumerate(networks, 1):
                print(f"  {j}. {network.value}")
    
    def interactive_menu(self):
        """Interactive menu for the simulator"""
        print("\n" + "="*60)
        print("CANADIAN TV SIMULATOR - 2011")
        print("="*60)
        
        while True:
            print("\n📺 REMOTE CONTROL:")
            print("  1. Power ON/OFF")
            print("  2. Change Channel")
            print("  3. View Current Program")
            print("  4. View TV Guide")
            print("  5. Watch (Simulate)")
            print("  6. Adjust Volume")
            print("  7. View All Channels")
            print("  8. Exit")
            
            choice = input("\nSelect option (1-8): ").strip()
            
            if choice == "1":
                if not self.is_on:
                    self.power_on()
                else:
                    self.power_off()
            
            elif choice == "2":
                if not self.is_on:
                    print("\n⚫ TV is OFF. Turn it on first!")
                    continue
                
                print("\nAvailable Channels:")
                networks_list = list(self.channels.keys())
                for i, network in enumerate(networks_list, 1):
                    print(f"  {i}. {network.value}")
                
                try:
                    channel_choice = int(input("Select channel number: ").strip())
                    if 1 <= channel_choice <= len(networks_list):
                        selected = networks_list[channel_choice - 1]
                        self.change_channel(selected)
                    else:
                        print("Invalid selection!")
                except ValueError:
                    print("Invalid input!")
            
            elif choice == "3":
                self.display_current()
            
            elif choice == "4":
                self.view_guide()
            
            elif choice == "5":
                self.watch(5)
            
            elif choice == "6":
                try:
                    vol = int(input("Set volume (0-100): ").strip())
                    self.set_volume(vol)
                except ValueError:
                    print("Invalid volume!")
            
            elif choice == "7":
                self.list_all_channels()
            
            elif choice == "8":
                print("\n👋 Thanks for watching Canadian TV!")
                break
            
            else:
                print("Invalid option!")


def main():
    """Main entry point"""
    simulator = CanadianTVSimulator()
    simulator.interactive_menu()


if __name__ == "__main__":
    main()

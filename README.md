# Canadian TV Simulator - 2011 Era

A nostalgic Python simulation of Canadian television from the 2011 era. Experience authentic Canadian channels, programming, and commercials!

## Features

✨ **35+ Authentic Canadian Channels Including:**
- **Major Networks:** CBC, CTV, Global, CTV Two, CityTV
- **Sports:** TSN, Sportsnet, Regional Sports Networks
- **Entertainment & Music:** Much Music, Bravo, Space, Sci-Fi, Fuse
- **Movies:** Movie Central, HBO Canada, Showcase
- **Lifestyle & Documentary:** Discovery, Animal Planet, History, National Geographic, Food Network, HGTV, W Network
- **Kids:** Treehouse TV, YTV, Cartoon Network, Disney, Nickelodeon, Family Channel
- **News & Weather:** CNN International, BBC, Weather Network
- **French Channels:** Teletoon Français, Canal D

📺 **Realistic Programming:**
- Authentic shows from 2011 era
- Hockey Night in Canada, Rick Mercer Report, Glee, and many more
- Dynamic schedule generation

📢 **Iconic Canadian Commercials:**
- Tim Hortons, Molson Canadian, Royal Bank, Bell Canada
- Realistic commercial breaks during programs

🎮 **Interactive Features:**
- Power on/off TV
- Change between 35+ channels
- View current program information
- Browse complete TV guide
- Watch programs with simulated commercials
- Adjust volume

## Installation

### Prerequisites
- Python 3.6 or higher
- No external dependencies required (uses only standard library)

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/flomopapice67-oss/canadian-tv-simulator.git
cd canadian-tv-simulator
```

2. **Run the simulator:**
```bash
python tv_simulator.py
```

Or on Mac/Linux:
```bash
python3 tv_simulator.py
```

## Usage

Once running, you'll see an interactive menu:

```
============================================================
CANADIAN TV SIMULATOR - 2011
============================================================

📺 REMOTE CONTROL:
  1. Power ON/OFF
  2. Change Channel
  3. View Current Program
  4. View TV Guide
  5. Watch (Simulate)
  6. Adjust Volume
  7. View All Channels
  8. Exit
```

### Menu Options

1. **Power ON/OFF** - Turn the TV on or off
2. **Change Channel** - Switch between 35+ channels
3. **View Current Program** - See what's playing now
4. **View TV Guide** - Browse the complete schedule
5. **Watch (Simulate)** - Watch a program with commercial breaks
6. **Adjust Volume** - Set volume from 0-100%
7. **View All Channels** - See all available channels by category
8. **Exit** - Close the simulator

## Example Session

```
Select option (1-8): 1

🔴 TV POWERING ON...
📶 Tuning to Canadian networks...
✓ Ready!

Select option (1-8): 2

Available Channels:
  1. CBC
  2. CTV
  3. Global
  ...

Select channel number: 6

⏏️  Changing channel to Sportsnet...

████████████████████████████████████████████████████████
  CHANNEL: Sportsnet
████████████████████████████████████████████████████████

📺 NOW PLAYING:
   Toronto Blue Jays
   Genre: Sports
   Duration: 120 minutes
   Time: 14:30 - 16:30

📺 COMING UP NEXT:
   Major League Baseball
   Starts at: 16:30

████████████████████████████████████████████████████████
```

## Project Structure

```
canadian-tv-simulator/
├── tv_simulator.py      # Main simulator code
└── README.md           # This file
```

## Classes

- **Network** - Enum of all Canadian TV networks
- **Program** - Represents a TV program with timing and commercials
- **CommercialBreak** - Manages authentic Canadian advertisements
- **TVGuide** - Generates and displays TV schedules
- **Broadcaster** - Manages individual channel programming
- **CanadianTVSimulator** - Main interactive simulator

## Channels by Category

### Major Networks
- CBC, CTV, Global, CTV Two, CityTV

### Sports
- TSN, Sportsnet, Sportsnet360, Sportsnet West, Sportsnet One, Regional Sports Net Ontario

### Entertainment & Music
- Much Music, Much Music+, Bravo!, Space, Sci-Fi, Fuse

### Movies
- Movie Central, Super Écran, HBO Canada, TMN TV

### Lifestyle & Documentary
- Discovery Channel, Animal Planet, History Channel, National Geographic, Slice, W Network, HGTV Canada, Food Network

### Kids
- Treehouse TV, YTV, Cartoon Network, Disney Channel, Nickelodeon, Family Channel

### News & Weather
- CNN International, BBC, Weather Network

### Other
- Spike, Showcase, CH CH News, Teletoon Français, Canal D

## Contributing

Feel free to fork this project and submit pull requests with:
- Additional channels
- More authentic 2011-era programming
- Enhanced features or UI improvements

## License

This project is open source and available under the MIT License.

## Acknowledgments

This simulator is a nostalgic tribute to Canadian television in the 2011 era. All channel names and programs are based on authentic broadcasting from that time period.

## Troubleshooting

### "python is not recognized"
- Try `python3` instead of `python`
- Ensure Python is in your system PATH

### "ModuleNotFoundError"
- This simulator only uses Python standard library modules
- No additional packages need to be installed

### No output or crashes
- Ensure you're using Python 3.6 or higher
- Check your terminal/console supports Unicode characters (for emojis)

## Support

For issues or questions, please open a GitHub issue in the repository.

Enjoy your nostalgic Canadian TV experience! 📺🍁

// Canadian TV Programs - 2011 Era Schedule
const programs = {
  1: [ // CTV
    { time: "06:00", duration: 30, title: "Canada AM", type: "News", description: "Morning news and current events" },
    { time: "07:00", duration: 120, title: "The Morning Show", type: "Talk", description: "Morning talk and lifestyle" },
    { time: "09:00", duration: 60, title: "The Marilyn Denis Show", type: "Talk", description: "Canadian talk show" },
    { time: "14:00", duration: 60, title: "The Doctors", type: "Talk", description: "Medical advice show" },
    { time: "19:00", duration: 30, title: "CTV National News", type: "News", description: "National evening news" },
    { time: "19:30", duration: 30, title: "CTV Atlantic News", type: "Local", description: "Regional news" },
    { time: "20:00", duration: 120, title: "Flashpoint", type: "Drama", description: "Canadian police drama" },
    { time: "22:00", duration: 60, title: "The Twitch", type: "Late Night", description: "Late night variety" },
    { time: "23:00", duration: 60, title: "CTV Late News", type: "News", description: "Late night news" }
  ],
  2: [ // Global
    { time: "06:00", duration: 180, title: "Global Morning", type: "News", description: "Morning news coverage" },
    { time: "09:00", duration: 120, title: "Breakfast Television", type: "Talk", description: "Entertainment and lifestyle" },
    { time: "14:00", duration: 60, title: "The Wendy Williams Show", type: "Talk", description: "Talk show" },
    { time: "19:00", duration: 30, title: "Global News", type: "News", description: "Evening news" },
    { time: "19:30", duration: 30, title: "16x9: The Bigger Picture", type: "Documentary", description: "Investigative journalism" },
    { time: "20:00", duration: 120, title: "Degrassi: The Next Generation", type: "Drama", description: "Canadian teen drama" },
    { time: "22:00", duration: 60, title: "Global News Hour", type: "News", description: "Late news coverage" }
  ],
  3: [ // CBC
    { time: "07:00", duration: 120, title: "CBC News Network", type: "News", description: "24-hour news coverage" },
    { time: "09:00", duration: 120, title: "This Morning", type: "News", description: "Morning news and weather" },
    { time: "13:00", duration: 60, title: "Here and Now", type: "Talk", description: "Afternoon talk show" },
    { time: "18:00", duration: 30, title: "CBC National News", type: "News", description: "National evening broadcast" },
    { time: "18:30", duration: 30, title: "CBC News: The National", type: "News", description: "In-depth analysis" },
    { time: "20:00", duration: 120, title: "Heartland", type: "Drama", description: "Canadian family drama" },
    { time: "22:00", duration: 60, title: "22 Minutes", type: "Comedy", description: "Canadian sketch comedy" }
  ],
  4: [ // TSN
    { time: "06:00", duration: 480, title: "TSN SportsDesk", type: "Sports", description: "24-hour sports coverage" },
    { time: "11:00", duration: 120, title: "NHL Hockey", type: "Sports", description: "Live hockey games" },
    { time: "14:00", duration: 180, title: "CFL Football", type: "Sports", description: "Canadian Football League" },
    { time: "19:00", duration: 60, title: "TSN Tonight", type: "Sports", description: "Sports highlights and news" },
    { time: "20:00", duration: 120, title: "NBA on TSN", type: "Sports", description: "Professional basketball" },
    { time: "22:00", duration: 120, title: "TSN Late Night", type: "Sports", description: "Sports highlights replay" }
  ],
  5: [ // Showcase
    { time: "07:00", duration: 120, title: "Movie Matinee", type: "Movie", description: "Daytime feature film" },
    { time: "09:00", duration: 180, title: "Feature Presentation", type: "Movie", description: "Mid-morning movie" },
    { time: "14:00", duration: 120, title: "Afternoon Feature", type: "Movie", description: "Afternoon film" },
    { time: "18:00", duration: 120, title: "Evening Movie", type: "Movie", description: "Prime-time feature" },
    { time: "20:00", duration: 120, title: "Showcase Prime", type: "Movie", description: "Premium film presentation" },
    { time: "22:00", duration: 120, title: "Late Night Cinema", type: "Movie", description: "Late night feature" }
  ],
  6: [ // MuchMusic
    { time: "06:00", duration: 480, title: "Much Music Video", type: "Music", description: "Music video programming" },
    { time: "19:00", duration: 60, title: "MuchOnDemand", type: "Music", description: "Request show" },
    { time: "20:00", duration: 120, title: "The Wedge", type: "Music", description: "Music video countdown" },
    { time: "22:00", duration: 120, title: "The Strombo Show", type: "Music", description: "Music and entertainment" }
  ],
  7: [ // YTV
    { time: "07:00", duration: 180, title: "YTV Morning Show", type: "Kids", description: "Kids programming" },
    { time: "10:00", duration: 120, title: "Cartoon Block", type: "Kids", description: "Animated series" },
    { time: "14:00", duration: 180, title: "After School Action", type: "Kids", description: "Adventure shows" },
    { time: "19:00", duration: 60, title: "Prime Time Kids", type: "Kids", description: "Family-friendly shows" },
    { time: "20:00", duration: 120, title: "YTV Movies", type: "Kids", description: "Family movie night" }
  ],
  8: [ // Discovery
    { time: "06:00", duration: 480, title: "Discovery Education", type: "Documentary", description: "Educational programming" },
    { time: "14:00", duration: 120, title: "MythBusters", type: "Documentary", description: "Science and experiments" },
    { time: "18:00", duration: 120, title: "How It's Made", type: "Documentary", description: "Manufacturing documentary" },
    { time: "20:00", duration: 120, title: "Discovery Premiere", type: "Documentary", description: "Featured documentary" }
  ],
  9: [ // A&E
    { time: "06:00", duration: 480, title: "A&E Programming", type: "General", description: "Arts and entertainment" },
    { time: "19:00", duration: 60, title: "Biography", type: "Documentary", description: "Biography series" },
    { time: "20:00", duration: 120, title: "A&E Presents", type: "Drama", description: "Premium series" }
  ],
  10: [ // HBO Canada
    { time: "08:00", duration: 120, title: "HBO Feature", type: "Movie", description: "Premium HBO film" },
    { time: "14:00", duration: 120, title: "HBO Afternoon", type: "Movie", description: "Daytime HBO movie" },
    { time: "19:00", duration: 120, title: "HBO Originals", type: "Drama", description: "HBO series programming" },
    { time: "21:00", duration: 120, title: "HBO Prime", type: "Movie", description: "Prime-time HBO presentation" }
  ],
  11: [ // Sportsnet
    { time: "06:00", duration: 480, title: "Sportsnet Central", type: "Sports", description: "24-hour sports news" },
    { time: "11:00", duration: 120, title: "NHL on Sportsnet", type: "Sports", description: "Live hockey games" },
    { time: "19:00", duration: 60, title: "Sportsnet Tonight", type: "Sports", description: "Sports highlights" },
    { time: "20:00", duration: 120, title: "Premier League Soccer", type: "Sports", description: "International football" }
  ],
  12: [ // Space
    { time: "07:00", duration: 60, title: "Sci-Fi Classics", type: "Sci-Fi", description: "Classic science fiction" },
    { time: "14:00", duration: 120, title: "Stargate Atlantis", type: "Sci-Fi", description: "Space adventure series" },
    { time: "20:00", duration: 120, title: "Space Premiere", type: "Sci-Fi", description: "New sci-fi series" },
    { time: "22:00", duration: 60, title: "The Outer Limits", type: "Sci-Fi", description: "Sci-fi anthology" }
  ],
  13: [ // CityTV
    { time: "06:00", duration: 180, title: "CityPulse Morning", type: "News", description: "Morning news and entertainment" },
    { time: "14:00", duration: 120, title: "CityNews", type: "News", description: "Afternoon news coverage" },
    { time: "19:00", duration: 30, title: "CityNews", type: "News", description: "Evening news" },
    { time: "20:00", duration: 120, title: "Young City Entertainment", type: "Entertainment", description: "Youth-oriented entertainment" }
  ],
  14: [ // Teletoon
    { time: "07:00", duration: 240, title: "Toon Time", type: "Kids", description: "Cartoon programming" },
    { time: "14:00", duration: 120, title: "Cartoon Classics", type: "Kids", description: "Classic animation" },
    { time: "19:00", duration: 60, title: "Prime Toons", type: "Kids", description: "Evening cartoons" },
    { time: "20:00", duration: 120, title: "Teletoon Movie", type: "Kids", description: "Animated feature" }
  ],
  15: [ // Treehouse TV
    { time: "06:00", duration: 300, title: "Tree House Fun", type: "Kids", description: "Preschool programming" },
    { time: "14:00", duration: 120, title: "Afternoon Playtime", type: "Kids", description: "Educational shows" },
    { time: "19:00", duration: 60, title: "Family Hour", type: "Kids", description: "Family-friendly shows" },
    { time: "20:00", duration: 120, title: "Story Time Special", type: "Kids", description: "Bedtime stories" }
  ],
  16: [ // HGTV Canada
    { time: "08:00", duration: 120, title: "Renovation Rescue", type: "Lifestyle", description: "Home renovation" },
    { time: "14:00", duration: 120, title: "Property Virgins", type: "Lifestyle", description: "Home buying" },
    { time: "19:00", duration: 120, title: "Design Invasion", type: "Lifestyle", description: "Home design" },
    { time: "21:00", duration: 120, title: "Income Property", type: "Lifestyle", description: "Real estate investing" }
  ],
  17: [ // Food Network Canada
    { time: "08:00", duration: 120, title: "Cook Like a Pro", type: "Lifestyle", description: "Cooking tutorials" },
    { time: "14:00", duration: 120, title: "Iron Chef Canada", type: "Lifestyle", description: "Cooking competition" },
    { time: "19:00", duration: 120, title: "Dinner Party Disasters", type: "Lifestyle", description: "Cooking show" },
    { time: "21:00", duration: 120, title: "Sweet Escapes", type: "Lifestyle", description: "Dessert recipes" }
  ],
  18: [ // W Network
    { time: "08:00", duration: 120, title: "Makeover Madness", type: "General", description: "Makeover show" },
    { time: "14:00", duration: 120, title: "Women's Daily", type: "General", description: "Lifestyle programming" },
    { time: "19:00", duration: 120, title: "W Prime", type: "Drama", description: "Drama series" },
    { time: "21:00", duration: 120, title: "W Movie Night", type: "General", description: "Feature films" }
  ],
  19: [ // CTV News Channel
    { time: "06:00", duration: 1440, title: "24-Hour News Coverage", type: "News", description: "Continuous news updates" },
    { time: "12:00", duration: 120, title: "News Now", type: "News", description: "Breaking news" },
    { time: "19:00", duration: 60, title: "Prime News", type: "News", description: "Evening news" }
  ],
  20: [ // BravoFACT
    { time: "08:00", duration: 120, title: "Reality Unscripted", type: "Reality", description: "Documentary series" },
    { time: "14:00", duration: 120, title: "Tough Love Canada", type: "Reality", description: "Dating reality show" },
    { time: "20:00", duration: 120, title: "Comedy Inc.", type: "Comedy", description: "Canadian comedy" },
    { time: "22:00", duration: 120, title: "Late Night Reality", type: "Reality", description: "Adult reality shows" }
  ],
  21: [ // Slice
    { time: "08:00", duration: 120, title: "Fashion News", type: "Entertainment", description: "Fashion and style" },
    { time: "14:00", duration: 120, title: "Celebrity Secrets", type: "Entertainment", description: "Celebrity gossip" },
    { time: "19:00", duration: 120, title: "Slice Prime", type: "Entertainment", description: "Entertainment shows" },
    { time: "21:00", duration: 120, title: "Toronto After Dark", type: "Entertainment", description: "Nightlife coverage" }
  ],
  22: [ // Animal Planet Canada
    { time: "08:00", duration: 120, title: "Pet Rescue", type: "Documentary", description: "Animal rescue" },
    { time: "14:00", duration: 120, title: "Creature Features", type: "Documentary", description: "Wildlife documentary" },
    { time: "19:00", duration: 120, title: "Wildest Encounters", type: "Documentary", description: "Animal behavior" },
    { time: "21:00", duration: 120, title: "Nature's Fury", type: "Documentary", description: "Wildlife adventures" }
  ],
  23: [ // History
    { time: "08:00", duration: 120, title: "History Uncovered", type: "Documentary", description: "Historical documentaries" },
    { time: "14:00", duration: 120, title: "Canada's Past", type: "Documentary", description: "Canadian history" },
    { time: "19:00", duration: 120, title: "History Mysteries", type: "Documentary", description: "Unsolved histories" },
    { time: "21:00", duration: 120, title: "History Specials", type: "Documentary", description: "Historical events" }
  ],
  24: [ // Peach TV
    { time: "06:00", duration: 300, title: "Peach Kids Morning", type: "Kids", description: "Morning kids programming" },
    { time: "14:00", duration: 120, title: "Peach Afternoon", type: "Kids", description: "Afternoon cartoons" },
    { time: "19:00", duration: 60, title: "Family Fun", type: "Kids", description: "Family programming" },
    { time: "20:00", duration: 120, title: "Peach Family Movie", type: "Kids", description: "Family films" }
  ],
  25: [ // TV Ontario
    { time: "07:00", duration: 120, title: "Educational Morning", type: "Educational", description: "Learning programs" },
    { time: "14:00", duration: 120, title: "Knowledge Hour", type: "Educational", description: "Educational content" },
    { time: "19:00", duration: 120, title: "TVO Documentary", type: "Documentary", description: "Quality documentaries" },
    { time: "21:00", duration: 120, title: "TVO Specials", type: "Educational", description: "Special programming" }
  ]
};

const commercials = [
  { id: 1, title: "Tim Hortons Coffee", duration: 30, year: 2011 },
  { id: 2, title: "Molson Canadian Beer", duration: 30, year: 2011 },
  { id: 3, title: "Rogers Mobile", duration: 30, year: 2011 },
  { id: 4, title: "Bell Canada", duration: 30, year: 2011 },
  { id: 5, title: "Canada Post", duration: 30, year: 2011 },
  { id: 6, title: "Loblaws Grocery", duration: 30, year: 2011 },
  { id: 7, title: "Ford Canada", duration: 30, year: 2011 },
  { id: 8, title: "RBC Bank", duration: 30, year: 2011 },
  { id: 9, title: "Maple Leaf Foods", duration: 30, year: 2011 },
  { id: 10, title: "Air Canada", duration: 30, year: 2011 },
  { id: 11, title: "Telus Communications", duration: 30, year: 2011 },
  { id: 12, title: "Scotiabank", duration: 30, year: 2011 },
  { id: 13, title: "Sobeys Supermarket", duration: 30, year: 2011 },
  { id: 14, title: "Coca-Cola Canada", duration: 30, year: 2011 },
  { id: 15, title: "Honda Canada", duration: 30, year: 2011 },
  { id: 16, title: "Tourism BC", duration: 30, year: 2011 },
  { id: 17, title: "Labatt Blue", duration: 30, year: 2011 },
  { id: 18, title: "Canadian Tire", duration: 30, year: 2011 },
  { id: 19, title: "Petro-Canada", duration: 30, year: 2011 },
  { id: 20, title: "Export A Cigarettes", duration: 30, year: 2011 }
];

module.exports = { programs, commercials };

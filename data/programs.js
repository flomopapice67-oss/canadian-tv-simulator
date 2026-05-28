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
  { id: 10, title: "Air Canada", duration: 30, year: 2011 }
];

module.exports = { programs, commercials };

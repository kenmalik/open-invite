import EventBlock from "./eventBlock";


export type Event = {
  title: string;
  time: string;
  location: string;
  description: string;
  person: { name: string; close: boolean };
};

export default function Events() {
  let data = [
    {
      title: "Trivia Night at Rusty's Bar",
      time: "8:00 PM",
      location: "123 Main St, Brooklyn, NY 11211",
      description:
        "Come for the cheap drinks, stay for the random facts. Bring your A-game.",
      person: { name: "Alex", close: true },
    },
    {
      title: "Indie Rock Concert: The Neon Waves",
      time: "9:30 PM",
      location: "987 Oak Ave, Austin, TX 78701",
      description: "Loud music, good vibes. Let's rock.",
      person: { name: "Jordan", close: false },
    },
    {
      title: "Pickup Basketball at Central Park",
      time: "6:00 PM",
      location: "Mid-Park, New York, NY 10024",
      description: "Casual 5-on-5. No tryouts, just show up and play.",
      person: { name: "Chris", close: true },
    },
    {
      title: "Late-Night Afters at Loft 45",
      time: "12:00 AM",
      location: "45 Vine St, Los Angeles, CA 90012",
      description: "BYOB vibes. Dance till sunrise or just chill.",
      person: { name: "Taylor", close: false },
    },
    {
      title: "Yoga and Smoothies at The Grove",
      time: "10:00 AM",
      location: "567 Maple Ln, Portland, OR 97205",
      description: "Stretch, breathe, sip. Relaxed energy to start your day.",
      person: { name: "Jamie", close: true },
    },
    {
      title: "Tech-Free Board Game Night",
      time: "7:00 PM",
      location: "202 Pine Rd, San Francisco, CA 94102",
      description: "Monopoly? Risk? It’s all fun till it gets competitive.",
      person: { name: "Morgan", close: false },
    },
    {
      title: "Sunset Beach Volleyball",
      time: "6:30 PM",
      location: "Ocean Blvd, Miami, FL 33139",
      description: "Sand, sun, and some friendly spikes. All levels welcome.",
      person: { name: "Riley", close: true },
    },
    {
      title: "Open Mic at Luna’s Lounge",
      time: "8:00 PM",
      location: "555 Crescent St, Denver, CO 80202",
      description: "Music, poetry, comedy, whatever. Grab the mic or chill.",
      person: { name: "Casey", close: false },
    },
    {
      title: "Late-Night Gym Sesh",
      time: "11:00 PM",
      location: "24-Hour Fitness, 888 Fit Way, Seattle, WA 98101",
      description: "Night owls lifting heavy. Bring your pre-workout.",
      person: { name: "Quinn", close: true },
    },
    {
      title: "DIY Pizza Night at Willow’s Kitchen",
      time: "7:30 PM",
      location: "33 Olive St, Chicago, IL 60607",
      description: "Make it cheesy. We provide the dough; you bring the vibes.",
      person: { name: "Peyton", close: false },
    },
    {
      title: "Friday Night Karaoke Party",
      time: "9:00 PM",
      location: "444 Harmony St, Boston, MA 02118",
      description: "Sing your heart out, or just laugh at your friends.",
      person: { name: "Alexis", close: true },
    },
    {
      title: "Pop-Up Art Show at The Loft",
      time: "6:00 PM",
      location: "12 Gallery Ln, Atlanta, GA 30303",
      description: "Local artists, good drinks, chill crowd. Free entry.",
      person: { name: "Elliot", close: false },
    },
    {
      title: "Saturday Morning Hike",
      time: "8:00 AM",
      location: "Trailhead, Boulder, CO 80302",
      description: "Fresh air, good vibes, decent cardio. BYO water.",
      person: { name: "Robin", close: true },
    },
    {
      title: "Beer Pong at Jerry’s Basement",
      time: "10:00 PM",
      location: "75 Elm St, Philly, PA 19147",
      description: "Classic house party vibes. Just show up and play.",
      person: { name: "Drew", close: false },
    },
    {
      title: "Street Soccer Under the Lights",
      time: "9:00 PM",
      location: "234 Field Ln, San Diego, CA 92101",
      description: "No cleats, no problem. Casual street soccer session.",
      person: { name: "River", close: true },
    },
    {
      title: "Craft Beer Tasting at HopHouse",
      time: "6:00 PM",
      location: "789 Brew St, Portland, ME 04101",
      description:
        "Flights of beer, bites of pretzels. Chill crowd, good drinks.",
      person: { name: "Sam", close: false },
    },
    {
      title: "Skate Jam at 5th Street Park",
      time: "5:30 PM",
      location: "678 Skate Ave, Phoenix, AZ 85004",
      description:
        "Bring your board or just hang out. Local skaters killing it.",
      person: { name: "Charlie", close: true },
    },
    {
      title: "Dancehall Night at The Spot",
      time: "10:00 PM",
      location: "222 Vibe Ave, Tampa, FL 33602",
      description: "Reggae beats, good energy. Come for the groove.",
      person: { name: "Avery", close: false },
    },
    {
      title: "Trivia Night 2.0",
      time: "8:30 PM",
      location: "99 Trivia Ln, Detroit, MI 48226",
      description: "New themes, same chaos. Try not to overthink it.",
      person: { name: "Harper", close: true },
    },
  ];

  let newData = data.toSorted((a, b) => {
    let aVal = +a.person.close;
    let bVal = +b.person.close;
    return bVal - aVal;
  });

  return (
  <div>
    {newData.map((entry) => (
      <EventBlock event = {entry} key = {entry.title} />
    ))}
  </div>
  );
}

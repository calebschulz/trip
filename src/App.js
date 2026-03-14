import { useState } from "react";

const days = [
  {
    num: 1,
    date: "Sun, May 4",
    title: "Arrive Tokyo",
    icon: "✈️",
    color: "#c2185b",
    sections: [
      {
        time: "7:00 PM",
        activity: "Land at Haneda (HND)",
        detail:
          "Clear customs and immigration. Pick up a Suica or Pasmo IC card at the airport — you'll use it constantly for trains, buses, and vending machines. Also grab a pocket WiFi or activate your eSIM.",
      },
      {
        time: "~8:00 PM",
        activity: "Keikyu Airport Express → Shinjuku",
        detail:
          "Take the Keikyu Line to Shinagawa, then transfer to the JR Yamanote Line to Shinjuku (~50 min total, ~¥600). Alternatively, the Limousine Bus runs direct to Shinjuku hotels (~85 min, ~¥1,300).",
      },
      {
        time: "~9:00 PM",
        activity: "Check into hotel & dinner",
        detail:
          "After dropping bags, head to AIN SOPH. Journey Shinjuku (10 min walk from the station) — a fully vegan restaurant with incredible pancakes, burgers, and Japanese-fusion dishes. Open until 9:30 PM last order. Alternatively, CoCo Ichibanya near Shinjuku Station has customizable vegan curry options and stays open late.",
      },
    ],
    tips: [
      "Hotel recommendation: Citadines Central Shinjuku or Tokyu Stay Shinjuku — both have laundry facilities, are walkable to the station, and are in quieter pockets of Shinjuku. This will be your home base for the week.",
      "Pick up cash at a 7-Eleven ATM — many smaller restaurants and temples are cash-only.",
    ],
  },
  {
    num: 2,
    date: "Mon, May 5",
    title: "Quiet Tokyo",
    icon: "🏃",
    color: "#00897b",
    sections: [
      {
        time: "6:30 AM",
        activity: "Morning run: Imperial Palace loop",
        detail:
          "The outer moat loop is ~5 km of flat, well-maintained paths — Tokyo's most iconic running route. It's popular with local runners, especially early morning. Start from the Sakuradamon gate area. The path circles past stone walls, moats, and gardens with virtually no traffic.",
      },
      {
        time: "9:00 AM",
        activity: "Shinjuku Gyoen National Garden",
        detail:
          "One of Tokyo's most beautiful parks. By early May, you may catch late-blooming cherry varieties (yaezakura) and wisteria. The traditional Japanese garden section is particularly serene. Entry ¥500. Note: no alcohol allowed, making it genuinely peaceful.",
      },
      {
        time: "11:00 AM",
        activity: "Yanaka — Tokyo's old town",
        detail:
          "This neighborhood survived WWII bombing and retains an old Edo-period atmosphere. Wander Yanaka Ginza (a charming shopping street), explore the Yanaka Cemetery with its ancient trees, and visit small temples tucked between wooden houses. It's one of Tokyo's least touristy neighborhoods.",
      },
      {
        time: "1:00 PM",
        activity: "Lunch at Bon (Taito-ku)",
        detail:
          "A short walk from Yanaka. Bon specializes in fucha ryori, a Zen Buddhist vegan cuisine — arguably the most beautiful vegetarian meal in Tokyo. You dine in private tatami rooms with garden views. Reservations recommended. Lunch courses from ~¥4,000. This is a genuine cultural experience.",
      },
      {
        time: "3:00 PM",
        activity: "Shimokitazawa",
        detail:
          "Tokyo's indie neighborhood — vintage shops, tiny cafés, street art, and live music venues. It's walkable, relaxed, and a world away from Shinjuku's intensity. Great for people who love quirky, creative neighborhoods.",
      },
      {
        time: "6:30 PM",
        activity: "Dinner at Zen Okonomiyaki (Shinjuku)",
        detail:
          "Back in Shinjuku, Zen serves vegan okonomiyaki (savory Japanese pancakes) using yam instead of egg and omitting dashi. They have an English menu with a dedicated vegetarian section. Cozy vibes, not crowded.",
      },
    ],
    tips: [
      "May 5 is Children's Day (Kodomo no Hi) — a national holiday. Temples and gardens may be busier than usual, but the neighborhoods themselves stay calm.",
      "Yanaka is particularly quiet and locals-oriented — perfect for your preference to avoid crowds.",
    ],
  },
  {
    num: 3,
    date: "Tue, May 6",
    title: "Day Trip: Nikkō",
    icon: "⛩️",
    color: "#e65100",
    sections: [
      {
        time: "7:00 AM",
        activity: "Shinjuku → Nikkō via Tobu Railway",
        detail:
          "Take the JR/Tobu direct limited express from Shinjuku (~2 hrs, ~¥4,000) or go to Asakusa and take the Tobu Spacia X (~1h50m). Buy the Tobu Nikko All Area Pass (¥4,780) — it covers the round-trip train from Asakusa plus unlimited bus rides to Kegon Falls and Lake Chūzenji. Even for a one-day trip, the All Area Pass saves money.",
      },
      {
        time: "9:30 AM",
        activity: "Tōshō-gū Shrine complex",
        detail:
          "One of Japan's most elaborately decorated shrines, the mausoleum of Tokugawa Ieyasu. Entry ¥1,300. Spot the famous \"see no evil, speak no evil, hear no evil\" monkey carving and the sleeping cat (Nemuri-neko). The Yomeimon Gate alone has 500+ carvings. Allow 1.5–2 hours.",
      },
      {
        time: "11:30 AM",
        activity: "Lunch: Gyoshintei or Yasai Cafe Meguri",
        detail:
          "Gyoshintei serves full-course shojin ryori in a beautiful woodland setting near the shrines. Alternatively, Yasai Cafe Meguri (17 min from Tobu Nikko Station) is Nikko's only fully vegan restaurant — a cozy spot with an organic set meal of the day. Also try the local specialty: yuba (tofu skin) — a Buddhist delicacy that is naturally vegan.",
      },
      {
        time: "1:00 PM",
        activity: "Bus to Lake Chūzenji & Kegon Falls",
        detail:
          "The bus ride itself is scenic, climbing hairpin turns up the mountain (~50 min). Kegon Falls drops 97 meters — take the elevator (¥570) for the base-level viewing platform. Lake Chūzenji is gorgeous and uncrowded midweek.",
      },
      {
        time: "2:30 PM",
        activity: "Senjōgahara Marshland hike",
        detail:
          "Take the bus from Chūzenji to the Senjōgahara trailhead. This is a flat-to-gentle 6.3 km boardwalk hike through a highland marshland surrounded by mountains. It's peaceful, well-marked, and takes about 2–2.5 hours. Ends at Yumoto Onsen, where you can catch the bus back.",
      },
      {
        time: "6:00 PM",
        activity: "Return to Tokyo",
        detail:
          "Bus back to Tobu Nikko Station, then train back to Shinjuku/Asakusa. Arrive ~8:00 PM. Grab dinner at T's TanTan (vegan ramen) if passing through Tokyo Station, or head back to Shinjuku for a late bite.",
      },
    ],
    tips: [
      "Nikkō is famous for yuba — try the ageyuba manju (fried yuba bun with sweet red bean paste) from street vendors. It's vegan!",
      "The Tobu Nikko All Area Pass is better value than the World Heritage Pass if you're visiting Kegon Falls.",
      "Visiting on a Tuesday means fewer crowds at the shrines.",
    ],
  },
  {
    num: 4,
    date: "Wed, May 7",
    title: "Shinkansen to Kyoto → Ryokan Night",
    icon: "🚄",
    color: "#6a1b9a",
    sections: [
      {
        time: "7:00 AM",
        activity: "Shinkansen: Shinagawa → Kyoto",
        detail:
          "Take the Hikari Shinkansen (~2h20m, fully covered by JR Pass). The Nozomi is only 5 min faster but requires an extra supplement. Sit on the right side (seats D/E) for Mount Fuji views on a clear day — Fuji appears around 40 min into the journey.",
      },
      {
        time: "9:30 AM",
        activity: "Drop bags at Kyoto Station coin lockers",
        detail:
          "Use the large coin lockers at Kyoto Station (¥700 for large size) to store your overnight bag while sightseeing. You won't check into the ryokan until later.",
      },
      {
        time: "10:00 AM",
        activity: "Fushimi Inari — full mountain trail hike",
        detail:
          "Take the JR Nara Line to Inari Station (5 min). Most tourists only do the first 15 minutes of gates and turn back. The full loop over Mt. Inari takes 2–3 hours and gets progressively emptier. By the midpoint, you may be nearly alone among thousands of vermillion torii gates in the forest. This is one of the best hikes in Japan.",
      },
      {
        time: "1:00 PM",
        activity: "Lunch: Shigetsu at Tenryū-ji Temple (Arashiyama)",
        detail:
          "Take the train to Arashiyama (~30 min). Shigetsu serves shojin ryori inside the temple grounds — entirely vegan, beautifully presented small dishes on lacquer trays, with views of the temple's garden. Lunch sets from ¥3,800. Reserve 3+ days in advance via their website. This is the quintessential Kyoto vegan meal.",
      },
      {
        time: "2:30 PM",
        activity: "Arashiyama Bamboo Grove",
        detail:
          "The grove is right next to Tenryū-ji. By mid-afternoon on a weekday, crowds thin out. Walk through and continue to the quieter Okochi Sanso Villa garden (¥1,000, includes matcha tea) for panoramic mountain views.",
      },
      {
        time: "4:00 PM",
        activity: "Check into Ryokan: Kadensho (Arashiyama)",
        detail:
          "Kyoto Arashiyama Onsen Kadensho is ideal for your situation — it has five private onsen baths (three outdoor, two indoor) that tattooed guests can use without restriction. The private baths are complimentary for guests and don't require advance reservation. Rooms have tatami floors and futons. Kaiseki dinner included with stay (request vegetarian adaptation when booking). Steps from Hankyu Arashiyama Station.",
      },
      {
        time: "Evening",
        activity: "Ryokan evening",
        detail:
          "Enjoy the kaiseki dinner (multi-course seasonal meal — tell them you're vegetarian when booking and they'll adapt it). Afterward, soak in a private outdoor onsen under the stars. Wear the provided yukata robes. This is one of the most deeply Japanese experiences you can have.",
      },
    ],
    tips: [
      "Tattoo note: Kadensho's private baths are tattoo-friendly. The public baths are not, but you won't need them — the private ones are beautiful.",
      "Alternative ryokan: Hanaikada (also Arashiyama) has a private open-air bath with views of Togetsukyo Bridge. Or Suiran (luxury, $$$$) offers complimentary taxi/rickshaw from the station.",
      "Kurama Onsen is fully tattoo-friendly (even in public baths) if you'd prefer a mountain onsen — but it's less convenient for the Arashiyama sightseeing plan.",
    ],
  },
  {
    num: 5,
    date: "Thu, May 8",
    title: "Kyoto Morning → Back to Tokyo",
    icon: "🍃",
    color: "#2e7d32",
    sections: [
      {
        time: "6:30 AM",
        activity: "Early walk: Philosopher's Path",
        detail:
          "Check out of the ryokan early and head to the east side of Kyoto. The Philosopher's Path is a 2 km stone path along a canal lined with cherry trees. In early May, the blossoms are gone but the fresh green canopy is equally beautiful and you'll have it nearly to yourself at dawn.",
      },
      {
        time: "8:00 AM",
        activity: "Nanzen-ji Temple complex",
        detail:
          "One of Kyoto's most photogenic spots. Explore the massive Sanmon gate, the tranquil rock garden, and the surprising brick aqueduct (Suirokaku) built in the Meiji era — an unexpected blend of Roman-style architecture in a Zen temple setting. Largely free to explore; small fees for subtemples.",
      },
      {
        time: "10:00 AM",
        activity: "Optional: Kiyomizu-dera or Ginkaku-ji",
        detail:
          "If time allows, visit Kiyomizu-dera (the famous hillside temple with a wooden stage overlooking the city) or Ginkaku-ji (Silver Pavilion) — both are nearby. Kiyomizu opens at 6 AM for early birds.",
      },
      {
        time: "11:30 AM",
        activity: "Lunch: Mumokuteki Café (downtown Kyoto)",
        detail:
          "A popular fully vegetarian/vegan café right in the center of Kyoto. Organic Japanese dishes, brown rice bowls, and great desserts. Arrive early to avoid the lunch rush.",
      },
      {
        time: "1:00 PM",
        activity: "Shinkansen back to Tokyo",
        detail:
          "Hikari from Kyoto Station → Shinagawa/Tokyo (~2h20m). You'll be back by mid-afternoon. Relax in Shinjuku, visit Shinjuku Gyoen if you missed it, or explore the Tokyo Metropolitan Government Building's free observation deck (closes 9:30 PM).",
      },
      {
        time: "7:00 PM",
        activity: "Dinner: Ripple (Ain Soph) Shinjuku",
        detail:
          "Ain Soph Ripple in Shinjuku serves what many consider Tokyo's best vegan burgers. Their \"chicken\" burger and chili fries are highlights. Casual, filling, and satisfying after a day of temples.",
      },
    ],
    tips: [
      "Key food to try in Kyoto: yudofu (simmered tofu) — Kyoto's tofu is renowned. Nanzenji Junsei near Nanzen-ji temple is famous for it, though check if they can make a dashi-free version.",
      "Matcha everything! Kyoto is matcha's homeland. Try matcha soft-serve, matcha lattes, or wagashi (traditional sweets) from any tea shop in Higashiyama.",
    ],
  },
  {
    num: 6,
    date: "Fri, May 9",
    title: "Fly to Sapporo for Cherry Blossoms",
    icon: "🌸",
    color: "#d81b60",
    sections: [
      {
        time: "6:00 AM",
        activity: "Shinjuku → Haneda → New Chitose Airport",
        detail:
          "This is the one exception to the bullet-train preference. Tokyo to Sapporo by rail takes ~8 hours (Shinkansen to Shin-Hakodate-Hokuto + Limited Express Hokuto) — essentially a full day each way. Flying takes 1.5 hours and budget airlines (Peach, Jetstar, Skymark) run fares as low as ¥5,000–8,000 one-way. Catch an early flight (~7:30 AM) to maximize your day. From New Chitose Airport, the JR train to Sapporo Station takes ~37 min (¥1,150).",
      },
      {
        time: "10:00 AM",
        activity: "Maruyama Park — cherry blossoms",
        detail:
          "Based on 2026 forecasts, Sapporo's cherry blossoms are expected to bloom around April 25–28 and peak around May 1–7. On May 9, you'll likely catch late blossoms or beautiful petal-fall (hanafubuki). Maruyama Park has ~1,700 cherry trees in a forested setting at the base of Mt. Maruyama. Walk up to the adjacent Hokkaido Shrine through an avenue of ancient trees.",
      },
      {
        time: "12:00 PM",
        activity: "Lunch: Sapporo vegetarian options",
        detail:
          "Sapporo has fewer vegan restaurants than Tokyo/Kyoto, but options exist. Try Veggie Café Olu Olu near Odori Park, or search HappyCow for current listings. For a cultural exception: Sapporo soup curry is a signature local dish — many shops can make it vegetarian. Suage+ is a well-known soup curry chain with veggie options.",
      },
      {
        time: "1:30 PM",
        activity: "Hokkaido University campus",
        detail:
          "One of Japan's most beautiful university campuses — enormous grounds with tree-lined paths, a creek, and open meadows. The cherry trees here (different varieties including yaezakura) often bloom later, into mid-May. It's wonderfully peaceful and ideal for a long walk or light jog.",
      },
      {
        time: "3:30 PM",
        activity: "Odori Park & Former Hokkaido Government Office",
        detail:
          "Odori Park stretches 1.5 km through central Sapporo — cherry trees, tulips (May is tulip season too!), and the Sapporo TV Tower. Nearby, the Former Hokkaido Government Office (\"Red Brick Building\") is stunning against late cherry blossoms or fresh green leaves.",
      },
      {
        time: "6:00 PM",
        activity: "Check into hotel & evening stroll",
        detail:
          "Stay near Sapporo Station or Susukino. For dinner, Sapporo is famous for miso ramen — if you're willing to make a cultural exception for dashi, this is the place. For strict vegan, look for Indian restaurants (several good ones in Susukino) or prepare by researching HappyCow listings. The Tanukikoji shopping arcade is a fun, covered evening stroll.",
      },
    ],
    tips: [
      "Why fly instead of train: The Hokkaido Shinkansen only goes to Hakodate (southern tip of Hokkaido), not Sapporo. The Sapporo extension isn't expected until ~2039. From Hakodate, it's another 3.5 hours by limited express. A round trip by train would eat 2 full days of your trip.",
      "Book flights early — Haneda-Sapporo is the world's busiest domestic route, so there are dozens of daily flights.",
      "Sapporo in early May averages 8–17°C. Pack a warm layer for evenings.",
    ],
  },
  {
    num: 7,
    date: "Sat, May 10",
    title: "Sapporo Active Day → Return Tokyo",
    icon: "⛰️",
    color: "#1565c0",
    sections: [
      {
        time: "7:00 AM",
        activity: "Hike Mt. Moiwa (full trail)",
        detail:
          "The full hiking trail up Mt. Moiwa (531m) takes about 1–1.5 hours up. The trailhead is accessible by streetcar to Ropeway-Iriguchi. You'll hike through dense forest and emerge at the summit with a 360° panorama of Sapporo, the sea, and distant mountains. You can take the ropeway down (¥1,200 one-way) to save your knees. Alternatively, Nopporo Forest Park is flatter and has a nature center — good for a trail run.",
      },
      {
        time: "10:30 AM",
        activity: "Late breakfast / brunch",
        detail:
          "Head back to central Sapporo. Try a café near Maruyama or Odori for a relaxed brunch. Kinotoya is famous for its fresh dairy tarts (not vegan, but an option for a cultural exception). For vegan, look for açaí bowls or rice-based breakfasts.",
      },
      {
        time: "12:00 PM",
        activity: "Last cherry blossom stroll or Otaru side trip",
        detail:
          "Option A: Revisit Maruyama Park or explore Moerenuma Park (designed by Isamu Noguchi — a stunning landscape sculpture park). Option B: Take the JR train to Otaru (30 min) — a beautiful port town with canal-side warehouses, glassblowing shops, and a nostalgic atmosphere. The canal area is incredibly picturesque.",
      },
      {
        time: "3:00 PM",
        activity: "Head to New Chitose Airport",
        detail:
          "JR train from Sapporo Station (~37 min). Catch a late-afternoon/evening flight back to Haneda. Aim for a ~5:00–6:00 PM departure to arrive in Tokyo by evening.",
      },
      {
        time: "8:00 PM",
        activity: "Easy final evening in Shinjuku",
        detail:
          "Low-key last night. Walk through the neon glow of Shinjuku at night. For a quiet drink, KiboKo near Shinjuku Gyoen is a vegan wine bar with tapas. Or just grab convenience store onigiri (some are vegan — look for umeboshi/pickled plum or konbu/kelp) and rest up.",
      },
    ],
    tips: [
      "Otaru side trip is worthwhile if you've had your fill of cherry blossoms — the canal, glass workshops, and fresh local atmosphere are a nice change of pace.",
      "New Chitose Airport itself has a surprising amount to do: an onsen, a chocolate factory tour (Royce'), and good food courts.",
    ],
  },
  {
    num: 8,
    date: "Sun, May 11",
    title: "Depart Tokyo",
    icon: "👋",
    color: "#455a64",
    sections: [
      {
        time: "9:00 AM",
        activity: "Morning run or workout",
        detail:
          "Last run in Tokyo. Try the Meiji Jingu forest loop (~3 km through the shrine's old-growth forest) or revisit the Imperial Palace. Some hotels have small gyms, or you can use Anytime Fitness locations (¥1,000–2,000 drop-in with a valid membership from another country).",
      },
      {
        time: "11:00 AM",
        activity: "Harajuku / Meiji Jingu",
        detail:
          "Visit Meiji Jingu Shrine — Tokyo's most important Shinto shrine, set in 170 acres of forest that feels worlds away from the city. Then stroll Takeshita Street or the quieter backstreets of Ura-Harajuku for unique shops and cafés.",
      },
      {
        time: "1:00 PM",
        activity: "Farewell lunch: Daigo or Mr. Farmer",
        detail:
          "Daigo (Minato-ku) is a Michelin-starred shojin ryori restaurant — the ultimate vegan fine-dining send-off in a Japanese garden setting. Book well in advance, courses from ~¥10,000. More casual: Mr. FARMER in Omotesando is a vegan-friendly café with beautiful salads and bowls, right near Harajuku.",
      },
      {
        time: "3:00 PM",
        activity: "Head to the airport",
        detail:
          "You have plenty of buffer. Take the train from Shinjuku to Shinagawa (JR, ~20 min) then the Keikyu Airport Express to Haneda (~15 min). Total ~35–40 min. Aim to arrive at Haneda by 6:30 PM for your 9:15 PM departure — that gives time for duty-free shopping and a last meal at Haneda's terminal restaurants.",
      },
      {
        time: "6:30 PM",
        activity: "Haneda Airport",
        detail:
          "Haneda has surprisingly good food options. HealthyTOKYO at Haneda serves vegan salads and coffee — a nice final stop. Browse the duty-free shops for matcha, Japanese snacks, and souvenirs.",
      },
    ],
    tips: [
      "Don't forget to return your pocket WiFi (if rented) — most have drop boxes at the airport.",
      "Use remaining IC card balance at airport convenience stores, or get a refund (¥220 fee) at the JR ticket counter.",
    ],
  },
];

const budgetNotes = {
  transport: [
    "7-day JR Pass (¥50,000/person): Covers Shinkansen to Kyoto (round trip), local JR lines in Tokyo, and airport transfers. Given your itinerary includes Tokyo→Kyoto→Tokyo round trip (~¥27,700), Nikkō via JR route (~¥5,680 each way), and local JR trains, the pass is close to break-even. The convenience of unlimited rides may justify the cost, but you could also save by buying individual tickets and using the Tobu Nikko Pass separately.",
    "Alternative: Skip the JR Pass. Buy individual Shinkansen tickets (~¥13,850 each way for Kyoto), the Tobu Nikko All Area Pass (¥4,780), and use your Suica card for local trains. This could save ¥5,000–10,000 per person.",
    "Sapporo flights: Budget ¥10,000–16,000 round trip per person (Peach, Jetstar, or Skymark from Haneda).",
  ],
  food: [
    "Budget roughly ¥3,000–5,000/person/day for meals. Fine-dining shojin ryori (Bon, Daigo, Shigetsu) will be the most expensive meals at ¥4,000–10,000/person.",
    "Convenience store (konbini) meals are excellent in Japan — ¥300–600 for a satisfying meal. Great for quick breakfasts.",
  ],
  accommodation: [
    "Tokyo hotel (5–6 nights): ¥10,000–18,000/night for a decent mid-range hotel in Shinjuku",
    "Kyoto ryokan (1 night): ¥25,000–45,000/night for two (including kaiseki dinner)",
    "Sapporo hotel (1 night): ¥8,000–15,000/night",
  ],
};

const foodGuide = [
  {
    name: "Shojin Ryori",
    desc: "Zen Buddhist temple cuisine — entirely plant-based. Multiple small, seasonal dishes served on beautiful lacquerware. The most authentically Japanese vegan food you can eat.",
    where: "Bon (Tokyo), Shigetsu (Kyoto), Gyoshintei (Nikkō)",
    vegan: true,
  },
  {
    name: "Yuba (Tofu Skin)",
    desc: "A Kyoto and Nikkō specialty. Delicate sheets of protein-rich soy milk skin, served sashimi-style, fried, or in soups. Naturally vegan.",
    where: "Nikkō street vendors, Kyoto tofu restaurants",
    vegan: true,
  },
  {
    name: "Okonomiyaki",
    desc: "Savory Japanese pancake — can be made vegan by using yam instead of egg and omitting dashi. Ask for vegetarian (ベジタリアン) or request no dashi.",
    where: "Zen (Shinjuku)",
    vegan: true,
  },
  {
    name: "Vegan Ramen",
    desc: "Soy-milk or vegetable-based broth with noodles and toppings. Japan's vegan ramen scene has exploded in recent years.",
    where: "T's TanTan (Tokyo Station, Ueno), Towzen (Kyoto)",
    vegan: true,
  },
  {
    name: "Matcha / Wagashi",
    desc: "Traditional tea ceremony sweets are naturally vegan (rice flour, red bean, sugar). Matcha lattes and soft-serve are everywhere in Kyoto.",
    where: "Any tea shop in Kyoto's Higashiyama or Arashiyama",
    vegan: true,
  },
  {
    name: "Sapporo Soup Curry",
    desc: "A Hokkaido original — rich, spiced curry broth with vegetables. Many shops offer vegetable-only versions. A must-try regional dish.",
    where: "Suage+ (Sapporo), various local shops",
    vegan: false,
  },
  {
    name: "Sapporo Miso Ramen",
    desc: "Rich, warming miso-based ramen. Sapporo's signature dish. Traditionally uses pork/fish broth — this would be a cultural exception.",
    where: "Ramen Alley near Susukino (Sapporo)",
    vegan: false,
  },
];

const tattooNotes = [
  "Private onsen (kashikiri buro) are always tattoo-safe — you book the bath privately, so no one sees your tattoos. Most ryokan offer these.",
  "Kadensho (Arashiyama, Kyoto) has 5 private onsen baths that tattooed guests can use freely.",
  "Kurama Onsen (north Kyoto) is fully tattoo-friendly in ALL bathing areas, including public baths — verified as of March 2026.",
  "Goko-yu sento in Kyoto (near Luck You ryokan) is fully tattoo-friendly and a great budget option.",
  "Some onsen sell tattoo-cover stickers at the front desk — useful for small tattoos at places with cover-up policies.",
  "When in doubt, ask: 'タトゥーがありますが、大丈夫ですか？' (Tatū ga arimasu ga, daijōbu desu ka?) — 'I have tattoos, is that okay?'",
  "Gyms in Japan may also have tattoo restrictions. Hotel gyms are generally fine.",
];

export default function JapanItinerary() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState("itinerary");

  const day = days[activeDay];

  return (
    <div
      style={{
        fontFamily: "'Noto Serif JP', 'Georgia', serif",
        background: "linear-gradient(135deg, #faf8f5 0%, #f0ebe4 100%)",
        minHeight: "100vh",
        color: "#2d2a26",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .header-area {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          color: #f0ebe4;
          padding: 32px 24px 20px;
          position: relative;
          overflow: hidden;
        }
        .header-area::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(233,69,96,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .header-area::after {
          content: '日本';
          position: absolute;
          right: 24px;
          top: 20px;
          font-size: 64px;
          opacity: 0.06;
          font-family: 'Noto Serif JP', serif;
          font-weight: 700;
          letter-spacing: -4px;
        }
        
        .header-title {
          font-family: 'Noto Serif JP', serif;
          font-weight: 700;
          font-size: 28px;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }
        .header-sub {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 400;
          font-size: 13px;
          opacity: 0.7;
          letter-spacing: 1px;
        }
        
        .tab-bar {
          display: flex;
          background: #1a1a2e;
          border-bottom: 1px solid rgba(240,235,228,0.1);
        }
        .tab-btn {
          flex: 1;
          padding: 10px 8px;
          border: none;
          background: none;
          color: rgba(240,235,228,0.5);
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          letter-spacing: 0.5px;
          transition: all 0.2s;
          border-bottom: 2px solid transparent;
        }
        .tab-btn.active {
          color: #f0ebe4;
          border-bottom-color: #e94560;
        }
        
        .day-nav {
          display: flex;
          overflow-x: auto;
          gap: 0;
          padding: 0;
          background: #f5f1ec;
          border-bottom: 1px solid #e0d8ce;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .day-nav::-webkit-scrollbar { display: none; }
        
        .day-chip {
          flex-shrink: 0;
          padding: 12px 16px;
          border: none;
          background: none;
          cursor: pointer;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 12px;
          color: #888;
          transition: all 0.2s;
          border-bottom: 3px solid transparent;
          text-align: center;
          min-width: 64px;
        }
        .day-chip.active {
          color: #2d2a26;
          border-bottom-color: var(--day-color, #e94560);
          font-weight: 700;
        }
        .day-chip .day-icon {
          font-size: 18px;
          display: block;
          margin-bottom: 2px;
        }
        
        .content {
          padding: 20px;
          max-width: 640px;
          margin: 0 auto;
        }
        
        .day-header {
          margin-bottom: 20px;
        }
        .day-header h2 {
          font-family: 'Noto Serif JP', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--day-color);
          margin-bottom: 2px;
        }
        .day-header .date {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 13px;
          color: #999;
        }
        
        .timeline-item {
          position: relative;
          padding-left: 28px;
          margin-bottom: 24px;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: 7px;
          top: 8px;
          bottom: -24px;
          width: 1px;
          background: #ddd;
        }
        .timeline-item:last-child::before { display: none; }
        .timeline-item::after {
          content: '';
          position: absolute;
          left: 2px;
          top: 6px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--day-color);
          border: 2px solid #faf8f5;
        }
        
        .tl-time {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 11px;
          color: #aaa;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .tl-activity {
          font-family: 'Noto Serif JP', serif;
          font-weight: 600;
          font-size: 15px;
          color: #2d2a26;
          margin-bottom: 4px;
        }
        .tl-detail {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 13px;
          line-height: 1.7;
          color: #5a5550;
        }
        
        .tips-box {
          background: rgba(233,69,96,0.06);
          border-left: 3px solid var(--day-color);
          border-radius: 0 8px 8px 0;
          padding: 14px 16px;
          margin-top: 20px;
        }
        .tips-box h4 {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--day-color);
          margin-bottom: 8px;
        }
        .tips-box li {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 12.5px;
          line-height: 1.65;
          color: #5a5550;
          margin-bottom: 6px;
          margin-left: 16px;
        }
        
        .info-section {
          margin-bottom: 28px;
        }
        .info-section h3 {
          font-family: 'Noto Serif JP', serif;
          font-size: 18px;
          font-weight: 600;
          color: #2d2a26;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1px solid #e0d8ce;
        }
        
        .food-card {
          background: white;
          border-radius: 8px;
          padding: 14px;
          margin-bottom: 10px;
          border: 1px solid #eae5dd;
        }
        .food-card h4 {
          font-family: 'Noto Serif JP', serif;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .food-card .vegan-badge {
          display: inline-block;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 10px;
          background: #2e7d32;
          color: white;
          padding: 1px 6px;
          border-radius: 3px;
          font-weight: 500;
        }
        .food-card .exception-badge {
          display: inline-block;
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 10px;
          background: #f57c00;
          color: white;
          padding: 1px 6px;
          border-radius: 3px;
          font-weight: 500;
        }
        .food-card p {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 12.5px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 4px;
        }
        .food-card .where {
          font-size: 11.5px;
          color: #999;
          font-style: italic;
        }
        
        .tattoo-item {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 13px;
          line-height: 1.65;
          color: #5a5550;
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;
        }
        .tattoo-item::before {
          content: '♨';
          position: absolute;
          left: 0;
          top: 0;
        }
        
        .budget-category {
          margin-bottom: 16px;
        }
        .budget-category h4 {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: #2d2a26;
          margin-bottom: 6px;
        }
        .budget-category li {
          font-family: 'Zen Kaku Gothic New', sans-serif;
          font-size: 12.5px;
          line-height: 1.65;
          color: #5a5550;
          margin-bottom: 4px;
          margin-left: 16px;
        }
      `}</style>

      <div className="header-area">
        <div className="header-title">Japan — 8 Days</div>
        <div className="header-sub">MAY 4–11, 2026 · TOKYO · NIKKŌ · KYOTO · SAPPORO</div>
      </div>

      <div className="tab-bar">
        {["itinerary", "food guide", "tattoo & onsen", "budget"].map((t) => (
          <button
            key={t}
            className={`tab-btn ${activeTab === t ? "active" : ""}`}
            onClick={() => setActiveTab(t)}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      {activeTab === "itinerary" && (
        <>
          <div className="day-nav">
            {days.map((d, i) => (
              <button
                key={i}
                className={`day-chip ${activeDay === i ? "active" : ""}`}
                style={{ "--day-color": d.color }}
                onClick={() => setActiveDay(i)}
              >
                <span className="day-icon">{d.icon}</span>
                Day {d.num}
              </button>
            ))}
          </div>

          <div className="content" style={{ "--day-color": day.color }}>
            <div className="day-header">
              <h2>
                Day {day.num}: {day.title}
              </h2>
              <div className="date">{day.date}</div>
            </div>

            {day.sections.map((s, i) => (
              <div className="timeline-item" key={i}>
                <div className="tl-time">{s.time}</div>
                <div className="tl-activity">{s.activity}</div>
                <div className="tl-detail">{s.detail}</div>
              </div>
            ))}

            {day.tips && day.tips.length > 0 && (
              <div className="tips-box">
                <h4>Tips & Notes</h4>
                <ul>
                  {day.tips.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === "food guide" && (
        <div className="content">
          <div className="info-section">
            <h3>Vegan & Vegetarian Food Guide</h3>
            <p
              style={{
                fontFamily: "'Zen Kaku Gothic New', sans-serif",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#666",
                marginBottom: "16px",
              }}
            >
              Japan is more vegan-friendly than its reputation suggests, especially in Kyoto (the shojin ryori capital) and Tokyo. The key challenge is hidden dashi (fish stock) — always confirm. Items marked as cultural exceptions use animal-based broths.
            </p>
            {foodGuide.map((f, i) => (
              <div className="food-card" key={i}>
                <h4>
                  {f.name}
                  {f.vegan ? (
                    <span className="vegan-badge">VEGAN</span>
                  ) : (
                    <span className="exception-badge">EXCEPTION</span>
                  )}
                </h4>
                <p>{f.desc}</p>
                <p className="where">Where: {f.where}</p>
              </div>
            ))}
          </div>

          <div className="info-section">
            <h3>Useful Phrases</h3>
            <div className="food-card">
              <p>
                <strong>私はベジタリアンです</strong> — Watashi wa bejitarian desu — "I am vegetarian"
              </p>
              <p>
                <strong>肉と魚を食べません</strong> — Niku to sakana o tabemasen — "I don't eat meat or fish"
              </p>
              <p>
                <strong>卵と乳製品も食べません</strong> — Tamago to nyūseihin mo tabemasen — "I also don't eat eggs or dairy"
              </p>
              <p>
                <strong>だしは何ですか？</strong> — Dashi wa nan desu ka? — "What is the soup stock made from?"
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "tattoo & onsen" && (
        <div className="content">
          <div className="info-section">
            <h3>Tattoo Guide for Onsen & Ryokan</h3>
            <p
              style={{
                fontFamily: "'Zen Kaku Gothic New', sans-serif",
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#666",
                marginBottom: "16px",
              }}
            >
              Many traditional onsen still restrict tattoos due to historical associations with yakuza. However, the landscape is changing, and private baths (kashikiri buro) are always a safe option. Here's what to know:
            </p>
            {tattooNotes.map((n, i) => (
              <div className="tattoo-item" key={i}>
                {n}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "budget" && (
        <div className="content">
          <div className="info-section">
            <h3>Budget & Transport Notes</h3>

            <div className="budget-category">
              <h4>🚆 Transport</h4>
              <ul>
                {budgetNotes.transport.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>

            <div className="budget-category">
              <h4>🍜 Food</h4>
              <ul>
                {budgetNotes.food.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>

            <div className="budget-category">
              <h4>🏨 Accommodation</h4>
              <ul>
                {budgetNotes.accommodation.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>

            <div className="tips-box" style={{ "--day-color": "#1565c0" }}>
              <h4>JR Pass Verdict</h4>
              <ul>
                <li>
                  Your itinerary includes Tokyo→Kyoto round trip (~¥27,700), plus local JR rides in Tokyo over several days. With a 7-day JR Pass at ¥50,000, you need ~¥22,300 in additional JR rides to break even.
                </li>
                <li>
                  Since Nikkō is best reached via Tobu (not JR), and Sapporo requires flying, the JR Pass is borderline for this specific itinerary. Consider buying individual Shinkansen tickets instead and saving the difference.
                </li>
                <li>
                  However, if you value convenience (no ticket math, spontaneous JR rides around Tokyo), the pass still makes sense as a stress-reducer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

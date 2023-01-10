import imageOne from '../public/ethiopian_wolves_ethiopian_AVZ.jpg';
import imageTwo from '../public/tradition image 1.jpg';
import imageThree from '../public/Travel to Omo Valley Tribes Children.jpg';
import imageFour from '../public/Simien-Mountains-Ethiopia-563114-1920px-16x7.jpg';
import imageFive from '../public/St-Trinity-Cathederal-Addis-Ababa-1.jpg';

import { ToursObject } from './types';

const TourSummaryArray: ToursObject[] = [
  {
    id: 2,
    title: 'Cultural Exploration of Omo Valley',
    shortDescription:
      'This is a great itinerary which gives travelers an extraordinary opportunity to travel through Ethiopia’s fascinating Southern region, famous for its natural and cultural spectacles and the famous Omo Valley for the chance to meet and discover some of the more remote, colorful, and enigmatic ethnic groups of this incredibly diverse area of Ethiopia.',
    accommodation: 'Hotels and Lodge',
    transporation: 'Drive and Flight',
    duration: '8 Days/ 7 Nights',
    description: `This itinerary let you to mingle and discover; The Mursi Tribe, renowned for their
lip-plates; The Hamer famous for their bull jumping coming of age ceremony, The
Konso known for their intricately-terraced hillsides, fine woven materials, and carved
totems with which they decorate their graves; The Karo famous for their attractive body
painting; The Dassenech (Gelab); The Ari known for their beautiful green villages and
The Dorze well known cotton weavers. You will visit the weekly colorful local markets
for spontaneous interactions and fantastic photo opportunities and attend authentic
cultural events. This tour also includes visit to the Ethiopian Rift Valley to explore some
of the natural wonders of the Great African Rift Valley. Visit Lake Awassa, Ziway and
Langano to spot different birds, Abijatta-Shalla National Park; Boat trip on Lake Chamo
to see Nile Crocodiles and Hippos. This will be a truly unforgettable experience.`,
    groupsize: '2-12',
    imagePath: imageOne,
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: 'Arrival at Addis Ababa, City tour',
        detail: `Welcome to Ethiopia! Arrive at Addis Abeba Bole International Airport. Here you will be
greeted by your tour guide or driver from Ecotravel Ethiopia Tours. Then you will be
transferred to hotel. If your arrival is early morning, after a leisurely morning rest and
relax you will spend the afternoon on a site seeing of Addis Abeba. Established by
Emperor Menelik II 1887 Addis Abeba or ‘New flower’ in Amharic, is relatively young
city full of contrasts. This city tour includes, The National Museum which houses the
country’s historic treasures & the famous ‘Lucy”, The Holy Trinity Orthodox Church
Ethiopian main cathedral and home to the remains of the last emperor: Drive up to
Mount Entoto to have a panoramic view of the city and end the tour with Merkato, one
of the largest open air markets in Africa.
`,
        overnight: 'Eliana Hotel',
      },
      {
        day: 2,
        title: 'Drive to Arba Minch',
        detail: `This morning after breakfast drive full day towards south to Arbaminch. Southern
region is noted for its enormous variety of peoples &culture. Today your first stop will be
at Adadi Mariam rock church which is believed to be built by king Lalibela around 11th
century. Then visit Tiya stelae filed which is registered by UNESCO for its 600-800
years old large stone pillars. There are around 36 standing stones 32 of which are
engraved and decorated with enigmatic symbols marking a large prehistoric royal burial
place. Continue further south through the territory of the Gurage and Alaba people and
arrive at Arbaminch late in the afternoon`,
        overnight: 'Haile Resort Arbaminch',
      },
      {
        day: 3,
        title: 'Boat trip on Lake Chamo and visit Dorze village',
        detail: `In the morning embark on a boat trip on Lake Chamo, a lake that supports a large
population of crocodiles, hippos and fish. First you will cross the lake and head to the
east bank and climb the plateau to the NechSar national park to see Wild Zebras and
Gazelles. Return to the boat trip & visit the famous Crocodile Market which is not a
market but a place to see large concentration of giant Nile Crocodiles and many hippos.
The lake is about 32 kms long and provides a lush wetland habitat for many of flora and
fauna. In the afternoon visit the Dorzetribe who lives on the Guge Mountain. The Dorze
are renowned for their cotton-weaving techniques and beehive shaped houses
constructed entirely from organic materials. Here in their village you can see the unique
beehive huts, observe their exceptional cotton weaving skills and learn about their life
and traditions.`,
        overnight: 'Haile Resort Arbaminch',
      },
      {
        day: 4,
        title: 'Drive to Turmi via Konso',
        detail: `Following breakfast this morning travel to Turmi, a small town and center to visit the
Omo valley tribes. On the way stop at Konso and visit their village. The Konso tribe is
famous for their agricultural terracing method and for their wooden totems that honor
the dead. The Konso villages are a world heritage listed site for its cultural significance.
The villages are surrounded by high stone walls and encompass separate compounds.
After lunch continue further south through the acacia forest to Turmi. If today is a
market day you will get the chance to visitone of the following colorful markets, Alduba
(every Tuesday), Keyafer (every Thursday)or Dimeka (every Saturday).`,
        overnight: 'Turmi Lodge',
      },
      {
        day: 5,
        title: 'Hammer and Karo tribes',
        detail: `This morning begin an excursion to the Karo tribe. The Karo excel in face and body
painting that is practiced especially during their dances and ceremonies. They pulverize
locally found white chalk, yellow mineral rock, red iron ore and black charcoal to
decorate their bodies often mimicking the spotted plumage of a Guinea Fowl. The men
create highly decorated clay hair buns which can take several days to complete. Return
to Turmi and after lunch and short break late in the afternoon at the sun set visit the
village of the famous Hamer tribe village located close to Turmi. The Hamer tribe is
known for the fine pottery they produce as well as their remarkable hair style. The
women are striking wearing beautiful colorful beaded goat skins, ornate necklaces and
metal bangles around their wrist and ankles. These decorations indicate the wealth and
prestige of a woman’s husband.`,
        overnight: 'Turmi Lodge',
      },
      {
        day: 6,
        title: 'Excursion to Omorate and continue to Jinka',
        detail: `Cross Omo River to visit Dassanech tribe. Omorate lies on the bank of the OmoRiver
close to the border of Kenya. You will cross the OmoRiver with a local boat and walk to
one of the village of the Dassenech. The Dassenech are semi-nomadic tribe living on the
shores of Omo River. Their clans stretch across Sudan, Kenya and southern Ethiopia.
They are known for their very unique and ornate hair buns. They grow crops and fish.
Then return back to Turmi and continue further south to Jinka.`,
        overnight: 'Eco Omo Lodge.',
      },
      {
        day: 7,
        title: 'Mursi Tribe and Ari Vilages',
        detail: `This morning you will drive through the Mago national park to visit one of the villages of
the Mursi Tribe. The Mursi,possibly the most well-known tribe in the area, is famous for
both for their women who practice extending their lower lips with clay discs and their
men who engage in stick fighting rituals called Donga. The Mursi are probably the last
tribes in Africa amongst whom it is still the norm for women to wear those large pottery
or wooden discs or plates. Afterwards, return to Jinka and after lunch break, short drive
to the village of Ari tribe. The people of Ari live in the lush surroundings of the Jinka and
grow coffee and fruits for trading and self-consumption. Their villages are green and
surrounded by banana, mango and avocado. The most beautiful in the country.
`,
        overnight: 'Eco Omo Lodge',
      },
      {
        day: 8,
        title: 'Fly back to Addis and Departure',
        detail: `In the morning visit the Jinka museumwhich contains the southern Omo research
centers permanent cultural collections and containing research of the various
ethnicgroups and provide an in-depth overview into the people and traditions of the
Omo valley. Then transfer to Jinka airport for your flight back to Addis Abeba. Arrive in
Addis in the afternoon. Then transfer to hotel to rest and get settled before your night
flight or you can do last minute shopping. In the evening enjoy final farewell dinner at a
well-known local Ethiopian restaurant with cultural dances. Later this evening you will
be transferred to Addis Abeba Bole International Airport for your return flight back
home.
`,
        overnight: '',
      },
    ],
    included:[
      'Accommodation on a Shared Room Extra USD 192.00 per person for SRS;',
      'Domestic Airfare;',
      'All meals (OPTIONAL);',
      'Private Land Transport by an air-conditioned Car;',
      'Entrance fees;',
      'English Speaking cultural guide;',
      'Local Guides;',
      'Boat;',
      'Government tax associated with the trip.',
    ],
    notincluded:[
      'Day Use on the last day in Addis Ababa;',
      'Alcoholol;',
      'Photography and Video fees;',
      'Bull jumping fees;',
      'And what is NOT included on the “Included” List.',
    ],
  },
  {
    id: 10,
    title: 'Trip to North Historic Route With Timkat Festival',
    shortDescription:
      'This itinerary is specially designed for those travelers who wish to attend on the colorful Timkat Religious Festival and combines it with the famous Northern Historic Route. The trip will start and end in Addis Ababa,',
    accommodation: 'Hotels',
    transporation: 'Drive and Flight',
    duration: '8 Days/ 7 Nights',
    description: `This is a wonderful trip that covers the very best of the Northern Ethiopia Historic Circuit whilst offering hidden treasures 
      and includes several UNESCO world heritage sites. You will discover fascinating places and beautiful scenery on this journey 
      across the heart of Ethiopia’s countryside. Ethiopia is a land of spectacle, of amazing natural scenery and wildlife as well as impressive man-made structures. 
      In addition to attend and experience the magnificent Timkat Ceremony, this trip takes you deep into human history. The discovery
      begins in Addis Ababa with a panoramic escape to Mt. Entoto and an important stop at the National Archaeological Museum, home of 
      the 3.5 million-year-old bones of Lucy, the world’s oldest hominid. Continue to the north to the amazing rock-hewn churches, 
      hidden crypts and grottoes in Lalibela (which is considered to be the 8th wonder of the world); The 500-year-old monastery
      islands of Bahirdar on Lake Tana and taking in views of the Blue Nile and its fall. Then you will drive to Gondar for the
      famous Timkat ceremony and elegant castles. Timkat festival is the celebration that commemorates the baptism of Jesus in
      the river of Jordan by John the Baptist. Pilgrims congregate from all parts of the country to celebrate the epiphany.
      It takes place on 19th January every year and Gondar is the best place to attend to the ceremony. The itinerary also 
      incudes, The majestic geological formations of the Simien Mountains (meeting red-chested Gelada baboons).`,
    groupsize: '2-12',
    imagePath: imageOne,
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: 'Arrive in Addis Ababa, city tour',
        detail: `Welcome to Ethiopia! Arrive at Addis Abeba Bole International Airport. 
        Here you will be greeted by your tour guide or driver from Ecotravel Ethiopia Tours. 
        Then you will be transferred to hotel. If your arrival is early morning, after a leisurely
         morning rest and relax you will spend the afternoon on a site seeing of Addis Abeba. 
         Established by Emperor Menelik II 1887 Addis Abeba or ‘New flower’ in Amharic, 
         is relatively young city full of contrasts. This city tour includes, The National 
         Museum which houses the country’s historic treasures & the famous ‘Lucy”, The Holy 
         Trinity Orthodox Church Ethiopian main cathedral and home to the remains of the last 
         emperor: Drive up to Mount Entoto to have a panoramic view of the city and end the tour
          with Merkato, one of the largest open air markets in Africa.`,
        overnight: 'Eliana Hotel',
      },
      {
        day: 2,
        title: 'Fly to Lalibela for the rock hewn churches',
        detail: `In the morning transfer to Addis Abeba Bole International Airport for a short Scenic
        flight to Lalibela. Up on arrival at Lalibela airport you will meet your Guide and transfer
        to your accommodation. You will spend the day exploring one of the world’s most
        remarkable historic sites. The 11 rock churches of Lalibela are believed to be built 900
        years ago by Saint King Lalibela. These elaborate edifices are each carved by hand
        entirely out of a single block of living granite rock and considered as ‘8th Wonders of the
        World’, ‘Jerusalem of Africa’ and ‘Petra of Africa’. It is a deeply spiritual place and
        UNESCO world heritage site. These churches are divided into two groups. The first
        group symbolizes Earthly Jerusalem while the second represents Heavenly Jerusalem.
        Today you will visit the first group of churches.`,
        overnight: 'Maribela Hotel',
      },
      {
        day: 3,
        title:
          'Jan:Yemrehanna Kristos Church and visit the 3rd group in Lalibela',
        detail: `Today’s excursion takes you out of the town of Lalibela and visit one of fascinating rock
        churches located around the town. In the morning drive out to Yemrhane Kristos cave
        church built inside the cave in Aksumite wood and stone construction style. The church
        has become famous for its interior. The flat-span roof displays paneling richly adorned
        with geometrical designs. The ceiling over the sanctuary is domed and displays carvings
        and paintings. The founder of the church is Saint King Yemrhane Kristos a predecessor
        of Saint King Lalibela. Drive back to Lalibela and after lunch break visit the Second
        Group of 11 Rock Churches of King Lalibela..`,
        overnight: 'Maribela Hotel',
      },
      {
        day: 4,
        title: 'Drive to Bahir Dar',
        detail: `Today you will enjoy a full day scenic drive to Bahirdar, a beautiful city located next to
        Lake Tana and capital to Amhara regional state. The drive takes you through the
        spectacular northern highland scenery and gives you the chance to see the life of the
        local Amhara people. On the way stop and visit the Small community Awramba.The
        Awramba are famous for their unique way of life, philosophy, Social and economic
        system. Meet the founder or other representative of the community and listen to their
        philosophy. Arrive in Bahirdar late in the afternoon.`,
        overnight: 'Jacaranda Hotel',
      },
      {
        day: 1,
        title: 'Arrive in Addis Ababa, city tour',
        detail: `Welcome to Ethiopia! Arrive at Addis Abeba Bole International Airport. 
        Here you will be greeted by your tour guide or driver from Ecotravel Ethiopia Tours. 
        Then you will be transferred to hotel. If your arrival is early morning, after a leisurely
         morning rest and relax you will spend the afternoon on a site seeing of Addis Abeba. 
         Established by Emperor Menelik II 1887 Addis Abeba or ‘New flower’ in Amharic, 
         is relatively young city full of contrasts. This city tour includes, The National 
         Museum which houses the country’s historic treasures & the famous ‘Lucy”, The Holy 
         Trinity Orthodox Church Ethiopian main cathedral and home to the remains of the last 
         emperor: Drive up to Mount Entoto to have a panoramic view of the city and end the tour
          with Merkato, one of the largest open air markets in Africa.`,
        overnight: 'Eliana Hotel',
      },
      {
        day: 2,
        title: 'Fly to Lalibela for the rock hewn churches',
        detail: `In the morning transfer to Addis Abeba Bole International Airport for a short Scenic
        flight to Lalibela. Up on arrival at Lalibela airport you will meet your Guide and transfer
        to your accommodation. You will spend the day exploring one of the world’s most
        remarkable historic sites. The 11 rock churches of Lalibela are believed to be built 900
        years ago by Saint King Lalibela. These elaborate edifices are each carved by hand
        entirely out of a single block of living granite rock and considered as ‘8th Wonders of the
        World’, ‘Jerusalem of Africa’ and ‘Petra of Africa’. It is a deeply spiritual place and
        UNESCO world heritage site. These churches are divided into two groups. The first
        group symbolizes Earthly Jerusalem while the second represents Heavenly Jerusalem.
        Today you will visit the first group of churches.`,
        overnight: 'Maribela Hotel',
      },
      {
        day: 3,
        title:
          'Jan:Yemrehanna Kristos Church and visit the 3rd group in Lalibela',
        detail: `Today’s excursion takes you out of the town of Lalibela and visit one of fascinating rock
        churches located around the town. In the morning drive out to Yemrhane Kristos cave
        church built inside the cave in Aksumite wood and stone construction style. The church
        has become famous for its interior. The flat-span roof displays paneling richly adorned
        with geometrical designs. The ceiling over the sanctuary is domed and displays carvings
        and paintings. The founder of the church is Saint King Yemrhane Kristos a predecessor
        of Saint King Lalibela. Drive back to Lalibela and after lunch break visit the Second
        Group of 11 Rock Churches of King Lalibela..`,
        overnight: 'Maribela Hotel',
      },
      {
        day: 4,
        title: 'Drive to Bahir Dar',
        detail: `Today you will enjoy a full day scenic drive to Bahirdar, a beautiful city located next to
        Lake Tana and capital to Amhara regional state. The drive takes you through the
        spectacular northern highland scenery and gives you the chance to see the life of the
        local Amhara people. On the way stop and visit the Small community Awramba.The
        Awramba are famous for their unique way of life, philosophy, Social and economic
        system. Meet the founder or other representative of the community and listen to their
        philosophy. Arrive in Bahirdar late in the afternoon.`,
        overnight: 'Jacaranda Hotel',
      },
    ],
  },
];

export function getFeaturedTours() {
  return TourSummaryArray.filter((tour) => tour.isFeatured);
}

export function getAllTours() {
  return TourSummaryArray;
}

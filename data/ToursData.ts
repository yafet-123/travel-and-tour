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
    included: [
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
    notincluded: [
      'Day Use on the last day in Addis Ababa;',
      'Alcoholol;',
      'Photography and Video fees;',
      'Bull jumping fees;',
      'And what is NOT included on the “Included” List.',
    ],
  },
  {
    id: 3,
    title: 'Trekking to the Highest peak in Ethiopia',
    shortDescription:
      'This is a trekking itinerary in the spectacular Simien Mountains. Located in the far north section of the country, the Simien Mountains are a trekkers utopia. Home to endemic wild animals, Green pastures, glistening streams & mountain views that will leave you mesmerized for weeks thereafter',
    accommodation: 'Hotels and Campsites',
    transporation: 'Drive and Flight',
    duration: '12 Days/11 Nights',
    description: `The Simien Mountains National Park
      includes one of the most dramatic mountain landscapes in Africa, and is home to some
      of the continent’s rarest fauna and flora, including the endemic Walia Ibex, Ethiopian
      Wolf and Gelada Baboon. The park covers the northern escarpment of an ancient
      mountain massif of igneous basalts, deeply cut by forested gorges and sheer cliffs, some
      1,500m high. The Park was one of the first four sites to be inscribed on the World
      Heritage List in 1978. The hike takes you to both the highland and lowland parts the
      national park including Sankaber – home of the gelada, Gich – the gateway for the
      astonishing vistas of Imet Gogo, Chennek – a spot for rare and endemic wildlife such as
      the Walia Ibex and Ethiopia’s highest mountain Ras Dashen (4,620m). The first 4 – 5
      days of trekking on the highland routes gives you a chance to see 3 of the of the “Unique
      7” mammal species of Ethiopia (Walia ibex, Ethiopian wolf and gelada) as well as an
      abundance of interesting flora and some of the world’s most majestic and colorful birds,
      including the lammergeyer (bearded vulture) also known as the “Lords of the Plateau.”
      Following the rewarding experience of the highland routes, the trip then takes you on a
      more off-the-beaten-track route to the lowland parts of the park through the villages of
      Mekerebiya, Mulit and Adirkay.`,
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
          of the largest open air markets in Africa.`,
        overnight: 'Eliana Hotel',
      },
      {
        day: 2,
        title: 'Fly to Gondar, continue to Simien Mountains National Park',
        detail: `Today in the morning transfer to Addis Abeba Bole Airport for your flight to Gondar. At
          Gondar airport you will meet your car and drive 1oo kms to the town of Debarkwhere
          the head quarter of the Simen Mountains national park is located. Here you pick up
          your local mountain guide, Park ranger, professional cook and camping materials and
          continue driving towards the mountain. You will be dropped off on the way for a
          leisurely 3 hours acclimatization hike. The spectacular views of the mountains catch
          your eye as soon as you start your walk along the ridges. There will be time for picnic
          lunch on the way. After a short but demanding hiking your will arrive at the first camp
          site Sankaber. Here your cook serves you fresh coffee, tea and snacks.
          Walking Time- 2/3 hours
          Distance- 7kms
          Elevation: 3,250 meters.`,
        overnight: 'Sankaber Campsite.',
      },
      {
        day: 3,
        title: 'Sankaber To Gech',
        detail: `This day you will start hiking along the ridge with stunning views over the foothills
          800m below. For the first two hours the trail passes through low bush of Giant Heather,
          Soda Apple, Abyssinian Rose, St. John’s Wort, and Globe Thistle. The highlight of the
          trek from Sankaber to Geech is Genbar falls, an incredible 500m sheer drop. From the
          view point opposite, you can watch the Falcons, Augur Buzzards and with luck
          Lammergeyer. After the fall Klipspringers and Bush Bucks may be seen in the steep rock
          and wooded slopes, whilsttroops of Gelada Baboon roam the dust fields for roots. Before
          you reach to Geech camp, there is an opportunity to visit one of the traditional village
          houses for home roasted coffee and Injera the traditional Ethiopian bread. Arrive at
          Geech camp site which is located on a grassy plateau with stunning sunset views.
          Walking Time: 7/8 hours
          Distance- 15 kms
          Elevation: 3,600 meters.`,
        overnight: 'Geech Campsite',
      },
      {
        day: 4,
        title: 'Hike to Imet Gogo',
        detail: `Today’s hiking is around Geech camp site. This morning first you will trek for 2 hours
          along the grass plateau past countless giant lobelia plants. The first destination is Imet
          Gogo, an incredible rocky promontory that grants 360 degree views over the Simen
          mountains range. Imet Gogo summit is one of the most well-known viewpoints in the
          park and an altitude of 3,926m you can see west back along the ridge towards Sankaber
          and Geech and south east across a deep gully towards the next day’s walk to Inatye and
          Cheneck camp site. The views here are arguably the best in the Simen Mountains and
          the drop is terrifying. From Imet Gogo you will trek through the Saha Gorge and have
          lunch here. Return back to Geech and relax. Late in the afternoon short hike towards
          Kedadit (3,760m) to view the beautiful sunset.
          Walking Time: 5/6 Hours
          Distance- 13 kms
          Elevation: 3,600 meters.`,
        overnight: 'Geech Campsite',
      },
      {
        day: 5,
        title: 'Trek to Chenek',
        detail: `Today’s hiking is arguably the most spectacular passing close to the ridge most of its
          length. First you will head back on the path towards Imet Gogo before detouring
          south-east towards Inatye. The path drops into a first of giant hazel before following the
          ridge on open grassland. The climb to Inatye (4,070m) rewards with spectacular views.
          Inatye roughly translates as ‘Mamma Mia’ and the terrifying vertical drop here justly
          warrants the name. After picnic lunch the path follows mostly downhill through open
          grassland and giant lobelia towards Cheneck with a number of stunning viewpoints
          along the way. Cheneck is ideal for wildlife with both Gelada Baboons and Walia Ibex
          common here.
          Walking Time: 7 Hours
          Distance- 15kms
          Elevation: 3,600 meters`,
        overnight: 'Cheneck Campsite',
      },
      {
        day: 6,
        title: 'Chennek to Ambiko',
        detail: `This is the longest day of trek on the Simen Mountains with up to 10 hours. In the
          morning you will climb up to Buwait peak (4,200m). From here there are stunning
          views towards Ras Dashen the highest peak in Ethiopia (4,620m). From Buwait the path
          leads down across the Meseha Valley crossing the river at 2,750m before climbing back
          up to the Ambiko campsite at 3,200m.
          Walking Time: 10 Hours
          Distance:15kms
          Elevation: 3,200 meters.`,
        overnight: 'Ambiko Campsite.',
      },
      {
        day: 7,
        title: 'Trek to the Highest peak in Ethiopia, Ras Dashen',
        detail: `Trek to Ras Dashen, the highest peak in Ethiopia and the 4th highest in Africa. Today is
          a summit day with a long climb of over 1,200m and brutal series of false peaks. After 5
          hours of climbing you will finally reach the steeper rocky ground leading up to the
          summit cairn. There will be plenty of time to enjoy the expansive views from the highest
          mountain in Ethiopia. Then you will return to Ambiko Camp.
          Walking Time: 8 – 9 Hours
          Distance:25kms
          Elevation: 3,200 meters`,
        overnight: 'Ambiko Campsite.',
      },
      {
        day: 8,
        title: 'Ambiko to Sona',
        detail: `Another long day that takes you back from Ambiko down to the Meseha River at 2,750m
          before ascending again to the small village of Arekwazeye. From the village it is down
          again to the wonderfully situated campsite at Sona which has fantastic views over the
          first section of the trek.
          Walking Time: 9 Hours
          Distance: 14 kms
          Elevation: 3,500 meters.`,
        overnight: 'Sona Campsite',
      },
      {
        day: 9,
        title: 'Sona to Mekarebya',
        detail: `After morning breakfast, Startthe day’s hiking from Sona and first you will reach to the
          Incya Valley which you descend for 2/3 hours down to the lowlands. You will enjoy a
          picnic lunch on the banks of Incya Riverwhere there is lovely spot for refreshing swim.
          After lunch trek along the banks of the river to Mekarebya where you camp in the
          village.
          Walking Time: 5/6 Hours
          Distance: 8Kms
          Elevation: 2,150 meters.`,
        overnight: 'Mekareba Campsite',
      },
      {
        day: 10,
        title: 'Mekarebya Village to Mulit',
        detail: `Today’s walk passes along the dry river of Incya. The bird life is incredible; Pin-Tailed
          Waders, Village Indigo, Paradisemonarchs and Tropical Bobu are all frequently spotted.
          You will have picnic lunch at Derk Wenth pool, where you can rest and swim. From the
          pool climb up to the Awazza Village at the foot of the striking Hwaza or table mountain
          in Amharic. Refreshment stop at the village then continue up to the last camp at the
          vibrant village of Mulit.
          Walking Time: 5/6 Hours
          Distance: 8Kms
          Elevation: 2,050 meters.`,
        overnight: 'Mulit Campsite.',
      },
      {
        day: 11,
        title: 'Mulit to Adi Arkay then back to Gondar',
        detail: `The shortest trek of the trip, takes you for 2 hours of a gentle stroll downhill to Adi
          Arkay(1,665m). The scenery and the valley of the lowland villages are attractive. At Adi
          Arkay you will meet your car and will be transferred to Gondar.`,
        overnight: 'Goha Hotel',
      },
      {
        day: 12,
        title:
          'Explore the imperial capital(Gondar), back to Addis and departure',
        detail: `In the morning visit Gondar. Located on the high plateau, Gondar was the imperial
          capital for 200 years and famed for its medieval castles and churches. Visit the Royal
          Enclosure home to dramatic 17th-century castles built by different emperors. These
          whole complexes of buildings are unique in Ethiopia and never found elsewhere in
          Africa. After the castles stop by the famous church of Debre Berhan Selassie, one of the
          finest in Ethiopia. The walls and ceilings covered with stunning ancient murals. End the
          tour with the visit to the remarkable Bath of Emperor Fasil known as ‘the pavilion od
          delight’. In the afternoon fly from Gondar back to Addis.Arrive in Addis in the
          afternoon. Transfer to hotel to rest and get settled before your night flight or you can do
          last minute shopping. In the evening enjoy final farewell dinner at a well-known local
          Ethiopian restaurant with cultural danses. Later this evening you will be transferred to
          Addis Abeba Bole International Airport for your return flight back home`,
        overnight: '',
      },
    ],
    included: [
      '11 Nights Accommodation on a Shared Room/Tent Extra USD 314.00 per person for Single Room Supplement);',
      'Domestic flights if your international flight is with Ethiopian Airlines; extra USD 297.00 per person;',
      'Ground Transport by an air-conditioned Vehicle;',
      'All Meals;',
      'English Speaking Guide;',
      'Applicable Local Guides;',
      'All airport pickups and dropoffs;',
      'Camping greats, utensils, cook, and food during camping;',
      'Mule and muleteer during camping;',
      'All Entrance Fees;',
      'Service Charge and Tax Inclusive.',
    ],
    notincluded: [
      'Day Use on the last day in Addis Ababa;',
      'FOC Leader;',
      'International Airfare;',
      'Alcoholic Expenses;',
      'Any Photography and Video fees;',
      'And what is NOT included on the “Included” List.',
    ],
  },
  {
    id: 4,
    title: 'Ultimate Ethiopian Wildlife Tour',
    shortDescription:
      'Ethiopia is home to some of the wildest and most interesting habitats on the planet, with a large number of indigenous plant and animal species. Birdlife is particularly rich. The lakes in the Great Rift Valley region abound with numerous species of birds, and wild animals are found in every region and National Parks. Elephant, Giraffe, Buffalo, Rhino, Lion, civet, serval, bush pig, gazelle, antelope, ibex, kudu, dik-dik, oribi, reedbuck, wild ass, zebra, hyena, Mountain Nyala, Gelada Baboon, and numerous species of monkeys are still found and to be visited.',
    accommodation: 'Hotels and Lodges',
    transporation: 'Drive and Flight',
    duration: '12 Days/11 Nights',
    description: `This is the special wildlife safari to Simien mountains National park, Bale mountains
national park, Awash National Park, the great rift valley lakes and the surrounding. This
itinerary is designed for those who love nature, wildlife, and authentic culture. The two
major National parks in the country that are famous for their wild life are included.
`,
    groupsize: '2-12',
    imagePath: imageOne,
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: 'Fly To Gondar and Drive to Debark',
        detail: `Upon arrival in Addis Ababa, catch a connecting domestic flight to Gondar where your
          guide will meet you at the airport. Up on Arrival at Gondar you will have a Short
          Sightseeing Of Historical Part Of the city; Fasil Ghebbi, Debre Birhan Selassie Church,
          Mentewab Empress Castle And Drive to The Simien Mountains National Park. (138km
          Rough But Good Road). On The Way Near The Town Of Gondar; Short Visit Of Woleka
          – A Place Of The Felasha Or The Black Jewish People For Their Synagogue And Black
          Pottery Shop. Jews Have Amazing Histories In Ethiopia Even Before The Time Of
          Gonderine Civilization (17-19century).The History Of The Original Ark Of The
          Covenant, Supposed To Be In Axum Now Is One To Mention. Then Continue Driving To
          Debark (101km From Gondar). At Debark; We Collect Entrance Tickets And A Scout For
          The Park. After Debark; Drive To Simien Mountains National Park. On The Way;
          Appreciate The Alluring Chained Mountains Of The Simien Park And Gelada Baboons
          Feeding On The Ground At Many Places. finally back to Debark and overnight.
          `,
        overnight: 'Ras Dejen Hotel',
      },
      {
        day: 2,
        title: 'Simien mountains National Park',
        detail: `The first day of proper hiking starts with breakfast before you head out to the trail along
          the ridge. There’s a wonderful vantage point offering incredible views over the foothills
          ~800 metres below. The mountains are known worldwide for their biodiversity and
          your guide will point out all point out flora and fauna of note. Along the trail, Gelada
          Monkeys, Klipspringer and Walia Ibex make regular appearances and birds soar on the
          thermals beneath you as you look out over the views.
          The highlight of today’s trek is Genbar Falls, a waterfall over a sobering 500m sheer
          drop. The falls plummet into the Geech Abyss - a vast canyon cut into the main wall of
          the escarpment. After a break for lunch, you’ll carry on towards Geech, a remote
          traditional village with thatched roofs. Geech camp is a great spot to watch the sun go
          down over the range, and you’ll often see troops of Gelada Monkeys climbing down the
          precipitous slopes to their sleeping quarters in caves in cliffs below.`,
        overnight: 'camping at Geech',
      },
      {
        day: 3,
        title: 'Imet Gogo (3,925m)',
        detail: `Today you’ll head to Imet Gogo, a headland at the edge of the ridge that stands close to
          4000 metres altitude with unbelievable 360 degree views of the surrounding mountains.
          You can see west, back towards Sankaber and Geech, and south-east along a large gorge
          towards tomorrow’s destination, Inyate. Trail through Giant Erica woodlands before
          emerging on the moorland top at Inatye, the second highest peak in the western part of
          the park. Drop down to Chenek camp along a path that has some impressive views of the
          lowlands below. Overnight at Chenek camp which is the best spot to see both Ethiopian
          Wolves and Walia Ibex.
          `,
        overnight: 'Chennek Camp.',
      },
      {
        day: 4,
        title: 'Mount Buahit and Limalimo Lodge',
        detail: `Mount Buahit is Ethiopia’s third highest peak, standing at an impressive 4430 metre.
          Your route to Mount Buahit follows footpaths off the road alongside a stream that
          trickles down the hill. This is quite a steep walk, but you can take regular breaks at great
          view points en route. This is your best chance to see Walia Ibex.`,
        overnight: 'Limalimo Lodge.',
      },
      {
        day: 5,
        title: 'Fly back to Addis Ababa',
        detail: `Spend the morning relaxing around the lodge and soaking up the last of the incredible
          views. After an early lunch, transfer to Gondar airport to catch a flight back to Addis`,
        overnight: 'Eliana hotel.',
      },
      {
        day: 6,
        title: 'Drive to Bale Mountain National Park',
        detail: `After breakfast, we continue our journey through Shashamane to Dinsho, where the
          headquarters of the Bale Mountains National Park are located (approx. 5 hours). In the
          afternoon we undertake a gentle, very interesting walk around the headquarters in
          Dinsho and almost certainly encounter animals such as warthogs, the endemic Menelik
          bushbuck or the Mountain Nyala as well as a variety of birds.`,
        overnight: 'Wabe Shebelle Hotel.',
      },
      {
        day: 7,
        title: 'Bale Mountain National Park',
        detail: `Today it will take us approx. 5-6 hrs to explore the Senetti Plateau, usually the best place
          to see the Ethiopian wolf. We also will have a chance to visit the Crane Lakes and climb
          the 2nd highest point of Ethiopia “Mount Tullu Deemtu,” offering at an altitude 4377 m
          spectacular views of the surrounding areas.
          Afternoon drive further down to Harenna Forest for birding includes the Abyssinian
          Catbird, Abyssinian Woodpecker, White-backed Black Tit, Abyssinian Ground Thrush,
          Yellow-crowned Canary, Somali Chestnut Winged Starling, Olive Pigeon and Mountain
          Buzzard.`,
        overnight: 'Wabe Shebelle Hotel.',
      },
      {
        day: 8,
        title: 'The Great Rift Valley lakes',
        detail: `Morning, start driving to Lake Langano, where we will spend the night. We will bird this
          and other lakes, among them beautiful Lake Ziway, and wetland sites of the Great Rift
          Valley, looking for Black Crowned Crane, Collared Pratincole, African Snipe and several
          other shorebird species, various Tern species including Gull-billed, Lesser and African
          Jacanas, Fulvous Whistling-Duck, African Pygmy Goose, Western Marsh Harrier, and
          many others. Other highlights today might be Greater Spotted Eagle, Egyptian Vulture,
          White-headed Vulture, Clapperton’s Francolin, Blue-spotted Wood Dove, Lichtenstein’s
          Sandgrouse, Buff-bellied Warbler, Northern Black Flycatcher, Blackstar, Black-headed
          and Pygmy Batises, the striking Masked Shrike, Green-winged Pytilia, and Red-fronted
          Warbler, as well as many others.
          `,
        overnight: 'Sabana Beach resort.',
      },
      {
        day: 9,
        title: 'Lake Langano and surrounding area',
        detail: `After Breakfast, we will drive to Bishangari area at the shores of Lake Langano (approx.
          4 hours). You may relax on the beach (swimming is possible), take a walk through the
          lodge and encounter wild animals such as Warthogs or Olive Baboons in front of your
          bungalow. We can arrange many activities such as trekking through the nearby forest,
          mountain biking, bird watching, fishing, hippo Spotting or horse riding.`,
        overnight: 'Sabana Beach resort.',
      },
      {
        day: 10,
        title: 'Drive to Awash National Park',
        detail: `After breakfast, drive to Awash National park. Lunch in Nazreth and We pass Lake
          Beseka (which has grown over the last decade, causing the Djibouti – AddisAbaba
          railway line to be raised on several occasions), and enter the Awash National Park for
          game view. The dramatic Awash Falls, as the river tumbles into its gorge, is the sight
          not to be missed in the national park. Awash national park, surrounding the dormant
          volcano of Fentale, is a reserve of arid and semi-arid woodland and savannah, with
          riverine forests along the Awash River. Forty six species of animals have been identified
          here, including Beisa Oryx and Swayne’s hartebeest. The bird life is prolific especially
          along the river and in the nearby Lake Beseka and there are fine endemic amongst the
          392 species recorded birds. A special attraction is the beautiful clear pools of the
          Filwoha hot springs. you will proceed to the beautiful Doho lodgeto spend the night.`,
        overnight: 'Doho Lodge',
      },
      {
        day: 11,
        title: 'Awash National Park',
        detail: `Awash is one of Ethiopia’s premier national parks, which has a rich diversity of birds as
          well as mammals such as Golden Jackal, Caracal but rare chance, hyena cave for spotted
          hyena, Beisa Oryx, and Soemmerring's Gazelle. We’ll look for African Swallow-tailed
          Kite, a host of Bustards including Arabian, Buff-crested, Hartlaub’s, Black-bellied, and
          White-bellied, Bruce’s Green Pigeon, and tons more. During our time here we also hope
          to find Somali Ostrich, African Collared Dove, Singing Bush Lark, Gillett’s Lark,
          Chestnut-backed and Chestnut-headed Sparrow-Larks, Boran and Ashy Cisticolas,
          Eastern Olivaceous Warbler, Pale and African Grey Flycatchers, Mouse-colored
          Penduline Tit, four of Africa’s most lovely Sunbirds, namely Eastern Violet-backed, Nile
          Valley, Beautiful,and Shining, Southern Grey Shrike, Somali Fiscal, Woodchat Shrike,
          Northern Masked Weaver, Cut-throat Finch, and many others. At this time of year, we
          might also enjoy migrant Common Whitethroat and White-throated Robin. As always,
          raptor-watching will be spectacular – we can easily find 40-50 species on our
          three-week tour, and many of these are in Awash National Park.
          `,
        overnight: 'Doho Lodge',
      },
      {
        day: 12,
        title: 'Drive back to Addis Ababa',
        detail: `In the morning, free outdoor private or Group hot spring bath with a spectacular view of
          the surrounding palm trees. Breakfast in Lodge and drive back to Addis Ababa.`,
        overnight: '',
      },
    ],
    included: [
      '11 Nights Hotel Accommodation on a Shared Room Extra USD 294.00 per person for Single Room Supplement);',
      'Domestic flights;',
      'All meals (OPTIONAL);',
      'Land Transport;',
      'English Speaking guide;',
      'Local Guides;',
      'Scout fees;',
      'Government tax associated with the trip.',
    ],
    notincluded: [
      'Day Use on the last day in Addis Ababa;',
      'FOC Leader;',
      'International Airfare;',
      'Alcoholic Expenses;',
      'Any Photography and Video fees;',
      'And what is NOT included on the “Included” List.',
    ],
  },
  {
    id: 5,
    title: 'Community trek in Ethiopia',
    shortDescription:
      'Centuries old cultural sites, high mountains with a huge variety and spectacular landscapes make this trip to Ethiopia a real enchanting experience. ',
    accommodation: 'Hotels and Lodges',
    transporation: 'Drive and Flight',
    duration: '15 Days/ 14 Nights',
    description: `On this award-winning easy hiking tour through northern Ethiopia you explore the country in a
      refreshingly different way. You have plenty of time to experience people, culture and
      nature. You will see the insider tips off the beaten track, hike on the Menz Guassa
      Plateau and in the Lasta Mountains near Lalibela. In the basalt mountains around
      Lalibela, communities farm in the age old way with ox-drawn ploughs, and had tools.
      Life for the farmers is hard, but they have a ready smile and love to receive guests. You
      stay overnight in small local guesthouses and thus support the local communities and
      nature conservation projects of the region.
      But also the culture lovers will get their money's worth. Plenty of time will be available
      to discover the rock churches of Lalibela or the medieval castles of Gondar and Lake
      Tana Region
      `,
    groupsize: '2-12',
    imagePath: imageOne,
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: 'Arrival at Addis Ababa, City tour',
        detail: `Welcome to Ethiopia! Arrive at Addis Abeba Bole International Airport. Here you will be
greeted by your tour guide or driver from Ecotravel Ethiopia Tours. Then you will be
transferred to hotel. Then your trip will start with a drive to Entoto mountain, Addis
Ababa's highest mountain, is located on the outskirts of the city. With its very rural flair
and the scent of the forests, it is the ideal place to arrive calmly after your flight. For
acclimatization you take a short walk through the eucalyptus forests (approx. 1 hour in
flat terrain). Up here, a fascinating overview of this growing metropolis of Ethiopia
awaits us. The scent of the eucalyptus forests invites you to stay. In one of the coffee
houses you enjoy our first Ethiopian coffee from the charcoal fire. Afterwards you visit
the Derg Museum, which deals with the time of the Red Terror in Ethiopia in the
1970/80s and is one of the best, though sad, museums in the city.
          `,
        overnight: 'Eliana Hotel.',
      },
      {
        day: 2,
        title: 'The Great African Rift & Menelik II. palace',
        detail: `Today you leave the bustling metropolis and drive through the Ethiopian highlands to
Ankober, the old Ethiopian capital. On the way you pass through the flat and densely
populated agricultural areas of the highlands. After lunch in Debre Birhan the road
turns east towards Ankober. The last kilometers to the lodge you hike along the old
imperial trade route with a wide view into the African Rift Valley. On the way to the Rift
Valley you have a good chance to see the first birds of pray or even the endemic
blood-breasted baboons. The village Ankober is situated on a mountain with great views
into the surrounding lowlands of Eastern Ethiopia. After a short ascent to the mountain
where the Emperors Palace was build, you move into your room in the Ankober Palace
Lodge, a replica of the palace of Emperor Menelik II. (19th century). In the evening you
dine imperially in the large dining room of the lodge and sit together around the
campfire during a typical Ethiopian coffee ceremony to escape the coolness of the night.`,
        overnight: 'Ankober Palace Loge.',
      },
      {
        day: 3,
        title: ' Menz Guassa Conservation Area',
        detail: `Today a gravel road brings you to the high plateau of Menz Guassa. On the way you
make stops and look down into the lowlands at breathtaking viewpoints. Here it is
always a good idea to walk some parts of the route. There is the possibility to walk the
last kilometers to the accommodation and thus to go on a game walk for antelopes and
the rare Ethiopian wolf in the nature reserve.
At 3,100 meters you finally reach the Guassa Plateau, a unique ecosystem more intact
than that of the famous Simien Mountains. The next two nights you will stay in a
self-catering Eco-lodge built in the traditional style, which is part of an ecotourism
project.
          `,
        overnight: 'Menz Guassa community Lodge',
      },
      {
        day: 4,
        title: 'Menz Guassa Conservation Area',
        detail: `From the lodge you explore the surroundings on foot and learn more about the flora and
fauna in Menz and an interesting nature conservation project once implemented by the
Frankfurt Zoological Society to protect the highland ecosystem and support the farmers,
here on the high plateau. Finally you reach the escarpment with views into the valleys
1,500 meters below. Here dozens of blood-breasted baboons can be observed. you can
join these peaceful animals without hesitation. With a little luck you can also admire the
shy Ethiopian wolves and other mountain dwellers. In the afternoon you stop at a
farmers house for a cup of coffee. In the evening you enjoy this unique mountain world
and doze into a restful silent night under the endless Ethiopian starry sky.
`,
        overnight: 'Menz Guassa community Lodge.',
      },
      {
        day: 5,
        title: ' Drive to Dessie',
        detail: `Today the road winds over impressive serpentines down to almost 2,000 meters and
you drive through green valleys where the farmers irrigate their fields with the river
waters coming from the highlands. After 40 km of gravel road you reach the paved
highway heading north.
Here in the lowlands you see an Ethiopia that is very different from the one you have
seen so far. You meet camels and the temperatures often rise above 35 degrees Celsius.
The landscapes here are drier and predominantly inhabited by Muslims. These areas
were once characterized by famines and droughts. Today they are a flourishing oasis
with a lot of agriculture. Also the bird life is getting really colorful for the first time
during your trip. Ethiopia's lowlands are one of the most bird rich habitats in the world.
Along the way you have a lunch break before stopping in Dessie for an overnight stay.`,
        overnight: 'Golden Gate Hotel',
      },
      {
        day: 6,
        title: 'Continue to Lalibela',
        detail: `You leave the lowlands and drive from Dessie back to the highlands. Still in the morning
you head for Lake Hayk, a green oasis and ideal place for bird watching. During your
coffee break here you can watch all kinds of water birds, parakeets and kingfishers.
For lunch you stop at the home of an Ethiopian family. Afterwards you continue your
journey westwards to the mountainous regions of Wollo and Lasta: for centuries the
heartland of the Ethiopian emperors and Ethiopian Orthodox Christianity. In the
evening you finally reach the holy town of Lalibela and relax with a delicious dinner with
a view of the Lasta Mountains.`,
        overnight: 'Sora Lodge.',
      },
      {
        day: 7,
        title: 'Visit the rock-hewn churches of Lalibela & climb to Hudad',
        detail: `Lalibela is one of the most important pilgrimage centers for Orthodox Christians in
Ethiopia and is known for its 800-year-old monolithic rock churches, which were
chiseled into the soft tuff stone from top to bottom and from the outside to the inside in
decades of detailed work. You will spend the morning sightseeing, walking through dark
tunnels from one church to the next. Lunch in the city.
In the late afternoon you start your hike to a small Eco-lodge in picturesque scenery
above the city. Sustainable tourism, appreciation of the local culture and nature, fresh
food and friendly service are the principles followed by the staff and the community of
Lalibela Hudad. The remote Hudad Lodge is an oasis in the nature with 360 degree
mountain panorama and will be the starting point for the hikes in the following days
and can only be reached on foot or by mule`,
        overnight: 'Hudad Eco-Lodge',
      },
      {
        day: 8,
        title: 'Hike to Asheten Mariam Church',
        detail: `The lodge is far away from the hustle and bustle of the city. Up here you experience the
Ethiopian country life and pure nature. After an invigorating breakfast you start the half
day tour to the nearby table mountain of Asheten. At the top you visit the Asheten
Mariam Monastery with its up to 800 years old parchment writings and crosses, which
are shown to you by a priest.
Once the rock churches of Lalibela were supposed to be built up there, but finally the
kings in the old days decided in favor of the lower situated and better accessible
Lalibela. The hike is rewarded with great views over the region
          `,
        overnight: 'Hudad Eco-Lodge.',
      },
      {
        day: 9,
        title: 'Hudad Villages',
        detail: `Today you will make another excursion to the nearby high plateau and its villages, with
the focus on meeting the farmers. During the half-day round trip you will immerse
yourself in their culture and have the opportunity to get an insight into the simple
dwellings of the farmers. During the visit of the villages you will be welcomed with a
traditional foot-washing, which is prepared for guests up here.
`,
        overnight: 'Hudad Eco-Lodge',
      },
      {
        day: 10,
        title: 'Excursion to Yemrehanna Christos Church',
        detail: `After breakfast you start your descend to Lalibela and drive to the Yemrehanna Christos
church (about 42 km). This church is built in the style of late Axumite architecture and
with its beautiful frescoes in the middle of a cave is a real insider tip. Together you visit
the cemetery with the grave of Saint Yemrehanna. At the church the group meets again
and drives back to Lalibela together. Here you will have dinner together at sunset with
views over the Lasta Mountains.`,
        overnight: 'Sora Lodge',
      },
      {
        day: 11,
        title: 'Drive to Bahir Dar, on the way Awra Amba community',
        detail: `On today's travel day to Bahir Dar you visit the village of the godless Awra Amba along
the way. About 400 people live here in a community that has renounced the faith in
order to be happy together. You get to know Zumra Nuru, the founder of the
community, and visit the old people's home, the weaving mill, the library and the village
school. Awra Amba is a cooperative project with a moving and poor past, which has now
worked its way up to a certain level of prosperity. A prosperity that is not always seen as
benevolent by the neighboring villages. An exciting excursion that will raise many
questions. In the evening you reach Bahir Dar at Lake Tana after a long driving day from
Lalibela.
          `,
        overnight: 'Jacaranda Hotel',
      },
      {
        day: 12,
        title: 'Lake Tana and its monasteries',
        detail: `Bahir Dar is located on the southern shore of Lake Tana, the largest lake in Ethiopia.
The lake is a habitat for more than 300 different bird species and numerous mammals.
In the morning you take a boat trip across Lake Tana past island monasteries and
numerous bird colonies that use some of the islands for breeding. Arriving on the Zeghe
Peninsula, you will walk through the coffee forest, which for centuries has enabled the
inhabitants to survive by selling the delicious beans. Through the undergrowth, shaded
by mighty acacia trees, you walk through the forest and finally reach the Ura Kidane
Miheret Church with paintings from the 17th and 18th century. After a picnic on the lake
shore you return to the mainland. The afternoon is at leisure.
`,
        overnight: 'Jacaranda Hotel',
      },
      {
        day: 13,
        title: 'Journey to Gondar',
        detail: `The old town of Gondar is now a UNESCO World Heritage Site and the castles are also
called the 'Camelot of Africa'. Today you visit these old palaces, as well as the bath house
and the Debre Birhan Selassie Church, one of the most beautifully painted churches in
the country`,
        overnight: 'Goha Hotel',
      },
      {
        day: 14,
        title: 'Drive to simien mountains National Park',
        detail: `After breakfast drive to Simien Mountain National Park. Debark is a small market town
at an altitude of 2700 meters close to the boundary of the Simien Mountains National
Park. Corrugated–iron–roofed buildings surround the colourful and busy market area.
Before entering the park, you have to register at the park headquarters just outside
town. Here, armed scout one of the park regulations, joins you. Then drive to Sankaber
for the best view. En route, pass through pretty country, the foothills of the Semen
Mountains, with carefully tended field, open pasture with grazing horses, stands of trees
and distant rocky peaks. At the high point of the road, there are superb views across the
weirdly eroded foothills of the range and you may also be lucky enough to spot you first
Lammergeiers and Gelada Baboons of the trip.`,
        overnight: 'Simien Lodge',
      },
      {
        day: 15,
        title: 'Community Tours in Simien Mountains',
        detail: `You will spend most of the time participating in community works. Some of the
community works are local beer making, injera baking, coffee ceremony, black smith,
and more. You will try almost everything the local people do in their daily life. Finally
you will drive back to Gondar and take a flight to Addis Ababa. A dinner rounds off your
travel experience and you leave for the return flight to home.
`,
        overnight: '',
      },
    ],
    included: [
      'Accommodation on a Shared Room;',
      'Domestic Airfare;',
      'Meals ;',
      'Private Land Transport by an air-conditioned Car;',
      'Entrance fees;',
      'English Speaking cultural guide;',
      'Local Guides;',
      'Boat;',
      'Government tax associated with the trip.',
    ],
    notincluded: [
      'Day Use on the last day in Addis Ababa;',
      'Alcoholol;',
      'Photography and Video fees;',
      'Bull jumping fees;',
      'And what is NOT included on the “Included” List.',
    ],
  },
  {
    id: 6,
    title: 'Discover Ethiopian Nature and Culture in 14 Days',
    shortDescription:
      'This trip combines culture and nature. You will start in Addis Ababa, the capital city of Ethiopia and center for the African continent, drive via rift valley lakes towards the beautiful Bale Mountains National Park and the coffee plantation region.',
    accommodation: '',
    transporation: 'Drive',
    duration: '15 Days/ 14 Nights',
    description: `Bale
Mountains National Park is Ethiopia’s second-highest mountain range and it contains
one of the richest habitats in the country’s alpine heights. It is the best place for viewing
a broad cross-section of Ethiopia’s unique wildlife, including Ethiopian Wolf, Mountain
Nyala, Giant forest Hog, Cape Hyrax, Colobus and Vervet monkeys, and 16 endemic bird
species. Then, you will continue to Ethiopia’s fascinating Southern region, famous for its
natural and cultural spectacles and the famous Omo Valley for the chance to meet and
discover some of the more remote, colorful, and enigmatic ethnic groups of this
incredibly diverse area of Ethiopia. In this fascinating region you will learn about the
indigenous culture different ethnic groups who inhabit this part of the country. This
itinerary let you to mingle and discover; The Mursi Tribe, renowned for their lip-plates;
The Hamer famous for their bull jumping coming of age ceremony, The Konso known
for their intricately-terraced hillsides, fine woven materials, and carved totems with
which they decorate their graves; This tour also includes visit to the Ethiopian Rift
Valley to explore some of the natural wonders of the Great African Rift Valley. Visit Lake
Awassa, Ziway and Langano to spot different birds, Abijatta-Shalla National Park; Boat
trip on Lake Chamo to see Nile Crocodiles and Hippos and visit creator Lakes at Debre
Zeit. This will be a truly unforgettable experience.`,
    groupsize: '2-12 PAX',
    imagePath: imageOne,
    isFeatured: true,
    detailedItinerary: [
      {
        day: 1,
        title: 'Arrival at Addis Ababa airport',
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
        overnight: 'Eliana Hotel.',
      },
      {
        day: 2,
        title: 'Drive to Dinsho, Bale Mountains National Park Headquarter',
        detail: `After breakfast, we continue our journey through Shashamane to Dinsho, where the
          headquarters of the Bale Mountains National Park are located (approx. 5 hours). In the
          afternoon we undertake a gentle, very interesting walk around the headquarters in
          Dinsho and almost certainly encounter animals such as warthogs, the endemic Menelik
          bushbuck or the Mountain Nyala as well as a variety of birds.`,
        overnight: 'Wabe Shebelle Hotel.',
      },
      {
        day: 3,
        title: 'Excursion to Sanetti Plateau and Harena Forest',
        detail: `Today it will take us approx. 5-6 hrs to explore the Senetti Plateau, usually the best place
          to see the Ethiopian wolf. We also will have a chance to visit the Crane Lakes and climb
          the 2nd highest point of Ethiopia “Mount Tullu Deemtu,” offering at an altitude 4377 m
          spectacular views of the surrounding areas.
          Afternoon drive further down to Harenna Forest for birding includes the Abyssinian
          Catbird, Abyssinian Woodpecker, White-backed Black Tit, Abyssinian Ground Thrush,
          Yellow-crowned Canary, Somali Chestnut Winged Starling, Olive Pigeon and Mountain
          Buzzard.
          `,
        overnight: 'Wabe Shebelle Hotel.',
      },
      {
        day: 4,
        title: 'Drive to Lake Hawassa',
        detail: `Morning, drive to Lake Hawassa, which is on the edge of Abaro Mountains and Rift
          valley, rich with the habitat of edge effect species, includes Spotted Creeper, Banded
          Barbet, Black-winged Lovebird, Grey-backed Fiscal, Double-toothed Barbet, Beautiful
          Sunbird, woodland and Pygmy Kingfisher, Blue-headed Coucal, Abyssinian Waxbill,
          Red-throated Wryneck and White-rumped Babbler. Among shorebirds, African Pygmy
          Goose, White-backed Duck, Black Crake, Lesser and African Jacana, Goliath Heron,
          Purple Heron, Fulvous and White-faced whistling Ducks, Grosbeaks Weaver, Common
          Waxbill, Bronze Manikin, Pied and Malachite Kingfishers, Marabou Stork, Great White
          Pelican, Reed and Great Cormorant, Egrets, Hottentot Teal, Spur-winged Goose,
          Squacco Heron, Grey-headed Gull, Whiskered and White-winged Terns are some to
          mention.
        `,
        overnight: 'Haile Resort Hawassa.',
      },
      {
        day: 5,
        title: 'Travel to Arba Minch',
        detail: `Today, you’ll drive 275 km, Arba Minch. On the way, stop at Senkele Wildlife Sanctuary
          to watch the Swayne's Hartebeest. In this small nature reserve one almost can see the
          extremely rare Swayson's Hartebeest of which less than 500 survive in the wild, all in
          Ethiopia. A typical visit, whether driving or walking, goes through the savannah, where
          Swayne’s and oribi antelope are sure to be seen, and then up to Borena Hill, 6km from
          the headquarters, for views of Lake Awassa and likely wildlife encounters with warthogs,
          olive baboons, vervet monkeys and bushbuck.`,
        overnight: 'Haile Resort Arba Minch',
      },
      {
        day: 6,
        title: 'Lake Chamo and Dorze Village',
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
        overnight: 'Haile Resort Arbaminch.',
      },
      {
        day: 7,
        title: 'NechiSar National Park',
        detail: `After breakfast, drive to NechiSar National Park to visit many species of birds and
          mammals. This Park is located in the Rift Valley. It is enriched with many species of
          birds and mammals; African orange-bellied parrots, bustards, weavers, Somber
          rock-chat, yellow-throated serin, Red-fronted Barbet, Pygmy baits, Lesser striped
          swallow, and Anubis baboons, Black-backed Jackal, Bat-eared Fox, Egyptian Mongoose,
          Warthog, Soemmering’s Gazelle, Lesser Kudu, Salt’s Dikdik, etc`,
        overnight: 'Haile Resort Arbaminch.',
      },
      {
        day: 8,
        title: 'Drive to Turmi',
        detail: `After Breakfast, drive to the Konso small town, where the people wear colorful
          costumes, and use their steep land through impressive terracing; through annual
          wooden grave marks, they express their status. Their three-story community house
          called Mora is impressive; all the young boys above 12 years old stay there every night
          inside till they marry. - Have lunch in Weyto and continue driving to the Arbore tribe,
          who are pastoralists (livestock farmers). They believe that their singing and dancing
          eliminates negative energy and with the negative energy gone, the tribe will prosper. The
          women of the tribe cover their heads with a black cloth and are known to wear very
          colorful necklaces and earrings. Young children wear a shell type hat that protects their
          heads from the sun. The Abore use natural colors made from soil and stone for their
          Body paint. Traditional dancing is practiced by the tribe and wealth is measured by the
          number of cattle a tribesman owns. Finally, drive to Turmi overnight.`,
        overnight: 'Turmi Lodge',
      },
      {
        day: 9,
        title: 'Nyangatom and Karo',
        detail: `Early morning, depart from Turmi to the village of Kangatan. Here you will cross the
          Omo River and take a short walk through the local fields to visit a village of the
          Nyangatom tribe. After the visit, return across the river and proceed to the Karo village
          of Korcho, with a stunning location lookin over the Omo River. The Karo people, while
          the smallest tribe of the Omo Valley in number, are also known to be the most
          decorated. After the visit, return to Turmi for another opportunity to see Jumping of the
          Bulls.`,
        overnight: 'Turmi Lodge',
      },
      {
        day: 10,
        title: 'Excursion to Omorate',
        detail: `After breakfast, Cross Omo River to visit the Dassanech tribe. The First time, in the Omo
          Valley, travelers witnessed Ethiopia's many ethnicities and cultural traditions. The
          Southern Cultural Route takes travelers to the heart of the most remote tribes, whose
          animist beliefs strike a chord with the true African experience.
          In the afternoon drive to Hammer people who have a bull-jumping ceremony; This
          ceremony is a transformation for young boys from young to adulthood; During the
          ceremony, you see the real Hamer traditional dance called Evangadi; and also the
          women from the jumper’s family are being beaten by his friends to show their love to the
          Jumper and that he is ready for adulthood.`,
        overnight: 'Turmi Lodge',
      },
      {
        day: 11,
        title: 'Drive to Jinka Via Bena Tribe',
        detail: `After breakfast, start driving to Jinka Via Bena Tribe. Just like most of the indigenous
          tribes in the lower Omo Valley, the Bena practice ritual dancing and singing. The men
          often have their hair dressed up with a colorful clay cap that is decorated with feathers.
          Both the men and women wear long garments and paint their bodies with white chalk.
          Women of the tribe wear beads in their hair that is held together with butter.
          `,
        overnight: 'Eco Omo',
      },
      {
        day: 12,
        title: 'Explore Mursi tribe and Drive to Konso',
        detail: `Drive to Mago National Park to visit the Mursi people in their village. The Mursi are well
          known for the large clay discs their women wear inserted in their lower split lip. The
          Mursi women start cutting their lips between the age of 12 and 16 and thereafter, they
          put small wooden plugs into the hole and change it every night with the bigger one to
          stretch the lips till it can hold a 6 inch (15cm) round clay disc. The Mursi men wear very
          little, although a cotton wrap is becoming more common now. Then, Drive to Konso for
          Overnight.`,
        overnight: 'Kanta Lodge',
      },
      {
        day: 13,
        title: 'Drive to Langano',
        detail: `Morning, start driving to Lake Langano, where we will spend the night. In the
          afternoon/evening relax at the lakeside by riding a kayak boat or swimming.`,
        overnight: 'Sabana Lodge',
      },
      {
        day: 14,
        title: 'Back to Addis Ababa',
        detail: `After breakfast, A nice ride will take you to Addis Ababa. Along the way, you will pass
          Lake Koka, an artificial lake and Lake Ziway. You make a stop at this last-mentioned
          lake where you can see various bird species, such as pelicans, black ibises, hammerheads
          and marabou. Along the way, you come across shepherds who roam here with their
          cattle. They make a biblical impression. You will Arrive in Addis Ababa in the afternoon.
          Finally, The tour ends with a drop off at Bole International Airport for your flight.
          `,
        overnight: '',
      },
    ],
    included: [
      '13 Nights Hotel Accommodation on a Shared Room Extra USD 712.00 per person for Single Room Supplement);',
      'Domestic flights if your international flight is with Ethiopian Airlines; extra USD 306.00 per pax if your flight is with other airlines;',
      'All meals (OPTIONAL);',
      'Land Transport;',
      'English Speaking guide;',
      'Local Guides and scout fees;',
      'Boat;',
      'Government tax associated with the trip.',
    ],
    notincluded: [
      'Day Use on the last day in Addis Ababa;',
      'FOC Leader;',
      'International Airfare;',
      'Alcoholic Expenses;',
      'Any Photography and Video fees;',
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

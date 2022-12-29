export const TravelTipsDetail: React.FC = () => {
  const Detail = [
    {
      name: 'Daily Schedule',
      description:
        'Most days involve around 8/9hrs on-the-go including sights/visits and activities, comfort and lunch breaks, photo stops and drive-time, however on one or two days this will extend out to 10+hrs. Days will generally start between 7:30 - 8:30 and reach or return to our hotel between 16:00 - 17:00. However, the passing scene is always riveting, with varied scenery and sites, and lots of animals and people going about their daily lives.',
    },
    {
      name: 'Transportation',
      description:
        'Private mini/Coaster bus for the northern route and 4WD Land Cruisers for the offroads. Roads can be tar sealed or shingle, sometimes bumpy and slow due to road works and/or rain damage, although most of the time a reasonable pace can be maintained. Both 4WDs and the bus are air-conditioned.',
    },
    {
      name: 'Luggage',
      description:
        'A medium sized wheelie bag (no more than 65/70ltrs capacity, measuring 130/132 linear cm) works well, but for ease of handling please keep baggage as light as possible (12 -14kg).',
    },
    {
      name: 'Accommodations',
      description:
        'Hotels/Lodges - Single/Twin/double rooms. Hotels / Lodges anticipated are essentially 3-5 stars in Addis Ababa. In some remote places hotels are basic and simplistic.',
    },
    {
      name: 'Clothing',
      description:
        'Take light, summer clothes for the day time and something warm for the evenings, like a sweater or jacket. The temperature drops quite rapidly towards sunset. Simian or Bale Mountains trekkers should bring warm clothes and water proofs for unexpected seasonal rains.',
    },
    {
      name: 'Weather',
      description:
        "Daytime temperatures are mainly warm and comfortable but early morning and evenings in the highlands can be cold. We recommend layers and a thick jumper or fleece, plus a lightweight wind/waterproof jacket. A hat is essential. Take swimwear if you plan to use the hotel's pools. Comfortable, good walking shoes with ankle support are strongly recommended as well as comfortable sandals.",
    },
    {
      name: 'Meals',
      description:
        'The costs for meals may vary depending upon location, type of restaurant and number of courses eaten and so the prices given are an average guide. Local restaurants located off the beaten track may be less expensive, whereas an upmarket restaurant located in the center of a major city may charge more.',
    },
    {
      name: 'Currency',
      description:
        'Local currency: Ethiopian Birr ETB Credit Card Acceptance: Accepted in most of the hotels in major towns. Limited in the banks ATM Availability: Available in most of the major towns. In the remote areas it is very Limited. Recommended Currency For Exchange: It is advisable to take your spending money in Sterling, Euros or US Dollars cash as high denomination notes usually get better exchange rates.<br/> <strong>N.B</strong>: Travelers are not recommended to exchange foreign currencies without banks.',
    },
  ];
  return (
    <section className="mx-0 lg:mx-20 py-10">
     <div className="mx-0 lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
     	<div key={index} className="flex flex-col lg:flex-row lg:even:flex-row-reverse even:bg-[#165248]">
        {Detail.map((data, index) => (
          
            <div className="flex flex-col items-center w-full pt-5 lg:px-10">
              <h1 className="text-center text-3xl lg:text-4xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-16">
                {data.name}
              </h1>
              <div
              	dangerouslySetInnerHTML={{ __html: data.description }} 
              	className="mx-5 text-center text-lg lg:text-xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-24"
              />
            </div>
          
        ))}
        </div>
      </div>
    </section>
  );
};

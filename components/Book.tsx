export const Book: React.FC = () => {
  return (
    <section className="w-full h-full my-10 bg-[#165248] p-10">
      <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
        BOOK THIS TOUR
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="mb-6">
          <label
            htmlFor="arrivalDate"
            className="block mb-2 text-2xl font-bold text-white"
          >
            Arrival Date
          </label>
          <input
            type="date"
            id="arrivalDate"
            className="bg-gray-50 border border-gray-300 text-black text-xl rounded-lg focus:ring-[#165248] focus:border-[#165248] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="arrivalDate"
            className="block mb-2 text-2xl font-bold text-white"
          >
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            className="bg-gray-50 border border-gray-300 text-black text-xl rounded-lg focus:ring-[#165248] focus:border-[#165248] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
    </section>
  );
};

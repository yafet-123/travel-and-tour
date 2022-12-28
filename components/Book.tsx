export const Book: React.FC = () => {
  return (
    <section className="w-full h-full my-20 bg-[#165248] p-10">
      <h1 className="text-center text-3xl lg:text-5xl font-sans leading-10 font-bold text-white hover:text-[#94BB3C] mb-10">
        BOOK THIS TOUR
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="">
          <label
            htmlFor="arrivalDate"
            className="block mb-2 text-2xl font-bold text-white"
          >
            Arrival Date
          </label>
          <input
            type="date"
            id="arrivalDate"
            className="bg-gray-50 border border-gray-300 text-black text-xl rounded-lg focus:ring-[#165248] focus:border-[#165248] block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="">
          <label
            htmlFor="arrivalDate"
            className="block mb-2 text-2xl font-bold text-white"
          >
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            className="bg-gray-50 border border-gray-300 text-black text-xl rounded-lg focus:ring-[#165248] focus:border-[#165248] block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="adult"
            className="block mb-2 text-2xl font-bold text-white"
          >
            Adult
          </label>
          <select
            id="adult"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>1</option>
            <option value="US">2</option>
            <option value="CA">3</option>
            <option value="FR">3</option>
            <option value="DE">3</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="adult"
            className="block mb-2 text-2xl font-bold text-white"
          >
            Child
          </label>
          <select
            id="adult"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>0</option>
            <option value="US">2</option>
            <option value="CA">3</option>
            <option value="FR">3</option>
            <option value="DE">3</option>
          </select>
        </div>

        <div>
            <label htmlFor="fullName" className="block mb-2 text-2xl font-bold text-white">Full Name</label>
            <input type="text" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Full Name Here" required />
        </div>

        <div>
            <label htmlFor="country" className="block mb-2 text-2xl font-bold text-white">Country</label>
            <input type="text" id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Country Here" required />
        </div>

        <div>
            <label htmlFor="email" className="block mb-2 text-2xl font-bold text-white">Your Email Address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email Address Here" required />
        </div>

        <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-2xl font-bold text-white">Your Phone Number</label>
            <input type="text" id="phoneNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Phone Number Here" required />
        </div>
      </div>
      <div>
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
    </section>
  );
};

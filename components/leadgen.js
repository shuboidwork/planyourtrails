export default function LeadGen() {
  return (
    <div className="h-30 w-screen flex justify-center">
      <div className="bg-white h-15 rounded-2xl grid grid-cols-3">
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm  sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    Destination
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autocomplete="username"
                    className="ml-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Indonesia"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm  sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                    Date
                  </span>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    autocomplete="date"
                    className="ml-2 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="10/12/2025"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-blue-500 rounded-lg">
          <button className="text-white bold text-lg text-center m-2">
            Customise Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}

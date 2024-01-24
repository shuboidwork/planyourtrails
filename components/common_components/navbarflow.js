export default function NavBarFlow() {
  return (
    <nav className="bg-black bg-opacity-20 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/elements/playbuttoncircle.png"
            className="h-8"
            alt="Store Logo"
          ></img>
          <span className="self-center lg:text-2xl md:text-2xl sm:text-sm whitespace-nowrap text-white font-roboto">
            Travel Store
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-white px-4 py-2 text-center font-roboto"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

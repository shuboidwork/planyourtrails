export default function NavBarFlow() {
  return (
    <nav class="bg-black bg-opacity-20 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/elements/playbuttoncircle.png"
            class="h-8"
            alt="Store Logo"
          ></img>
          <span class="self-center lg:text-2xl md:text-2xl sm:text-sm whitespace-nowrap text-white font-roboto">
            Travel Store
          </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-roboto"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

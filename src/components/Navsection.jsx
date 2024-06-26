import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsProductsOpen(false); // Close products dropdown when services is toggled
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsServicesOpen(false); // Close services dropdown when products is toggled
  };

  const closeDropdowns = () => {
    setIsServicesOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <div className=" mx-auto bg-[#D3DCFF]">
      <nav className="border-gray-200 w-full">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
          <svg width="150" height="119" viewBox="0 0 532 119" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.7338 118.569C42.2302 117.334 50.2027 116.348 59.3179 116.356C68.3329 116.364 76.2271 117.342 82.6747 118.568L66.1217 78.6059C63.9609 79.3799 61.6324 79.8015 59.2055 79.8015C56.7779 79.8015 54.4488 79.3797 52.2876 78.6053L35.7338 118.569ZM40.6597 68.0575C42.6876 72.3417 46.1563 75.8107 50.4402 77.8391L33.9358 117.684C30.8967 112.336 26.2586 105.474 19.3642 98.6359C12.7042 92.0283 6.05156 87.538 0.813569 84.5625L40.6597 68.0575ZM50.4408 40.7494C46.1571 42.7775 42.6885 46.2461 40.6604 50.5298L0.782559 34.0117C6.37783 30.6826 13.4096 25.7237 20.3976 18.5293C26.5081 12.2406 30.867 6.00983 33.9232 0.872666L50.4408 40.7494ZM52.2883 39.9832L35.7265 0C42.326 1.16704 50.2954 2.06836 59.3366 2.06052C68.2643 2.0527 76.1419 1.15719 82.6823 0.000527332L66.121 39.9826C63.9604 39.2088 61.6322 38.7873 59.2055 38.7873C56.7782 38.7873 54.4493 39.2091 52.2883 39.9832ZM77.7503 50.5292C75.7219 46.2452 72.2527 42.7765 67.9685 40.7486L84.4133 1.04777C86.6724 5.98799 90.5295 12.8346 96.993 19.5689C104.396 27.2806 112.167 31.6669 117.452 34.0842L77.7503 50.5292ZM78.517 66.2107C79.291 64.0499 79.7126 61.7214 79.7126 59.2944C79.7126 56.8668 79.2908 54.5378 78.5165 52.3766L118.427 35.845C117.019 41.9245 115.793 49.702 115.747 58.759C115.698 68.2967 116.969 76.4525 118.426 82.7419L78.517 66.2107ZM67.9692 77.8399C72.2536 75.8117 75.7228 72.3426 77.751 68.0582L117.708 84.609C112.433 88.1519 106.368 92.8244 100.199 98.8953C93.4202 105.563 88.3078 112.158 84.5203 117.797L67.9692 77.8399ZM39.8943 52.3773C39.1201 54.5383 38.6984 56.8671 38.6984 59.2944C38.6984 61.7211 39.1199 64.0494 39.8938 66.21L0.000250044 82.7346C1.49834 76.5133 2.83189 68.3503 2.78127 58.7611C2.73271 49.6541 1.44756 41.8692 0 35.8523L39.8943 52.3773Z" fill="black"/>
<path d="M181.542 95C177.139 95 173.159 93.9343 169.602 91.8028C166.045 89.6122 163.222 86.6223 161.133 82.833C159.044 79.0438 158 74.7513 158 69.9556C158 65.1599 159.016 60.897 161.049 57.167C163.138 53.4369 165.96 50.4766 169.517 48.286C173.074 46.0953 177.082 45 181.542 45C185.946 45 189.926 46.0953 193.483 48.286C197.04 50.4174 199.834 53.3481 201.867 57.0782C203.956 60.8082 205 65.1006 205 69.9556C205 74.8105 203.927 79.1326 201.782 82.9218C199.637 86.6519 196.786 89.6122 193.229 91.8028C189.729 93.9343 185.833 95 181.542 95ZM181.542 87.0071C184.365 87.0071 186.906 86.267 189.164 84.7869C191.479 83.3067 193.285 81.2641 194.584 78.659C195.939 76.0539 196.616 73.1527 196.616 69.9556C196.616 66.6992 195.939 63.8277 194.584 61.341C193.285 58.7951 191.479 56.7821 189.164 55.302C186.906 53.7626 184.365 52.9929 181.542 52.9929C178.663 52.9929 176.066 53.7626 173.751 55.302C171.493 56.7821 169.686 58.7951 168.332 61.341C166.977 63.8277 166.299 66.6992 166.299 69.9556C166.299 73.1527 166.977 76.0539 168.332 78.659C169.686 81.2641 171.493 83.3067 173.751 84.7869C176.066 86.267 178.663 87.0071 181.542 87.0071Z" fill="black"/>
<path d="M214.444 95V44.9484H222.894V55.163L221.687 53.5844C222.925 50.4272 224.906 48.0128 227.63 46.3413C230.354 44.6699 233.418 43.8341 236.823 43.8341C240.723 43.8341 244.221 44.9175 247.316 47.0842C250.474 49.2509 252.64 52.0987 253.817 55.6273L251.402 55.7202C252.702 51.8201 254.9 48.8795 257.995 46.8985C261.091 44.8556 264.526 43.8341 268.303 43.8341C271.77 43.8341 274.896 44.6389 277.682 46.2485C280.529 47.8581 282.789 50.0867 284.46 52.9344C286.132 55.7821 286.968 59.0012 286.968 62.5918V95H278.239V65.3776C278.239 62.5918 277.744 60.2394 276.753 58.3203C275.763 56.4012 274.401 54.9154 272.667 53.863C270.996 52.7487 269.015 52.1915 266.724 52.1915C264.496 52.1915 262.484 52.7487 260.688 53.863C258.955 54.9154 257.562 56.4321 256.51 58.4131C255.519 60.3322 255.024 62.6537 255.024 65.3776V95H246.295V65.3776C246.295 62.5918 245.8 60.2394 244.809 58.3203C243.819 56.4012 242.457 54.9154 240.723 53.863C239.052 52.7487 237.071 52.1915 234.78 52.1915C232.552 52.1915 230.54 52.7487 228.744 53.863C227.011 54.9154 225.618 56.4321 224.566 58.4131C223.575 60.3322 223.08 62.6537 223.08 65.3776V95H214.444Z" fill="black"/>
<path d="M325.141 95.1143C321.117 95.1143 317.434 94.2166 314.091 92.4214C310.81 90.6261 308.272 89.0879 306.476 85.8068L307.683 84.3211V95H299.233V24.705H307.869V55.7202L306.569 53.5844C308.426 50.6129 310.964 48.2604 314.184 46.5271C317.403 44.7318 321.086 43.8341 325.234 43.8341C329.939 43.8341 334.148 44.9794 337.863 47.2699C341.639 49.5605 344.611 52.6868 346.777 56.6488C348.944 60.5489 350.028 65.0062 350.028 70.0206C350.028 74.9113 348.944 78.3376 346.777 82.2996C344.611 86.2616 341.639 89.3879 337.863 91.6785C334.148 93.969 329.908 95.1143 325.141 95.1143ZM324.491 87.7569C327.648 87.7569 330.465 86.9831 332.941 85.4354C335.418 83.8877 337.337 81.7829 338.699 79.1209C340.122 76.397 340.834 73.3636 340.834 70.0206C340.834 66.5539 340.122 63.5204 338.699 60.9204C337.337 58.2584 335.418 56.1535 332.941 54.6059C330.465 52.9963 327.648 52.1915 324.491 52.1915C321.334 52.1915 318.486 52.9654 315.948 54.513C313.472 56.0607 311.491 58.1965 310.005 60.9204C308.581 63.5823 307.869 66.6158 307.869 70.0206C307.869 73.3636 308.581 76.397 310.005 79.1209C311.491 81.7829 313.472 83.8877 315.948 85.4354C318.486 86.9831 321.334 87.7569 324.491 87.7569Z" fill="black"/>
<path d="M361.351 95V44.9484H369.802V54.1416L368.873 52.8415C370.049 49.9938 371.845 48.4462 374.259 47.0842C376.673 45.6604 379.614 44.9484 383.081 44.9484H386.145V52.563H381.781C378.252 52.563 375.404 53.6773 373.237 55.9059C371.071 58.0727 369.987 61.168 369.987 65.1919V95H361.351Z" fill="black"/>
<path d="M411.552 95.1143C407.962 95.1143 404.712 94.2786 401.802 92.6071C398.954 90.9356 396.726 88.6141 395.116 85.6426C393.568 82.6092 392.795 79.1424 392.795 75.2423V44.9484H401.431V75.3137C401.431 77.7899 401.926 79.9567 402.916 81.8139C403.969 83.6711 405.393 85.1259 407.188 86.1783C409.045 87.2307 411.15 87.7569 413.502 87.7569C415.855 87.7569 417.929 87.2307 419.724 86.1783C421.581 85.1259 423.005 83.6091 423.996 81.6281C425.048 79.6471 425.574 77.2947 425.574 74.5708V44.9484H434.303V95H425.853V85.2497L427.246 86.0854C426.07 89.2427 424.058 90.7189 421.21 92.5142C418.424 94.2476 415.205 95.1143 411.552 95.1143Z" fill="black"/>
<path d="M447.682 95V24.705H456.318V95H447.682Z" fill="black"/>
<path d="M469.718 95V24.705H478.354V95H469.718Z" fill="black"/>
<path d="M506.426 95.1143C503.145 95.1143 500.236 94.5262 497.697 93.35C495.221 92.1118 493.271 90.4403 491.847 88.3355C490.423 86.1688 489.711 84.6925 489.711 81.9067C489.711 79.2447 490.269 76.8613 491.383 74.7565C492.559 72.5898 494.354 70.7635 496.769 69.2778C499.245 67.792 502.34 66.7396 506.055 66.1205L524.627 63.0561V70.2992L508.005 73.085C504.786 73.6422 502.433 74.6636 500.948 76.1494C499.524 77.6352 498.812 79.4614 498.812 81.6281C498.812 83.6711 499.617 85.3735 501.226 86.7354C502.898 88.0974 504.971 88.7784 507.448 88.7784C510.605 88.7784 513.329 88.1283 515.619 86.8283C517.972 85.4663 519.798 83.6401 521.098 81.3496C522.46 79.059 523.141 76.5208 523.141 73.735V61.0132C523.141 58.2893 522.12 57.0916 520.077 55.4202C518.096 53.6868 515.465 52.8201 512.184 52.8201C509.336 52.8201 506.798 53.563 504.569 55.0487C502.402 56.4726 500.793 58.3917 499.74 60.806L492.219 56.9059C493.147 54.6154 494.633 52.5725 496.676 50.7772C498.719 48.92 501.102 47.4652 503.826 46.4127C506.55 45.3603 509.398 44.8341 512.369 44.8341C516.208 44.8341 519.581 45.577 522.491 47.0628C525.401 48.4866 527.66 50.4986 529.27 53.0987C530.941 55.6368 531.777 57.6083 531.777 61.0132V95H523.327V85.5283L524.905 86.0854C523.853 88.0664 522.429 88.7998 520.634 90.2856C518.839 91.7713 516.734 92.9476 514.319 93.8143C511.905 94.6809 509.274 95.1143 506.426 95.1143Z" fill="black"/>
</svg>

          </a>
          {/* Hamburger toggle button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* Close icon */}
            <svg
              className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Mobile menu */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:block w-full md:w-auto`}
            id="mobile-menu"
          >
            <ul className="flex-col gap-3 md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="bg-blue-700 freeman-regular md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded focus:outline-none"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li
                onMouseEnter={toggleServices}
                onMouseLeave={closeDropdowns}
                className="relative"
              >
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-50 freeman-regular border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Services
                </a>
                <div
  className={`${
    isServicesOpen ? 'dropdown-menu show' : 'dropdown-menu'
  } absolute top-full left-0 bg-white text-white p-4`}
>

              <ul>
                <li>
                  <a href="#" className="hover:text-blue-500 text-black tex bg-white block px-4 py-2">
                    AI Visual Inspection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 text-black bg-white block px-4 py-2">
                    AI Infrastructure Inspection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 text-black bg-white block px-4 py-2">
                    AI People Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 text-black bg-white block px-4 py-2">
                    AI Data Analytic
                  </a>
                </li>
              </ul>
            </div>
          
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 freeman-regular hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 freeman-regular hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 freeman-regular hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Blog
                </a>
              </li>
              <li
                onMouseEnter={toggleProducts}
                onMouseLeave={closeDropdowns}
                className="relative "
              >
                <a
                  href="#"
                  className="text-gray-700 freeman-regular hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Products
                </a>
                <div
  className={`${
    isProductsOpen ? 'dropdown-menu show' : 'dropdown-menu'
  } absolute top-full left-0 bg-white text-white p-4`}
>
              <ul>
                <li>
                  <a href="#" className="hover:text-blue-700 text-black block ">
                    Asset Performance Management
                  </a>
                </li>
              </ul>
            </div>
          

              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import'boxicons/css/boxicons.min.css';

const Header = () => {
    //function to toggle the mobile menu
    const togglemobileMenu = () => {
        //get the mobile menu element
        const mobileMenu = document.getElementById('mobilemenu');

        //if it has hidden class, remove it, else add it
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }    
    }


     
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 ">

        <h1 
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        className="text-2xl md:text-4xl lg:text-4xl font-semibold tracking-wider m-0">

            ORBITECH
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-12">


            <a 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >COMPANY</a>



            <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
             href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >FEATURES</a>



            <a
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
            href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >RESOURCES</a>



            <a 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2500"
            href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >DOCS</a>

        </nav>

        {/* Sign-in Button */}
        <button className="hidden md:block bg-gray-200 text-black px-8 py-3 rounded-full border-none
        transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white cursor-pointer z-50">
            Sign in
        </button>

        {/* Mobile Menu Icon */}
        <button onClick={togglemobileMenu} className='md:hidden text-3xl  p-2 z-50 '>
            <i class='bx  bx-menu'  ></i> 

        </button>
        {/* Side bar for the mobile screen*/}
        <div id='mobilemenu' className='hidden fixed top-16 right-0 bottom-0 left-0 md:hidden z-40 bg-black 
            opacity-80 backdrop-blur-md '>
            <nav className='flex flex-col gap-6 items-center '> 
             <a href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >COMPANY</a>

            <a href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >FEATURES</a>

            <a href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >RESOURCES</a>

            <a href="#" className="text-base tracking-wider hover:text-gray-300 z-50" >DOCS</a>
            </nav>
        </div>
    </header>
  )
}

export default Header
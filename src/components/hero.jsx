import'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';


const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] ">

        {/* Left Side Content */}
        <div  data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0 ">


            {/* {Tag box with border gradient} */}

            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] 
            shadow-[0_0_15px_rgb (255,255,255,0.4)] rounded-full' >


                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-2'>
                <i className='bx bx-rocket'></i>
                <span >INTRODUCING</span>
                </div>

            </div>

                {/* Main Heading */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-wider my-8' >
                    EMAIL FOR
                    <br />
                    DEVELOPERS 
                </h1>

                {/* Description*/}
                <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem] text-justify'>
                    A modern, scalable technology solution designed to solve real-world problems through automation, seamless integration, 
                    and intelligent features. Built for performance, adaptability, and user experience across diverse use cases.


                </p>

                {/* Call to Action Button */}
                <div className='flex gap-6 mt-12'>
                    <a className='border border-[#2a2a2a] py-1 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider
                    transition-all duration-300 hover:bg-[#1a1a1a]' href="#" >
                       <span >Documentation</span> 
                        <i class='bx  bx-unlink'  ></i> 
                    </a>


                    <a className='border border-[#2a2a2a] py-1 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider
                    transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-200 text-black hover:text-white gap-1.5' href="#" >
                       <span>Get Started</span> 
                        <i class='bx  bx-unlink'  ></i> 
                    </a>

                </div>
               

        </div>



                { /* 3D Robot in Right Side Page */}
                     <Spline 
                      className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%]
                     sm:left-[-2%] h-full' scene="https://prod.spline.design/kap6Iwd251x2IsfB/scene.splinecode" />


    </main>
  )
}

export default Hero
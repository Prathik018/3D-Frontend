import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">

        {/* Dev name */}
        <h2 className="text-sm font-medium text-gray-400 tracking-wider">Made with 
            <span className="text-[#e99b63]">❤️</span> by Prathik Pai

        </h2>

  
             {/* Social Links */}
            <div className="flex  gap-6 text-3xl">
                <a href="https://github.com/Prathik018" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className='bx bxl-github'></i>
                </a>

                <a href="https://linkedin.com/in/prathikpai18" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className='bx bxl-linkedin-square'></i>
                </a>

                <a href="mailto:prathikvpai@gmail.com" className="hover:text-gray-400">
                <i className='bx bxl-gmail'></i>
                </a>

                <a href="https://x.com/Prathik__Pai" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <i className='bx bxl-twitter'></i>
                </a>
            </div>


      </div>
    </footer>
  );
};

export default Footer;

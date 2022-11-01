import React from 'react'


const Navbar = () => {

const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    
    <div>

      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-gradient-to-r from-pink-500 via-white-500 to-blue-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white items-stretch"
              href="#home">AfroTech Visuals</a>
            <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={ "lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-items-stretch">
              <li className="nav-item">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#home">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#footer"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About this page</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#footer"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contact me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

  


export default Navbar
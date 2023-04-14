import React from 'react'

import logo from '../image/logo.png'

const Navbar = () => {
    return (
        

        <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#"><img src={logo}/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav" >
              <a class="nav-link" aria-current="page" href="#" data-aos="flip-left">About</a>
              <a class="nav-link" href="#" data-aos="flip-left">Portfolio</a>
              <a class="nav-link" href="#" data-aos="flip-left">Blog</a>
              <a class="nav-link" href="#" data-aos="flip-left">Contact</a>
            </div>
          </div>
        </div>
      </nav>




    
    )
}

export default Navbar
import React from 'react'

import logo from '../image/logo.png'
import insta from '../image/insta.png'
import twitter from '../image/twitter.png'
import facebook from '../image/facebook.png'

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg" id="nav-box-shedow">
                <div class="container" id="tottenav">
                    <a class="navbar-brand" href="#"><img className='logo' src={logo}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="#">About</a>
                            <a class="nav-link" id="nav-pro" href="#">Portfolio</a>
                            <a class="nav-link" id="nav-blo" href="#">Blog</a>
                            <a class="nav-link" id="nav-con" href="#">Contact</a>
                        {/* </div> */}
                        
                        <a href="#"><img className="icon-fb" src={facebook}/></a>
                        <a href="#"><img id="icon-twitter" src={twitter}/></a>
                        <a href="#"><img id="icon-insta" src={insta}/></a>
                    
                    </div>
                    </div>
                </div>
            </nav>




        </div>
    )
}

export default Navbar
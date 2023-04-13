import React from 'react';
import Navbar from './Navbar';
import Work from './Work';
import Team from './Team';
import Plan from './Plan';
import Subscribe from './Subscribe';
import Contact from './Contact';


import heroimage from '../image/heroimage.png'
import icon1 from '../image/icon1.png'
import icon2 from '../image/icon2.png'
import icon3 from '../image/icon3.png'
import icon4 from '../image/icon4.png'
import laptop_girl_img from '../image/laptop_girl_img.png'
import bg_image from '../image/bg_image.jpg'

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className='container' id="hero">
                <div className='row'>

                    <div className='col-lg-6' data-aos="zoom-in">
                        <img className='hero-image' src={heroimage} />
                    </div>
                    <div className='col-lg-6'>
                        <h1>Changes the <br /> game forever</h1>
                        <p className='text-hero'>Quidam officiis similique sea ei, vel tollit indoctum <br />
                            efficiendi ei, at nihil tantas platonem eos. Mazim<br />
                            nemore singulis an ius, nullam ornatus nam ei.</p>
                        <button className='btn-expo'>Explore</button>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-lg-4'>
                        <h2 className='heading-h2' >With more than <br />1000+ features <br />included</h2>
                        <button className='btn-expo2'>Explore</button>

                    </div>
                    <div className='col-lg-4'>
                        <img className='img-icon1' src={icon1} />
                        <h3>Layouts</h3>
                        <p>Quidam officiis similique sea ei, vel tollit<br />
                            indoctum efficiendi tantas platonem. </p>

                        <img className='img-icon2' src={icon2} />
                        <h3>Cups of Coffee</h3>
                        <p>Quidam officiis similique sea ei, vel tollit<br />
                            indoctum efficiendi tantas platonem. </p>

                    </div>
                    <div className='col-lg-4'>
                        <img className='img-icon3' src={icon3} />
                        <h3>Awards</h3>
                        <p>Quidam officiis similique sea ei, vel tollit<br />
                            indoctum efficiendi tantas platonem. </p>

                        <img className='img-icon4' src={icon4} />
                        <h3>Projects</h3>
                        <p>Quidam officiis similique sea ei, vel tollit<br />
                            indoctum efficiendi tantas platonem. </p>

                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-4'>
                        <h4 className='heading-best-practicrs'>Best <br />practices</h4>
                        <p>Quidam officiis similique sea ei, vel tollit<br />
                            indoctum efficiendi ei, at nihil tantas platonem<br />
                            eos. Mazim nemore singulis an ius, nullam <br />
                            ornatus nam ei.</p>
                    </div>
                    <div className='col-lg-4' data-aos="zoom-in">
                        <img className='laptop-girl-img' src={laptop_girl_img} />
                    </div>
                    <div className='col-lg-4'>
                        <p className='text-lap-girl'>Et vim graeco principes. Cu dico<br /> nullam pri.</p>
                    </div>


                </div>
            </div>
            <Work/>
            <Team/>
            <Plan/>
            <Subscribe/>
            <Contact/>
        </div>

    )
}

export default Home
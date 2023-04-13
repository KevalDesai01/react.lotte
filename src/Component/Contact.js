import React from 'react'

import insta_1 from '../image/insta_1.png'
import insta_2 from '../image/insta_2.png'
import insta_3 from '../image/insta_3.png'
import insta_4 from '../image/insta_4.png'
import insta_5 from '../image/insta_5.png'
import insta_6 from '../image/insta_6.png'
import insta_7 from '../image/insta_7.png'
import insta_8 from '../image/insta_8.png'
import chakli from '../image/chakli.png'
import insta from '../image/insta.png'
import twitter from '../image/twitter.png'
import facebook from '../image/facebook.png'


const Contact = () => {
    return (
        <div>


            <div className='container' id='cont-contact'>
                <div className='row'  id="contact-row" >

                    <div className='col-lg-4'>
                        <h3 className='heading-about'>About</h3>
                        <p className='text-about'> Dicat eripuit accumsan ad est. Facer<br />
                            facilisi ius ei, ea has cetero argumentum, <br />
                            vel at fugit temporibus. Deseruisse <br />
                            definitionem his et, an has veri integre<br />
                            abhorreant, nam alii epicurei et. Ei ferri<br />
                            aperiri pri.</p>

                    </div>


                    <div className='col-lg-4'>
                        <h3 className='heading-insta'>Instagram</h3>
                        <div className='row' id='row1-insta'>
                            <div className='col-lg-3'>
                                <img className='insta-1' src={insta_1} />
                            </div>
                            <div className='col-lg-3'>
                                <img className='insta-2' src={insta_2} />
                            </div>
                            <div className='col-lg-3'>
                                <img className='insta-3' src={insta_3} />
                            </div>
                            <div className='col-lg-3'>
                                <img className='insta-4' src={insta_4} />
                            </div>
                        </div>
                        <div className='row' id='row2-insta'>
                            <div className='col-lg-3'>
                                <img className='insta-5' src={insta_5} />
                            </div>
                            <div className='col-lg-3'>
                                <img className='insta-6' src={insta_6} />
                            </div>
                            <div className='col-lg-3'>
                                <img className='insta-7' src={insta_7} />
                            </div>
                            <div className='col-lg-3'>
                                <img className='insta-8' src={insta_8} />
                            </div>
                        </div>
                    </div>


                    <div className='col-lg-4'>
                        <h3 className='heading-twit'>Latest Tweets</h3>
                        <img className='img-chakli' src={chakli} />
                        <p className='text-chakli'>Mei no ubique persecuti, at sit iusto <br />aliquam interpretaris.</p>
                        <img className='img-chakli' src={chakli} />
                        <p className='text-chakli'>Graece postea usu ea. Sea diceret <br />pertinax in. Melius feugiat definitiones ex qui.</p>
                    </div>
                </div>
                {/* <div className='end-section'> */}
                    <h4 className='text-copyright'>© Copyright 2019. Laaqiq All Right Reserved</h4>
                    <div className='end-section'>
                    <img className="icon-facebook" src={facebook} />
                    <img id="icon-twit" src={twitter} />
                    <img id="icon-instagram" src={insta} />
                    
                </div>
            </div>








        </div>
    )
}

export default Contact
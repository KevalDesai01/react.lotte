import React from 'react'

import team_img1 from '../image/team_img1.png'
import team_img2 from '../image/team_img2.png'
import team_img3 from '../image/team_img3.png'
import team_img4 from '../image/team_img4.png'
import team_img5 from '../image/team_img5.png'
import team_image from '../image/team_image.png'
import insta from '../image/insta.png'
import twitter from '../image/twitter.png'
import facebook from '../image/facebook.png'




const Team = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='heading-team'>Our Team</h2>
                <p className='text-team'> Quidam officiis similique sea ei, vel tollit indoctum <br />
                    efficiendi ei, at nihil tantas platonem eos. </p>

                <div className='row' id="row-team">

                    <div className='col-lg-2' id='col-2' data-aos="flip-up">
                        <img className='t-img1' src={team_img1} />
                        <img className='t-img2' src={team_img2} />
                        <img className='t-img3' src={team_img3} />
                        <img className='t-img4' src={team_img4} />
                        <img className='t-img5' src={team_img5} />
                    </div>

                    <div className='col-lg-5' id='col-5' data-aos="flip-down">
                        <img className='main-team-img' src={team_image} />
                    </div>

                    <div className='col-lg-5' id='col-5'>
                        <pre>F O U N D E R</pre>
                        <h3 className='text-sebastian'>Sebastian <br />Bennett</h3>
                        <p className='text-founder'>Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro,<br />
                            ne his dolorum molestie reprehendunt, quo luptatum<br />
                            evertitur ex. Altera integre suavitate per an, alienum <br />
                            phaedrum te sea. Ex sea causae dolores, nam et doming<br />
                            dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert<br /> audire.</p>

                        <img data-aos="zoom-in" className="icon-fb-team" src={facebook} />
                        <img data-aos="zoom-in" id="icon-twitter-team" src={twitter} />
                        <img data-aos="zoom-in" id="icon-insta-team" src={insta} />
                    </div>
                </div>










            </div>













        </div>
    )
}

export default Team
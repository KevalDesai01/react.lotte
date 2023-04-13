import React from "react";

import image_1 from "../image/image_1.png"
import image_2 from "../image/image_2.png"
import image_3 from "../image/image_3.png"
import image_4 from "../image/image_4.png"
import image_5 from "../image/image_5.png"
const Work = () => {
    return (
        <div>
            <div className="container">
                <h2 className="heading-work">Our Work</h2>
                <p className="text-work">Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,<br />
                    at nihil tantas platonem eos. </p>
                <div className="row" id='row-work'>

                    <div className="col-lg-2">
                        <h4>All</h4>
                    </div>
                    <div className="col-lg-2">
                        <h4>Life</h4>
                    </div>
                    <div className="col-lg-2">
                        <h4>Moments</h4>
                    </div>
                    <div className="col-lg-2">
                        <h4>Nature</h4>
                    </div>
                    <div className="col-lg-2">
                        <h4>Stories</h4>
                    </div>
                    <div className="col-lg-2">
                        <h4>Travel</h4>
                    </div>

                </div>

                <div className="row" id="row-images">
                    <div className="col-lg-8"  data-aos="zoom-in" >
                        <img className="image-1" src={image_1} />
                    </div>
                    <div className="col-lg-4">
                        <img className="image-2" src={image_2} />
                    </div>

                    <div className="col-lg-3" data-aos="zoom-in">
                        <img className="image-3" src={image_3} />
                    </div>
                    <div className="col-lg-4" data-aos="zoom-out">
                        <img className="image-4" src={image_4} />
                    </div>
                    <div className="col-lg-5" data-aos="zoom-in">
                        <img className="image-5" src={image_5} />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <div className="row" id="work-with-row">
                        <div className="col-lg-9">
                            <h5 className="text-work-with">Work with us</h5>
                            <p className="text-work">Quidam officiis similique sea ei, vel tollit indoctum efficiendi ei,<br />
                                at nihil tantas platonem eos. </p>
                        </div>
                        <div className="col-lg-3">
                            <button className="btn-contact"> Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

    
        </div>
    )
}

export default Work
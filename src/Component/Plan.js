import React, { createContext } from 'react'

import right from '../image/right.png'
import cross from '../image/cross.png'
import plan_img1 from '../image/plan_img1.png'
import plan_img2 from '../image/plan_img2.png'
import plan_img3 from '../image/plan_img3.png'
import plan_img4 from '../image/plan_img4.png'
import { Collapse } from 'react-bootstrap'


const Plan = () => {
    return (
        <div>
            <div className='container'>
                <h2 className='heading-plan'>Our Plans</h2>
                <p className='text-plan'>Quidam officiis similique sea ei, vel tollit indoctum efficiendi<br />
                    ei, at nihil tantas platonem eos. </p>
                
                <div className='table-div'>
                    <table>


                        <tr>
                            <th>Plan</th>
                            <th>Simple</th>
                            <th>Professional</th>
                            <th>Organisation</th>
                        </tr>

                        <tr>
                            <td>Hinc lorem</td>
                            <td> <img src={right} /> </td>
                            <td> <img src={right} /> </td>
                            <td> <img src={right} /> </td>
                        </tr>

                        <tr>
                            <td>Lorem deterruisset</td>
                            <td> <img src={right} /> </td>
                            <td> <img src={right} /> </td>
                            <td> <img src={right} /> </td>
                        </tr>
                        <tr>
                            <td>Autem molestiae</td>
                            <td> <img src={right} /> </td>
                            <td> <img src={right} /> </td>
                            <td> <img src={right} /> </td>
                        </tr>
                        <tr>
                            <td>Mei mazim</td>
                            <td> <img src={cross} /> </td>
                            <td> <img src={right} /> </td>
                            <td> <img src={right} /> </td>
                        </tr>
                        <tr>
                            <td> Feugait electram</td>
                            <td> <img src={cross} /> </td>
                            <td> <img src={cross} /> </td>
                            <td> <img src={right} /> </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>$19</td>
                            <td>$24</td>
                            <td>$99</td>
                        </tr>


                    </table>
                </div>
                <h3 className='heading-news'>Last News</h3>
                <p className='text-news'>Quidam officiis similique sea ei, vel tollit indoctum<br />
                    efficiendi ei, at nihil tantas platonem eos. </p>

                <div className='row' id="news-row">
                    <div className='col-lg-5' id='col-plan-1' data-aos="zoom-in">
                        <h4 className='heading-lg-5-plan'>Future of customer support</h4>
                        <p className='text-lg-5-plan'>Te aliquam noluisse his. Et vel epicuri detracto indoctum, et<br />
                            fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio<br />
                            erroribus eam, ei mea modus volumus abhorreant.</p>
                        <img className='plan-img' src={plan_img1} /><span>Hangakore Hariwana</span>

                    </div>
                    <div className='col-lg-5' id='col-plan-2' data-aos="zoom-in">
                        <h4 className='heading-lg-5-plan'>Digital trends in next 2020</h4>
                        <p className='text-lg-5-plan'>Te aliquam noluisse his. Et vel epicuri detracto indoctum, et<br />
                            fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio<br />
                            erroribus eam, ei mea modus volumus abhorreant.</p>
                        <img className='plan-img' src={plan_img2} /><span>Hangakore Hariwana</span>

                    </div>

                    <div className='col-lg-5' id='col-plan-3' data-aos="zoom-in">
                        <h4 className='heading-lg-5-plan'>Digital trends in next 2020</h4>
                        <p className='text-lg-5-plan'>Te aliquam noluisse his. Et vel epicuri detracto indoctum, et<br />
                            fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio<br />
                            erroribus eam, ei mea modus volumus abhorreant.</p>
                        <img className='plan-img' src={plan_img3} /><span>Hangakore Hariwana</span>

                    </div>
                    <div className='col-lg-5' id='col-plan-4' data-aos="zoom-in">
                        <h4 className='heading-lg-5-plan'>Digital trends in next 2020</h4>
                        <p className='text-lg-5-plan'>Te aliquam noluisse his. Et vel epicuri detracto indoctum, et<br />
                            fierent pericula vim, veniam epicuri an eum. Ad mutat quaestio<br />
                            erroribus eam, ei mea modus volumus abhorreant.</p>
                        <img className='plan-img' src={plan_img4} /><span>Hangakore Hariwana</span>

                    </div>
                </div>









            </div>











        </div >
    )
}

export default Plan
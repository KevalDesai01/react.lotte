import React from 'react'

import boyimg from '../image/boyimg.png'

const Subscribe = () => {
  return (
    <div>
        <div className='container'>

            <div className='row' id='sub-row'>
                <div className='col-lg-6'>
                    <h2 className='heading-sub'>Subscribe and <br/>get coupon</h2>
                    <input className='input'  placeholder='Your Email'></input><button id='btn-submit' className='btn-btn'>Submit</button>
                    <p className='text-sub'>Altera integre suavitate alienum phaedrum te sea.</p>

                </div>
                <div className='col-lg-6' data-aos="zoom-out">
                    <img className='boyimg' src={boyimg}/>
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Subscribe
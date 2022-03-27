import React from 'react';
import './Review.css';
import reviewImage1 from '../../../../asset-img/review 1.png';
import reviewImage2 from '../../../../asset-img/review 2.png';
// import bsImg from '../../../../asset-img/businessteam.png'


function Review() {
    return (
        <div className='r-body'>
            <div className='r-upper'>
                <h1>Reviews</h1>
            </div>

            <div className='r-lower'>

                    <div className='r-lower-text'>
                        <h1>10k+ <br/> Students</h1>
                    </div>
                    
                    <div className='bs-img'></div>

                    <div className="review_cards1 card">
                        <img src={reviewImage1} alt="" />

                        <div className="card_text">

                            This is best course where i got to do amazing live projects. I have built an amazing self driven toy car which has motivated to do more projects.

                        </div>
                        <div className="card_bottom">
                            <div className="card_name">
                                Juilia Roy
                            </div>
                            <div className="card_rating">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <span>4.5</span>
                            </div>
                        </div>
                    </div>

                    <div className="review_cards2 card">
                        <img src={reviewImage2} alt="" />

                        <div className="card_text">

                            This is best ever!!!<br/>
                            I built a Alexa through which I gained a lot information and knowledge which will help me in my future.<br/>
                            Go for it!!


                        </div>
                        <div className="card_bottom">
                            <div className="card_name">
                                Drew Bell
                            </div>
                            <div className="card_rating">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <span>4.4</span>
                            </div>
                        </div>
                    </div>



            </div>

        </div>
    
    )
}

export default Review;

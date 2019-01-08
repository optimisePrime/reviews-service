const React = require('react');
const Review = require('./review')


const ReviewList = function(props) {
        let reviewArray = props.reviews;
        if (reviewArray.length > 8 && props.limited === true) {
            reviewArray = reviewArray.slice(0,8)
        }
        const checkButton = () => {
            if (props.limited === true && props.reviews.length > 8) {
                return (
                    <div className="seeAllReviewsWrapper" onClick={props.extend}>
                        <div className="seeAllReviews">
                            See all {props.reviews.length} reviews
                                    </div>
                    </div>
                )
            } else {
                return (<div></div>)
            }
        }
        let reviewButton = checkButton();
        return(
            <div className="reviewEmptySpace" style={{paddingLeft:"62px"}}>
                    <div className="reviewHeaderText" style={{marginBottom:"10px",}}>{"Showing 1-"+ reviewArray.length +" of 10 reviews"}</div>
                    <div className="reviewSorterBox">
                    <img src="https://s3.us-east-2.amazonaws.com/publicreviewsmodule/Screen+Shot+2018-12-30+at+4.12.29+PM.png" className="reviewSortArrow"></img>
                    <select className="reviewSorterDropdown" onChange={props.handleSort}>
                      <option value="one">Top rated</option>
                      <option value="two">Date added</option>
                    </select>
                    </div>
                    {
                      reviewArray.map((item) => {
                        return (
                            <Review helpful={props.helpful} review={item} key={item.id} />
                        )
                      })
                    }
                {
                    reviewButton
                }
            </div>
        )
}



/*
    background-color: transparent;
    border-color: #e77600;
    box-shadow: 0 0 3px 2px rgba(228,121,17,.5);
    outline: 0;
*/

module.exports = ReviewList;
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    getReviewIndex: 0,
  }

  rightClickArrow = () => {
    const {getReviewIndex} = this.state
    const {reviewsList} = this.props
    if (getReviewIndex < reviewsList.length - 1) {
      this.setState(preState => ({getReviewIndex: preState.getReviewIndex + 1}))
    }
  }

  getTheProfile = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="">
        <img src={imgUrl} alt={username} />
        <h1>{username}</h1>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  leftarrowClick = () => {
    const {getReviewIndex} = this.state
    if (getReviewIndex > 0) {
      this.setState(preState => ({getReviewIndex: preState.getReviewIndex - 1}))
    }
  }

  render() {
    const {getReviewIndex} = this.state
    const {reviewsList} = this.props
    const currentProfile = reviewsList[getReviewIndex]
    return (
      <div className="bg_container">
        <div className="min_container">
          <h1>Reviews</h1>
          <div className="arrow_container">
            <div>
              <button
                type="button"
                className="arrow"
                onClick={this.leftarrowClick}
                testid="leftArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                />
              </button>
            </div>
            {this.getTheProfile(currentProfile)}
            <div>
              <button
                type="button"
                className="arrow"
                onClick={this.rightClickArrow}
                testid="rightArrow"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                  alt="right arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

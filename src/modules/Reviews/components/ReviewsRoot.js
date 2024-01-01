import { Col, Row } from "antd";

import './reviewsRoot.css';

import Carousel from "../../../components/Carousel/Carousel";

const comments = [
  { grade: 4, name: 'Виктор А.', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '02.06.23' },
  { grade: 5, name: 'Виктор А.', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '02.06.23' },
  { grade: 3, name: 'Виктор А.', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '02.06.23' },
  { grade: 2, name: 'Виктор А.', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: '02.06.23' },
]

const ReviewsRoot = () => {
  return (
    <Row className="reviews-root">
      <Col span={24} className="reviews-wrapper">
        <Col span={24} className="reviews-block">
          <Carousel title='Отзывы'>
            {comments.map((comment) => (
              <div className="carousel_item">
                <div className="review-item">
                  <div className="review-item__content review-content">
                    <div className="review-content__name">{comment.name}</div>
                    <div className="review-content__grade">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M10 0L12.2336 6.92574L19.5106 6.90983L13.614 11.1743L15.8779 18.0902L10 13.8L4.12215 18.0902L6.38599 11.1743L0.489435 6.90983L7.76642 6.92574L10 0Z" fill="#122E74" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path d="M10 0L12.2336 6.92574L19.5106 6.90983L13.614 11.1743L15.8779 18.0902L10 13.8L4.12215 18.0902L6.38599 11.1743L0.489435 6.90983L7.76642 6.92574L10 0Z" fill="#122E74" />
                      </svg>
                    </div>
                    <div className="review-content__comment">{comment.comment}</div>
                    <div className="review-content__date">{comment.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
      </Col>
    </Row>
  )
}

export default ReviewsRoot;

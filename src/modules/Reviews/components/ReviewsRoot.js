import { Col, Row } from "antd";
import dayjs from "dayjs";

import './reviewsRoot.css';

import Carousel from "../../../components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { getLastFiveReviewsRequest } from "../../../lib/api/reviewsApi";

const ReviewsRoot = () => {
  const [data, setData] = useState([]);

  const getReviews = async () => {
    const data = await getLastFiveReviewsRequest();
    setData(data);
  }
  useEffect(() => {
    getReviews()
  }, [])
  return (
    <Row className="reviews-root">
      <Col span={24} className="reviews-wrapper">
        <Col span={24} className="reviews-block">
          <Carousel title='Отзывы' maxLength={data.length}>
            {data.map((comment) => (
              <div className="carousel_item">
                <div className="review-item">
                  <div className="review-item__content review-content">
                    <div className="review-content__name">{comment.name}</div>
                    <div className="review-content__grade">
                      {Array(comment.grade).fill('').map((el) => (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                          <path d="M10 0L12.2336 6.92574L19.5106 6.90983L13.614 11.1743L15.8779 18.0902L10 13.8L4.12215 18.0902L6.38599 11.1743L0.489435 6.90983L7.76642 6.92574L10 0Z" fill="#122E74" />
                        </svg>
                      ))}
                    </div>
                    <div className="review-content__comment">{comment.comment}</div>
                    <div className="review-content__date">{dayjs(comment.date).format('DD.MM.YY')}</div>
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

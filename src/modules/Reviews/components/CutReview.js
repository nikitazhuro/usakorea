import { useEffect, useState } from "react"

const CutReview = ({
  comment,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [needToShowMore, setNeedToShowMore] = useState(false);

  const handleResize = () => {
    const length = comment.length;
    const width = window.innerWidth;

    if (width > 1920) {
      setNeedToShowMore(length > 465);
    } else if (width <= 1920 && width > 1600) {
      setNeedToShowMore(length > 360);
    } else if (width <= 1600 && width > 1400) {
      setNeedToShowMore(length > 310);
    } else if (width <= 1400 && width > 1100) {
      setNeedToShowMore(length > 222);
    } else if (width <= 1100 && width > 992) {
      setNeedToShowMore(length > 198);
    } else if (width <= 992 && width > 900) {
      setNeedToShowMore(length > 450);
    } else if (width <= 900 && width > 800) {
      setNeedToShowMore(length > 370);
    } else if (width <= 800 && width > 700) {
      setNeedToShowMore(length > 310);
    } else if (width <= 700 && width > 600) {
      setNeedToShowMore(length > 239);
    } else if (width <= 600 && width > 500) {
      setNeedToShowMore(length > 350);
    } else if (width <= 500 && width > 400) {
      setNeedToShowMore(length > 240);
    } else if (width <= 400 && width > 300) {
      setNeedToShowMore(length > 160);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="review-content__comment">
      <span className={`comment-text ${showMore ? 'comment-text--all' : ''}`}>{comment}</span>
      {needToShowMore ? (
        <div onClick={() => setShowMore((prev) => !prev)} className="show-more">{showMore ? 'Скрыть' : 'Далее'}</div>
      ) : null}
    </div>
  )
}

export default CutReview;

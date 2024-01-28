import { useEffect, useState } from "react"

const CutReview = ({
  comment,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [needToShowMore, setNeedToShowMore] = useState(false);

  useEffect(() => {
    const elem = document.createElement('div');
    let outP = 0;
    let innerP = 0;
    let lh = 0;
    let fz = 0;
    let is2comments = false;
    if (window.innerWidth > 992) {
      lh = 27;
      fz = 20;
      outP = 112;
      innerP = 80;
      is2comments = true;
    } else if (window.innerWidth <= 992 && window.innerWidth > 600) {
      lh = 26;
      fz = 18;
      outP = 112;
      innerP = 80;
    } else if (window.innerWidth <= 600) {
      outP = 28;
      innerP = 48;
      fz = 15;
      lh = 20;
    } else {
      outP = 112;
      innerP = 80;
      lh = 20;
      fz = 15;
    }

    if (is2comments) {
      const w = Math.floor((window.innerWidth - outP - 10) / 2);
      elem.style.width = `${w - innerP}px`;
    } else {
      elem.style.width = `${window.innerWidth - outP - innerP}px`;
    }
    elem.style.lineHeight = `${lh}px`;
    elem.style.fontSize = `${fz}px`;
    elem.innerText = comment;
    elem.style.visibility = 'hidden';
    document.body.appendChild(elem);

    const { height } = elem.getBoundingClientRect();
    const point = Math.floor(height / lh);
    console.log(point);

    if (point > 6) {
      setNeedToShowMore(true);
    } else {
      setNeedToShowMore(false);
    }
    document.body.removeChild(elem);
  }, [comment]);

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

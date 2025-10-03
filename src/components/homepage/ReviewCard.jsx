import Image from "next/image";

const ReviewCard = ({item}) => {
  return (
    <article className="review-card">
      <p className="font-normal text-2xl leading-150 text-white">{item.para}</p>
      <div className="review-card-image-wrapper">
        {item.image ? (
          <Image
            src={item.image}
            alt="reviewer-image"
            width={40}
            height={40}
            className="review-card-image"
          />
        ) : (
          <div className="review-card-circle"></div>
        )}
        <div>
          <span className="font-medium text-2xl leading-150 text-white">{item.name}</span>
          <p className="font-medium text-sm leading-150 text-white-80">{item.position}</p>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;

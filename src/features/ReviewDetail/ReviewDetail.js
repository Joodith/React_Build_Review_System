const ReviewDetail = ({review}) => {
    return (
        <div>
            <div><b>Title: </b>{review.reviewTitle}</div>
            <div><b>Description: </b>{review.reviewDesc}</div>
            <div><b>Rating: </b>{review.rating}</div>
        </div>
    )
}
export default ReviewDetail;
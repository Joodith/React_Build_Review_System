import {
    Grid
} from "@mui/material";
import ReviewItem from "./components/ReviewItem/ReviewItem";
import {useState} from "react";
import AddReview from "../AddReview/AddReview";

const ListReview = ({reviewsList, updateReview, addReview, deleteReview, showReview}) => {
    const [updateReviewData, setUpdateReviewData] = useState(null);
    return (

        <div>
            <Grid container spacing={2} style={{marginTop: "10px"}}>
                {reviewsList.map((review) => (

                    <ReviewItem key={review.id}
                                review={review}
                                onUpdate={() => setUpdateReviewData(review)}
                                onDelete={() => deleteReview(review)}
                                onView={() => showReview(review)}

                    />

                ))}
            </Grid>
            {updateReviewData &&
                <AddReview
                    addReview={addReview}
                    updateReviewData={updateReviewData}
                    updateReview={updateReview}
                    onUpdateComplete={() => setUpdateReviewData(null)}
                />

            }
        </div>


    )
}

export default ListReview;
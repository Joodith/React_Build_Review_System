import {useEffect, useState} from "react";
import AddNewReviewDialog from "./components/AddNewReviewDialog/AddNewReviewDialog";
import {Button} from "../../pages/MainPage/MainPage.style";

const AddReview = ({addReview, updateReviewData, updateReview, onUpdateComplete}) => {
    const [openAddReviewDialog, setOpenAddReviewDialog] = useState(false);
    const initialReviewFormState = {reviewTitle: "", reviewDesc: "", rating: ""};
    const [reviewFormValues, setReviewFormValues] = useState(initialReviewFormState);

    useEffect(() => {
        if (updateReviewData) {
            setReviewFormValues(updateReviewData);
            setOpenAddReviewDialog(true);
        }

    }, [updateReviewData]);
    const handleAddReviewClick = () => {
        setReviewFormValues(initialReviewFormState);
        setOpenAddReviewDialog(true);
    }
    const handleFormValueChange = (event) => {
        setReviewFormValues({...reviewFormValues, [event.target.name]: event.target.value});
    }

    const handleReviewSaveBtn = () => {
        console.log("Form submitted:", reviewFormValues);
        if (updateReviewData) {
            updateReview(reviewFormValues);
            onUpdateComplete();
        } else {
            addReview(reviewFormValues);
        }
        setOpenAddReviewDialog(false);

    }
    const closeDialog = () => {
        setOpenAddReviewDialog(false);
        if (onUpdateComplete) onUpdateComplete();
    }

    return (
        <>
            <Button onClick={handleAddReviewClick}>
                + Add Review
            </Button>
            <AddNewReviewDialog
                openAddReviewDialog={openAddReviewDialog}
                reviewFormValues={reviewFormValues}
                handleFormValueChange={handleFormValueChange}
                handleAddReviewSubmitBtn={handleReviewSaveBtn}
                closeDialog={closeDialog}

            />
        </>

    )
}
export default AddReview;
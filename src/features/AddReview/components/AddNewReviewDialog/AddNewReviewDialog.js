import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {Button} from "../../../../pages/MainPage/MainPage.style";

const AddNewReviewDialog = ({
                                openAddReviewDialog,
                                reviewFormValues,
                                handleFormValueChange,
                                handleAddReviewSubmitBtn,
                                closeDialog
                            }) => {
    return (
        <Dialog open={openAddReviewDialog} onClose={closeDialog}>
            <DialogTitle>Add New Review</DialogTitle>
            <DialogContent>
                <TextField
                    name="reviewTitle"
                    label="Title"
                    type="text"
                    fullWidth
                    value={reviewFormValues.reviewTitle}
                    onChange={handleFormValueChange}
                />
                <TextField
                    name="reviewDesc"
                    label="Description"
                    type="text"
                    multiline
                    rows={4}
                    fullWidth
                    value={reviewFormValues.reviewDesc}
                    onChange={handleFormValueChange}
                />
                <FormControl fullWidth>
                    <InputLabel>Rating</InputLabel>
                    <Select
                        name="rating"
                        value={reviewFormValues.rating}
                        onChange={handleFormValueChange}
                        label="Rating"
                    >
                        <MenuItem value="poor">1-Poor</MenuItem>
                        <MenuItem value="good">2-Good</MenuItem>
                        <MenuItem value="bestt">3-Best</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button backgroundColor="gray" onClick={closeDialog}>Cancel</Button>
                <Button backgroundColor="gray"  onClick={handleAddReviewSubmitBtn} variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddNewReviewDialog;
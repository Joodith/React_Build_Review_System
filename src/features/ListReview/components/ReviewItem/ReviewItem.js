import {Card, CardActions, CardContent, Grid,Typography} from "@mui/material";
import {Button} from "../../../../pages/MainPage/MainPage.style";
import EditIcon from "../../../../assets/icons/EditIcon";

const ReviewItem = ({review,onUpdate,onDelete,onView}) => {

    return (
        <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card sx={{borderRadius: 3, boxShadow: 3}}>
                <CardContent>
                    <Typography variant="h4">{review.reviewTitle}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review.reviewDesc}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {review.rating}
                    </Typography>
                </CardContent>
                <CardActions style={{float:"right"}}>
                    <Button backgroundColor="gray" onClick={onUpdate}><EditIcon /></Button>
                    <Button backgroundColor="white" color="red" border="2px solid red" onClick={onDelete}>Delete</Button>

                    <Button onClick={onView}>View</Button>
                </CardActions>
            </Card>
        </Grid>

    )
}
export default ReviewItem;
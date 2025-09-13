import {useEffect, useMemo, useState} from "react";
import AddReview from "../../features/AddReview/AddReview";
import ListReview from "../../features/ListReview/ListReview";
import ReviewDetail from "../../features/ReviewDetail/ReviewDetail";
import SearchReview from "../../features/SearchReview/SearchReview";

const MainPage = () => {
    const [reviewsList, setReviewsList] = useState([]);
    const [showReviewDetail, setShowReviewDetail] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const[searchQuery,setSearchQuery]=useState("");
    useEffect(() => {
        setShowReviewDetail(false);
    }, []);
    const addReview = (newReview) => {
        setReviewsList((prevReviewList) => [...prevReviewList, {...newReview, id: prevReviewList.length + 1}]);
    }

    const updateReview = (updatedReview) => {
        setReviewsList((prevReviewList) =>
            prevReviewList.map((review) =>
                review.id === updatedReview.id ? updatedReview : review
            )
        )
    }

    const deleteReview = (deletedReview) => {
        setReviewsList(() => reviewsList.filter((review) => review.id !== deletedReview.id));
    }

    const showReview = (review) => {
        setSelectedReview(review);
        setShowReviewDetail(true);

    }

    const searchReview=(searchValue)=>{
        setSearchQuery(searchValue);
    }

    const filteredReviews = useMemo(() => {
        if (searchQuery.trim() === "") {
            return reviewsList;
        }
        return reviewsList.filter((review) =>
            review.reviewTitle.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, reviewsList]);

    return (
        <>
            {showReviewDetail && selectedReview ? (
                <ReviewDetail review={selectedReview}/>
            ) : (
                <>
                    <AddReview addReview={addReview}/>
                    <SearchReview searchReview={searchReview} searchQuery={searchQuery}/>
                    <ListReview
                        reviewsList={filteredReviews}
                        updateReview={updateReview}
                        addReview={addReview}
                        deleteReview={deleteReview}
                        showReview={showReview}
                    />
                </>
            )}
        </>
    )
}

export default MainPage;
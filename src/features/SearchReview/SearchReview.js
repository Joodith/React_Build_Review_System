const SearchReview = ({searchReview, searchQuery}) => {
    return (

        <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => searchReview(e.target.value)}
            style={{margin: "10px 10px", padding: "5px", width: "200px",borderRadius:"6px"}}
        />

    )
}
export default SearchReview;
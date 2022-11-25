function SortSection (props) {
    return (
        <div>
            <h3 style={{paddingLeft: "0.4rem"}}>Sort By</h3>
            <form>
                <input type="radio" name="sort" value="price" onClick={(e) => props.setSortType(e.target.value)}/> Price
                <br></br>
                <br></br>
                <input type="radio" name="sort" value="rating" onClick={(e) => props.setSortType(e.target.value)}/> Rating
            </form>
        </div>
    )
}

export default SortSection;
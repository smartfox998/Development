function GroceryItem(props) {
    return (
        <div className="groceryItem">
            <img src={props.item.image} alt="grocery item image"></img>
            <div>
                <div className="description">
                    <h3>{props.item.name}</h3>
                    <p>Type: {props.item.type}</p>
                    <p>Available: {props.item.available.join(", ")}</p>
                    <p>Rating: {props.item.rating}</p>
                </div>
                <div className="price-area">
                    <h3 style={{fontWeight: "bold"}}>${props.item.price}</h3>
                    <div className="price-buttons">
                        <button onClick={() => props.removeFromCart(props.index)}>-</button>
                        <h3>{props.count}</h3>
                        <button onClick={() => props.addToCart(props.index)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GroceryItem;
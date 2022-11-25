function CartSection(props) {
    return (
        <div>
            <h2>Shopping Cart</h2>
            {Object.keys(props.cart.items).map((key) => (
                <p>{props.cart.items[key]}x {key}</p>
            ))}
            <p>Total: ${Math.round(props.cart.price * 100) / 100}</p>
        </div>
    )
}

export default CartSection;
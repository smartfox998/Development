import GroceryItem from "./GroceryItem.js";

function DisplayList(props) {

    const addToCart = (index) => {
        const item = props.data[index]
        const name = item.name
        const currentCart = props.cart.items
    
        if (name in currentCart){
          currentCart[name] += 1
        }
        else{
          currentCart[name] = 1
        }
    
        const total = props.cart.price + item.price
        props.setCart({items: currentCart, price: total})
      }
    
      const removeFromCart = (index) => {
        const item = props.data[index]
        const name = item.name
        const currentCart = props.cart.items
    
        if (name in currentCart){
          currentCart[name] -= 1
          const total = props.cart.price - item.price
          props.setCart({items: currentCart, price: total})
    
          if (currentCart[name] === 0){
            delete currentCart[name]
          }
        }
      }


    return (
        <div className='groceryItems'>
          {props.data.map((item, index) => (
          <GroceryItem item={item} addToCart={addToCart} removeFromCart={removeFromCart} count= {item.name in props.cart.items ? props.cart.items[item.name] : 0} index={index}></GroceryItem>
          ))}
        </div>
    )

}

export default DisplayList;
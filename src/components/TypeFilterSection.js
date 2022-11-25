function TypeFilterSection(props) {
    return (
       <div>
        <h3 style={{paddingLeft: "0.5rem"}}>Types</h3>
          <div>
            <input type="checkbox" id="all" name="types" checked={props.filterType === "All"} onChange={() => props.setFilterType("All")}/>
            <label for="fruits"> All</label>
            <br></br>
            <br></br>
            <input type="checkbox" id="fruits" name="types" checked={props.filterType === "Fresh Fruits"} onChange={() => props.setFilterType("Fresh Fruits")}/>
            <label for="fruits"> Fresh Fruits</label>
            <br></br>
            <br></br>
            <input type="checkbox" id="beverages" name="types" checked={props.filterType === "Beverages"} onChange={() => props.setFilterType("Beverages")}/>
            <label for="beverages"> Beverages</label>
            <br></br>
            <br></br>
            <input type="checkbox" id="dairy&eggs" name="types" checked={props.filterType === "Dairy & Eggs"} onChange={() => props.setFilterType("Dairy & Eggs")}/>
            <label for="dairy&eggs"> Dairy & Eggs</label>
            <br></br>
            <br></br>
            <input type="checkbox" id="bakery&bread" name="types" checked={props.filterType === "Bakery & Bread"} onChange={() => props.setFilterType("Bakery & Bread")}/>
            <label for="bakery&bread"> Bakery & Bread</label>
            <br></br>
            <br></br>
            <input type="checkbox" id="meat&seafood" name="types" checked={props.filterType === "Meat & Seafood"} onChange={() => props.setFilterType("Meat & Seafood")}/>
            <label for="meat&seafood"> Meat & Seafood</label>
          </div>
       </div>
    )
}


export default TypeFilterSection;
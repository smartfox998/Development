function AvailableFilterSection(props) {
    return (
       <div>
        <h3 style={{paddingLeft: "0.5rem"}}>Available</h3>
          <div>
            <input type="checkbox" id="all" name="available" checked={props.filterAvailable === "All"} onChange={() => props.setFilterAvailable("All")}/>
            <label for="pickup"> All</label>
            <br></br>
            <br></br>
            <input type="checkbox" id="pickup" name="available" checked={props.filterAvailable === "Pickup"} onChange={() => props.setFilterAvailable("Pickup")}/>
            <label for="pickup"> Pickup</label>
            <br></br>
            <br></br>
            <input type="checkbox" id="delivery" name="available" checked={props.filterAvailable === "Delivery"} onChange={() => props.setFilterAvailable("Delivery")}/>
            <label for="delivery"> Delivery</label>
          </div>
       </div>
    )
}

export default AvailableFilterSection;
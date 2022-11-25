import './App.css';
import { useState, useEffect } from "react";
import groceryData from "./assets/grocery_data.json";
import DisplayList from "./components/DisplayList";
import TypeFilterSection from './components/TypeFilterSection';
import AvailableFilterSection from './components/AvailableFilterSection';
import CartSection from './components/CartSection';
import SortSection from './components/SortSection';

groceryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [cart, setCart] = useState({items: {}, price: 0})
  const [data, setData] = useState(groceryData);
  const [sortType, setSortType] = useState();
  const [filterType, setFilterType] = useState("All");
  const [filterAvailable, setFilterAvailable] = useState("All");

  useEffect(() => {
    const sortItems = type => {
      const sortProperty = type;
      const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortItems(sortType);
  }, [sortType]);


  useEffect(() => {
      const filterItemByType = type => {
        var items = [...groceryData];
        if (filterAvailable !== "All"){
          items = [...groceryData].filter(item => item.available.includes(filterAvailable));
        }

        if (type !== "All"){
          const filtered = [...items].filter(item => item.type === type);
          const sorted = [...filtered].sort((a, b) => b[sortType] - a[sortType]);
          setData(sorted);
        }
        else{
          const sorted = [...items].sort((a, b) => b[sortType] - a[sortType]);
          setData(sorted);
        }
      }

      filterItemByType(filterType);
  }, [filterType]);


  useEffect(() => {
    const filterItemByAvailable = available => {
      var items = [...groceryData];
      if (filterType !== "All"){
        items = [...groceryData].filter(item => item.type === filterType);
      }
        
      if (available !== "All"){
        const filtered = [...items].filter(item => item.available.includes(available));
        const sorted = [...filtered].sort((a, b) => b[sortType] - a[sortType]);
        setData(sorted);
      }
      else{
        const sorted = [...items].sort((a, b) => b[sortType] - a[sortType]);
        setData(sorted);
      }
    }

    filterItemByAvailable(filterAvailable);
}, [filterAvailable]);

  return (
    <div className="App">
      <div>
        <img className='title' src={require('./title.png')} alt='title section'/>
      </div>

      <div className='content'>
        <div className='filter-area'>
          <SortSection setSortType={setSortType}></SortSection>

          <br></br>

          <TypeFilterSection filterType={filterType} setFilterType={setFilterType}></TypeFilterSection>

          <br></br>
                
          <AvailableFilterSection filterAvailable={filterAvailable} setFilterAvailable={setFilterAvailable}></AvailableFilterSection>
        </div>

        <DisplayList data={data} cart={cart} setCart={setCart}></DisplayList>

        <div className="cart">
          <CartSection cart={cart}></CartSection>
        </div>

      </div>
    </div>
  );
}

export default App;

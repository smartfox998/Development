# Development

### Link to Deployed Website
https://smartfox998.github.io/Development/

### Goal and Value of the Application
This is an application that can be used by grocery store. Users can add or remove products based on their requirements. Users can use the filters on the left to choose their preferred product type and delivery option. They can also sort the products by price and rating.

### Usability Principles Considered

* The shopping cart is sticked on the right to make sure users could always see the updates.

* The filter and sort section is sticked on the left, it won't disappear when users scroll down or up to browse through products.

* There is a **All** choice for both two filters to make sure users could revert back to the original state without refreshing the page.

### Organization of Components

* TypeFilterSection: This is the component for the filter that can filter products by type.

* AvailableFilterSection: This is the component for the filter that can filter products by availability (pick up or delivery).

* CartSection: This is the component for shopping cart section.

* DisplayList: This is the component for the section showing all the products which also includes the **addToCart** function to add products to shopping cart and the **removeFromCart** function to remove products from shopping cart.

* GroceryItem: This is the component for each individual product. It includes the layout of a product: product image, product name, product type, availability, rating, price and two buttons for add and remove.

* SortSection: This is the component for sort section, which includes two sort methods --- sort by price and sort by rating.

### How Data is Passed Down Through Components

* Products and total cost in the shopping cart: There is a state called **cart**, which contains two variables --- **items** (products in the shopping cart) and **price** (total cost). The state **cart** is passed through props to component **CartSection**. When users click the add button or the remove button of one product, the **items** and **price** will update.

* Display products: There is a state called **data**, which is the current product list shown in the product section. When filter or sort method is applied, the product list will change and update by **setData** method. The state **data** is passed through props to component **DisplayList**.

* Display products with different filters: There are two states called **filterType** and **filterAvailable**, which represent value of type filter and value of availability filter (both are initialize to **All** at the begining). UseEffect hooks are used to update product list with filters. There is a method in **useEffect** called **filterItemByType** which is used to update products when users use the type filter. There is a method in another **useEffect** called **filterItemByAvailable** which is used to update products when users use the availability filter.

* Display products with different sort methods: There is a state called **sortType**, which is used to store the sort method (initialize to null at the begining). UseEffect hook is used to update product list with different sort method. There is a method in **useEffect** called **sortItems** which is used to update products when users use sort method.

### How the User Triggers State Changes

* Shopping cart: Users trigger the state **cart** changes by clicking the add or remove button in each product section.

* Type filter: Users trigger the state **filterType** changes by choosing their preferred product category in type filter section.

* Availability filter: Users trigger the state **filterAvailable** changes by choosing their preferred delivery option in availability filter section.

* Sort method: Users trigger the state **sortType** changes by choosing their preferred sort method in sort section.

* Product list: Users trigger the state **data** changes by using filter section or sort section.

import React from "react";
import { Route } from "react-router-dom";
import axios from 'axios';

import { Header } from "./components";
import { Home, Cart } from "./pages";


function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(res => setItems(res.data.pizzas));
  }, [])

  console.log(items)

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

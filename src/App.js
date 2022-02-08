import React from "react";
import { Provider } from "react-redux";
import store from "./redux";

import Carts from "./components/Carts";
import Products from "./components/Products";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Carts />
                <Products />
            </div>
        </Provider>
    );
};

export default App;

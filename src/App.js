import React from "react";
import Homepage from "./Components/Homepage/Homepage";
import Listingpage from "./Components/Listingpage/Listingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import store from "./Redux/Store";
import store from "./Redux/Store.jsx"
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listingpage" element={<Listingpage />} />
        </Routes>
      </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;

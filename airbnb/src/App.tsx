import { BrowserRouter, Routes, Route } from "react-router-dom";

import PropertyDetails from "./PropertyDetails";
import Checkout from "./Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<PropertyDetails />}
        />

        <Route
          path="/property/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
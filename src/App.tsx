import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Routes } from "react-router-dom";
import HomePage from "./atomic/pages/HomePage/HomePage.tsx";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Provider>
  );
}

export default App;

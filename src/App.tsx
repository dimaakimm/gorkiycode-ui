import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, Routes } from "react-router-dom";
import HomePage from "./atomic/pages/HomePage/HomePage.tsx";
import ProfilePage from "./atomic/pages/ProfilePage/ProfilePage.tsx";
import MapPage from "./atomic/pages/MapPage/MapPage.tsx";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Provider>
  );
}

export default App;

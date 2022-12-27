import { createStore } from "redux";
import useReduser from "./store/reduser/user";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Home from "./pages/Home";
import '../src/sass/style.scss'



function App() {
  const store = createStore(useReduser)
  return (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/users" element={<Users/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import { myContext } from "./Context";
import UserPage from "./pages/UserPage";
import Logout from "./pages/Logout";
import AddEventPage from "./pages/AddEventPage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import UpdateEventPage from "./pages/UpdateEventPage";

function privateRoute(Component,props,isLoggedIn){
  if(isLoggedIn){
    return <Component {...props} />
  }
  else{
    return <Navigate to="/login" />
  }
}


function App() {
  const { userObject, setUserObject, isLoggedIn } = useContext(myContext);
  console.log(userObject);
  console.log(isLoggedIn);
  return (
    <div>
      
      <Router>
      <NavbarComponent></NavbarComponent>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/addEvents/:userId" element={<AddEventPage />} />
        </Routes>
      
      

          <Routes>
            <Route path="/logout" element={<Logout />} />

          </Routes>
          <Routes>
            <Route path="/user" element={<UserPage />} />
          </Routes>
          <Routes>
            <Route
              path="/user/viewEvents/:userId"
              element={<EventsPage></EventsPage>}
            />
          </Routes>
          <Routes>
            <Route
              path="/user/:userId/eventDetails/:eventId"
              element={<EventDetailsPage />}
            />
          </Routes>
          <Routes>
            <Route
              path="/user/:userId/updateEvent/:eventId"
              element={<UpdateEventPage />}
            />
          </Routes>
   
      </Router>
    </div>
  );
}

export default App;

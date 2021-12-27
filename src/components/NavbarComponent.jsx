import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { myContext } from "../Context";

const NavbarComponent = () => {
  const {userObject,setUserObject,isLoggedIn} = useContext(myContext);
  console.log(userObject);
  
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="logo">
            <Link className="link" to="/">
              🗓 Events App
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {(isLoggedIn && userObject!==null) ? (
              <ul className="list">
                {/* <li className="listItem">
                <img src={user.photos[0].value} alt="" className="avatar" />
              </li> */}
                <Nav.Link>
                  <li className="listItem">
                    <Link className="link" to="user">{userObject.name}</Link>
                  
                  </li>
                </Nav.Link>
                <Nav.Link>
                  <li className="listItem">
                    <Link className="link" to="logout">Logout</Link>
                  </li>
                </Nav.Link>
              </ul>
            ) : (
              <Nav.Link>
                <Link className="link" to="login">
                  Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

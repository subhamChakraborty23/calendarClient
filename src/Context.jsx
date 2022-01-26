import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const myContext = createContext();
const initialState = {};
export default function Context(props) {
  const [userObject, setUserObject] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    axios
      .get(`https://event-backend-api.herokuapp.com/api/v1/user`, { withCredentials: true })
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
        if (res.status === 200) {
          setUserObject(res.data.user);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <myContext.Provider
      value={{ userObject, setUserObject, isLoggedIn, setIsLoggedIn }}
    >
      {props.children}
    </myContext.Provider>
  );
}

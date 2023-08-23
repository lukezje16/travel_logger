import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
  name: "Luke",
  email: "Lukecarty161@gmail.com",
  password: "hellomydudes",
  avatar: "../src/assets/luke3.PNG",
};

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function reducer(state, action) {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload, isAuthenticated: true };
      case "logout":
        return { ...state, user: null, isAuthenticated: false };
      default:
        throw new Error("unknow action");
    }
  }

  function Login(email, password) {
    console.log(email, password);
    console.log(FAKE_USER.email);
    console.log(FAKE_USER.password);
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function Logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        Logout,
        Login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("auth conext was used outside of auth provider");

  return context;
}

export { AuthProvider, useAuth };

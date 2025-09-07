import { useContext,createContext,useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const login = () => {
      if (username && username.trim() !== "") {
        setUser(username);
      } else {
        alert("Username cannot be empty!");
      }
  }

  const logout = () => {
    setUser(null);
    setUsername("");
    setPassword("");
  }

  const isAuthenticated = () => {
    if(user != null) return true;
    else return false;
  }

  return(
    <AuthContext.Provider value={{username,setUsername,password,setPassword,user,setUser,login,
      isAuthenticated,logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}
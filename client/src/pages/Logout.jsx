import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContent } from "../store/auth"

const Logout = () => {

     let {LogoutUser, setLogged}=useContext(AuthContent);

     useEffect(()=>{
          LogoutUser();
          setLogged(false)
     },[LogoutUser])

  return (<Navigate to="/login"></Navigate>)
}

export default Logout

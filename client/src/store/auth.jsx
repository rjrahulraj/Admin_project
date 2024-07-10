import { createContext, useContext ,useEffect,useRef,useState} from "react";
export const AuthContent=createContext();


// eslint-disable-next-line react/prop-types
const AuthProvider=({children})=>{
     const [services,setServices]=useState();
     const [token,setToken]=useState(localStorage.getItem('token'));
     const [isLoading,setLoading]=useState(true);
     const [userData,setUserData]=useState();
     const [logged, setLogged]=useState(false);
     let isLoggedin=useRef();
     const BK_API=import.meta.env.VITE_APP_URI_API;
     
     const getServices=async()=>{
          try {
            let response=await fetch(`${BK_API}/api/services`,{
              method:"GET",
            })
            if(!response.ok)
              {
                console.log("Error in getting response");
                return ;
              }
            let data=await response.json();
            setServices(data);
          } catch (error) {
              console.log("error in getting services", error);
          }
      }
     const storeTokenInLS=(token)=>{
          setToken(token);
          return localStorage.setItem("token", token);
     }
     isLoggedin=!!token;

     // implementing the logout functionality 
     const LogoutUser=()=>{
          setToken("");
          return localStorage.removeItem("token");
     }
     
     // jwt authenication 
     const userAuthentication=async()=>{
          try {
               setLoading(true);

               let tokn=localStorage.getItem("token");
               let  response=await fetch(`${BK_API}/api/user`,{
                    method:"GET",
                    headers:{
                      "Authorization":`Bearer ${tokn}`
                    }
                  });

               console.log(response);   
               if(response.ok)
               {
                    let data=await response.json();
                    // console.log(data);
                    setUserData(data);
                    
                  
               }
               setLoading(false);
          } catch (error) {
               console.error("Error in fetching user Data",error);
          }
     }

     useEffect(()=>{
          userAuthentication();
          getServices();
     },[])


     return (
          <AuthContent.Provider value={{isLoggedin, LogoutUser,storeTokenInLS,userData,userAuthentication, services, logged,setLogged,token, isLoading,BK_API}}>
               {children}
          </AuthContent.Provider>
     )
};


 export function useJWTAuth(){

     let authContentValue=useContext(AuthContent);
     if(!authContentValue)
     {
          throw new console.error("useAuth used outside of the Provider");
     }
     return authContentValue;
}
export default AuthProvider;
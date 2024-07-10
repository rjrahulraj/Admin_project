import styles from '../styles/Login.module.css';
// eslint-disable-next-line no-unused-vars
import { useContext, useState } from 'react';
import {useNavigate , Link} from 'react-router-dom';
import {  useJWTAuth } from '../store/auth';
import { toast } from 'react-toastify';

// useJWTAuth is the custom hooks which return function 
const default_UserLogin={
  email:"",
  password:"",
}

const Login = () => {
  const navigate=useNavigate();
  const BK_API=import.meta.env.VITE_APP_URI_API;
  // const {storeTokenInLS}=useContext(AuthContent);
  const {storeTokenInLS, setLogged}=useJWTAuth();
  const [userLogin, setUserLogin]=useState(default_UserLogin);
  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUserLogin({
      ...userLogin,
      [name]:value,
    })
  };
  const handleSubmit=async(e)=>{
      e.preventDefault();
      try {
        let response=await fetch(`${BK_API}/api/login`,{
          method:"POST",
          headers:{
               'Content-Type':'application/json',
          },
          body:JSON.stringify(userLogin),
        });
        const data=await response.json();
        console.log(response,data);

        // JWT Authenication
        // const res_data=await response.json();
        // console.log(res_data,response);
        // localStorage.setItem("token",res_data.token )
        if(response.ok)
          {
            console.log(storeTokenInLS,data); 
            storeTokenInLS(data.token);
            setUserLogin(default_UserLogin);
            setLogged(true);
            navigate('/');
            toast.success("Welcome to Brand", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",  
              });
            
          }
          else{
            
            toast.error(data ? data.message:"wrong Credentials", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              // transition: "Bounce",
              });
          }
      } catch (error) {
        console.log("Error in login",error);
      }
  }

  return (
    <section>
      <main className={styles.mainSection}>
        <div className={styles.leftPart}>
          <img src="/images/login.png" alt="" height={350} />

        </div>
        <div className={styles.rightPart}>
            <div className={styles.form}>
              <form onSubmit={handleSubmit} className={styles.formDetail}>
                <h1>Login </h1>
                 <div>
                    <label htmlFor='email'>email</label>
                    <input type="email" name='email' placeholder='email' onChange={handleChange}/>
                 </div>
                 <div>
                   <label htmlFor="password">password</label>
                   <input type="password" name='password' placeholder='password' onChange={handleChange}/>
                 </div>
                 <button className={styles.loginBtn} >Login Now</button>
                 <p>Don't have a Account   <Link to="/register"> <button> Sign up</button></Link></p>
              </form>
            </div>

        </div>
      </main>
    </section>
  )
}

export default Login

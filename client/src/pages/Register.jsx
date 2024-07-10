import { useState } from 'react';
import styles from '../styles/Register.module.css'
import {useNavigate, Link} from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {

    const navigate=useNavigate();
//     const {BK_API}=useJWTAuth;
    const BK_API=import.meta.env.VITE_APP_URI_API;

     const [user, setuser]=useState({
          username :"",
          email :"",
          phone: "",
          password :"",
     })
      const handleChange=(e)=>{

          // console.log(e.target.value)
          let name=e.target.name;
          let value=e.target.value;

          setuser({
               ...user,
               [name]:value
          })
      }

      const handleSubmit=async(e)=>{
          e.preventDefault();
          try {
               let response=await fetch(`${BK_API}/api/register`,{
                    method:"POST",
                    headers:{
                         'Content-Type':'application/json',
                    },
                    body:JSON.stringify(user)
               });
               // console.log(response);
               let res_data= await response.json();
               // console.log(res_data);
               if(response.ok)
               {
                    setuser({
                         username:"", email:"", phone:"", password:""
                    })
                    toast.success(res_data? res_data.message: "Successful", {
                         position: "top-center",
                         autoClose: 2000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "colored",
                         });
                    navigate('/login');

               }
               else{
                    alert(res_data.message);
               }
               
          } catch (error) {
               console.log("Sign up Error",error)               
          }

          
      }
     
   


  return (
    <section>
          <main className={styles.mainSection}>
               <div className={styles.leftPart}>
                    <img src="/images/register.png" height={350} alt="" />
               </div>
               <div className={styles.rightPart}>
                    <div>
                    <form  onSubmit={handleSubmit} className={styles.formDetail}>
                    <h1>Sign Up</h1>
                         <div>
                              <label htmlFor="username">Username</label>
                              <input  type="text" name="username" placeholder='username' value={user.username} onChange={handleChange}/>
                         </div>
                         <div>
                              <label htmlFor="email">Email</label>
                              <input type="text" name="email"  placeholder='email' value={user.email} onChange={handleChange}/>
                         </div>
                         <div>
                              <label htmlFor="phone">Phone</label>
                              <input type="number" name="phone"  placeholder='phone'value={user.phone} onChange={handleChange}/>
                         </div>
                         <div>
                              <label htmlFor="password">Password</label>
                              <input type="password" name="password" placeholder='password' value={user.password} onChange={handleChange}/>
                         </div>
                         <br />
                         <button>Register Now</button>
                         <p >Already a Memeber ? <Link  className={styles.LoginLink}to="/login"> Log In</Link></p>
                    </form>

                    </div>
                   
               </div>
          </main>
          
    </section>
  )
}

export default Register;

import { useEffect, useState } from "react"
import styles from '../styles/AdminUserUpdate.module.css'
import { useParams ,useNavigate } from "react-router-dom";
import { useJWTAuth } from "../store/auth";
import {  toast } from 'react-toastify';

const AdminUserUpdate = () => {
     const BK_API=import.meta.env.VITE_APP_URI_API;
     let {token}=useJWTAuth();
     const params=useParams();
     const navigate=useNavigate();

     const [data,setData]=useState({
          username:"",
          email:"",
          phone:"",
     })

     const getUserById=async(id)=>{
          try {
                
          let response=await fetch(`${BK_API}/admin/users/${id}`,{
            method:"GET",
            headers:{
              Authorization:`Bearer ${token}`
            },
          })
            let res_data=await response.json();
          //   console.log(res_data);
            setData({
               username:res_data.username,
               email:res_data.email,
               phone:res_data.phone,
            })
      
          } catch (error) {
            console.error("Error at admin/users in getting user by Id",error);
          }
        }


     const handleChange=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
          setData({
            ...data,
            [name]:value,
          })
        };
     const handleSubmit=async(e)=>{     

          e.preventDefault();
          let response=await fetch(`${BK_API}/admin/users/${params.id}`,{
               method:"PATCH",
               headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                  },
               body:JSON.stringify(data),
          })

          let res_data=await response.json();
          // console.log(res_data);
          if(response.ok===true)
               {
                    toast.success(`${res_data.message}`, {
                         position: "top-center",
                         autoClose: 1000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "light",
                         
                         });
               }
          else{
               toast.error(`${res_data.message}`, {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
          }
          navigate('/admin/users');

          
     }

     useEffect(()=>{
          getUserById(params.id);
     },[])

  return (
    <section className={styles.UserUpdation}>
          <div className={styles.sectionHeading}>
               <h2>Update User Data</h2>

          </div>
          <form className={styles.formSection}>
               <div className={styles.username}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" onChange={handleChange} value={data.username} required/>
               </div>
               <div className={styles.email}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" onChange={handleChange} 
                    value={data.email} required/>
               </div>
               <div className={styles.phone}>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" onChange={handleChange} 
                    value={data.phone} required/>
               </div>
               <button onClick={handleSubmit}>Submit</button>
          </form>
    </section>
  )
}

export default AdminUserUpdate

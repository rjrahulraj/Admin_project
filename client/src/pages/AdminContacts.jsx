import { useEffect, useState } from "react";
import { useJWTAuth } from "../store/auth"
import styles from '../styles/AdminContacts.module.css';
// import { deleteContactById } from "../../../backened/controllers/admin-controller";


const AdminContacts = () => {
  const BK_API=import.meta.env.VITE_APP_URI_API;
  const [message,setMessage]=useState([]);

  const {token}=useJWTAuth();


  const getAllMessage=async()=>{
      try {
        let response=await fetch(`${BK_API}/admin/contacts`,{
          method:"GET",
              headers:{
                Authorization:`Bearer ${token}`
              }, 
            })
            let res_data=await response.json();
            setMessage(res_data);
            console.log(res_data);
        
      } catch (error) {
          console.log("Error in getAllMessage in AdminContacts",error);
      }
    }

    const deleteMessageById=async(id)=>{
      try {
        let response=await fetch(`${BK_API}/admin/contacts/${id}`,{
          method:"DELETE",
              headers:{
                Authorization:`Bearer ${token}`
              }, 
            })
            let res_data=await response.json();
            console.log(res_data);
            getAllMessage();
        
      } catch (error) {
          console.log("Error in getAllMessage in AdminContacts",error);
      }

    }
      
      useEffect(()=>{
        getAllMessage();
      },[])


  return (
    <section>
      <div className={styles.heading} >
          <h2>All Message from users</h2>
      </div>
      <div className={styles.AllMessage}>
            {message.length>=1 ? message.map((item ,idx)=>{
              return (<div key={idx} className={styles.eachMessage}>
                    <p>name :{item.username}  </p>
                    <p>Email:{item.email}</p>
                    <p>message :{item.message}</p>
                    <button onClick={()=>deleteMessageById(item._id)}>Delete</button>
              </div>)
            }):"There is No Message"}
      </div>
    </section>
  )
}

export default AdminContacts

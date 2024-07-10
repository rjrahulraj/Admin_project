import { useState } from 'react';
import styles from '../styles/AdminNewService.module.css'
import { useJWTAuth } from '../store/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const IntialValue={
     service:"",
     provider:"",
     price:"$",
     description:"",
   }
const AdminNewService = () => {
     const BK_API=import.meta.env.VITE_APP_URI_API;

     let {token}=useJWTAuth();

     const [service,setService]=useState(IntialValue);
     const Navigate=useNavigate();


     const handleChange=(e)=>{
          let name=e.target.name;
          let value=e.target.value;
      
          setService({
            ...service,
            [name]:value,
      
          })
        }
     const addNewService=async(e)=>{
          e.preventDefault();
          try {
               const response=await fetch(`${BK_API}/admin/service/`,{
                    method:'POST',
                    headers:{
                         Authorization:`Bearer ${token}`,
                         'Content-Type':"application/json",
                    },
                    body:JSON.stringify(service),
               })

               let res_data=await response.json();
               console.log(res_data);
               if(response.ok)
               {
                    
                     toast.success(res_data.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
     
               Navigate('/admin/services')
               }
               else
               {
                    toast.error(res_data.message, {
                         position: "top-right",
                         autoClose: 2000,
                         hideProgressBar: false,
                         closeOnClick: true,
                         pauseOnHover: true,
                         draggable: true,
                         progress: undefined,
                         theme: "light",
                         });
               }

          } catch (error) {
               console.log("Error at AdminNewService in addNewService"  ,error);
          }

     }


  return (
     <section className={styles.ServiceUpdateSection}>
          <div className={styles.heading}>
            <h2>Admin Panel -New Service</h2>
          </div>
          <div>
              <form className={styles.UpdationformSection}>
                  <div>
                    <label htmlFor="service">Service</label>
                    <input type="text" name="service" onChange={handleChange} value={service.service}  placeholder='Service name'  required/>
                  </div>
                  <div>
                    <label htmlFor="provider">Provider</label>
                    <input type="text" name="provider"  onChange={handleChange} value={service.provider} placeholder='Provider Name' required/>
                  </div>
                  <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price"  onChange={handleChange} value={service.price} 
                    placeholder='Price in $ ' required />
                  </div>
                  <div>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description"  rows={4} value={service.description} onChange={handleChange} placeholder='Description ' />
                  </div>
                  <button onClick={addNewService}>submit</button>
              </form>

          </div>
    </section>
  )
}

export default AdminNewService

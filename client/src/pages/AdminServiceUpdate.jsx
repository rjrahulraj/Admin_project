import { useEffect, useState } from 'react';
import styles from '../styles/AdminServiceUpdate.module.css'

import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom'
import { useJWTAuth } from '../store/auth';



const ServiceUpdate = () => {
  const BK_API=import.meta.env.VITE_APP_URI_API;

  const [service,setService]=useState({
    service:"",
    provider:"",
    price:"",
    description:"",
  });
  const Navigate=useNavigate();
  const params=useParams();
  const id=params.id;
  let {token}=useJWTAuth();

  const handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;

    setService({
      ...service,
      [name]:value,

    })
  }



  const getServiceDetails=async()=>{
      try {
        const response=await fetch(`${BK_API}/admin/service/${id}`,{
          method:'GET',
          headers:{
            Authorization:`Bearer ${token}`,
          },
      })

      let res_data=await response.json();
      // console.log(res_data);
      setService(res_data);
      

        
      } catch (error) {
        console.log("error at AdminServiceUpdate in getServiceDetails",error);
      }
  }

  const updateService=async(e)=>{
    e.preventDefault();
        try {
          const response=await fetch(`${BK_API}/admin/service/${id}`,{
            method:'PATCH',
            headers:{
              Authorization:`Bearer ${token}`,
              "Content-Type":"application/json",
            },
            body:JSON.stringify(service),
        })
        let res_data=await response.json();
        // console.log(response.ok);
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
          else{
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
        console.log("error at AdminServiceUpdate in updateServices",error); 
      }
  }


  useEffect(()=>{
    getServiceDetails();
  },[])
  


  return (
    <section className={styles.ServiceUpdateSection}>
          <div className={styles.heading}>
            <h2>Admin Panel - Service Updation</h2>
          </div>
          <div>
              <form className={styles.UpdationformSection}>
                  <div>
                    <label htmlFor="service">Service</label>
                    <input type="text" name="service" onChange={handleChange} value={service.service} required/>
                  </div>
                  <div>
                    <label htmlFor="provider">Provider</label>
                    <input type="text" name="provider"  onChange={handleChange} value={service.provider} required/>
                  </div>
                  <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price"  onChange={handleChange} value={service.price} required />
                  </div>
                  <div>
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description"  className={styles.des} rows={4} value={service.description} onChange={handleChange}  />
                  </div>
                  <button onClick={updateService}>submit</button>
              </form>

          </div>
    </section>
  )
}

export default ServiceUpdate


import { useEffect, useState } from 'react';
import { useJWTAuth } from '../store/auth';
import {Link } from 'react-router-dom';
import styles from '../styles/AdminServices.module.css';

const AdminServices = () => {
  const BK_API=import.meta.env.VITE_APP_URI_API;
  const [services, setServices]=useState([]);
  const {token} =useJWTAuth();


  const getAllServices=async()=>{

      try {
        let response=await fetch(`${BK_API}/admin/services`,{
          method:"GET",
        headers:{
          Authorization:`Bearer ${token}`,
        },
        })
        let res_data=await response.json();
        setServices(res_data)

      } catch (error) {
        console.error("Error at admin/services in getting all services",error);
      }
  }

  const DeleteServiceById=async(id)=>{
    try {
      let response=await fetch(`${BK_API}/admin/service/${id}`,{
        method:"DELETE",
      headers:{
        Authorization:`Bearer ${token}`,
      },
      })
      let res_data=await response.json();
      console.log(res_data);
      getAllServices();

    } catch (error) {
      console.error("Error at admin/services in Deleting service ",error);
    }

  }

  useEffect(()=>{
    getAllServices();
  },[])

  return (
    <section>
      <div>
        
        <h2 className={styles.heading}>Admin Pannel -All Services</h2> 
      </div>
      <div className={styles.newServiceBtn}>
          <button><Link to="/admin/service/new">Add New Service</Link></button>
      </div>
        <div className={styles.servicePage}>
      {services.length>=1 ?
      services.map((service, idx)=>{
            return (
          <><div key={idx} className={styles.ServiceCard}>
              <div className={styles.servicesImages}>
                   <img src="/images/services.png" alt="services Images" height={200}/>
              </div>
              <div className={styles.details}>
                   <div className={styles.ser_subDetails}>
                        <span>{service.provider}</span>
                        <span>{service.price}</span>
                   </div>
                   <h2>{service.service}</h2>
                   <p>{service.description}</p>
              </div>
              <div className={services.button}>
                <button> <Link to={`/admin/services/${service._id}/edit`} >Edit</Link></button>
                <button onClick={()=>{DeleteServiceById(service._id)}}>Delete</button>
              </div>
           </div>
              </>
            )
      })
      : "No services Or failed get services from backened "}
      </div>
    </section>
  )
}

export default AdminServices

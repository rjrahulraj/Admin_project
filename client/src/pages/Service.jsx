import { useContext, } from "react";
import ServiceItem from "../components/ServiceItem"
import { AuthContent } from "../store/auth";
import styles from '../styles/ServiceItem.module.css'; 


const Service = () => {

  let {services} = useContext(AuthContent);
  // console.log(services);


  return (
    <section>
          <h1 className={styles.serviceHead}>Services</h1>
          <main className={styles.servicePage}>
            {services!==undefined &&services.map((item, idx)=><ServiceItem key={idx} service={item}></ServiceItem>)}
          </main>      
    </section>
  )
}

export default Service

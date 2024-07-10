import styles from '../styles/ServiceItem.module.css'; 


const ServiceItem = ({service}) => {
  return (
    <div className={styles.ServiceCard}>
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

      
    </div>
  )
}

export default ServiceItem;

import {Link}  from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section>
      <main className={styles.mainSection}>
        <div className={styles.container}>
            <div className={styles.leftPart}>
              <h3>We are the best it company</h3>
                <h1>Welcome to the <span>TechVersity</span></h1>
                <p>Are to ready to take the business the next level with cutting-edge IT solution ?
                  Look no futher ! At TechVersity, we specialize in providing innovative IT service and solution tailored to meets your need.
                </p> 
                <div className={styles.Btn}>
                  <Link></Link>
                  <Link to="/contact"><button>Connect Now</button></Link>
                  <Link to="/services"><button>Learn Now</button></Link>
                    
                </div>
            </div>
        <div className="rightPart">
                <img src="/images/home.png" height={300} alt="" />
            </div>
        </div> 
      </main>
      <div className={styles.dataShare}>
          <div> <p>50+</p> <p>Registerd Company</p></div>
          <hr />
          <div> <p>10000+</p> <p>Happy Clients</p></div>
          <hr />
          <div><p>500+</p> <p>well known Developers</p></div>
          <hr />
          <div><p>24/7</p> <p>Service</p></div>
          
      </div>
      <div className={styles.sectionHeor}>
          

      </div>
    </section>
  )
}

export default Home

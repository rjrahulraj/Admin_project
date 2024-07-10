
import { useJWTAuth } from '../store/auth';
import styles from '../styles/About.module.css';
import {Link} from 'react-router-dom';

const About = () => {

  // const [userData,setUserData]=useState("");
  const {userData}=useJWTAuth();
  // const {username}=userData;

  


  return (
    <section className="">
         <main className={styles.mainSection}>
          <div className={styles.leftPart}>
              
              <p>Welcome, {userData && userData.username} to Brand</p>
              <h1>why Choose us ?</h1>
              <p>Expertise : Our team consists of experience IT professionals who are passionate about staying up-to-date with latest Industry trends.</p>
              <p>Customization: We underStand that every business is unique. That&apos;s why we create solution that are tailored to your specific needs and goals.</p>
              <p>Customer-Centic Approach : We prioritize your satisfaction and provide tap-natch support to address your IT concerns.</p>
              <p>Affordability: We offer competitive pricing without compromising on the quality of our service.</p>
              <p>Reliability: Count on us to be there when you us. We&apos;re committed to ensuring your IT environment is reliable and available 24/7.</p>
              <div className={styles.Btn}>
                  <Link to="/contact"><button>connect Now</button></Link>
                  <Link to="/services"><button>Learn more</button></Link>
              </div>
              
          </div>
          <div className={styles.rightPart}>
                <img src="/images/about.png" height={250} alt="" />
          </div>
         </main>
    </section>
  )
}

export default About;

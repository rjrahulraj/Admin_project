import { NavLink } from "react-router-dom"
import styles from '../styles/Error.module.css'


const Error = () => {
  return (
    <section className={styles.errorPage}>
          <main className={styles.mainSection}>
               <h1 className={styles.errorCode}>404</h1>
               <div className={styles.errMsg}>
                    <h3>Page not Found !!</h3>
                    <p>Oops! It seems like  the page you are trying to access does not exist.</p>
                    <p>If you believe there is an issue , feel free to report it. </p>
               </div>
               <div className={styles.Btn}>
                    <NavLink to="/"><button>Home</button></NavLink>
                    <NavLink to="/contact"><button>Report</button></NavLink>
               </div>

          </main>
    </section>
  )
}

export default Error

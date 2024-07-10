import { Outlet, NavLink, Navigate } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";
import { FaRegListAlt ,FaHome } from "react-icons/fa";
import styles from  '../../styles/AdminLayout.module.css'
import { useJWTAuth } from "../../store/auth";


const AdminLayouts = () => {
  const {userData,isLoading}=useJWTAuth();

  if(isLoading)
    {
      return <p>Loading...</p>
    }
  if(!userData.isAdmin)
    {
      return <Navigate to="/"></Navigate>
    }

  return (
    <div>
          <header>
              <div className={styles.container}>
                <nav>
                  <ul className={styles.AdminLink}>
                    <li><NavLink to="/"><FaHome/>Home</NavLink></li>
                    <li><NavLink to="/admin/users"> <RiContactsFill />  Users</NavLink></li>
                    <li><NavLink to="/admin/contacts"> <FaMessage />  Contacts</NavLink></li>
                    <li><NavLink to="/admin/services"> <FaRegListAlt/>  Services</NavLink></li>
                  </ul>
                </nav>
              </div>
          </header>
          <Outlet></Outlet>
    </div>
  )
}

export default AdminLayouts;


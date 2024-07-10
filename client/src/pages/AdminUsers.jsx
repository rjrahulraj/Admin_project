import { useEffect, useState } from "react"
import { useJWTAuth } from "../store/auth"
import styles  from '../styles/AdminUsers.module.css'
import { Link}  from 'react-router-dom';

const AdminUsers = () => {
const [allUsers, setAllUsers]=useState([]);
const {token}=useJWTAuth();
const BK_API=import.meta.env.VITE_APP_URI_API;

  

  const getAllUsers=async()=>{
    try {
          let response=await fetch(`${BK_API}/admin/users`,{
            method:"GET",
            headers:{
              Authorization:`Bearer ${token}`
            },
          })
          let res_data=await response.json();
          setAllUsers(res_data);
          console.log(allUsers);
    } catch (error) {
        console.error("Error at admin/users in getting all users",error);
    }   
  }
  useEffect(()=>{
    getAllUsers();
  },[])

  
  const deleteUser =async(_id)=>{
    let obj={
      id:_id,
    }
    let response=await fetch(`${BK_API}/admin/users`,{
      method:"DELETE",
      headers:{
        Authorization:`Bearer ${token}`,
        'Content-Type':"application-json",
      },
      body:JSON.stringify(obj)
    })
    if(response.ok)
      {
        getAllUsers();
      }
  }

  
  return (
    <div className={styles.AdminUserSection}>
        <h2 className={styles.Heading}>Admin Pannel - Users Data </h2>
      <div className={styles.adminUsers}>
          <table>
            <thead className={styles.TableHead} >
              <tr className={styles.detailsHead}>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
           {allUsers.length>=1 ? allUsers.map((user, idx)=>{ return (
            <tr key={idx} className={styles.tableBody}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td><button> 
                <Link to={`/admin/users/${user._id}/edit`} className={styles.edit}>Edit</Link> 
                </button></td>
              <td><button className={styles.delete} onClick={()=>deleteUser(user._id)}>Delete</button></td>
            </tr>
           )}):<h3>NO Users</h3>}

            </tbody>
          </table>
        
      </div>

    </div>
  )
}

export default AdminUsers


import {  useState } from 'react';
import styles from '../styles/Contact.module.css';
import {  useJWTAuth } from '../store/auth';
import { toast } from 'react-toastify';


const Contact = () => {
  const BK_API=import.meta.env.VITE_APP_URI_API;
  const [contactUser,setContactUser]=useState({
    username:"",
    email:"",
    message:""
  })
  let [userDT,setUserDT]=useState(true);
  // let {isLoggedin}=useState(AuthContent);
  let {userData}=useJWTAuth();

  if(userDT && userData)
    {
      setContactUser({
        username:userData.username,
        email:userData.email,
      })
      setUserDT(false);
    }

    const handleChange=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      // console.log(name,value)
      setContactUser({
        ...contactUser,
        [name]:value
      })
    };
    
    
  


  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(contactUser);
   
   try {
    let response=await fetch(`${BK_API}/api/contact`,{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(contactUser)
    });

    if(response.ok)
    {
      await response.json();
      // console.log(dta);
      setContactUser({
        ...contactUser,
        message:""
      })
      
      toast.success("message sent", {
        position: "top-center",
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
      console.log("error at Contact.jsx in post the contact Data ",error);
   }

  }

  return (
    <section>
      
        <main className={styles.mainSection}>
          <div className={styles.leftPart}>
             <img src="/images/support.png" height={300} alt=""/>
          </div>
          <div className={styles.rightPart}>
                <form action="" className={styles.formDetails}>
                  <h2>Contact Us</h2>
                  <label htmlFor="username">Username</label>
                  <input type="text" name='username' onChange={handleChange} value={userData? userData.username : ""} />
                  <label htmlFor="email">Email</label>
                  <input type="email"name='email' onChange={handleChange} value={userData? userData.email : ""} />
                  <label htmlFor="message">Message</label>
                  <textarea name="message" className={styles.messageInput} rows={10}  onChange={handleChange}/>
                  <button onClick={handleSubmit}>Submit</button>
                </form>  
          </div>
        </main>
    </section>
    
  )
}

export default Contact

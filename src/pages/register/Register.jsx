import React, { Fragment, useState } from 'react'
import style from './register.module.css'
import toast, { Toaster } from 'react-hot-toast'

const Register = () => {
  let[signup,setSignup]=useState({
   first:"",
   last:"",
   email:"",
   phone:"",
   gender:"",
   blood:"",
   age:"",
   city:"",
  })
  let handleChange=(e)=>{
    let{name,value}=e.target;
    setSignup({...signup,[name]:value})
  }

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signup);
    toast.success("Registration Successful");
    setSignup({
      first:"",
      last:"",
      email:"",
      phone:"",
      gender:"",
      blood:"",
      age:"",
      city:"",
    })
  }
  return (
    <div className={style.container}>
      <Toaster/>
      <div className={style.doctor}>
        <img src="src/pages/image/doctor.avif" alt="" />
      </div>
      <div  className={style.form}>
        <h1>Registration Form</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className={style.details}> 
              <div>
                <label htmlFor="first">First Name</label> <br />
                <input type="text" placeholder="Enter your first Name " onChange={handleChange} name='first' value={signup.first} required/>
              </div>
              <div>
                <label htmlFor="last">Last Name</label> <br />
                <input type="text" placeholder="Enter your Last Name " onChange={handleChange} name='last' value={signup.last}  required />
              </div>
            </div>

            <div className={style.details}>
            <div>
            <label htmlFor="email">Email</label> <br />
            <input type="text" placeholder="Enter your email" onChange={handleChange} name='email' value={signup.email} required />
          </div>
          <div>
            <label htmlFor="phone">Phone</label><br />
            <input type="number"  onChange={handleChange} name='phone' value={signup.phone} />
          </div>
            </div>

        <div className={style.details}>
         <div >
         <label htmlFor="gender">Gender:</label> <br />
            <select id="gender" name="gender" value={signup.gender} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
         </div>
         <div>
         <label htmlFor="blood">Blood group:</label> <br />
            <select id="blood" name="blood" required value={signup.blood} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
         </div>
        </div> 
        <div className={style.details}>
              <div>
                <label htmlFor="age">Age</label><br />
                <input type="number" name='age' value={signup.age} onChange={handleChange} max={70}  min={0} />
              </div>
              <div>
                <label htmlFor="city">City</label><br />
                <input type="text" name="city" value={signup.city} onChange={handleChange} />
              </div>
            </div>

          <div className={style.btn}>
            <button type="submit">Register</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default Register
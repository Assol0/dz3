import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as userActions from '../store/action/user'
import { Link } from 'react-router-dom';

const Home = () => {
    const[user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const inputHandler=(event)=>{
        const{name, value} = event.target;
        setUser((prevItems)=>{
            return{
                ...prevItems,
                [name]: value
            }
        })
    }
    const dispatch = useDispatch()

    const addUser=()=>{
        dispatch(userActions.addUser(user))
        setUser({
            name: "",
            email: "",
            password: "",
        })
    }
  return (
    <div className='block'>
        <h1 className='block_title'>Add User</h1>
            <input className='block_input' name='name'
        type="text"
         placeholder='enter a name'
          onChange={inputHandler} 
           value={user.name}/>
        <input className='block_input' name='email'
         type="email" placeholder='enter a email' 
         onChange={inputHandler}  
         value={user.email}/>
        <input className='block_input' name='password' 
        type="password" 
        placeholder='enter password' 
        onChange={inputHandler} 
         value={user.password}/>
        <button className='block_btn' type='submit' onClick={addUser}>Add user</button>
        <Link className='block_link' to='./users'>Users List</Link>
        
        
        
    </div>
    
  )
}

export default Home

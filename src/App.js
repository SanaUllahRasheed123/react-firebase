import { db } from './firebase-config'
import React, { useEffect, useState } from 'react'
import { collection,doc,getDocs } from "firebase/firestore";


 const App = () => {
  const [users,setUsers] = useState([]);
  const usersCollectionRef = collection(db,"crud");
  useEffect(()=>{
    const getUsers = async()=> {
      const data = await getDocs(usersCollectionRef);
      console.log(data)

      const docsRef = data.docs.map((doc) =>({
        ...doc.data(),id:doc.id
      }))
      console.log(docsRef)
      setUsers(docsRef)
    }  
    getUsers(); 
  },[])
  return (
    <div>
      <input type='text' />
      {users.map((user)=>{
        return(
        <div>
          <h1>Name:{user.name}</h1>
          <h1>Age:{user.age}</h1>
        </div>)
      })}
    </div>
  )
}

export default App;
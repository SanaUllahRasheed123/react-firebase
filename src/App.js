import { db } from './firebase-config'
import React, { useEffect, useState } from 'react'
import { addDoc, collection,doc,getDocs } from "firebase/firestore";


 const App = () => {
  const [users,setUsers] = useState([]);
  const [name , setName] = useState("");
  const [age,setAge] = useState(0)
  const usersCollectionRef = collection(db,"crud");
 const createUser = async () => {
    await addDoc(usersCollectionRef,{name:name,age:age})
 }


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
      <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type='number' placeholder='Enter your name' value={age} onChange={(e)=>setAge(e.target.value)} />
      <button onClick={createUser}>Create User</button>
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
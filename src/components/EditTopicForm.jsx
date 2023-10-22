"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios';
const EditTopicForm = ({id,title,description}) => {
const [newTitle,setNewTitle] = useState(title);
const [newDescription,setNewDescription] = useState(description);
const router = useRouter();
  

  return (

    <div className='flex flex-col' > 

  <input type="text" name="" className='border-slate-500 px-8 py-2 border my-2' placeholder='Topic Title' id="" value={newTitle}
  onChange={(e)=>setNewTitle(e.target.value)}
  />
  <input type="text" name="" className='border-slate-500 px-8 py-2 border my-2' placeholder='Topic Description' id="" value={newDescription}
  onChange={(e)=>{setNewDescription(e.target.value)}
}
  />
  <button className='bg-green-500 px-6 py-3 w-fit text-white text-bold my-2'
  onClick={async ()=>{
    try {
      console.log(`title = ${title} description = ${description}`)
        await fetch(`http://localhost:3000/api/topics/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({newTitle,newDescription})
        }).then(()=>{
          console.log("object")
          router.push("/")
            
        }) 
        // const edit = await axios.put(`http://localhost:3000/api/topics/${id}`,{
        //     title,
        //     description
        // })
        // if(edit)
        // router.push("/")
    } catch (error) {
        console.log("Error updating topic: ", error);
    }
  }}
  >Update Topic</button>

</div>
  )
}

export default EditTopicForm
//mongodb://localhost:27017/todo
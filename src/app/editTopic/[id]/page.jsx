// 'use client'
import EditTopicForm from '@/components/EditTopicForm'
import axios from 'axios'
import React from 'react'

const getById = async(id)=>{
const res = await axios.get(`http://localhost:3000/api/topics/${id}`)
console.log(res.data)
return res.data
}
const EditTopic = async({params}) => {
  const {id} = params;
 const topic = await getById(id);
 const {title,description} = topic
  return (

    <EditTopicForm id={id} title={title} description={description} />
  )
}

export default EditTopic
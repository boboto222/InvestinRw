"use client"
import { useState,useEffect } from "react";
import { useSession} from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";
handleEdit = ()=>{

}

handleDelete = ()=>{
    
}

const MyProfile = () => {

  const { data:session } = useSession();
  useEffect (()=> {
    const fetchPosts = async() =>{
      const response =  await fetch(`api/users/${session?.user.id}/posts`)
      const data = await response.json()
      setPosts(data)
    }
    // console.log(posts);
   if(session?.user.id) fetchPosts();
      },[]);

  return ( 
    
    <Profile
    name="My"
    desc= "Welcome to your personalised profile page"
    data = {posts}
    handleEdit ={handleEdit}
    handleDelete={handleDelete} 
    />
  
  )
}

export default MyProfile
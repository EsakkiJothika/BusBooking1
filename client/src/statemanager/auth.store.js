import { create } from "zustand";
import axios from "axios";


export let Authstore = create((set)=>({


  message:{status:false},


    loginhandler : (email,password)=>{
      

        let logdata = {
      
            email:email,
            password:password
      
          }
      
      
          axios.post("http://localhost:4000/auth/login",logdata, {withCredentials: true})
          .then((res)=>{

            set(({message:res.data}))
          
          })
          .catch((e)=>{

            console.log(e);
            
          })
          
           
    },

    signhandler : (email,username,password)=>{

      let sdata = {
        username:username,
        email:email,
        password:password
      }
  
  
      axios.post("http://localhost:4000/auth/signup",sdata)
      .then((res)=>{

        set(({message:res.data}))

      })
      .catch((e)=>{
        
        console.log(e);
        
      })

    }
}))
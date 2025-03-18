import { create } from "zustand";
import axios from "axios";


export let Authstore = create((set)=>({

  user: null,

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

    },

    checkAuth: () => {
  return axios
    .get("http://localhost:4000/auth/check", { withCredentials: true })
    .then((res) => {
      if (res.data.status) {
        set({ message: { status: true }, user: res.data.user });
      } else {
        set({ message: { status: false }, user: null });
      }
    })
    .catch((e) => {
      console.log("Auth check failed", e);
      set({ message: { status: false }, user: null });
    });
}


}))
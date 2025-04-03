import { create } from "zustand";
import axios from "axios";




 export let busStore = create((set)=>({

    busInfo : [],
    bus: {},


    findbus: (data)=>{

        axios.post("http://localhost:4000/bus/findbus",data,{withCredentials:true})
        .then((res)=>{
            
            set(({busInfo:res.data}));

            // console.log({busInfo:res.data});
            
            
            
        })
        .catch((e)=>{
            console.log(e);
            
        })

    },


    addbus : (datas)=>{

        axios.post("http://localhost:4000/bus/addbus",datas)
        .then((res)=>{
            
            console.log(res.data);
            
        })
        .catch((e)=>{
            alert("Error",e)
              
        })

    },

    singlebus : (id)=>{

        axios.get(`http://localhost:4000/bus/singlebus/${id}`)
        .then((res)=>{
            set({bus:res.data})
        })
        .catch((e)=>{
            console.log(e);
            
        })

    },

    










}))
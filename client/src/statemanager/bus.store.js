import { create } from "zustand";
import axios from "axios";




 export let busStore = create((set)=>({

    busInfo : [],


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
        .catch(()=>{
            alert("Error")
        })

    }











}))
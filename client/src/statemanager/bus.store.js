import { create } from "zustand";
import axios from "axios";




 export let busStore = create((set)=>({



    findbus: (data)=>{

        axios.post("http://localhost:4000/bus/findbus",data)
        .then((res)=>{
            console.log(res.data);
            
        })
        .catch((e)=>{
            console.log(e);
            
        })

    }











}))
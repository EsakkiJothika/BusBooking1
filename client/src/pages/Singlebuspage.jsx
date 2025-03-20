import  { React,useEffect } from 'react'
import Singlebusinfo from '../components/bookticket/Singlebusinfo'
import { busStore } from '../statemanager/bus.store'
import { useParams } from 'react-router-dom'


const Singlebuspage = () => {

  let {singlebus,bus} = busStore();
  let {id} = useParams();

  useEffect(()=>{

    singlebus(id)

  },[id])

  console.log(bus);
  


  return (
    <div>
      <Singlebusinfo />
    </div>
  )
}

export default Singlebuspage

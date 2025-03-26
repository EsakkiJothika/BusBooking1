import  { React,useEffect } from 'react'
import Singlebusinfo from '../components/bookticket/Singlebusinfo'
import { busStore } from '../statemanager/bus.store'
import { useParams } from 'react-router-dom'


const Singlebuspage = () => {


  return (
    <div>
      <Singlebusinfo />
    </div>
  )
}

export default Singlebuspage

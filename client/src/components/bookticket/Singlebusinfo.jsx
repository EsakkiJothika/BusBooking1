import React, { useEffect, useState } from 'react'
import Sleeper from './Sleeper'
import Seater from './Seater'
import { busStore } from '../../statemanager/bus.store';


const Singlebusinfo = () => {

  let {singlebus,bus} = busStore();

  return (
    <div>

      {bus?.bustype === "sleeper" && (
        <Sleeper />
      )}
      
      {bus?.bustype === "deluxe" && (
        <Seater />
      )}
      

    </div>
  )
}

export default Singlebusinfo

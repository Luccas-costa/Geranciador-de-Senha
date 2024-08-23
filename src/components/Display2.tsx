import React, { useState } from 'react'
import CardASenhas2 from './assets/CardASenhas2'
import CardVSenhas2 from './assets/CardVSenhas2'
import CardUSenhas2 from './assets/CardUSenhas2'
import CardNSenhas2 from './assets/CardNSenhas2'

interface DisplayProps2 {
    refreshprops: boolean;
  }

export default function Display2({
    refreshprops}: DisplayProps2) {
    const [refresh, setRefresh] = useState(false);
  return (
    <div className='h-[calc(100vh-70px)] w-full flex flex-col items-center overflow-y-auto space-y-20'>
        <div className='mt-[90px]'>
            <CardNSenhas2/>
        </div>
        <div>
            <CardASenhas2/>
        </div>
        <div>
            <CardVSenhas2 refresh={refresh} refreshprops={refreshprops}/>
        </div>
        <div className='pb-[60px]'> 
            <CardUSenhas2 />
        </div>
    </div>
  )
}

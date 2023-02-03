import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import InfoCard from '../components/InfoCard'
import { Html } from 'next/document'

function MoreInformation() {
  const router = useRouter()

  const personId = router.query.id

  console.log(personId)
  const criminal = useSelector((state) => state.criminal)
  console.log(criminal.poi, 'POI')
  if (!criminal.poi) {
    return null
  }
  const { remarks, description, warning, images } =
    criminal?.poi || {}

  return (
    <div className='bg-blue-200'>
      <h1>More Information Page</h1>

      {/* <InfoCard
        pix={images?.[0]?.thumb}
        remarks={remarks}
        description={description}
        warning={warning}
      /> */}

      <div className="p-10 mb-12 flex justify-between"> 
      <InfoCard
        pix={images?.[0]?.thumb}
        remarks={remarks}
        description={description}
        warning={warning}
        
      />  
      </div>




    </div>
  )
}

export default MoreInformation

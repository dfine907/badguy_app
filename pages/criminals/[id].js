import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

function MoreInformation() {
  const router = useRouter()

  const personId = router.query.id

  console.log(personId)
  const criminal = useSelector((state) => state.criminal)
  console.log(criminal.poi, 'POI')
  return (
    <div>
      <h1>More Information Page</h1>
      <h2>{criminal.poi.remarks}</h2>
    </div>
  )
}

export default MoreInformation

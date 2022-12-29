import React, { useState } from 'react'
import { useRouter } from 'next/router'

function MoreInformation() {

  const router = useRouter()

  const information = router.query.id
  return (
    <div>
      <h1>More Information Page</h1>
    </div>
  )
}

export default MoreInformation

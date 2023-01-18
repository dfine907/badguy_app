import React from 'react'

const InfoCard = ({ pix, remarks, description, warning }) => {
  return (
    <div>
      <img src={pix} />
      <h2
        dangerouslySetInnerHTML={{
          __html: remarks,
        }}
      ></h2>
      <p>{description}</p>
      {warning && <p>{warning}</p>}
    </div>
  )
}

export default InfoCard

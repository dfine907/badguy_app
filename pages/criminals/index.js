import React, { useState } from 'react'
import { useCriminals } from './hooks/useCriminals'
import Link from 'next/link'
function Criminals() {
  const { offices, criminals } = useCriminals()
  const [filteredCrims, setFilteredCrims] = useState([])

  function officeSelectionHandler(event) {
    console.log(event.target.value)
    const cityOffice = event.target.value
    const crimData = criminals.filter((criminal) =>
      criminal?.field_offices?.includes(cityOffice)
    )

    setFilteredCrims(crimData)
  }

  //Need to do this 12/13/2022:
  // criminals.filter((criminal) => {
  //   criminal?.field_offices?.includes('miami')
  // })
  // filter on criminals by office
  // user click on an office and the list of criminals is filtered by that office//use
  //use select to re render and state, for filter

  //*** Should I store criminals in a state for the drop down list to re render????

  return (
    <div>
      <select className=' bg-orange-300' onChange={officeSelectionHandler}>
        {offices.map((office) => (
          <option key={office}>{office}</option>
        ))}
      </select>

      <div>
        {filteredCrims.map((criminal) => (
          <div key={criminal.uid}>
            <Link href={`/criminals/${criminal.uid}`}>
              <img src={criminal?.images?.[0]?.thumb} />

              {criminal.remarks ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: criminal.remarks,
                  }}
                ></div>
              ) : (
                <p>N/A</p>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Criminals

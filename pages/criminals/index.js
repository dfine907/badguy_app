import React from 'react'
import { useCriminals } from './hooks/useCriminals'

function Criminals() {
  const { offices, criminals } = useCriminals()
  //Need to do this 12/13/2022:
  // criminals.filter((criminal) => {
  //   criminal?.field_offices.includes('miami')
  // })
  // filter on criminals by office
  // user click on an office and the list of criminals is filtered by that office
  return (
    <div>
      <select>
        {offices.map((office) => (
          <option>{office}</option>
        ))}
      </select>
    </div>
  )
}

export default Criminals
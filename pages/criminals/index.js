import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCriminals } from './hooks/useCriminals'
import Link from 'next/link'
import { chooseCriminal } from '../../ducks/criminals.ducks'

function Criminals() {
  const poi = useSelector((state) => state.criminals)

  const dispatch = useDispatch()

  const { offices, criminals } = useCriminals()
  const [filteredCrims, setFilteredCrims] = useState([])
  //added below const to sort field office data:
  const sortedOffices = offices.sort()
  console.log(sortedOffices)

  const officeSelectionHandler = (event) => {
    console.log(event.target.value)
    const cityOffice = event.target.value
    const crimData = criminals.filter((criminal) =>
      criminal?.field_offices?.includes(cityOffice)
    )

    setFilteredCrims(crimData)
  }

  const setPoi = (criminal) => {
    dispatch(chooseCriminal(criminal))
  }

  return (
    // <div class="h-screen bg-gradient-to-b from-blue-200 to-blue-600">

    <div class="h-screen bg-gradient-to-b from-blue-200 to-blue-800" >
      
        <h1 className="text-center text-5xl text-blue-800">
          Welcome to The Most Wanted App
        </h1>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-2"
      
          onChange={officeSelectionHandler}
        >
          {offices.map((sortedOffice) => (
            <option key={sortedOffice}>{sortedOffice}</option>
          ))}
        </select>

        <div>
          {filteredCrims.map((criminal) => (
            <div onClick={() => setPoi(criminal)} key={criminal.uid}>
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

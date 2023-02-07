import { useState, useEffect } from 'react'

export const useCriminals = () => {
  const [criminals, setCriminals] = useState([])
  const [offices, setOffices] = useState(new Set())

  const upperCase = (str) => {
    str[0].toUpperCase() + str.slice(1)
  }

  //get a list of field offices from the data
  const canonicalOffices = {
    lasvegas: 'Las Vegas',
    neworleans: 'New Orleans',
    newyork: 'New York',
  }
  useEffect(() => {
    fetch(
      'https://api.fbi.gov/wanted/v1/list',
      { cache: 'force-cache' }
      // 'https://api.fbi.gov/@wanted?pageSize=10&page=1&sort_on=modified&sort_order=desc'
    )
      .then((res) => res.json())
      .then((json) => {
        setCriminals(json?.items)
        json.items.forEach((item) => {
          console.log(criminals)
          item?.field_offices?.forEach?.((office) => {
            // check if office needs to be updated

            offices.add(canonicalOffices[office] || upperCase(office))
          })
        })
      })
    setOffices(offices)
  }, [])

  return {
    criminals,
    offices: [...offices],
  }
}

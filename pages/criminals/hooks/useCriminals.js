import { useState, useEffect } from 'react'

export const useCriminals = () => {
  const [criminals, setCriminals] = useState([])
  const [offices, setOffices] = useState(new Set())

  //get a list of field offices from the data

  useEffect(() => {
    fetch(
      'https://api.fbi.gov/wanted/v1/list',
      { cache: "force-cache" }
      // 'https://api.fbi.gov/@wanted?pageSize=10&page=1&sort_on=modified&sort_order=desc'
    )
      .then((res) => res.json())
      .then((json) => {
        setCriminals(json?.items)
        json.items.forEach((item) => {
          console.log(criminals);
          item?.field_offices?.forEach?.((office) => {
            offices.add(office)
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

import { useState, useEffect } from "react"


export default function Criminals() {
    const[criminals, setCriminals] = useState([])

    useEffect(() => {
      fetch('https://api.fbi.gov/@wanted?pageSize=200&page=1&sort_on=modified&sort_order=desc').then((res) => res.json()).then((json) => {
        setCriminals(json)
      })
    }, [])

    console.log({criminals})
    
  return (
    <div>
     <h1>Hello Criminals!!</h1>
     
    </div>
  )
}
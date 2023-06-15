import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export function Employee() {
  const {id} = useParams()
  const [box, setBox] = useState("");
  

    useEffect(() => {
        fetch(
           `https://dummy.restapiexample.com/api/v1/employee/${id}`
        )
          .then((response) => response.json())
          .then((result) => setBox(result));
      },[] );

     
  return(
    <>
    <h2>{id}</h2>
  <p>{JSON.stringify(box)}</p>
  </>
  )
  
}
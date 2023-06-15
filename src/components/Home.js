import { useState } from "react";
import { Link } from "react-router-dom";



function Home() {
  const [formdata, setFormData] = useState("");
  const [data, setData] = useState()

  function handleChange(event) {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const Payload = {
      name: formdata.name,
      age: formdata.age,
      salary: formdata.salary
    };
    fetch("https://dummy.restapiexample.com/api/v1/create", {
      method: "POST",

      body: JSON.stringify(Payload)
    })
      .then((response) => response.json())
      .then((result) => setData(result));
  }
  function handleDelete(event) {
    event.preventDefault();
    fetch(`https://dummy.restapiexample.com/api/v1/delete/${data.id}`,{method:"DELETE"})
    .then((response) => console.log(response))

  }
  return (
    <>
      <form>
        <lable>
          Name:
          <input type="text" onChange={handleChange} />
        </lable>
        <br />
        <lable>
          Age:
          <input type="number" onChange={handleChange} />
          <br />
        </lable>
        <lable>
          Salary:
          <input type="number" onChange={handleChange} />
        </lable>
        <hr />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
      
      <div>{JSON.stringify(data)}</div>
      {data && <Link to={`/employee/${data.data.id}`} >
        new data
      </Link>
     }
     <button type="delete" onClick={handleDelete}>
     Delete
     </button>
      
    </>
  );
}
export default Home
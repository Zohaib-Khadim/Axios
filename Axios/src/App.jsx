import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [muydata, setMyData] = useState([]);

  const getApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    console.log(response.data);

    setMyData(response.data);
    console.log(muydata);
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center">Axios Tutorial</h1>
      <div
        className="container "

      >
        <div className="row">
          {muydata.map((val) => {
            const { id, title, body } = val;
            return (
              <div className="col-lg-3 col-md-6 col" key={id}>
                <div className="card bg-dark text-white border mt-4" style={{  }}>
                <div className="card-body">
                  <p>{id}</p>
                  <h5 className="card-title">{title.slice(0,17)}</h5>
                  <p className="card-text">
                    {body.slice(0,100)}
                  </p>
                  <button className="btn btn-primary">Click Me</button>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

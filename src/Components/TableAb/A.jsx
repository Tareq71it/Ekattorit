import React from "react";
import "./Box.css";
import axios from "axios";
import { useEffect, useState } from "react";
import B from "./B";

const A = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState([]);
  const [records2, setRecords2] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handlFilter = (event) => {
    setRecords(
      data.filter((f) => f.name.toLowerCase().includes(event.target.value))
      
    );
   
  };


  const set = new Set();
  const handleItemClick = (itemId) => {
    console.log("click", itemId);
    // const arr= Object.entries(itemId);

    set.add(itemId);
    console.log("click store", set);
      // setSelectedItem(itemId);

  };


 
  //for button
  const set2 = new Set([]);
  const sendData = (e) => {
    e.preventDefault();
    set.forEach((data) => {
      set2.add(data);
      setRecords2(set2)
      // setSelectedItem(set2);
      console.log("button click", set2);
    });
  };
  console.log('b',records2);


  
 
  

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="box">
          <h4 style={{ background: "#7cd3e4", textAlign: "center" }}>
            Available Permission
          </h4>
          {/* <Finalslect/> */}
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              className="form-control"
              onChange={handlFilter}
              placeholder="search"
            />
          </div>
          {/* style='overflow:auto; width:400px;height:400px;' */}
          <div
            style={{
              overflow: "auto",
              width: "300px",
              height: "300px",
              background: "white",
            }}
          >
            {records.map((data, i) => (
              <ul
                style={{
                  backgroundColor:
                    selectedItem === data.name ? "#b7ebe0" : "white",
                  cursor: "pointer",
                  padding: "8px",
                  margin: "4px",
                  borderRadius: "4px",
                }}
                key={i}
                onClick={() => handleItemClick(data.name)}
              >
                {data.id} {data.name}
              </ul>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "250px" }}>
          <button value="" onClick={sendData}>
            click
          </button>
        </div>

        <B set={records2} />
      </div>
    </>
  );
};

export default A;

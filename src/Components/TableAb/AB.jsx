import React from "react";

// import {TextField} from 'react';
import A from "./A";


const AB = () => {
  return (
    <>
      <label>Name: </label>
      <input name="myInput" type ='text'/>
      <label>Name: </label>
      <input name="myInput" />
      <div >
        <A />       
       
      </div>
    </>
  );
};

export default AB;

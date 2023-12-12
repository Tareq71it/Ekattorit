import React from 'react'

const Example = () => {

    const employees = [
        {id: 1, name: 'Alice', country: 'Austria'},
        {id: 2, name: 'Bob', country: 'Belgium'},
        {id: 3, name: 'Carl', country: 'Canada'},
      ];
    
      const results = [];
    
      // 👇️ can use forEach outside of your JSX code
      // if you need to call a function once for each array element
      employees.forEach((employee, index) => {
        results.push(
          <div key={index}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>
    
            <hr />
          </div>,
        );
      });
    
      // 👇️ or map() directly in your JSX code
  return (
    <div>

{employees.map((employee, index) => {
        return (
          <div key={index}>
            <h2>name: {employee.name}</h2>
            <h2>country: {employee.country}</h2>

            <hr />
          </div>
        );
      })}

      <hr />
      <hr />
      <hr />

      {results}

    </div>
  )
}

export default Example
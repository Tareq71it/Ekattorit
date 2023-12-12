import React from "react";
import { useState, cell } from "react";
import axios from "axios";
import { useEffect } from "react";
import DataTable from "react-data-table-component";

const Table = ({itemsPerPage}) => {
  const [search, setSearch] = useState("");
  const [contries, setContries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  // const pageCount = Math.ceil(filterCountries.length / itemsPerPage);

  const getCountries = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setContries(response.data);
      setFilterCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("Country",contries)

  const colums = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Country Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => (
        <img width={50} height={50} src={row.flag} alt="pic" />
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-primary"
          onClick={() => alert(row.alpha2Code)}
        >
          Edit{" "}
        </button>
      ),
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);
  // for filter
  useEffect(() => {
    const result = contries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCountries(result);
  }, [search]);

  return (
    <DataTable
      title="Countries List"
      columns={colums}
      // data={contries}
      // data={filterCountries}
      data={filterCountries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="450px"
      // selectableRows
      selectableRowsHighlight
      highlightOnHover
      // actions={
      //   <button className='btn btn-sm btn-info'>Export</button>
      // }
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="Search here"
          className="w-25 form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      }
      subHeaderAlign="left"
    />
  );
};

export default Table;

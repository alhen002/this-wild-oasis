import React from "react";
import Select from "./Select.jsx";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get("sortBy") || "name-asc";
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type={"white"}
      onChange={handleChange}
      value={currentValue}
    />
  );
}

export default SortBy;

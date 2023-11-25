import React from "react";
import TableOperations from "../../ui/TableOperations.jsx";
import Filter from "../../ui/Filter.jsx";
function CabinTableOperations(props) {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "all" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;

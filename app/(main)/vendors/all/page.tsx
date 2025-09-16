import { DataTableDemo } from "@/components/Table";
import TableFilterHeader from "@/components/TableFilterHeader";
import React from "react";

const AllVendors = () => {
  return (
    <>
      <TableFilterHeader />
      <DataTableDemo />
    </>
  );
};

export default AllVendors;

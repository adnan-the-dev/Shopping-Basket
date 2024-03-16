import React, { useState } from "react";
import ExportToExcel from "../functionC/Excel";

export default function OrderTracking() {
  const data = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Bob", age: 40 },
  ];

  return (
    <>
      <div>
        <h1>Export to Excel Example</h1>
        <ExportToExcel data={data} fileName="example" sheetName="Sheet1" />
      </div>
    </>
  );
}

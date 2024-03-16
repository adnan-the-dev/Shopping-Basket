import React from "react";
import * as XLSX from "xlsx";

const ExportToExcel = ({ data, fileName, sheetName }) => {
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, fileName + ".xlsx");
  };

  return <button onClick={exportToExcel}>Export to Excel</button>;
};

export default ExportToExcel;

import { useEffect, useState } from "react";
import Table from "../../components/Table";

const CUSCAR = () => {
  const [data, setData] = useState(null);


  return (
    <>
      <div className="page cuscar">
        <h1>CUSCAR </h1>
      </div>
      <div className="page">
        <Table data={data} />
      </div>
    </>
  );
};

export default CUSCAR;

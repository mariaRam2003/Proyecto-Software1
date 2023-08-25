import { useEffect, useState } from "react";
import Table from "../components/Table";

const CUSCAR = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   cuscarView().then((data) => {
  //     setData(data);
  //     console.log("datos", data);
  //   });
  // }, []);
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

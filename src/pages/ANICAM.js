import BasicTable from "../components/BasicTable";
import Table from "../components/Table";
import { anicamView } from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ANICAM.css";

import Uploader from "../components/Uploader";

const ANICAM = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    anicamView().then((data) => {
      setData(data);
      console.log("datos", data);
    });
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="page anicam">
      <h1>DATOS DE ANICAM</h1>
      <button>
        <span>GUIA</span>
      </button>
      <Table data={data} functionName={"update_data_func"} />

      <Uploader />
    </div>
  );
};

export default ANICAM;

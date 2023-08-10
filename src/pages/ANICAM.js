import BasicTable from "../components/BasicTable";
import Table from "../components/Table";
import { anicamView } from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ANICAM.css";
import Uploader from "../components/Uploader";
import { downloadFile } from "../apiRequests";

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
      <Table data={data} functionName={"update_data_func"} />

      <button
        onClick={() => {
          downloadFile();
        }}
      >
        {" "}
        Download{" "}
      </button>

      <Uploader />
    </div>
  );
};

export default ANICAM;

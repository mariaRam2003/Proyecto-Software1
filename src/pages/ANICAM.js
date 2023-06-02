import BasicTable from "../components/BasicTable"
import Table from "../components/Table";
import { anicamView } from "../config/supabaseClient"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./ANICAM.css";

const ANICAM = () => {

  const [data, setData] = useState(null)
  

  useEffect(() => {
    anicamView().then(data => {
      setData(data)    
      console.log('datos',data);  
    })
    
  }, [])

  useEffect(() => {
    if (data && data.length > 0) {
      console.log(data);
    }
  }, [data]);


  return (
    <div className="page anicam">
      <h1>DATOS DE ANICAM</h1>
      <Link to="/registro-anicam">
        <button><span>GUIA</span></button>
        </Link>      
      <Table data = {data} functionName={'update_data_func'}/>  
    </div>

  )
}

export default ANICAM
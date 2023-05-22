import BasicTable from "../components/BasicTable"
import { testQuery } from "../config/supabaseClient"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./ANICAM.css";

const ANICAM = () => {

  const [data, setData] = useState(null)
  //console.log(supabase) //borrar

  useEffect(() => {
    testQuery().then(data => {
      setData(data)      
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
      
      <BasicTable data = {data}/>  
    </div>

  )
}

export default ANICAM
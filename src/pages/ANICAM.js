import supabase from "../config/supabaseClient"
import BasicTable from "../components/BasicTable"
import { testQuery } from "../config/supabaseClient"
import { useEffect, useState } from "react"

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
      <h2>ANICAM</h2>
      <BasicTable data = {data}/>  
    </div>
  )
}

export default ANICAM
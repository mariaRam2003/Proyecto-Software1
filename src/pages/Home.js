import supabase from "../config/supabaseClient"
import BasicTable from "../components/BasicTable"
import { testQuery } from "../config/supabaseClient"
import { useEffect, useState } from "react"

const Home = () => {
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
    <div className="page home">
      <h2>Home</h2>
      <BasicTable data = {data}/>      
      <p></p>
    </div>
  )
}

export default Home
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const anicamView = async () => {
    const { data, error } = await supabase
        .from('anicam_table_view')
        .select('*')        
    
    if (error) console.log('error', error)
    return data
}   

const cuscarView = async () => {
    const { data, error } = await supabase
        .from('Cuscar')
        .select('*')        
    
    if (error) console.log('error', error)
    return data
}   


const insertViewData = async (data, functionName) => {
    console.log('data', data)  
    supabase.rpc(functionName, data)
        .then(response => {
            console.log('response', response)
            
        })
        .catch(error => {
            console.log('error', error)
            alert('Error al actualizar los datos', error)
        })       
}

 
export { anicamView, cuscarView, insertViewData, supabase };
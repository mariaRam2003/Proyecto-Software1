import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

const testQuery = async () => {
    const { data, error } = await supabase
        .from('anicam_table_view')
        .select('*')        
    
    if (error) console.log('error', error)
    return data
}   


const insertAnicamViewData = async (data) => {
    console.log('data', data)  
    supabase.rpc('update_data_func', data)
        .then(response => {
            console.log('response', response)
            
        })
        .catch(error => {
            console.log('error', error)
            alert('Error al actualizar los datos', error)
        })       
}

 
export { testQuery, insertAnicamViewData, supabase };
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

export default supabase
export { testQuery }
import {useState} from 'react'
import axios from 'axios'

// const doFetch = ()=>{
//     setResponse({error: false, isLoading: true, data: null})
//     setTimeout(()=>{
//         setResponse({error: false, isLoading: false, data: {min: 700, max: 1500}})
//     }, 4500)
// }

const useFetch = url =>{

    const[response, setResponse] = useState({error: false, isLoading: false, data: null})

    const doFetch = async (data)=>{
        try{
            setResponse({error: false, isLoading: true, data: null})
            console.log('data', data)
            const response = await axios(url, {
                method: 'post',
                data,
                withCredentials: true
            })
            console.log(response)
            setResponse({error: false, isLoading: false, data: response.data})
        } catch(err){
            setResponse({error: err, isLoading: false, data: null})
        }
    }
    
    return [response, doFetch]
}

export default useFetch
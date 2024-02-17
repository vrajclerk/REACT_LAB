//import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

const ApiData = () => {
    //state variables to hold api response and error
    const[data,setData]=useState(null);
    const[error,seterror]=useState(null);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                //making api call using axios
                const response=await axios.get("https://jsonplaceholder.typicode.com/photos/1");

                setData(response.data);  //setting data in the state variable(Store api response)
                
            }catch(err){   //if any error occurs while making api call then catch block will execute
                seterror(err);     //and setting that error in the error state variable
            }
        };
        fetchData();
    },[]); //empty array as second argument to useEffect hook will make it run only once after the component is mounted   
  return (
    <div>
        {data ?(
            <div>
                <h1>Api Data</h1>
                <h2>{data.title}</h2>
                <img src={data.url} width="300" alt="{data.tittle}"/>
            </div>
        ):
        error ? (
            <div>
                <h1>Something went wrong</h1>
                <h2>{error.message}</h2>
            </div>
        ) : (
            <div>
                <h1>Loading...</h1>
            </div>
        )}
    </div>
  )
}

export default ApiData;

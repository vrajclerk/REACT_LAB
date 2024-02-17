import  { useRef } from 'react'
import { useState } from 'react';
import axios from 'axios';

const ApiDatawithScroll = () => {
    //state variables to hold api response and error
    const[data,setData]=useState(null);
    const[error,seterror]=useState(null);

    //ref for textarea and input field
    const textAreaRef=useRef(null);
    const apiurlInputRef=useRef(null);

    const fetchData=async() =>{
        setData("");
        try{
            const apiurl=apiurlInputRef.current.value;

            const response=await axios.get(apiurl);

            setData(JSON.stringify(response.data));

            if(textAreaRef.current){
                textAreaRef.current.scrollTop=textAreaRef.current.scrollHeight;
            }
            }catch(err) {
                seterror(err);
            }
            apiurlInputRef.current.focus();
        

    };  
  return (
    <div>      {/* Input for API URL */}
    <div>
      <label htmlFor="apiUrl">API URL: </label>
      <input type="text" id="apiUrl" ref={apiurlInputRef} style={{width: "500px"}} />
    </div>

    {/* Button to trigger API call */}
    <button onClick={fetchData}>Fetch Data</button>

    {data ? (
      <div>
        {/* Render textarea with the fetched data */}
        <textarea
          ref={textAreaRef}
          value={data}
          readOnly
          style={{ width: "500px", height: "200px" }}
        />
      </div>
    ) : // Render loading state or error message
    error ? (
      <p>Error: {error.message}</p>
    ) : (
      <p>No data fetched yet.</p>
    )}
  </div>

  );
};

export default ApiDatawithScroll;
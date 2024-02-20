//import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

const NavigationInformation = () => {
    const location=useLocation();
    const[searchParams,setSearchParams]=useSearchParams();
    console.log("location:",location);
    const expertise=searchParams.get('expertise');
  return (
    <div>
    <h1>NavigationInformation</h1>

    {/* location object contains information about the current URL */}
    <p>Locdation Object:{JSON.stringify(location)}</p> 
    
    {/* searchParams object contains information about the query string parameters */}
    <p>Search Param: {JSON.stringify(expertise)}</p> 
    </div>

  )
}

export default NavigationInformation
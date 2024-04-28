function fetchCountries(){
    const continent=document.getElementById("continent").value;
    const url=`https://restcountries.com/v3.1/region/${continent}`;
    fetch(url)
    .then(res=>res.json())
    .then((data)=>{
        const countries=data.map((country)=>country.name.common);
        const countryList=document.getElementById("countryList");
        countryList.innerHTML="";
        countries.forEach((contry)=>{
            const CountryItem =document.createElement("p");
            CountryItem.textContent=contry;
            countryList.appendChild(CountryItem);
        });
        })
    .catch((err)=>{
        console.log("Error fetching Countries:",err);
    });
}
fetchCountries();
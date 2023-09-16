var objData , origData;
const CoronaData = async() => {
   const jsonData = await fetch("https://disease.sh/v3/covid-19/all");
    objData = await jsonData.json();
    origData = [objData]
    //console.log(origData);
    var countryname = document.getElementsByClassName("countryname");
    countryname[0].innerHTML = "Global";
    //console.log(Object.keys(origData[0].Countries).length);
    var newconfirmed = document.getElementsByClassName("newconfirmed");
    newconfirmed[0].innerHTML = origData[0].Global.NewConfirmed;
    var totalconfirmed = document.getElementsByClassName("totalconfirmed");
    totalconfirmed[0].innerHTML = origData[0].Global.TotalConfirmed;
    var newdeath = document.getElementsByClassName("newdeath");
    newdeath[0].innerHTML = origData[0].Global.NewDeaths;
    var totaldeath = document.getElementsByClassName("totaldeaths");
    totaldeath[0].innerHTML = origData[0].Global.TotalDeaths;
    var newrecovered = document.getElementsByClassName("newrecovered");
    newrecovered[0].innerHTML = origData[0].Global.NewRecovered;
    var totalrecovered = document.getElementsByClassName("totalrecovered");
    totalrecovered[0].innerHTML = origData[0].Global.TotalRecovered;
}
CoronaData();
const getData = async () => {
const countryInput = document.getElementById("countryinput").value.toLowerCase();
    if (countryInput === "") {
        alertbox();
            return;
    }
try {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${countryInput}`);
        const data = await response.json();
        if (data.message === "Country not found or doesn't have any cases") {
        alert("Country not found or no data available.");
} else {
        printcases(data);
}
} catch (error) {
        console.error("Error fetching data:", error);
    alert("An error occurred while fetching data. Please try again later.");
}
}
    const printcases = (data) => {
    var countryname = document.getElementsByClassName("countryname");
    countryname[0].innerHTML = data.country;
    var newconfirmed = document.getElementsByClassName("newconfirmed");
    newconfirmed[0].innerHTML = data.todayCases;
    var totalconfirmed = document.getElementsByClassName("totalconfirmed");
    totalconfirmed[0].innerHTML = data.cases;
    var newdeath = document.getElementsByClassName("newdeath");
    newdeath[0].innerHTML = data.todayDeaths;
    var totaldeath = document.getElementsByClassName("totaldeaths");
    totaldeath[0].innerHTML = data.deaths;
    var newrecovered = document.getElementsByClassName("newrecovered");
    newrecovered[0].innerHTML = data.todayRecovered;
    var totalrecovered = document.getElementsByClassName("totalrecovered");
    totalrecovered[0].innerHTML = data.recovered;
}
    const alertbox = () => {
             alert("Enter the country name to check the covid updates in that country");
}
const Reset = () =>{
    CoronaData();
    document.getElementById("countryinput").value = '';
}
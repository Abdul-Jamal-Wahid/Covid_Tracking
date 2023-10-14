var objData, origData;

const CoronaData = async () => {
  try {
    const jsonData = await fetch("https://disease.sh/v3/covid-19/all");
    objData = await jsonData.json();
    origData = [objData];

    // Update global data on your website
    var countryname = document.getElementsByClassName("countryname");
    countryname[0].innerHTML = "Global";
    var newconfirmed = document.getElementsByClassName("newconfirmed");
    newconfirmed[0].innerHTML = origData[0].todayCases;
    var totalconfirmed = document.getElementsByClassName("totalconfirmed");
    totalconfirmed[0].innerHTML = origData[0].cases;
    var newdeath = document.getElementsByClassName("newdeath");
    newdeath[0].innerHTML = origData[0].todayDeaths;
    var totaldeath = document.getElementsByClassName("totaldeaths");
    totaldeath[0].innerHTML = origData[0].deaths;
    var newrecovered = document.getElementsByClassName("newrecovered");
    newrecovered[0].innerHTML = origData[0].todayRecovered;
    var totalrecovered = document.getElementsByClassName("totalrecovered");
    totalrecovered[0].innerHTML = origData[0].recovered;
  } catch (error) {
    console.error("Error fetching global data:", error);
    alert("An error occurred while fetching global data. Please try again later.");
  }
}

const getData = async () => {
  const countryInput = document.getElementById("countryinput").value.toLowerCase();
  if (countryInput === "") {
    alertbox();
    return;
  }

  try {
    const response = await fetch(`https://disease.sh/v3/covid-19/countries/${countryInput}`);
    const data = await response.json();
    if (data.message && data.message === "Country not found or doesn't have any cases") {
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
  alert("Enter the country name to check the COVID-19 updates in that country");
}

const Reset = () => {
  CoronaData();
  document.getElementById("countryinput").value = '';
}

// Initial data load
CoronaData();

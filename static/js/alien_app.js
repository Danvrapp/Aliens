// from alien_data.js
var tableData = data; //assign all data to a temp variable so as not to edit data file1

var tbody = d3.select("tbody");  //Store the body of the table
var city = d3.select("#city");  //Capture the user's city to search for 
var date = d3.select("#datetime"); //Capture the user's date to search for
var state = d3.select("#state"); //Capture the user's state to search for
var country = d3.select("#country"); //Capture the user's country to search for
var shape = d3.select("#shape"); //Capture the user's shape to search for
var form = d3.select("#alien_form"); //Capture name of the form to reset
var reset = d3.select("#reset_btn");  // listener to reset form data
var flag = 0;  //flag to check if user data was found...or not

//  Initial population of page with all data
resetData(); 

// Put column header values on the table
function tableHeaders() {
    var row = tbody.append("tr");
    for (var i = 0; i < 7; i++) {
        var cell = row.append("td");
        switch(i) {
            case 0:  // if (x === 'value1')
              cell.text('Date');          
              break;
            case 1:  // if (x === 'value2')
              cell.text("City");
              break;
            case 2:  // if (x === 'value2')
              cell.text("State");
              break;
            case 3:
              cell.text("Country");
              break;
            case 4:
              cell.text("Shape");
              break;
            case 5:
              cell.text("Duration");
              break;
            default:
              cell.text("Comments");
        }
    }
}

//  After filtering, user can (re)display all data
function resetData() {
    d3.selectAll("tr").remove();  //remove any data currently in the table
    tableHeaders();  //add table headers back in
    data.forEach(function(sighting) {
        var row = tbody.append("tr");  //add a row to the table 
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");  //add a column to the row
            cell.text(value);  //add data to the cell
        });     
    }); //End loop of each record
}

// Filter by date
function filterDate(event) {
    var tbody = d3.select("tbody"); // select the body of the UFO table
    var theDate = d3.event.target.value; // store user-selected data
    d3.selectAll("tr").remove();  // remove any data currently in the table
    tableHeaders();  //add table headers back in
    tableData.forEach(function(sighting) {
        if (sighting.datetime == theDate) { //iterate through data looking to match user's date
            flag = 1;  //found data!
            var row = tbody.append("tr");  //add a row to the (new) table
            Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td"); // add a column to the row
                cell.text(value);  //add data to the cell
            });                 
        } //End loop of each record        
    });
    if (flag == 0) {  // if date not found, return message
        row = tbody.append("tr");
        var cell = row.append ("td");
        cell.text("No data found for date: " + theDate);
        row = tbody.append("tr");
        cell = row.append("td");
        cell.text("try using m/d/yyyy for single digit months/days!");
    }    
    flag = 0; //reset flag
    document.getElementById("alien_form").reset();  //reset the form
}  //end filterDate function

// Filter by city
function filterCity(event) {
    var tbody = d3.select("tbody");     // select the body of the UFO table
    var theCity = d3.event.target.value.toLowerCase(); //store user-selected city as lowercase
    d3.selectAll("tr").remove(); //remove any data currently in the table
    tableHeaders();  //add table headers back in
    tableData.forEach(function(sighting) {
        if (sighting.city == theCity) { //iterate through data looking to match user's city
            flag = 1; //found data!
            var row = tbody.append("tr"); //add a row to the (new) table
            Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td"); //add a column to the row
                cell.text(value);  // add data to the cell
            });                 
        } //End loop of each record
    });
    if (flag == 0) {  // if city not found, return message
        row = tbody.append("tr");
        var cell = row.append ("td");
        cell.text("No data found for city: " + theCity);
    }
    flag = 0; //reset flag
    document.getElementById("alien_form").reset();  //reset the form
} //end filterCity function

// Filter by state
function filterState() {
    var tbody = d3.select("tbody");  // select the body of the UFO table    
    var theState = d3.event.target.value.toLowerCase();  //store user-selected state as lowercase
    d3.selectAll("tr").remove();  //remove any data currently in the table
    tableHeaders();  //add table headers back in
    tableData.forEach(function(sighting) {
        if (sighting.state == theState) {  //iterate through data looking to match user's state
            flag = 1;  // found data!
            var row = tbody.append("tr");  //add a row to the (new) table
            Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td");  //add a column to the row
                cell.text(value);  // add data to the cell
            });                 
        } //End loop of each record        
    });
    if (flag == 0) {  // if state not found, return message
        row = tbody.append("tr");
        var cell = row.append ("td");
        cell.text("No data found for state: " + theState);
        row = tbody.append("tr");
        var cell = row.append ("td");
        cell.text("Try using a 2-letter abbrievation instead.");
    }
    flag = 0;  //reset flag
    document.getElementById("alien_form").reset();   //reset the form 
}  // end filterState function

// Filter by country
function filterCountry() {
    var tbody = d3.select("tbody");// select the body of the UFO table
    var theCountry = d3.event.target.value.toLowerCase(); //store user-selected country as lowercase
    d3.selectAll("tr").remove(); //remove any data currently in the table
    tableHeaders();  //add table headers back in
    tableData.forEach(function(sighting) {
        if (sighting.country == theCountry) { //iterate through data looking to match user's country
            flag = 1; //found data!
            var row = tbody.append("tr"); //add a row to the (new) table
            Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td");//add a column to the row
                cell.text(value);//add data to the cell
            }); 
        } //End loop of each record       
    });
    if (flag == 0) {  // if country not found, return message
        row = tbody.append("tr");
        var cell = row.append ("td");
        cell.text("No data found for country: " + theCountry);
    }
    flag = 0;  //reset flag    
    document.getElementById("alien_form").reset();
} //end loop to check for match of country

// Filter by shape
function filterShape(event) {
    var tbody = d3.select("tbody"); // select the body of the UFO table
    var theShape = d3.event.target.value.toLowerCase();  //store user-selected shape as lowercase
    d3.selectAll("tr").remove();  //remove any data currently in the table
    tableHeaders();  //add table headers back in
    tableData.forEach(function(sighting) {
        if (sighting.shape == theShape) {  //iterate through data looking to match user's shape
            var row = tbody.append("tr");  //add a row to the (new) table
            Object.entries(sighting).forEach(function([key, value]) {
                var cell = row.append("td");  //add a column to the row
                cell.text(value); //add data to the cell
            });                 
        } //End loop of each record        
    });
    if (flag == 0) {  // if shape not found, return message
        row = tbody.append("tr");
        var cell = row.append ("td");
        cell.text("No data found for the shape: " + theShape);
    }
    flag = 0;  //reset flag        
    document.getElementById("alien_form").reset();
}//end loop to check for match of shape

//Listeners...
state.on("change", filterState);  // If user searches by state
city.on("change", filterCity);  // If user searches by city
country.on("change", filterCountry);  // If user searches by country
shape.on("change", filterShape);  //  If user searches by shape
date.on("change", filterDate);  //  If user searches by date
reset.on("click", resetData);  //  If user wants to see all data

//Deny attempt to reset page & remove data  
form.on("click", function() {d3.event.preventDefault();} )  
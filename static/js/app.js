// from data.js
var tableData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody");

function loadData(rc){
rc.forEach(UFOdata => {    
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(function([key, value]) {
      //console.log(key, value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
};


var filter = d3.select("#filter-btn");

//tbody = tbody.empty();

filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  d3.selectAll("td").remove()

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  var filData = tableData.filter(sighting => sighting.datetime === inputValue);

  loadData(filData);
    
//   filData.forEach(UFOdata => {    
//     var row = tbody.append("tr");
//     Object.entries(UFOdata).forEach(function([key, value]) {
//       //console.log(key, value);
//       var cell = tbody.append("td");
//       cell.text(value);
//     });
//   });
});



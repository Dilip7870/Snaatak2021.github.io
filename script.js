function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


if (window.addEventListener) {
    document.addEventListener('click', function (e) {
         if (e.target.id.indexOf('br') === 0) {
             alert(e.target.innerHTML);
             return true;
             }
             });
             }
             let tableFromJson = () => {
                // the json data.   
                 const birds = [ {"Sl.No.": "1.", "SI.No.": "Student NameKAJAL KUMARI <br> Father nameRANJIT KUMAR SINGH",
                  "Bank Detail": "Account Number XXXXXXXX5348 <br> IFSC Code CNRB0001500 ", "Account Status":" Verifed",
                   "Residential Detail": "Certificate Number BRCCO/2023/764085",  "Residential Status": "Not Verified",
                   " Verification Status": "Name Verified Verified <br> Aadhar Verified Verified <br> Bank Verified Verified <br> Residence Not Verified",
                    "Final Status":"Satus:Payment Not Done <br> Payment Reason: Rejected For Domiclle Certificate"}
                   ];
                let col = []; 
                for (let i = 0; i < birds.length; i++) { 
                    for (let key in birds[i]) {
                     if (col.indexOf(key) === -1) {
                         col.push(key);
                        }
                         } }
 // Create a table.   
  const table = document.createElement("table");
// Create table header row using the extracted headers above.    
let tr = table.insertRow(-1);
 // table row.
 for (let i = 0; i < col.length; i++){
     let th = document.createElement("th"); 
     // table header.     
      th.innerHTML = col[i];
       tr.appendChild(th);
     }
         for (let i = 0; i < birds.length; i++) {
           tr = table.insertRow(-1);
                for (let j = 0; j < col.length; j++) {
                     let tabCell = tr.insertCell(-1);
                      tabCell.innerHTML = birds[i][col[j]];
                       if (col[j] === 'Bird') {
                         tabCell.setAttribute('id', 'br_' + birds[i][col[j]]);
                         }} }
 // Add table.    
 const div = document.getElementById('showData');
 div.innerHTML = "";
  div.appendChild(table);
}

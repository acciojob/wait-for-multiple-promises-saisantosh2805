window.onload = function (){
    const outputElement=document.getElementById("output");
// insert loading cell
    const loadingrow=document.createElement("tr"); 
    loadingrow.setAttribute("id", "loading");
    const loadingcell=document.createElement("td"); 
loadingcell.setAttribute("colspan","2");
loadingcell.textContent="loading...";

loadingrow.appendChild(loadingcell);
outputElement.appendChild(loadingrow);
// let newRow = document.createElement("tr"); // Create a new row
// newRow.appendChild(loadingcell); // Add the cell to the row

// let tablebody = document.querySelector("tbody"); // Select the tbody
// tablebody.appendChild(newRow); 
const startTime = Date.now();

function createPromise(i){
    const delay =Math.floor(Math.random()*2000)+1000;
const promiseStartTime=Date.now();
return new Promise((resolve) => {
    setTimeout(()=>{
        const timetaken=(Date.now() - promiseStartTime)/1000;
        resolve({name:"promise"+i,timeTaken:timetaken.toFixed(3)});

    },delay);
});
}
const promises=[];
for(let i =1;i<=3;i++){
    promises.push(createPromise(i));
}
Promise.all(promises).then((results)=>
{
    const endTime=Date.now();
const totalTime=(endTime-startTime)/1000;
if(outputElement.contains(loadingrow)){
    outputElement.removeChild(loadingrow);
}
results.sort((a, b) => a.name.localeCompare(b.name));

// Add rows for each promise
results.forEach((result) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = result.name;
  row.appendChild(nameCell);

  const timeCell = document.createElement("td");
  timeCell.textContent = result.timeTaken;
  row.appendChild(timeCell);
  outputElement.appendChild(row);
});

// Add the total row
const totalRow = document.createElement("tr");

const totalNameCell = document.createElement("td");
totalNameCell.textContent = "Total";
totalRow.appendChild(totalNameCell);

const totalTimeCell = document.createElement("td");
totalTimeCell.textContent = totalTime.toFixed(3);
totalRow.appendChild(totalTimeCell);

outputElement.appendChild(totalRow);
});
};

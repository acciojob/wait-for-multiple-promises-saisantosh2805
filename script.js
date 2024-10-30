//your JS code here. If required.
window onloading=function() {
	const outputElement=document.getElementByid("output");
const loadingRow=document.createElement("tr");
	const loadingcell=document.createElement("td");
	loadingcell.setAttribute("colspan","2");
	loadingcell.textcontent"Loading...";
	loadingrow.appendchild(loadingcell);
	outputElement.appendchild(loadingRow);

	const startTime=Date.now();
	function createpromise(i){
		const delay=(math.random()*2000)+1000;
		const promisestartTime=Date.now();

		return new promise((resolve)=>{
			setTimeout(()=>{
				const timetak0en=(Date.now()-promisestartTime)
				resolve({
					name:"promise"+i,timetaken:timetaken.tofixed(3)});
				
				},delay);
			
			})
		}
	const promises=[];
	for (let i=1;i<=3;i++){
		promise.push(createpromise(i)){
Promise.all(promises).then((results) => {
    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000; // In seconds

    // Remove the loading row
    outputElement.removeChild(loadingRow);

    // Sort results by promise name
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
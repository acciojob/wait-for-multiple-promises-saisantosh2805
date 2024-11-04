
 
 
 
document.addEventListener("DOMContentLoaded", () => {
  let output = document.getElementById("output");
 
  // Show loading text by default
  let loadingRow = document.createElement("tr");
  loadingRow.id = "loading";  // Add the id to the loading row
  loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;
  output.appendChild(loadingRow);
 
  // Function to create a promise that resolves after a random time between 1 and 3 seconds
  function createPromise(promiseName) {
    let timeTaken = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => resolve({ name: promiseName, timeTaken: timeTaken.toFixed(3) }), timeTaken * 1000);
    });
  }
 
  // Create three promises
  let promise1 = createPromise("Promise 1");
  let promise2 = createPromise("Promise 2");
  let promise3 = createPromise("Promise 3");
 
  // Capture the start time to calculate total time taken
  let startTime = performance.now();
 
  // Use Promise.all to wait for all promises to resolve
  Promise.all([promise1, promise2, promise3]).then((results) => {
    // Remove loading row
    output.innerHTML = "";
 
    // Populate table with each promise's results
    results.forEach((result, index) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <td>${result.name}</td>
        <td>${result.timeTaken}</td>
      `;
      output.appendChild(row);
    });
 
    // Calculate total time taken to resolve all promises
    let totalTime = (performance.now() - startTime) / 1000; // Convert milliseconds to seconds
 
    // Add a final row with the total time
    let totalRow = document.createElement("tr");
    totalRow.innerHTML = `
      <td>Total</td>
      <td>${totalTime.toFixed(3)}</td>
    `;
    output.appendChild(totalRow);
  });
});
//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){

function createPromise(){
	return new Promise((resolve,_reject)=>{
		const time = (Math.random() * 2 + 1).toFixed(3);
		setTimeout(()=>resolve(time),time*1000);
});
}
  




	let out = document.getElementById("output");
	
	Promise.all([createPromise(),createPromise(),createPromise()]).then((values)=>{
		
		
		out.innerHTML=``;
		let totalTime=0;
		values.forEach((time,index)=>{
			out.innerHTML += `
			<tr>
			<td>Promise ${index+1}</td>
			<td>${Math.floor(time)}</td>
			</tr>
			`
			totalTime= Math.max(totalTime,time);
		});

		out.innerHTML += `
			<tr>
				<td>Total</td>
				<td>${totalTime}</td>
			</tr>
			`


	}).catch((e)=>{
		console.log("error ",e);
	});



});
//your JS code here. If required.
let para=document.querySelector("#timer")

function currentTime(){
	let date= new Date();
	let hours=date.getHours();
	let min=date.getMinutes();
	let secs=date.getSeconds();
	let day=date.getDay();
	let month=date.getMonth();
	let years=date.getFullYear();

	let arrOfTime=convertTime(hours,min,secs);
	for(let i=0;i<=2;i++){
		arrOfTime[i]=addZero(arrOfTime[i])
	}
	
	let time=`${arrOfTime[0]}:${arrOfTime[1]}:${arrOfTime[2]}  ${arrOfTime[3]}`

	// return `${month}/${day}/${years}, ${time}`
	para.innerText= `${month}/${day}/${years}, ${time}`
}
setInterval(currentTime,1000);

function convertTime(hr, min, sec){
	if(hr>12){
		hr=hr-12;
		// return `${hr}:${min}:${sec} PM`;
		return [hr, min, sec, "PM"]
	}
	else if(hr==0){
		// return `12:${min}:${sec} AM`
		return [12, min, sec, "AM"]
	}
	else if(hr<12){
		// return `${hr}:${min}:${sec} AM`
		return [hr, min, sec, "AM"]
	}
	else if(hr==12){
		// return `${hr}:${min}:${sec} PM`
		return [hr, min, sec, "PM"]
	}
}

function addZero(k) {
	if(k<10){
		return ("0"+k)
	}else{
		return k
	}
}
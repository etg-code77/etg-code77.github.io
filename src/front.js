// status
window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus(event){
	let status = document.querySelector('#cstat')
	if(navigator.onLine){
		status.style.color = 'chartreuse'
		status.innerText = 'online'
	}else{
		status.style.color = 'red'
		status.innerText = 'offline'
	}
}
updateStatus(null);

// shifter
function nativep(){
	if(window.navigator.standalone === true){
		window.location.href = 'app.html'
	}else{
		alert("You must be in native mode to use the app!")
	}
}

// scout
{
	let scout = document.querySelector('#sip')
	async function sip(scout){
		scout.innerText = 'Refreshing...'
		let res = await fetch("https://jsonip.com").then(res=>res.json())
		scout.innerText = res.ip
	}
	setInterval(x=>{sip(scout)}, 60000)
	sip(scout)
}

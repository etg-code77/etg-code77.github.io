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

// shifter p1
if(window.navigator.standalone === true){
	document.body.insertAdjacentHTML('beforeend', `<h3>Standalone mode</h3><p>The app is installed. \nThere'll be magic in a sec.</p>`)
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

// shifter p2
if(window.navigator.standalone === true){
	window.location.href = 'app.html'
}

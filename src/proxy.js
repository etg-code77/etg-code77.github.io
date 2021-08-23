/**
 * PROXY.JS
 * it's in the name.
 */

if ( "serviceWorker" in navigator ) {
    navigator.serviceWorker.register( "./src/proxy.sw.js" );
}

class Proxy {
	constructor() {

	}

	async fromURL(url) {
		let content = await fetch(url, {method:'GET'}).then(res=>res.text())// req proxy server here

		// the service worker handles outgoing requests
	}

	async fromQuery() {
		let host = this.__getqueryparam('host');
		let res;
		host 
			? res=await this.fromURL(decodeURIComponent(host)) 
			: res=await this.fromURL(prompt('No query, enter url', 'http://'))
		return res
	}

	__getqueryparam(param) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] == param) { return pair[1]; }
		}
		return (false);
	}

	__url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
}
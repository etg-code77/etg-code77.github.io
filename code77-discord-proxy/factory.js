/**
 * FACTORY.JS
 * Creates a Code77 instance with your token
 */

class C77Factory {
	constructor(inputArea, textArea) {
		this.input = inputArea;
		this.msgl = textArea;


		this.rdelay = localStorage.getItem('C77FRefresh')
		(typeof this.rdelay == undefined) && (localStorage.setItem('C77FRefresh', 5));

		this.token = localStorage.getItem('C77FToken');
		(typeof this.token != 'string') && (localStorage.setItem('C77FToken', prompt('Token not found, please enter:')));
	}

	// unchanging
	__chid = ''

	// Setting and changing params
	__setval(v, x) {
		x
			? localStorage.setItem(`C77F${v}`, x)
			: localStorage.setItem(`C77F${v}`, prompt(`Please enter new ${v} :`))
	}
	setToken(x) { this.__setval('Token', x) }
	setRefresh(x) { this.__setval('Refresh', x) }

	// API
	api = {
		async __request(p) {
			p.body || (p.body = undefined);

			let data = await fetch(`https://discordapp.com/api/v9${p.url}`, {
						method: p.method,
						body: p.body,
						headers: {
							'Authorization': p.token,
							'Content-Type': 'application/json'
						}
					}).then(res=>res.json())
					.catch(e => {
						console.error("[Dissension] Discord API Error:" + e)
					});
			return data
		},
		__formatMessage(message) {
			return new DOMParser.parse(`<div><h5>${message.author.username}</h5><p>${message.content}</p></div>`, 'application/xml')
		},
		refresh() {

		},
		send(text) {

		}
	}

}
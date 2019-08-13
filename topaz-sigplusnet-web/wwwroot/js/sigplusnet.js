class sigPlusNet {
	constructor() {
		this._baseUrl = "http://localhost:5555/SigPlus/";
	}

	postData(url = '', data = {}) {
	// Default options are marked with *
	return fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: JSON.stringify(data), // body data type must match "Content-Type" header
	})
		.then(response => response.json()); // parses JSON response into native JavaScript objects 
}

	sigWebGetProperty(prop) {
		postData(this._baseUrl + prop, { answer: 42 })
			.then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
			.catch(error => console.error(error));

		var xhr = SigWebcreateXHR();

		if (xhr) {
			xhr.open("GET", baseUri + prop + "?noCache=" + generateUUID(), false);
			xhr.send(null);
			if (xhr.readyState == 4 && xhr.status == 200) {
				return xhr.responseText;
			}
		}
		return "";
	}

	getTabletState() {
		var Prop = "TabletState";

		Prop = Prop;
		return SigWebGetProperty(Prop);

	}

	setTabletState() {

	}
}
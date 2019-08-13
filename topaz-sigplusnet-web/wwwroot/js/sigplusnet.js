class sigPlusNet {
	constructor() {
		this._baseUrl = "https://localhost:44339/api/SigPlus/GetTabletState"; //?name=GetTabletState
	}

	// In order to make this compatible with IE and older browsers, we will use XMLHTTPRequest
	// so all the creation can be the same

	// generic methods
	createXHR() {
		try { return new XMLHttpRequest(); } catch (e) { }
		try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) { }
		try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e) { }
		try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) { }
		try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { }

		console.log("XMLHttpRequest not supported");
		return null;
	}

	postData(url, data, callback) {
		const xhr = new XMLHttpRequest();
		if (xhr) {
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			xhr.withCredentials = true;
			xhr.onreadystatechange = callback;
			xhr.send(data);
		}
	}
	getData(url, callback) {
		const xhr = new XMLHttpRequest();
		if (xhr) {
			xhr.open('GET', url, true);
			xhr.withCredentials = true;
			xhr.onload = callback;
			xhr.send();
		}
	}

	// methods for specific properties
	getTabletState() {
		var Prop = "TabletState";

		Prop = Prop;
		return SigWebGetProperty(Prop);
	}
	setTabletState() {
		return this.postData(this._baseUrl, { name: "GetTabletState" })
			.then(data => console.log(JSON.stringify(data)))
			.catch(error => console.error(error));
	}
}
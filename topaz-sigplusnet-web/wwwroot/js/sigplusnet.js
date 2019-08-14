function sigPlusNet() {

	//constructor() {
	//	this._baseUrl = "https://localhost:44339/api/SigPlus/GetTabletState"; //?name=GetTabletState
	//}

	_baseUrl = "https://localhost:44339/api/SigPlus/GetTabletState";
	// In order to make this compatible with IE and older browsers, we will use XMLHTTPRequest
	// so all the creation can be the same

	// generic methods
	function createXHR() {
		try { return new XMLHttpRequest(); } catch (e) { console.log(e) }
		try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) { console.log(e) }
		try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); } catch (e) { console.log(e) }
		try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) { console.log(e) }
		try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) { console.log(e) }
		console.log("XMLHttpRequest not supported");
		return null;
	}

	function postData(url, data, callback) {
		const xhr = new XMLHttpRequest();
		if (xhr) {
			xhr.open('POST', url, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			xhr.withCredentials = true;
			xhr.onreadystatechange = callback;
			xhr.send(data);
		}
	}

	function getData(url, callback) {
		const xhr = new XMLHttpRequest();
		if (xhr) {
			xhr.open('GET', url, true);
			xhr.withCredentials = true;
			xhr.onload = callback;
			xhr.send();
		}
	}

	// methods for specific properties
	//function getTabletState() {
	//	var Prop = "TabletState";

	//	Prop = Prop;
	//	return SigWebGetProperty(Prop);
	//}
	function setTabletState() {
		this.postData(this._baseUrl, { name: "GetTabletState" });
		//ES6 then
		//return this.postData(this._baseUrl, { name: "GetTabletState" })
		//	.then(data => console.log(JSON.stringify(data)))
		//	.catch(error => console.error(error));
	}
}
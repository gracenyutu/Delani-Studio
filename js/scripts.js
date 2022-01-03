function doForm () {
	var data = new FormData();
	data.append("name", document.getElementById("name").value);
	data.append("email", document.getElementById("email").value);
}

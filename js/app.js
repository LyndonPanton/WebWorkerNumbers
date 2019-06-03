(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	if (window.Worker) {
		init();
	} else {
		document.getElementsByTagName("h1")[0].textContent = "Error: Web Workers not supported";
	}

	function init() {
		console.log("ok");
	}
}());
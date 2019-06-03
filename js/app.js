(function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	if (window.Worker) {
		init();
	} else {
		document.getElementsByTagName("h1")[0].textContent = "Error: Web Workers not supported";
	}

	function init() {
		// Prime
		let primeStart = document.getElementById("pattern-prime-start");
		let primeStop = document.getElementById("pattern-prime-stop");

		primeStart.addEventListener("click", function() {
			console.log("prime worker started")
		});

		primeStop.addEventListener("click", function() {
			console.log("prime worker stopped");
		});


		// Fibonacci
		let fibonacciStart = document.getElementById("pattern-fibonacci-start");
		let fibonacciStop = document.getElementById("pattern-fibonacci-stop");

		fibonacciStart.addEventListener("click", function() {
			console.log("fibonacci worker started");
		});

		fibonacciStop.addEventListener("click", function() {
			console.log("fibonacci worker stoppped");
		});
	}
}());
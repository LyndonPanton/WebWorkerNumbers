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
		let primeContainer = document.getElementById("pattern-prime-container")
		let primeWorker;

		primeStart.addEventListener("click", function() {
			// console.log("prime worker started");

			primeWorker = new Worker("/workers/prime.js");
			primeWorker.addEventListener("message", function(event) {
				let number = document.createElement("p");
				let numberText = document.createTextNode(event.data);
				number.appendChild(numberText);
				primeContainer.appendChild(number);
			})
		});

		primeStop.addEventListener("click", function() {
			console.log("prime worker stopped");
		});


		// Fibonacci
		let fibonacciStart = document.getElementById("pattern-fibonacci-start");
		let fibonacciStop = document.getElementById("pattern-fibonacci-stop");
		let primeContainer = document.getElementById("pattern-fibonacci-container")
		let fibonacciWorker;

		fibonacciStart.addEventListener("click", function() {
			// console.log("fibonacci worker started");

			fibonacciWorker = new Worker("/workers/fibonacci.js");
			fibonacciWorker.addEventListener("message", function(event) {
				let number = document.createElement("p");
				let numberText = document.createTextNode(event.data);
				number.appendChild(numberText);
				fibonacciContainer.appendChild(number);
			})
		});

		fibonacciStop.addEventListener("click", function() {
			console.log("fibonacci worker stoppped");
		});
	}
}());
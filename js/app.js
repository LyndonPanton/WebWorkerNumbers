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

			primeWorker = new Worker("./js/workers/prime.js");
			primeWorker.addEventListener("message", function(event) {
				let number = document.createElement("p");
				number.classList.add("prime-line");
				let numberText = document.createTextNode(event.data);
				number.appendChild(numberText);
				primeContainer.appendChild(number);
			})
		});

		primeStop.addEventListener("click", function() {
			primeWorker.terminate();
		});


		// Fibonacci
		let fibonacciStart = document.getElementById("pattern-fibonacci-start");
		let fibonacciStop = document.getElementById("pattern-fibonacci-stop");
		let fibonacciContainer = document.getElementById("pattern-fibonacci-container")
		let fibonacciWorker;

		fibonacciStart.addEventListener("click", function() {

			fibonacciWorker = new Worker("./js/workers/fibonacci.js");
			fibonacciWorker.addEventListener("message", function(event) {
				let number = document.createElement("p");
				let numberText = document.createTextNode(event.data);
				number.appendChild(numberText);
				fibonacciContainer.appendChild(number);
			})
		});

		fibonacciStop.addEventListener("click", function() {
			primeWorker.terminate();
		});
	}
}());
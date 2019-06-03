var n = 1;
while (true) {
	++n;
	for (var i = 0; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			continue;
		}
		postMessage(n);
	}
}
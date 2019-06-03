var f0 = 0;
var f1 = 1;
var fN;
fibonacci: while (true) {
	fN = f0 + f1;
	f0 = f1;
	f1 = fN;
	postMessage(fN);
}
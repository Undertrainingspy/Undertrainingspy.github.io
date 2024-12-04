function increaseFontSize() {
	alert("Hello, world!"); //alert


	document.getElementById("text").style.fontSize = "24pt";
}

function toggleStyle() {
	let textArea = document.getElementById("text");
	if (document.getElementById("fancyShmancy").checked) {
		// fancy styles
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		//  boring styles
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function addMoo() {
	let textArea = document.getElementById("text");
	let text = textArea.value.toUpperCase();
	let sentences = text.split(".");

	// Add "-Moo" to the last word of each sentence
	for (let i = 0; i < sentences.length; i++) {
		let words = sentences[i].trim().split(" ");
		if (words.length > 0) {
			words[words.length - 1] += "-Moo";
			sentences[i] = words.join(" ");
		}
	}
	textArea.value = sentences.join(". ");
}

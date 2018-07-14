document.getElementById("convert-button").addEventListener('click', function() { 
	var inputText  = document.getElementById('input-area').value;
	var separator  = document.getElementById('separator-input').value;
	var outputArea = document.getElementById('output-area');

	inputText = inputText.replace(/\\"/g, '"');
	inputText = inputText.replace(/(\[[\s]*")/g, '');
	inputText = inputText.replace(/("[\s]*\])/g, '');
	inputText = inputText.replace(/(\"[\s]*,[\s]*")/g, separator);

	outputArea.value = inputText;
});
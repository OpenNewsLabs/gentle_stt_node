
/**
* Module to parse the gentleJson json into interactive transcription json 
*/

function parse(gentleJson){

var lines = [];

	for (var i = 0; i<gentleJson.words.length; i++){
		//console.log(JSON.stringify(gentleJson.words[i], null, 4))
		var word = {};
		word.id = i;
		word.text = gentleJson.words[i].alignedWord;
		word.startTime = gentleJson.words[i].start;
		word.endTime = gentleJson.words[i].end;

		lines.push(word);
	}
	return lines;
// console.log(JSON.stringify(lines, null, 4))
}




module.exports = parse;
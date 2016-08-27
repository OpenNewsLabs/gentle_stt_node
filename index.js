var gentle = require("./package.json")

//console.log(JSON.stringify(gentle, null, 4))
var lines = [];

for (var i = 0; i<gentle.words.length; i++){
	//console.log(JSON.stringify(gentle.words[i], null, 4))
	var word = {};
	console.log(i)
	word.id = i;
	word.text = gentle.words[i].alignedWord;
	word.startTime = gentle.words[i].start;
	word.endTime = gentle.words[i].end;

	lines.push(word);

	// console.log(JSON.stringify(gentle.words[i].alignedWord))

	// console.log(JSON.stringify(gentle.words[i].start))
	// console.log(JSON.stringify(gentle.words[i].end))
	// console.log("---------")
}


console.log(JSON.stringify(lines, null, 4))



// ```
// [
//         {
//           "id": 0,
//           "speaker": "Unamed Speaker 1",
//           "paragraph": [
//             {
//               "line": [
//                 {
//                   "id": 0,
//                   "text": "good",
//                   "startTime": 0.1,
//                   "endTime": 0.29
//                 },
//                 ...
// ```

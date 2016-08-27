var request = require('request');
var fs = require('fs');

var url = "http://localhost:8765/transcriptions?async=false";

//curl -F "audio=@norman_door_trimmed2.mp4.wav"  "http://localhost:8765/transcriptions?async=false"

function send_to_watson(file, callback) {
console.log("################# .send_to_watson")
  fs.readFile(file, function(error, data) {
    if (error) {
      console.log(error);
      return false;
    }

    var options = {
      headers: {
        'Content-Type': 'multipart'
      },
      // qs: {
      //   timestamps: 'true',
      //   continuous: 'true',
      //   inactivity_timeout: '-1'
      // },
      // auth: {
      //   user: keys.username,
      //   pass: keys.password
      // },
      formData: {
        audio: fs.createReadStream(__dirname + '/norman_door_trimmed2.mp4.wav')
      }
    };

    request.post(url, options, function(error, response, body) {
      if (error) console.log(error);

      // var parsed = parse(JSON.parse(body));
      if (typeof callback !== 'undefined') {
            // fs.writeFileSync("./tmp/tmp.watson.tramscription.json",JSON.stringify(JSON.parse(body) ))
        callback(JSON.parse(body));
      }
    });
  });
}

module.exports = send_to_watson;

////
// var send_to_watson = require("./send_to_watson.js");

var demo_audio  ="/Users/Asari/Desktop/transcription/norman_door_trimmed2.mp4.wav";



send_to_watson(demo_audio,function(watsonSttJson){
  // console.log("finished!!!!")
  console.log(JSON.stringify(watsonSttJson, null, '\t'))
})
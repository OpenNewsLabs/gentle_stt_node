var send_to_gentle = require("./send_to_gentle.js");

var demo_audio  ="/Users/pietropassarelli/Dropbox/CODE/Vox/TBVE_components/3_transcription_analyses/gentle_stt_node/norman_door_trimmed.mp4.wav";


send_to_gentle(demo_audio,function(watsonSttJson){
  // console.log("finished!!!!")
  console.log(JSON.stringify(watsonSttJson, null, '\t'))
})
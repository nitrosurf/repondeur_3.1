exports.action = function(data, callback, config, SARAH){

config = config.modules.repondeur;

  
  if (!config.id)
  {
    console.log("Missing Meteo config in prop file");
    callback({'tts' : 'configuration invalide'});
    return;
  }
  
var fs = require('fs');
  var clog = console.log;
var dir2read = './plugins/mail/speech/';

fs.readdir(dir2read, function(err, flist){
   if (err) {
      clog('Error reading directory ' + dir2read);
      clog(err);
      return;
   }
   var elemNum = 0;
   var ProcessEntry = function(entry){
      clog('Processing a directory entry: ' + entry);
   }
   var DirIterator = function(){
      ProcessEntry(flist[elemNum]);
      elemNum++;
      if (elemNum < flist.length) process.nextTick(DirIterator);
     
       }
   
   
  var fichier = 'medias/4.wav';
  
 
  
});
  
  fs.open('medias/4.wav','r', function(err, flist){
    console.log(flist);
  });
  callback({'tts' : ''});
    
  return;
}
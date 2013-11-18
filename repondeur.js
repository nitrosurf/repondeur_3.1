exports.action = function(data, callback, config, SARAH){

config = config.modules.repondeur;
  
   
if (data.nombr == 'nombre'){
  
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
   
   var tta = parse(flist.length);
   callback({'tts': tta});
   
});
    
 var parse = function(flist)
{
  var tta = "";
     tta += 'Tu as '+flist+' messages sur ton répondeur.';
     console.log(tta);
return tta;  
  }
    
 }


  
    if (data.mess == 'lire'){
  
var fs = require('fs'); 
var clog = console.log; 
var dir2read = './plugins/mail/speech/'; 

fs.readdir(dir2read, function(err, flist) { // * fonction pour rechercher dans le dossier 
  if (err) { 
    clog('Error reading directory ' + dir2read); 
    clog(err); 
    return; 
  } 
  var elemNum = 0; 
  var ProcessEntry = function(entry) { 
    clog('Processing a directory entry: ' + entry); 
  } 
  var DirIterator = function() { 
    ProcessEntry(flist[elemNum]); 
    elemNum++; 
    if (elemNum < flist.length) process.nextTick(DirIterator); 
  } 

  lisMessage(flist, "") ;
 

  callback({}); 
}); 

// *** definition de la phrase de callback 
var parse = function(jour, mois, annee, heure, minute, numero) { 
  var tts = ""; 
  tts += 'Message reçu le ' + jour + ' ' + mois + ' ' + annee + ' à ' + heure + ' ' + minute + ' du ' + numero; 

  return tts; 
} 

function lisMessage(flist) { 
  if (flist.length > 0) { 
    var nom = flist.shift() // on récupére le premier message du tableau 

    // **** décomposition du nom du fichier vers jour mois annee heure minutes numero de tél 
    if (nom.substring(6, 7) == 0) { 
      var jour = nom.substring(7, 8) 
    } else { 
      var jour = nom.substring(6, 8); 
    }; 

    var mois = nom.substring(4, 6); 
    if (mois == 01) { 
      var mois = "janvier" 
    } else if (mois == 02) { 
      var mois = "février" 
    } else if (mois == 03) { 
      var mois = "marse" 
    } else if (mois == 04) { 
      var mois = "avril" 
    } else if (mois == 05) { 
      var mois = "mai" 
    } else if (mois == 06) { 
      var mois = "juin" 
    } else if (mois == 07) { 
      var mois = "juillet" 
    } else if (mois == 08) { 
      var mois = "oute" 
    } else if (mois == 09) { 
      var mois = "septembre" 
    } else if (mois == 10) { 
      var mois = "octobre" 
    } else if (mois == 11) { 
      var mois = "novembre" 
    } else if (mois == 12) { 
      var mois = "décembre" 
    }; 

    var annee = nom.substring(0, 4); 

    if (nom.substring(9, 10) == 0) { 
      var heure = nom.substring(10, 11) 
    } else { 
      var heure = nom.substring(9, 11); 
    }; 
    
    if (heure == 0) { 
      var heure = "minuit" 
    } else if (heure == 12) { 
      var heure = "midi" 
    } else { 
      heure = heure + " heures " 
    }; 

    var minute = nom.substring(11, 13); 
    if (nom.substring(11, 12) == 0) { 
      var minute = nom.substring(12, 13) 
    } else { 
      var minute = nom.substring(11, 13); 
    }; 

    var numero = nom.substring(16, 18) + ' ' + nom.substring(18, 20) + ' ' + nom.substring(20, 22) + ' ' + nom.substring(22, 24) + ' ' + nom.substring(24, 26); 
console.log(jour, mois, annee, heure, minute, numero);
    var tts = parse(jour, mois, annee, heure, minute, numero); 

    // là tu fais une action pour lire le fichier avec SARAH.play() par exemple... 
    // Attention car SARAH.play() coupe la lecture après 2 minutes -- cf la doc 
    callback({'tts' : tts}); 
    var lecture = function (){
    SARAH.runApp('C:\\Program Files\\VideoLAN\\VLC\\vlc.exe',dir2read+nom);
    };
    setTimeout (function() { lecture('')}, 10000)
     setTimeout(function() { lisMessage(flist) }, 40000)

 }
}  
 
    }
	  
  if (data.mess == 'efface') {
var efface = function (){
    var exec = require('child_process').exec;
		var process = "suppression.bat";
	
	
	
	var process = '%CD%/plugins/repondeur/bin/' + process;
  ;console.log(process);
  
  var child = exec(process,
  	function (error, stdout, stderr) {
		});
}
	setTimeout (function() { efface('')}, 0)
	callback({'tts': "Je supprime les messages."});
   
}
  
  
}

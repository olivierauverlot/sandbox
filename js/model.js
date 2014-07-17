/*
document.addEventListener('DOMContentLoaded', function() {
  var ret = eval("2 / 1");
  // document.getElementById('res').innerHTML = ret;
  var chosenFileEntry = null;

  chooseFileButton = document.getElementById('btnfileselector');
  console.log("DEBUG");
  
  chooseFileButton.addEventListener('click', function(e) {
    var accepts = [{
      mimeTypes: ['text/*'],
      extensions: ['js', 'css', 'txt', 'html', 'xml', 'tsv', 'csv', 'rtf']
    }];
    chrome.fileSystem.chooseEntry({type: 'openFile', accepts: accepts}, function(readOnlyEntry) {
   
      readOnlyEntry.file(function(file) {
        var reader = new FileReader();
  
        reader.onerror = errorHandler;
        reader.onloadend = function(e) {
          console.log(e.target.result);
        };
    
        reader.readAsText(file);
      });
  	});
  });
});

*/ 

var chooseFileButton = document.querySelector('#choose_file');

chooseFileButton.addEventListener('click', function(e) {
  var accepts = [{
    mimeTypes: ['text/*'],
    extensions: ['js', 'css', 'txt', 'html', 'xml', 'tsv', 'csv', 'rtf']
  }];
  chrome.fileSystem.chooseEntry({type: 'openFile', accepts: accepts}, function(theEntry) {
    if (!theEntry) {
      output.textContent = 'No file selected.';
      return;
    }
    // use local storage to retain access to this file
    chrome.storage.local.set({'chosenFile': chrome.fileSystem.retainEntry(theEntry)});
    loadFileEntry(theEntry);
  });
});




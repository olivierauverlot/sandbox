
  
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'left': 500,
      'top': 500,
      'width': 400,
      'height': 400
    }
  });
});

// TabChange.js 
// A project by Ben Lodge
// Majorily forked from http://code.tutsplus.com/articles/html5-page-visibility-api--cms-22021


function TabChange(callback){

  // Get Browser Prefix
  var prefix = getBrowserPrefix();
  var hidden = hiddenProperty(prefix);
  var visibilityState = visibilityState(prefix);
  var visibilityEvent = visibilityEvent(prefix);
  var count = 1;
   
  // Get Browser-Specifc Prefix
  function getBrowserPrefix() {
     
    // Check for the unprefixed property.
    if ('hidden' in document) {
      return null;
    }
   
    // All the possible prefixes.
    var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
   
    for (var i = 0; i < browserPrefixes.length; i++) {
      var prefix = browserPrefixes[i] + 'Hidden';
      if (prefix in document) {
        return browserPrefixes[i];
      }
    }
   
    // The API is not supported in browser.
    return null;
  }
   
  // Get Browser Specific Hidden Property
  function hiddenProperty(prefix) {
    if (prefix) {
      return prefix + 'Hidden';
    } else {
      return 'hidden';
    }
  }
   
  // Get Browser Specific Visibility State
  function visibilityState(prefix) {
    if (prefix) {
      return prefix + 'VisibilityState';
    } else {
      return 'visibilityState';
    }
  }
   
  // Get Browser Specific Event
  function visibilityEvent(prefix) {
    if (prefix) {
      return prefix + 'visibilitychange';
    } else {
      return 'visibilitychange';
    }
  }

  function increaseCount(){
    count++
  }

  // Visibility Change 
  document.addEventListener(visibilityEvent, function(event) {
    if (document[hidden]) {
      
      if (callback && typeof(callback == 'function')){
        change = { count: count }
        callback(change);
      }
      increaseCount();
    } 
  });
   

}

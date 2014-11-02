## TabChange.js 

This tells you when someone returns to your webpage after changing browser tabs

This is forked from http://code.tutsplus.com/articles/html5-page-visibility-api--cms-22021. I basically just wrapped it in a function and gave it a callback.

### How to use:

```javascript
TabChange(function(change){
  // tab has been changed
});
```

### Options

The callback returns an object. Right now the object only returns the number of times the visitor changed a tab and returned. Feel free to open an issue if you have any ideas for other info that would be helpful to return.

```javascript
TabChange(function(change){
  console.log(change.count);
});
```


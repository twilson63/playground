
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function () {
  'use strict';

  function start () {
    let olog = console.log;

    let pre = document.body.appendChild(document.createElement('pre'));

    console.log = function (line) {
      if (typeof line === 'object') {
        line = JSON.stringify(line);
      }
      olog.apply(console, arguments);
      pre.innerHTML += line + '\n';
    };
  }

  try {
    start();
    console.log('Welcome to my playground :)');
    console.log('');
    /** start coding here **/







    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /** end coding here **/












  } catch (err) {
    console.log('***** Error *****'); 
    console.log('Message: ' + err.message);
    console.log('***** Error *****');
    throw err
  }

}());

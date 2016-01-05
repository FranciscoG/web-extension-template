(function(){

  // let's load jQuery if it doesn't exist
  if (typeof window.jQuery === 'undefined') {
    var s = document.createElement('script');
    s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js";
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(s);
    console.log("jQuery loaded");
  }

  console.log($('body')); // just for testing

});
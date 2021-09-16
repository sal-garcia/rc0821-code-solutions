function helloText(event) {
  var $hello = document.querySelector('h1');
  $hello.innerHTML = 'Hello There';
}

setTimeout(helloText, 2000);

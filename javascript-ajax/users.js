var $userList = document.querySelector('#user-list');
var object = new XMLHttpRequest();
object.open('GET', 'https://jsonplaceholder.typicode.com/users');
object.responseType = 'json';
object.addEventListener('load', loadFunc);
function loadFunc(event) {
  console.log(object.status);
  console.log(object.response);
  for (var i = 0; i < object.response.length; i++) {
    var ObjResponseElement = object.response[i];
    var $lisItem = document.createElement('li');
    $lisItem.textContent = ObjResponseElement.name;
    $userList.appendChild($lisItem);
  }
}
object.send();

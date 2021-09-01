
var $contact = document.querySelector('#contact-form');
$contact.addEventListener('submit', last);

function last(event) {

  event.preventDefault();
  var $name = document.forms[0].name.value;
  var $email = document.forms[0].email.value;
  var $message = document.forms[0].message.value;
  var object = { $name, $email, $message };
  console.log(object);
  $contact.reset();

}

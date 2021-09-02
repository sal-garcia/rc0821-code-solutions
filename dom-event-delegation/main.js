var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', callBack);

function callBack(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var $listItemNearButton = event.target.closest('.task-list-item');
    console.log($listItemNearButton);
    $listItemNearButton.remove();
  }
}

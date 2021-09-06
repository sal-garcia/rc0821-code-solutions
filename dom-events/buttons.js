
function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log(' event target', event.target);

}

var buttonClicked = document.querySelector('.click-button');
buttonClicked.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log(' event.target', event.target);
}

var hoverbutton = document.querySelector('.hover-button');
hoverbutton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button-double-clicking');
  console.log('event', event);
  console.log('event target', event.target);
}

var doubleclick = document.querySelector('.double-click-button');
doubleclick.addEventListener('dblclick', handleDoubleClick);

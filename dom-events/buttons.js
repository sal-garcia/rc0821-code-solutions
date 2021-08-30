
function handleClick(event) {
  console.log('button clicked');
  console.log(buttonClicked);
  console.log('click-button');

}

var buttonClicked = document.querySelector('.click-button');
buttonClicked.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(hoverbutton);
  console.log('.hover-button');
}

var hoverbutton = document.querySelector('.hover-button');
hoverbutton.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button-double-clicking');
  console.log(doubleclick);
  console.log('.double-click-button');
}

var doubleclick = document.querySelector('.double-click-button');
doubleclick.addEventListener('dblclick', handleDoubleClick);

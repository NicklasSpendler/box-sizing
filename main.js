let containerElem = document.querySelector('.container');

let draggableBoxElem = document.querySelector('.draggableBox');

let targetBoxElem = document.querySelector('.targetBox');

let containerWidth = containerElem.offsetWidth;
let containerHeight = containerElem.offsetHeight;

// Store data about boxes, specificly the middle of the boxes.
let targetBoxPosition = {
	X: null,
	Y: null
}
let draggableBoxPosition = {
	X: null,
	Y: null
}
targetBoxPosition.Y = targetBoxElem.offsetTop + (targetBoxElem.offsetHeight / 2)
targetBoxPosition.X = targetBoxElem.offsetLeft + (targetBoxElem.offsetWidth / 2)

draggableBoxPosition.Y = draggableBoxElem.offsetTop + (draggableBoxElem.offsetHeight / 2)
draggableBoxPosition.X = draggableBoxElem.offsetLeft + (draggableBoxElem.offsetWidth / 2)

// console.log('targetBox',targetBoxPosition, 'draggableBox', draggableBoxPosition)

// get percentage of location.
let tagetBoxPercentageX = null
let targetBoxPercentageY = null
let targetPositionPoint = null
let draggableBoxPercentageX = null
let draggablePositionPoint = null

function getLocationPercentage(){
	tagetBoxPercentageX = ((containerWidth - targetBoxPosition.X) / containerWidth) * 100
	targetBoxPercentageY = ((containerHeight - targetBoxPosition.Y) / containerHeight) * 100
	targetPositionPoint = tagetBoxPercentageX + targetBoxPercentageY;
	console.log('targetBox location in percentage. X: ', tagetBoxPercentageX, 'Y: ', targetBoxPercentageY, 'Position point: ', targetPositionPoint);
	
	draggableBoxPercentageX = ((containerWidth - draggableBoxPosition.X) / containerWidth) * 100
	draggableBoxPercentageY = ((containerHeight - draggableBoxPosition.Y) / containerHeight) * 100
	draggablePositionPoint = draggableBoxPercentageX + draggableBoxPercentageY;
	console.log('targetBox location in percentage. X: ', draggableBoxPercentageX, 'Y:', draggableBoxPercentageY, 'Position point: ', draggablePositionPoint);

	resizeDraggableBox()
}

function resizeDraggableBox(){
	let percentageSmaller = (draggablePositionPoint - targetPositionPoint)/draggablePositionPoint * 100;

	// Find tallet som udgør maks tal i procent.
}

init();
function init(){
	getLocationPercentage();
}
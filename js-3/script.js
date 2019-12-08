function createTable() {
	var table = document.getElementById("TheTable");
 	var row = table.insertRow(-1);
 	var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "new cell";
    cell2.innerHTML = "new cell";
}

function changeInner(){
	var cell = document.getElementsByTagName('td')
	randint = Math.floor(Math.random() * cell.length)
	cell[randint].innerHTML = "New inner"
}

function colspanDo(){
	var cell = document.getElementsByTagName('td')
	for (i = 0; i < cell.length; i = i+1) {
		cell[i].setAttribute('colspan', 2)
	}
}

function deleteRoww() {
  	var x = document.getElementById("TheTable");
  	x.deleteRow(1);
}

function increaseBorderWidth() {
	document.getElementById("TheTable").style.borderWidth = "3px";
}	

function reduceBorderWidth() {
	document.getElementById("TheTable").style.borderWidth = "1px";
}

function addCell() {
  var row = document.getElementsByTagName('tr');
  var x = row[1].insertCell(1);
  x.innerHTML = "New cell";
}

function deleteCell() {
  var row = document.getElementsByTagName('tr');
  var x = row[1].deleteCell(1);
  x.innerHTML = "New cell";
}

function increaseWidth(){
	var cells = document.getElementsByTagName('td')
	for (i = 0; i < cells.length; i = i+1) {
		width = cells[i].getAttribute('width')
		if (width == null){
			width = '0px'
		}
		width = String(parseInt(width)+50)+'px'
		cells[i].setAttribute('width',width)
	}
}

function reduceWidth(){
	var cells = document.getElementsByTagName('td')
	for (i = 0; i < cells.length; i = i+1) {
		width = cells[i].getAttribute('width')
		width = String(parseInt(width)-50)+'px'
		cells[i].setAttribute('width',width)
	}
}

function increaseCellPadding(){
	var table = document.getElementsByTagName('table')
	for (i = 0; i < table.length; i = i+1) {
		padding = table[i].getAttribute('cellpadding')
		padding = String(parseInt(padding)+2)
		table[i].setAttribute('cellpadding', padding)
	}
}

function reduceCellPadding(){
	var table = document.getElementsByTagName('table')
	for (i = 0; i < table.length; i = i+1) {
		padding = table[i].getAttribute('cellpadding')
		if (parseInt(padding) <= 2){
			alert('HEY, STOP IT!1!11!!')
		}
		if (parseInt(padding) > 2){
			padding = String(parseInt(padding)-2)
		}
		table[i].setAttribute('cellpadding', padding)
	}
}

function increaseCellSpacing(){
	var table = document.getElementsByTagName('table')
	for (i = 0; i < table.length; i = i+1) {
		spacing = table[i].getAttribute('cellspacing')
		spacing = String(parseInt(spacing)+2)
		table[i].setAttribute('cellspacing', spacing)
	}
}

function reduceCellSpacing(){
	var table = document.getElementsByTagName('table')
	for (i = 0; i < table.length; i = i+1) {
		spacing = table[i].getAttribute('cellspacing')
		if (parseInt(spacing) <= 2){
			alert('HEY, STOP IT!1!11!!')
		}
		if (parseInt(spacing) > 2){
			spacing = String(parseInt(spacing)-2)
		}
		spacing = String(parseInt(spacing)-2)
		table[i].setAttribute('cellspacing', spacing)
	}
}

function alignCells(){
	var cells = document.getElementsByTagName('tr')[1].getElementsByTagName('td')
	for (i = 0; i < cells.length; i = i+1) {
		cells[i].setAttribute('align', 'middle')
	}
}

function horizontalCells(){
		var cells = document.getElementsByTagName('tr')[1].getElementsByTagName('td')
	for (i = 0; i < cells.length; i = i+1) {
		cells[i].setAttribute('align', 'middle')
	}
}

function alignAnyCell(){
	var cell = document.getElementsByTagName('td')
	randint = Math.floor(Math.random() * cell.length)
	cell[randint].setAttribute('align', 'middle')
}

function vertAlignCells(){
	var cells = document.getElementsByTagName('tr')[1].getElementsByTagName('td')
	for (i = 0; i < cells.length; i = i+1) {
		cells[i].style.verticalAlign = 'middle'
	}
}

//
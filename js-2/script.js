function alignimgs() {
  imgs = document.getElementsByTagName('img')
  for (i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute('align','right')
  }
}

function addborder() {
  document.getElementById('cat0').style.border = '3px black solid'
}

function changesize() {
  document.getElementById('cat0').style.width = '50px'
  document.getElementById('cat0').style.height = '50px'
}

function changesrc() {
  document.getElementById('cat0').setAttribute('src','cat1.jpg')
}

function showMouseBtn() {
  document.getElementById('mouse_btn').innerHTML = event.button
}

function showKeyCode() {
  document.getElementById('pressed_key').innerHTML = event.keyCode
}

function showMouseCoords() {
  document.getElementById('mousepos_page').innerHTML = event.pageX+', '+event.pageY
  document.getElementById('mousepos_screen').innerHTML = event.screenX+', '+event.screenY
}

function showevent(event) {
  document.getElementById('clk_eventname').innerHTML = event.type
}

function showtarget() {
  document.getElementById('clkname').innerHTML = event.target.getAttribute('name')
  showevent(event)
}

document.getElementById('cat0_alt').innerHTML = document.getElementById('cat0').getAttribute('alt')
document.getElementById('cat0_name').innerHTML = document.getElementById('cat0').getAttribute('name')

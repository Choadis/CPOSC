var x = 0;

function ticketCount(num, cls){
  var totalBox = document.getElementsByClassName('totalBox')[0];
  x = x + num;
  totalBox.innerHTML = "$" + x;
  document.getElementsByClassName(cls)[0].classList.toggle('none');
}

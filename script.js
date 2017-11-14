var x = 0;
// var inputValue = document.getElementById('input').value;

function ticketCount(num, cls){
  var totalBox = document.getElementsByClassName('totalBox')[0];
  x = x + num;
  totalBox.innerHTML = "$" + x;
  document.getElementsByClassName(cls)[0].classList.toggle('none');
}

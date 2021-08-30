function convertd()
{
  var x = document.getElementById('d').value;
  if(x=="")
  {
    alert("please give input value");
  }
  else {
    var num = x * 73.50;
    var ans = num.toFixed(2);
    document.getElementById('dol').innerHTML = "₹ " + ans;
  }
}
function convertr()
{
  var x = document.getElementById('rup').value;
  if(x=="")
  {
    alert("please give input value");
  }
  else {
    var num = x/73.50;
    var ans = num.toFixed(2);
    document.getElementById('r').innerHTML = ans + " $";
  }
}
function convertce()
{
  var x = document.getElementById('celi').value;
  if(x=="")
  {
    alert("please give input value");
  }
  else {
    var ans = (x*(9/5))+32;
    var num = ans.toFixed(2);
    document.getElementById('c').innerHTML = num + "°F"
  }
}
function convertf()
{
  var x = document.getElementById('farh').value;
  if(x=="")
  {
    alert("please give some input value");
  }
  else {
    var ans = (x - 32) *(5/9);
    var num = ans.toFixed(2);
    document.getElementById('f').innerHTML = num +"°C"
  }
}
function convertp()
{
  var x = document.getElementById('per').value;
  if(x=="")
  {
    alert("please give input value");
  }
  else if(x>100)
  {
    alert("percentage can't be greater than 100")
  }
  else
  {
    var ans = x/9.5;
    var num = ans.toFixed(2);
    document.getElementById('p').innerHTML = num +" CGPA";
  }
}
function convertc()
{
  var x = document.getElementById('cg').value;
  if(x=="")
  {
    alert('please give input value');
  }
  else if(x>10)
  {
    alert("CGPA can't be greater than 10");
  }
  else {
    var ans = x * 9.5;
    var num = ans.toFixed(2);
    document.getElementById('cgp').innerHTML = num + "%";
  }
}

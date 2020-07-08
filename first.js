function clr()
{
  document.getElementById("tr").value="";
}
function solve()
{
  var val=document.getElementById("tr").value;
  var y= eval(val);
  document.getElementById("tr").value=y;
}
function dis(val)
{
  document.getElementById("tr").value+=val;
}

<script >
function reset1()
{
x=confirm("It will clear all the text entered")
if(x==true)
{
document.form1.t1.value=""
document.form1.t2.value=""
document.form1.ta.value=""
document.form1.t3.value=""
document.form1.r1[0].checked=false
document.form1.r1[1].checked=false
document.form1.c1.checked=false
document.form1.c2.checked=false
document.form1.c3.checked=false
document.form1.c4.checked=false
document.form1.c5.checked=false
document.form1.c6.checked=false
document.form1.t1.focus()
}
}

function check()
{
if((document.form1.t1.value=="")||(!(isNaN(document.form1.t1.value))))
{
alert("please enter the correct name")
document.form1.t1.value=""
document.form1.t1.focus()
}
else if((document.form1.t2.value=="")||(isNaN(document.form1.t2.value)))
{
alert("please enter the age correctly")
document.form1.t2.value=""
document.form1.t2.focus()
}
else if(document.form1.t2.value>40)
{
alert("Sorry you age is beyound the limit")
document.form1.t2.value=""
document.form1.t2.focus()
}
else if(document.form1.ta.value=="")
{
alert("please enter the address")
document.form1.ta.focus()
}
else if((document.form1.r1[0].checked==false)&&(document.form1.r1[1].checked==false))
{
alert("please select the radio button")
document.form1.r1[0].focus()
}
else if((document.form1.c1.checked==false)&&(document.form1.c2.checked==false)&&(document.form1.c3.checked==false)&&(document.form1.c4.checked==false)&&(document.form1.c5.checked==false))
{
alert("please select the the languages known")
document.form1.c1.focus()
}
else if(document.form1.t3.value=="")
{
alert("please enter the password")
document.form1.t3.focus()
}
else if((document.form1.t1.value!="")&&(document.form1.t2.value!="")&&(document.form1.t3.value!="")&&(document.form1.ta.value!="")&&((document.form1.r1[0].checked!=false)||(document.form1.r1[0].checked!=false))&&((document.form1.c1.checked!=false)||(document.form1.c2.checked!=false)||(document.form1.c3.checked!=false)||(document.form1.c4.checked!=false)||(document.form1.c5.checked!=false)))
{
x=confirm("you have entered the datas correctly,want to submit the form")
if(x)
{
document.lay.visibility="show"
}
}
}
</script>
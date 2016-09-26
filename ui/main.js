var button=document.getElementById('button');

button.onclick =function() {
    var request = new XMLHttpRequest();
    request.onreadystatechage=function () {
      if(request.readstate==XMLHttpRequest.DONE)
       {
        if(request.status == 200)
        {
          var counter=request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();   
        }
       }
    };
request.open('GET','http://ashishgupta27.imad.hasura-app.io/counter',true);
request.send(null);

};
var name_value=document.getElementById('name');
var name0=name_value.value;
submit=document.getElementById('submit_btn')
submit.onclick=function() {
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<=name.length;i++) {
    list += '<li>'+names[i]+'</li>'; 
        
    }
    var ul=document.getElementById('ulname');
    ul.innerHTML=list;
};


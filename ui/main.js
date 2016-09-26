var button=document.getElementById('button');
var counter=0;
button.onclick =function() {
    var request = new XMLHttpRequest();
    request.onreadystatechage=function () {
      if(request.readstate==XMLHttpRequest.Done)
       {
        if(request==200)
        {
         counter=counter+1;
var span=document.getElementById('count');
span.innerHTML=counter.toString();   
        }
       }
    };
request.open('GET','http://ashishgupta27.imad.hasura-app.io/',true);
request.send(null);

};

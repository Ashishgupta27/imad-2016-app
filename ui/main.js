var button=document.getElementById('button');
var counter=0;
button.onclick =function() {
    var request = new XMLHttpRequest();
    request.onreadystatechage=function () {
      if(request.readstate==XMLHttpRequest.DONE)
       {
        if(request==200)
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

function myFunction() {
    document.getElementById("demo").style.fontSize = "25px"; 
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "aqua";        
    document.getElementById("demo").style.border = "5px solid rgb(14, 104, 37)";
    document.getElementById('demo').innerHTML = Date();
  }
  let elemclass=document.getElementsByClassName("pi")
  //elemclass[0].style.background="pink";
  //elemclass[0]classList.add("knowledge")
 
  //window.onload=function(){
  //  console.log('the document was loaded')
  //}


  //example3.addEventListener('click',function(){
  //  console.log("click hua")
  //})//date and time wala

  example2.addEventListener('mouseover',function(){// id.eventlistener
    //console.log("mouse on container")
  })

  example2.addEventListener('mouseout',function(){// id.eventlistener
    //console.log("mouse out container")
  })

  //let prevhtml=document.querySelectorAll('.pi')[0].innerHTML
  //example2.addEventListener('mouseup',function(){// id.eventlistener
  //  document.querySelectorAll('.pi')[0].innerHTML=prevhtml
  //  //console.log("mouse up container")
  //})
  //example2.addEventListener('mousedown',function(){// id.eventlistener
  //  document.querySelectorAll('.pi')[0].innerHTML="<b> we have clicked</b>"
  //  //console.log("mouse down container")
  //})

 
 //sel=document.querySelector('.photo')
 //console.log(sel);
 //sel=document.querySelectorAll('.photo')
 //console.log(sel);



  //tn=document.getElementsByTagName('div')
  //console.log(tn);
  //createdElement=document.createElement('p');
  //createdElement.innerText="this is a created para";
  //tn[0].appendChild(createdElement);
  //createdElement2=document.createElement('b');
  //createdElement2.innerText="this is created bold";
  //tn[0].replaceChild(createdElement2,createdElement);
  //removeChild(eltement);--->removes an element


  //arrow functions
  Summ=(a,b)=>{
    return a+b;
  }

  //logkaro=()=>{
    //document.querySelectorAll('.pi')[0].innerHTML="<b> set interval fired</b>"
    //console.log("i am your log")
  //}
  //setTimeout(logkaro,2000);
  //setInterval(logkaro,2000);
  //clr =setTimeout(logkaro,5000);//use clear interval(clr)/clear timeout(clr) to cancel 

  //javascript  localstorage
  //localStorage.setItem('name','harry')
  //localStorage
  //localStorage.getitem('name')
  
 // obj ={name:"ankit",length:1,a:{this:'tha"t'}}
  //jso=JSON.stringify(obj);
 // console.log(typeof jso)
 // console.log(jso);
  //parsed=json.parsed('{"name":harry,"length":1,"a":{"this":"tha\"t"}}')
  //console.log(parsed);

  let a;
  let date;
  let time;
  const Options={weekday:'long',year:'numeric',month:'long',dat:'numeric'};
  setInterval(()=>{
    a=new Date();
    date=a.toLocaleDateString(undefined,Options);
    time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    document.getElementById('time').innerHTML= time + "<br> on " + date;
  },1000);

  //time.addEventListener('mouseout',function(){// id.eventlistener
  function change_text(){
    setInterval(()=>{
    a=new Date();
    date=a.toLocaleDateString("en-US", {timeZone: "America/New_York" });//useless for time
    let h=a.getUTCHours()-4;
    let m=a.getMinutes()+30;
    let s=a.getSeconds();
    time=h+":"+m+":"+s;
    document.getElementById('time').innerHTML= time + "<br> on " + date;
    //setTimeout(change_text(){
    //  document.getElementById('time').innerHTML.remove();
    //},)
    //timeZone: "America/New_York"
  },1000);

 /* function changeTimezone() {
      
    let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
      
    console.log('Given IST datetime: ' + date);
  
    let intlDateObj = new Intl.DateTimeFormat('en-US', {
        timeZone: "America/New_York"
    });
  
    let usaTime = intlDateObj.format(date);
    document.getElementById('time').innerHTML= time + "<br> on " + date;
    //console.log('USA date: ' + usaTime);
}*/

    //time=a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    //document.getElementById('time').addEventListener('mouseout',change_text()).innerHTML= time + "<br> on " + date;
    //},1000);
  }
  ct.addEventListener('click',change_text)

  
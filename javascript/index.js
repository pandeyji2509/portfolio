//        //javascript console api
//        console.log("hello world",4+6);
//        document.write("this is document write");
//        console.warn("this is warning");
//        console.error("this is error");
//        
//        //alert("me");
//           
//
//        //object
//        var marks={
//           harry: 99.977,
//           ravi:34,
//           shubham:78
//        }
//        console.log (marks)
//         //number 
//         var num1=5
//         var num2=10
//         console.log(num1+num2)
//         // string
//         var str1="hello "
//         var str2="world"
//         console.log(str1+str2)
//
//         var und;
//         console.log(und);
//         //primitive datatypes undefined,null,string,boolean,symbol
//         //reference data types Arrays and objects
//
//         var arr=[1,2,3,"bablu",4];
//         console.log(arr);
//function avg(a,b){
//   return (a+b)/2;
//}
//c1=avg(4,6);
//console.log(c1);



var arr=[1,2,3,4,5,6,7];
//arr.forEach(function(element){
//   console.log(element);
//})


let j=0;
//do{
//   console.log(arr[j]);
//   j++;
//}while(j<arr.length);
let myarr=["fan","camera",34,null,true];
//console.log(myarr.length)
myarr.pop();
//console.log(myarr.length);

myarr.push("harry")
//console.log(myarr);
myarr.shift();//remove from front
//console.log(myarr);
//myarr.push("harry")
//myarr.shift();
myarr.unshift("harry");//add in front
//console.log(myarr);
//const newlen=myarr.unshift("harry");//also give length
//console.log(newlen);
//console.log(myarr);


let mylovelystring="harry is a good boy";
//console.log(mylovelystring);
//console.log(mylovelystring.indexOf("i"));
//console.log(mylovelystring.slice(1,4))
d=mylovelystring.replace("harry","rohan");
//console.log(d,mylovelystring)
let mydate=new Date();
//console.log(mydate);
//console.log(mydate.getTime());
//console.log(mydate.getFullYear());
//console.log(mydate.getDay());
//console.log(mydate.getMinutes());
//console.log(mydate.getHours);

let elem=document.getElementById('click');
console.log(elem);

let elemClass=document.getElementsByClassName("container")
console.log(elemClass);
elemClass[0].getElementsByClassName.background="yellow";

//keypress
function 
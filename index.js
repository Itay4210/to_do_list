let to_do_list=[];
let keeper=[]

function addtodo(){
  
  to_do_list.push(document.getElementById("inputext1").value);
  console.log(document.getElementById("inputext1").value);
  document.getElementById("list").innerHTML=to_do_list;
    document.getElementById("inputext1").value="";
    console.log(to_do_list);
    keeper=to_do_list;
    console.log("kepper value:");
    console.log(keeper);
}

function deletetodo(){
    
    let a= document.getElementById("inputext1").value;
    console.log(a);
    
     to_do_list= to_do_list.filter(function(value){
        
      return value!=a;

     })
  
    document.getElementById("inputext1").value="";
    console.log(to_do_list);
    document.getElementById("list").innerHTML=to_do_list;
    keeper=to_do_list;
    console.log("kepper value:");
    console.log(keeper);
    
  
}


function searching(){
    //let b=document.getElementById("search").value;
    //console.log(b);
   /* to_do_list=to_do_list.includes(b);
    if(to_do_list){
        to_do_list=b;
        console.log(to_do_list);
    }*/
   let b = to_do_list.filter(element => element.includes(document.getElementById("search").value));
    to_do_list=b;

    
    document.getElementById("list").innerHTML=to_do_list;
    document.getElementById("search").value="";
    console.log(to_do_list);
   to_do_list=keeper;
}

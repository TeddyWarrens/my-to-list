const forms = document.querySelector(".forms");
const nam = document.querySelector("#fname");
const todos = document.querySelector("#todos");

const msgs= document.querySelector(".msg");
const lists =document.querySelector("#users");
forms.addEventListener('submit', sub);
function sub(lis){
    lis.preventDefault();
    if(fname.value=='' && todos.value==''){
        msgs.innerHTML='Please enter the required fields'
        setTimeout(()=>msgs.remove(),3000);
    }
    else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(fname.value+"   :  "+todos.value));
        users.appendChild(li);

document.querySelector('li').style.color="grey";


        const arrayOfTodos =[
            todo ={
               fname:fname.value,
               todos:todos.value
           }
       ];
       console.log(arrayOfTodos);
        //We then want to clear the fields
        fname.value='';
        todos.value='';
    }
   
}


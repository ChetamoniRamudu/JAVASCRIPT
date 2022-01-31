var count=0;
var input_text=document.querySelector('input');
var btn=document.querySelector('button');
var div_todo=document.querySelector('.todos');
btn.addEventListener('click',function(){
     var data=input_text.value;
    var para=document.createElement('p');
    para.setAttribute('key',count);
    var data=input_text.value;
    para.innerHTML=data;
    div_todo.append(para);
    count=count+1;
    input_text.value=" ";
    para.addEventListener('click',function(){
        para.remove(data)
            })
})
var optionselect=document.querySelector('#dropdown')
optionselect.addEventListener('change',api)
function api(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((data)=>{
        if (optionselect.value=="completed"){
            div_todo.innerText=" "
            var heading=document.createElement('h1')
            heading.innerText="completed_todolist"
            div_todo.appendChild(heading)
            data.forEach((item)=>{
                if(item.completed){
                    var para=document.createElement('p')
                    para.innerText=item.title
                    div_todo.append(para)
                }
            })


        }else{
            div_todo.innerText=" "
            var heading=document.createElement('h1')
            heading.innerText="pending_todolist"
            div_todo.appendChild(heading)
            data.forEach((item)=>{
                if(!item.completed){
                    var para=document.createElement('p')
                    para.innerText=item.title
                    div_todo.append(para)
                }
            })

        }
    })
}


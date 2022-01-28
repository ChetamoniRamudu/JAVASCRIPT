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
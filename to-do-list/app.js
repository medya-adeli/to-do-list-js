let addtodobutton=document.getElementById('addtodo');
let todocontainer=document.getElementById('todocontainer');
let inputfield=document.getElementById('input-field');
addtodobutton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
});
//اتصال id  ها یه js
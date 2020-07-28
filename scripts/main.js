function fun_alert()
{
    alert("hhh sb!");
}

function setUserName()
{
    let name=prompt("请输入用户名:");
    if (!name||name===null)
        setUserName();
    else
        localStorage.setItem('name',name),
        Heading[0].textContent="酷毙了"+name;
}


let Heading=document.querySelectorAll('h1');
for (i=0;i<Heading.length;++i)
    Heading[i].textContent="Hello world!",
    Heading[i].onclick=fun_alert;

let image=document.querySelector('img');
image.onclick=function(){
    if (image.getAttribute('src')==='images/less than.jpg')
        image.setAttribute('src','images/timg.jpg');
    else
        image.setAttribute('src','images/less than.jpg');
}

let mybutton=document.querySelector('button');
mybutton.onclick=setUserName;
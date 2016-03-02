document.addEventListener('DOMContentLoaded',(evt: Event)=>{
    var div=document.createElement('div');
    document.body.appendChild(div);
    var div2=document.createElement('div');
    document.body.appendChild(div2);
    document.addEventListener('mousemove',(evt:MouseEvent)=>{
       div.innerHTML=evt.x+':'+evt.y;
    });
    document.addEventListener('mousedown',(evt:MouseEvent)=>{
       div2.innerHTML='down'
    });
    document.addEventListener('mouseup',(evt:MouseEvent)=>{
       div2.innerHTML='up'
    });
})

export = 1;
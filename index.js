async function endgame()
{
    key1=' ';
    
    document.querySelector("h2").innerText=queue.length;
    document.removeEventListener('keydown',keypresss);
    await delay(2000);
    document.querySelectorAll(" .box")[queue[0][0]*10+queue[0][1]].classList.remove("color3");
    for(var p=0;p<queue.length;p++){
        b=queue[p][0]*10+queue[p][1];
        document.querySelectorAll(" .box")[b].classList.remove("color2");
    }
    document.querySelectorAll(" .box")[appi*10+appr].classList.remove("color1");
    queue=[[Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)]];
    //button.addEventListener("click", startbro);

}
function check()
{
    for(var k=0;k<queue.length;k++)
    {
        if(queue[k][0]==row&&queue[k][1]==col)
            {endgame();}    }  
}
function wasd_keyy(){
    document.querySelectorAll(" .box")[b].classList.remove("color3");
    document.querySelectorAll(" .box")[b].classList.add("color2"); 
        if(row!=appi||col!=appr){
            var q=queue.pop()
            var m=q[0];
            var n=q[1];
            b=m*10+n;
            document.querySelectorAll(" .box")[b].classList.remove("color2");
            // curr_cell=document.getElementById(`cell_${m}_${n}`);
            // curr_cell.classList.toggle("current");
        }
        else{
            bb=appi*10+appr;
            document.querySelectorAll(" .box")[bb].classList.remove("color1");
            generate_apple();
        }
        b=row*10+col;
        q=[row,col];
        queue.unshift(q);
        document.querySelector("h2").innerText=queue.length-1;
        //document.querySelector("h1").innerText=row+" "+col+" "+b;
        document.querySelectorAll(" .box")[b].classList.add("color3");
        //await delay(500);
    
}
async function uhuh(){
    if(key1=='w'){
        while(key1=='w'){
            row=row-1;
            if(row==-1)
            row=9;
            check();
        wasd_keyy();
        await delay(400);
        }
    }
    else if(key1=='s'){
        while(key1=='s'){
            row=row+1;
            if(row==10)
            row=0;
            check();
            wasd_keyy();
            await delay(400);
    }
    }
    else if(key1=='a'){
        while(key1=='a'){
            col=col-1;
            if(col==-1)
            col=9;
            check();
            wasd_keyy();
            await delay(400);
        }
    }
    else if(key1=='d'){
        while(key1=='d'){
            col=col+1;
            if(col==10)
            col=0;
            check();
            wasd_keyy();
            await delay(400);
        }
    }
    
    //yobabe();
}
function keypresss(event){
   
    if(event.key!='w'&&event.key!='a'&&event.key!='s'&&event.key!='d')
    ;
    else if(key1!=event.key){
        key1=event.key;
        uhuh();
    }
        
        
}
function delay(ms){
    return new Promise(resolve=> setTimeout(resolve,ms));
}
function cris(){
    document.querySelectorAll(" .box")[b].classList.add("color2");
    document.addEventListener('keydown',keypresss);
    }
async function jose(){
    for(var i=0;i<3;i++){
        document.querySelectorAll(" .box")[b].classList.toggle("color2");
        await delay(500);
        //a=a*2;
    }
    cris();
}
function generate_apple()
{
    var flag=true;
    while(flag)
        {
            appi=Math.floor(Math.random() * 10);
            appr=Math.floor(Math.random() * 10);   
            flag=false;
            for(var k=0;k<queue.length;k++)
            {
                if(queue[k][0]==appi&&queue[k][1]==appr)
                    flag=true;
            }  
        }
        var bb=appi*10+appr;
        document.querySelectorAll(" .box")[bb].classList.add("color1");
}
var queue=[[Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)]];
var appi,appr;
var b;
var row,time=0;
var col;
var key1;
var button = document.getElementById("myButton");
button.addEventListener("click", startbro);
function startbro(){
    b=queue[0][0]*10+queue[0][1];
    row=queue[0][0];
    col=queue[0][1];
    generate_apple();
    //button.remove("click", startbro);
    jose();
}



//setTimeout(cris,a);
//cris();
//setTimeout( function (){document.querySelectorAll(" .box")[10].classList.add("color1")},10000);
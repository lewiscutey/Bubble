$(function(){
    var canvas=$("#canvas").get(0);
    var ctx=canvas.getContext("2d");
    var img=$("img")[0];
    ctx.drawImage(img,400,0);
    // var juli=500;
    // var k=-1;
    // function move(){
    //     // ctx.clearRect(0,0,500,500);
    //     juli+=k;
    //     // if(juli<100){
    //     //     x=800
    //     // }
    //     if(juli<100){
    //         k=1;
    //     }
    //     if(juli>=400){
    //         k=-1;
    //     }
    //     ctx.drawImage(img,juli,0);
    // }
    // function render(){
    //     ctx.clearRect(0,0,500,500);
    //     move();
    //     requestAnimationFrame(render);
    // }
    // requestAnimationFrame(render);
    // setInterval(move,10);
    // setTimeout(function(){
    //     ctx.clearRect(0,0,500,500);
    //     ctx.drawImage(img,400,0);
    // },1000);
    var blocks=[];
    function Pop(x,y,h,ban,color,s){
        // x,y中心点位置，h---圆的中心位置，ban---半径，color---颜色，s---速度
        this.x=x;
        this.y=y;
        this.r=ban;
        this.h=h;
        this.color=color;
        this.s=s;
    }
    Pop.prototype.baozha=function(){
        console.log("我爆炸了");
        var that=this;
        blocks=blocks.filter(function(v){
            return v!==that;
        })
    };
    for(var i=0;i<100;i++){
        var x=Math.ceil(Math.random()*1000);
        var y=800;
        var h=-10;
        var ban=Math.ceil(Math.random()*10);
        var s=Math.random()*5;

        var r=Math.ceil(Math.random()*255);
        var g=Math.ceil(Math.random()*255);
        var b=Math.ceil(Math.random()*255);
        var color="rgb("+r+","+g+","+b+")";
        var top=Math.ceil(Math.random()*800);
        blocks.push(new Pop(x,y,h,ban,color,s));
    }
    function drawPop(pop){
        ctx.save();
        ctx.beginPath();
        ctx.translate(pop.x,pop.y);
        pop.h -=pop.s;
        ctx.arc(0,pop.h,pop.r,0,2*Math.PI);
        if(pop.h<-500){
            pop.baozha();
        }
        ctx.strokeStyle=pop.color;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
    function render(){
        ctx.clearRect(0,0,1000,800);
        for(var j=0;j<blocks.length;j++){
            drawPop(blocks[j]);
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);


});
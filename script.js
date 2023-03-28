var myFigure;
var shapes;

function game(){
    myFigure = new figure();
    myFigure.update();
}

function figure(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(20,20,20,20);

    this.x = 20;
    this.y = 20;
    this.width = 20;
    this.height = 20;

    this.update = function(){
        ctx.clearRect(0,0,470,270);
        make_shape();
        ctx.fillRect(this.x, this.y, 20, 20);
        
        ctx.fillStyle = "#d3d3d3";
        ctx.fillRect(440,20,20,20)


        for(i = 0; i<shapes.length; i++){
            if(myFigure.crashEx(shapes[i])){
                lose();
                return;
            }
        } 

        if((this.x >=440 && this.x <= 460)&&(this.y >= 20 && this.y <=40)){
            alert("you win");
            myFigure = new figure();
            myFigure.update();
        

        }


    };
  

    this.crashEx = function(some_object){
        var left = this.x;
        var right = this.x + (this.width);
        var top = this.y;
        var buttom = this.y + (this.height);

        var s_left = some_object.x;
        var s_right = some_object.x + (some_object.width);
        var s_top = some_object.y;
        var s_buttom = some_object.y + (some_object.height);

        var crash = true;
        if ((buttom < s_top) || (top > s_buttom) || (right < s_left) || (left > s_right)){
            crash = false;
        }
        return crash;
    }
    
}

function lose(){
    alert("Game over")
    myFigure = new figure();
    myFigure.update();
}


function right(){
    myFigure.x += 20;
    myFigure.update();
}

function left(){
    myFigure.x -= 20;
    myFigure.update();
}

function up(){
    myFigure.y -= 20;
    myFigure.update();
}

function down(){
    myFigure.y += 20;
    myFigure.update();
}

function make_shape(){
    shapes = []
    shapes.push(new shape(60,0,10,220,"#FF0000"));
    shapes.push(new shape(120,60,10,220,"#00FF00"));
    shapes.push(new shape(180,0,10,220,"#FF0000"));
    shapes.push(new shape(240,60,10,220,"#00FF00"));
    shapes.push(new shape(300,0,10,220,"#FF0000"));
    shapes.push(new shape(360,60,10,220,"#00FF00"));
}



function shape(x, y, width, height, color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    var carvas = document.getElementById("myCanvas");
    var ctx = carvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#0000FF";
    
}
var b=0;
var c=0;
var d=0;
var cnt=0;
var rrr=1;
var copycat=1;
const r_colors=[]

function random_F(){
   
    var random = Math.ceil(Math.random()*4);
    if(random===1){
        r_colors.push("1")
        $("#green").animate({opacity:0.5})
        $("#green").animate({opacity:1})
       
    }
    else if(random===2){
        r_colors.push("2")
        $("#red").animate({opacity:0.5})
        $("#red").animate({opacity:1})
        
    }
    else if(random===3){
        r_colors.push("3")
        $("#blue").animate({opacity:0.5})
        $("#blue").animate({opacity:1})
        
    }
    else if(random===4){
        r_colors.push("4")
        $("#yellow").animate({opacity:0.5})
        $("#yellow").animate({opacity:1})
       
    }
    while(c_colors.length > 0) {
        c_colors.pop();
    }
    if(b===0)
    press_F()
}
const c_colors=[]
function press_F(){
   b=1
     
    $("button").on("click",function(){
        var color= $(this).attr("class");
        if(color==="buttens G"){
            c_colors.push("1")
            $("#green").addClass("pressed")
            setTimeout(function(){
                $("#green").removeClass("pressed")

            },100)
        var aduio = new Audio("sounds/green.mp3")
            aduio.play();
            cnt++;
            check_F()
            if(cnt===copycat)
     {
        check_F()
     }
        }
        if(color==="buttens R"){
            c_colors.push("2")
            $("#red").addClass("pressed")
            setTimeout(function(){
                $("#red").removeClass("pressed")

            },100)
        var aduio = new Audio("sounds/red.mp3")
            aduio.play();
            cnt++;
            check_F()
            if(cnt===copycat)
     {
        check_F()
     }

        }
        if(color==="buttens B"){
            c_colors.push("3")
            $("#blue").addClass("pressed")
            setTimeout(function(){
                $("#blue").removeClass("pressed")

            },100)
        
        var aduio = new Audio("sounds/blue.mp3")
            aduio.play();
           cnt++;
           check_F()
           if(cnt===copycat)
     {
        check_F()
     }

        }
        if(color==="buttens Y"){
            c_colors.push("4")
            $("#yellow").addClass("pressed")
            setTimeout(function(){
                $("#yellow").removeClass("pressed")

            },100)
        var aduio = new Audio("sounds/yellow.mp3")
            aduio.play();
            cnt++;
            check_F();
            if(cnt===copycat)
     {
        check_F()
     }

        }
    });
    if(b===0)
    var myTimeout1 = setTimeout(random_F, 500);
        myTimeout1
}
$(document).on("keydown",function(){
   
    if(d===0){
       
        const myTimeout = setTimeout(random_F, 0);
        myTimeout
        $("h1").text("Level 1 ")
        $("body").css("background-color","grey")
       
        d=1;
        
      

    }
    
})

function check_F(){
    for(var i=0;i<c_colors.length;i++)
    {
        if(c_colors[i]!==r_colors[i])
        {
            $("body").css("background-color","red");
            var aduio = new Audio("sounds/wrong.mp3")
            aduio.play();
            $("h1").text("wrong :( ,refursh the page to rechallenge ")
            r_colors=[];
            c_colors=[];
             c=1;
             
        }
    }
    if(cnt===copycat)
     {
        rrr++;
        $("h1").text("Level "+rrr)
        cnt=0;
    copycat++;
    if(c===0){
        var myTimeout1 = setTimeout(random_F, 500);
        myTimeout1
    }
     }
    
    
}

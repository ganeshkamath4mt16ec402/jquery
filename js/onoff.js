$(function(){
    var flag = true;
    $("#onoff").click(function(){
        if(flag){
        var imgname = "images/on.jpg"
        flag = false
        }
        else{
            var imgname = "images/off.jpg"
        flag = true}
        $("img").attr("src",imgname);
       
    });
    $("#btnhide").click(function(){
     $("#randomtext").hide();   
        
    });
     $("#btnshow").click(function(){
     $("#randomtext").show();   
        
    });
     $("#fadeIn").click(function(){
     $("#box").fadeIn(); 
     });
          $("#fadeOut").click(function(){
     $("#box").fadeOut(); 
          });
     $("#fadetoggle").click(function(){
     $("#box").fadeToggle(); 
          });
         
                 
         
                        
});

       
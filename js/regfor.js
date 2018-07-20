$(function () {
    
    if(localStorage.getItem("students")==null){
        localStorage.setItem("students",JSON.stringify([]));
    }
    
    showRegisteredStudents();
    
    dialog=$("#dialog").dialog({
        autoOpen:false,
        heigth:500,
        width:800,
        modal:true
    });
    
    $(".regstu").click(function(){
        dialog.dialog("open");
    });
    
    $("#dob").datepicker({
        changeYear:true,
        changeMonth:true,
        maxdate:"0d"
        
    });
   $(".submit").click(function(){
        var isValid = $("#regform").validate({
        rules: {
            usn: {
                required: true,
                minlength: 10,
                maxlength: 10,
            },
            name: {
                required: true,
                minlength: 6,

            },
            email: {
                required: true,

            },
            mobile: {
                required: true,
                minlength: 10,
            },
            branch: {
                required: true
            },
            percentage: {
                required: true,
                min:60
            },
            dob:{
                required:true
            }
           



        }, 
        messages: {
            usn: {
                required: "usn can't be empty ",
                minlength: "length must be 10",
                maxlength: "length must be 10",
            },
            name: {

                required: "name can't be empty",
                minlength: "enter minimum 5 characters",
            },
            email: {
                required: "email can't empty",

            },
            mobile: {

                required: "mobile can't be empty",
                minlength: "enter 10 digits"
            },
            branch: {
                required: "Branch can't be empty"
            },
            percentage: {
                required: "percentage cannot be empty",
                min:"you are not eligible"
            },
            dob:{
                required:"dob cannot be empty"
            }
           

        }



    }).form();
       
       if(isValid){
           
           var usn = $("#usn").val();
           var name = $("#name").val();
           var email = $("#email").val();
           var mobile = $("#mobile").val();
           var branch = $("#branch").val();
           var percentage = $("#percentage").val();
           var dob= $("#dob").val();
          $(".reset").click();
           student={
               "usn":usn,
               "name":name,
               "email":email,
               "mobile":mobile,
               "branch":branch,
               "percentage":percentage,
               "dob":dob
               
           }
           var students=getDataFromLocalStorage();
           students.push(student);
          updateLoacalStorageData(students);
           showRegisteredStudents();
           dialog.dialog("close");
           return false;
       }
   });
    function showRegisteredStudents(){
        var students= getDataFromLocalStorage();
        var data = "";
        if(students.length == 0)    {
            data="<h3>no students registered yet..."
        }else{
            data += "<table id='regstudents'><thead><tr>";
            data += "<th>#</th>";
            data += "<th>usn</th>";
             data += "<th>name</th>";
             data += "<th>mobile</th>";
             data += "<th>email</th>";
             data += "<th>branch</th>";
             data += "<th>dob</th>";
             data += "<th>percentage</th>";
            data += "</tr></thead>";
            
            for(var i=0; i<students.length;i++){
                var j = i+1;
                data += "<tr>";
                data += "<td>"+j+"</td>";
                data += "<td>"+students[i].usn+"</td>";
                
             
              
           
                data += "<td>"+students[i].name+"</td>";
                
          
             
                data += "<td>"+students[i].mobile+"</td>";
                
              
            
                data += "<td>"+students[i].email+"</td>";
               
           
                data += "<td>"+students[i].branch+"</td>";
                
              
              
                data += "<td>"+students[i].dob+"</td>";
                
              
         
                data += "<td>"+students[i].percentage+"</td>";
                
                data+= "</tr>";
            }
            data +="</table>";
            }
        $("#content").html(data);
        $("#regstudents").dataTable({
            "pageLength":2
        });
    }
    function getDataFromLocalStorage(){
        var students =
            JSON.parse(localStorage.getItem("students"));
        return students;
    }
    function updateLoacalStorageData(updatedStudentArr){
        localStorage.setItem("students",JSON.stringify(updatedStudentArr));
    }
        
});

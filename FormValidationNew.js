(function($){
    //$.fn.htmlcode = function(selector){
    function htmlcode(selector){
        var code = '<center>' +
                        '<h1>Entry Form</h1>'+
                        '<table id="table1">'+
                            '<tr>'+
                                '<td>First Name:</td>'+
                                '<td><input type="text" id="first" onkeyup="validate();" /></td>'+
                                '<td><div id="errFirst"></div></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>Last Name:</td>'+
                                '<td><input type="text" id="last" onkeyup="validate();"/></td>'+
                                '<td><div id="errLast"></div></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>Email:</td>'+
                                '<td><input type="text" id="email" onkeyup="validate();"/></td>'+
                                '<td><div id="errEmail"></div></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>User Id:</td>'+
                                '<td><input type="text" id="uid" onkeyup="validate();"/></td>'+
                                '<td><div id="errUid"></div></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>Password:</td>'+
                                '<td><input type="password" id="password" onkeyup="validate();"/></td>'+
                                '<td><div id="errPassword"></div></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>Confirm Password:</td>'+
                                '<td><input type="password" id="confirm" onkeyup="validate();"/></td>'+
                                '<td><div id="errConfirm"></div></td>'+
                            '</tr>'+
                            '<tr>'+
                                '<td><input type="button" id="create" value="Create" onclick="finalValidate();"/></td>'+
                                '<td><div id="errFinal"></div></td>'+
                            '</tr>'+
                        '</table>'+
                    '</center>';
      
        var divs = new Array();
        divs[0] = "errFirst";
        divs[1] = "errLast";
        divs[2] = "errEmail";
        divs[3] = "errUid";
        divs[4] = "errPassword";
        divs[5] = "errConfirm";

        function validate()
        {
            var flag = 0;
            var inputs = new Array();
            inputs[0] = $('#first').val();
            inputs[1] = $('#last').val();
            inputs[2] = $('#email').val()
            inputs[3] = $('#uid').val();
            inputs[4] = $('#password').val();
            inputs[5] = $('#confirm').val();

            var errors = new Array();
            errors[0] = "<span style='color:red'>Please enter your first name!</span>";
            errors[1] = "<span style='color:red'>Please enter your last name!</span>";
            errors[2] = "<span style='color:red'>Please enter your email!</span>";
            errors[3] = "<span style='color:red'>Please enter your user id!</span>";
            errors[4] = "<span style='color:red'>Please enter your password!</span>";
            errors[5] = "<span style='color:red'>Please confirm your password!</span>";
                
                for(iter in inputs)
                {
                    let errMessage = errors[iter];
                    let div = divs[iter];
                    let display = $('#'+div);

                    if (inputs[iter] == ""){
                        flag = 1;
                        console.log(flag);
                        display.html(errMessage);
                        //$('#'+div).html(errMessage);
                        //document.getElementById(div).innerHTML = errMessage;
                        //console.log(div);
                    }
                    
                    else if (iter==2)
                    {
                    let atpos=inputs[iter].indexOf("@");
                    let dotpos=inputs[iter].lastIndexOf(".");
                    if (atpos<3 || dotpos < atpos+5 || dotpos+2>=inputs[iter].length)
                        $('#errEmail').html("<span style='color: red'>Enter a valid email address!</span>");
                        //document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
                    else
                        display.html("OK!");
                        //$('#'+div).html("OK!");
                        //document.getElementById(div).innerHTML = "OK!";
                    }

                    else if (iter==5)
                    {
                    let first =$('#password').val();
                    let second = $('#confirm').val();
                    if (second != first)
                        $('#errConfirm').html("<span style='color: red'>Your passwords don't match!</span>");
                        //document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
                    else
                        display.html("OK!");
                        //$('#'+div).html("OK!");
                        //document.getElementById(div).innerHTML = "OK!";
                    }

                    else
                        display.html("OK!");
                        //$('#'+div).html("OK!");
                        //document.getElementById(div).innerHTML = "OK!";
                }
        }
        window.validate = validate;

        // $('#create').click(function(){
        //     console.log("click function");
        //     let count = 0; 
        //     let length = divs.length;
        //     for(iter=0; iter<length; iter++)
        //     {
        //         let div = divs[iter];
        //         let display = $('#'+div);
        //         if(display.html("OK!"))
        //             count = count + 1;
        //     }
        //     if(count == 6)
        //         $("#errFinal").html("All the data you entered is correct!!!");
        //         //document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
        // });

        function finalValidate()
        {
            let count = 0; 
            let length = divs.length;
            //console.log("finalValidate");
            for(iter=0; iter<length; iter++)
            {
                let div = divs[iter];
                let display = '#'+ div;
                let temp = $(display).text();
                //console.log($(display).text());
                //console.log(display.status);
                if(temp == "OK!"){
                    count = count+1;
                }
                // if(display.html("OK!"))
                //     count = count + 1;
            }
            if(count == 6){
                //$("#errFinal").html("All the data you entered is correct!!!");
                //document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";

                // load method
                // $("#div").load('Workout15.html',function(response,status,xhr){
                //     if(status == "error"){
                //         alert(xhr.errMessage + " " +xhr.status);
                //     }
                // });

                // get method
                $.get('Workout15.html',function(data){
                        $('#div').html(data);
                });

                
            }
                
        }
        window.finalValidate = finalValidate;
 
        this.show = function () {
            $('#'+selector).html(code);
                //document.getElementById(selector).innerHTML = widgetcode;
        };
        
    }

    window.htmlcode = htmlcode;
  })(jQuery);
  
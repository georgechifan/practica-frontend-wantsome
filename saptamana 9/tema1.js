var divs=new Array();
divs[0]="errFirst";
divs[1]="errLast";
divs[2]="errEmail";
divs[3]="errUid";
divs[4]="errPwd";
divs[5]="errConfirm";

function validate(){
    var inputs=new Array();
    inputs[0]=document.getElementById('unu').value;
    inputs[1]=document.getElementById('doi').value;
    inputs[2]=document.getElementById('trei').value;
    inputs[3]=document.getElementById('patru').value;
    inputs[4]=document.getElementById('cinci').value;
    var errors= new Array();
    errors[0]="<span>Please enter a username.</span>";
    errors[1]="<span>Please enter your Last name!</span>";
    errors[2]="<span>Please enter your e-mail-id!</span>";
    errors[3]="<span>Please enter your User Id!</span>";
    errors[4]="<span>Please enter your Password!</span>";
    errors[5]="<span>Please enter your Confirm Password!</span>";
}
// function to show message
function validateForm(form){

    if(evaluateName(form) && evaluateAddress(form) && evaluatePostalCode(form) && evaluateEmail(form) && evaluateDate(form) &&
    evaluateInterest(form) && evaluateFeedback(form) && evaluateComments(form)){
        return true;
    }
    else
        return false;
} // end of function validateForm

/*---------------------------------*/

// function to validate User Name
function evaluateName(form){
    var fName = form.elements["fname"];

    if(fName.validity.valueMissing){
        fName.setCustomValidity("Please enter your full name");
        return false;
    }
    else{
        fname.setCustomValidity("");
        return true;
    }

} // end of function evaluateName

/*---------------------------------*/

// function to validate User address
function evaluateAddress(form){
    var address = form.elements["addr"];

    if(address.validity.valueMissing){
        address.setCustomValidity("Please enter your address");
        return false;
    }
    else{
        address.setCustomValidity("");
        return true;
    }

} // end of function evaluateAddress

/*---------------------------------*/

// function to validate User postal code
function evaluatePostalCode(form){
    var code = form.elements["postal"];

    if(code.validity.valueMissing){
        code.setCustomValidity("Please enter your Postal Code");
        return false;
    }
    else if(code.validity.patternMismatch){
        code.setCustomValidity('Please enter your Postal Code on the format "L1L 1L1"');
    }
    else{
        code.setCustomValidity("");
        return true;
    }

} // end of function evaluatePostalCode

/*---------------------------------*/

// function to validate User email address
function evaluateEmail(form){
    var email = form.elements["mail"];

    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter your email address");
        return false;
    }
    else if(email.validity.typeMismatch){
        email.setCustomValidity("Email address " + email.value + "is not in the format expected");
    }
    else{
        email.setCustomValidity("");
        return true;
    }

} // end of function evaluateEmail

/*---------------------------------*/

// function to validate User birth date
function evaluateDate(form){
    var birthDate = form.elements["birth"];

    if(birthDate.validity.valueMissing){
        birthDate.setCustomValidity("Please enter your birth date");
        return false;
    }
    else if(birthDate.validity.rangeUnderflow){
        birthDate.setCustomValidity("Please enter the date greater than January 01, 1920");
        return false;
    }
    else if(birthDate.validity.rangeOverflow){
        birthDate.setCustomValidity("The greatest date accepted is December 31, 2015. If you have born after it please ask an adult to help you with this register.");
    }
    else{
        birthDate.setCustomValidity("");
        return true;
    }

} // end of function evaluateDate

/*---------------------------------*/

// function to validate User interest
function evaluateInterest(form){
    var interest = document.querySelectorAll('input[id^="inte"]:checked');

    if(interest.length == 0){
        document.querySelector('input[id="inte"]').setCustomValidity("Please select at least one interesting");
        return false;
    }
    else{
        document.querySelector('input[id="inte"]').setCustomValidity("");
        return true;
    }

} // end of function evaluateInterest

/*---------------------------------*/

// function to validate User feedback
function evaluateFeedback(form){
    var answer = document.querySelectorAll('input[id^="feed"]:checked');

    if(answer.length == 0){
        document.querySelector('input[id="feed"]').setCustomValidity("Please select either Yes or No");
        return false;
    }
    else{
        document.querySelector('input[id="feed"]').setCustomValidity("");
       
        return true;
    }
} // end of function evaluateInterest

/*---------------------------------*/

// function to enable User feedback
function enableFeedback(value){
    var opt = value;

    if(opt == "yes"){
        document.getElementById("feedback").disabled = false;
    }
    else{
        document.getElementById("feedback").disabled = true;
    }
} // end of function EnableFeedback

/*---------------------------------*/

// function to validate user comments
function evaluateComments(form){
    var text = form.elements["feedback"];

    if(text.validity.valueMissing){
        text.setCustomValidity("Please enter your comments");
        return false;
    }
    else{
        text.setCustomValidity("");
        return true;
    }
} // end of function evaluateComments

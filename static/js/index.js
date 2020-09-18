function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        document.getElementById('id_email_alert').style.display = 'block';
        return false;
    }

    document.getElementById('id_email_alert').style.display = 'none';
    return true;

}

document.getElementById('btn_submit').addEventListener('submit')
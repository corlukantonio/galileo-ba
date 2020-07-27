function formValidate() {
    var bug = true;

    var emailForm = document.emailForm;

    var name = emailForm.name;
    var email = emailForm.email;
    var number = emailForm.number;
    var message = emailForm.message;

    var emailSubmit = emailForm.emailSubmit;

    var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (bug) {
        alert("Trenutno ne mozete poslati e-mail ovdje!\nPokusajte nas kontaktirati na info@galileo.ba.");
        return false;
    } else {
        if (!isEmpty(name.value)) {
            if (emailFilter.test(email.value)) {
                if (!isEmpty(number.value)) {
                    if (!isEmpty(message.value)) {
                        return true;
                    } else {
                        message.focus();
                        return false;
                    }
                } else {
                    number.focus();
                    return false;
                }
            } else {
                email.focus();
                email.select();
                return false;
            }
        } else {
            name.focus();
            return false;
        }

        function isEmpty(value) {
            return (value === "" || value === null);
        }
    }
}
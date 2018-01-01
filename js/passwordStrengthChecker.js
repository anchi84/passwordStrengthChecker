$(document).ready(main);

function main() {
    
    var condition = [false, false, false, false, false];
    $('#message').hide();

    function check() {
        var $pass = $('#pass').val();
        console.log($pass);
        for (var i = 0; i < $pass.length; i++) {
            if ($pass.charAt(i) >= 'A' && $pass.charAt(i) <= 'Z') {
                console.log($pass[i]);
                $('td').eq(0).html('<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>');
                condition[0] = true;
            }

            if ($pass.charAt(i) >= 'a' && $pass.charAt(i) <= 'z') {
                console.log($pass[i]);
                $('td').eq(2).html('<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>');
                condition[1] = true;
            }

            if ($pass.charAt(i) >= '0' && $pass.charAt(i) <= '9') {
                console.log($pass[i]);
                $('td').eq(4).html('<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>');
                condition[2] = true;
            }

            if (isSpecialChar($pass.charAt(i))) {
                console.log($pass[i]);
                $('td').eq(6).html('<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>');
                condition[3] = true;
            }
        }

        if ($pass.length >= 8) {
            $('td').eq(8).html('<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>');
            condition[4] = true;
        }

        if (condition[0] == true && condition[1] == true && condition[2] == true && condition[3] == true && condition[4] == true) {
            $('#checkbox').attr('checked', true);
        }
    }

    function isSpecialChar(x) {
        return isNaN(x) && x.toUpperCase() === x.toLowerCase() ? true : false;
    }

    $('#pass').on('keyup', function(event) {
        if (event.keyCode == "8") {
            console.log('brise karakter');
            condition = [false, false, false, false, false];
            for(i = 0; i <= 8; i = i + 2) {
                $('td').eq(i).html('<i class="fa fa-thumbs-o-down" aria-hidden="true"></i>');
            }
            $('#checkbox').attr('checked', false);
        }
        check();
    });

    $('#pass').on('focus', function(){
        check();
        $('#message').hide();
    });

    $('#pass').on('blur', function() {
        check();
         if (condition[0] == true && condition[1] == true && condition[2] == true && condition[3] == true && condition[4] == true) {
            $('#message').html('<i class="fa fa-check-circle" aria-hidden="true"></i>'+" Šifra ispunjava sve potrebne uslove. Kliknite na 'Prijavi se'!");
        } else if (condition[0] == false || condition[1] == false || condition[2] == false || condition[3] == false || condition[4] == false) {
            $('#message').html('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>'+" Šifra ne ispunjava sve potrebne uslove. Pokušajte ponovo!");
        }
        $('#message').show();
    });

    $('#submit').on('submit', function() {
        if (condition[0] == true && condition[1] == true && condition[2] == true && condition[3] == true && condition[4] == true) {
            alert("Hvala na prijavi!");
            return true;
        } else {
            alert("Šifra ne ispunjava sve potrebne uslove. Pokušajte ponovo!");
            return false;
        }
    });   
}


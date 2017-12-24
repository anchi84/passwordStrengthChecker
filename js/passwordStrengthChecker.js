$(document).ready(main);

function main() {
    var condition = [false, false, false, false, false];
    $('#pass').on('keyup', function() {
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
    });

}

function isSpecialChar(x) {
    return isNaN(x) && x.toUpperCase() === x.toLowerCase() ? true : false;
}
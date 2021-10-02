const listCountry = new Array(2,3,4,5,6);
$(document).ready(function() {
    $("#btn-result").click(function() {
        let a = $("#country").val();
        for (let i = 0; i < listCountry.length; i++) {
            if (a % 2 == 0) {
                $("#result").text("co");
            } else {
                $("#result").text("khong");
            }
            
        }
        
    })

});
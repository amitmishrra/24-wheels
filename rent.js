function show() {
    document.getElementById('slidebar').classList.toggle('active');
}


function rent() {
    var number = document.getElementById('number').value;
    var mail = document.getElementById('mail').value;
    var num = number.toString();
    var m = mail.toString();

    if (m.includes("@", ".") && num.length == 10) {

        var loader = document.getElementById("load").style.display = "block";
        setTimeout(() => {

            var msg = document.getElementById('message').style.display = "block";

            var error = document.getElementById('error').style.display = "none";

            var loader = document.getElementById("load").style.display = "none"

        }, 3000)




    } else {

        var loader = document.getElementById("load").style.display = "block";
        setTimeout(() => {

            var error = document.getElementById('error').style.display = "block";

            var msg = document.getElementById('message').style.display = "none";

            var loader = document.getElementById("load").style.display = "none"

        }, 3000)




    }
}
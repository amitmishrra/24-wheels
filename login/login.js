function show() {
    document.getElementById('slidebar').classList.toggle('active');
}



function login() {
    var result = true;

    var mail = document.getElementById('mail').value;
    console.log(mail);
    var m = mail.toString();

    var pass = document.getElementById('pass').value;
    console.log(pass);
    var p = pass.toString();


    if (m == "mishra4amit4@gmail.com" && p == "password") {

        var loader = document.getElementById("load").style.display = "block";
        setTimeout(() => {

            var loader = document.getElementById("load").style.display = "none"


        }, 3000)
    } else {


        form.addEventListener('submit', (e) => {
            e.preventDefault()
        })

        var loader = document.getElementById("load").style.display = "block";
        setTimeout(() => {
            var error = document.getElementById('error').style.display = "block";
            var loader = document.getElementById("load").style.display = "none";
            var form = document.getElementById("form");





        }, 3000)




    }


}
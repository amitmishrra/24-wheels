function show() {
    document.getElementById('slidebar').classList.toggle('active');
}

console.log("hellosvfvdfvdf ")



var x = true;



function sig() {

    var name = document.getElementById('name').value;
    console.log(name);

    var mail = document.getElementById('mail').value;
    console.log(mail);

    var tel = document.getElementById('tel').value;
    console.log(tel);

    var pass = document.getElementById('pass').value;
    console.log(pass);
    var p = pass.toString;


    var n = name.toString();
    var m = mail.toString();
    var t = tel.toString();





    if (m.includes("@", ".") && (t.includes("1", "2", "3", "4", "5", "6", "7", "8", "9", "0") && (t.length == 10) && (n.length > 3))) {
        x = true;
    } else {
        x = false
    }

    if (x == false) {

        var loader = document.getElementById("load").style.display = "block";


        setTimeout(() => {
            var loader = document.getElementById("load").style.display = "none";
            var error = document.getElementById('error').style.display = "block";

        }, 3000)





    }








    if (x == true) {

        var loader = document.getElementById("load").style.display = "block";

        setTimeout(() => {
            var loader = document.getElementById("load").style.display = "none";


            var error = document.getElementById('error').style.display = "none";
            var succ = document.getElementById('succ').style.display = "block";

        }, 3000)


    }


}
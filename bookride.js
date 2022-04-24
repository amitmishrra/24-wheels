function show() {
    document.getElementById('slidebar').classList.toggle('active');
}







function book() {





    var namee = document.getElementById('name').value;
    var email = document.getElementById('mail').value;
    var loc = document.getElementById('from').value;
    var des = document.getElementById('to').value;
    var dt = document.getElementById('datetime').value;
    // var type = document.getElementById('type').value;



    var n = document.getElementById('n').innerText = namee;
    var l = document.getElementById('l').innerText = loc;
    var d = document.getElementById('d').innerText = des;
    var dat = document.getElementById('dt').innerText = dt;
    var m2 = document.getElementById('m2').innerText = email;
    // var v = document.getElementById('v').innerText = type;

    var body = document.getElementById('message').innerText;


    // var owner = document.getElementById('o').innerText;
    // var contact = document.getElementById('c').innerText;
    // var vnum = document.getElementById('vn').innerText;


    var otp = Math.floor((Math.random() * 1000000) + 1);
    console.log(otp)




    // console.log(body)




    Email.send({
        Host: "smtp.gmail.com",
        Username: "24wheels.in@gmail.com",
        Password: "dqqylyyyfcskhicv",
        To: `${email}`,
        From: "24wheels.in@gmail.com",
        Subject: "Vehicle Succesfully Booked",
        Body: `Dear ${namee}, your OTP is ${otp}. Please do share with driver of vehicle only. - 24 Wheels`
    }).then(
        message => alert(message)
    );





    var number = document.getElementById('number').value;
    var mail = document.getElementById('mail').value;

    var num = number.toString();
    var m = mail.toString();

    if (m.includes("@", ".") && num.length == 10) {

        var loader = document.getElementById("load").style.display = "block";
        setTimeout(() => {

            var msg = document.getElementById('message').style.display = "block";


            var loader = document.getElementById("load").style.display = "none";
            var error = document.getElementById('error').style.display = "none";

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
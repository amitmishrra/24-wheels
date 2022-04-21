function show() {
    document.getElementById('slidebar').classList.toggle('active');
}


function search() {

    var b = true;

    var from = document.getElementById('from').value;
    console.log(from);

    var to = document.getElementById('to').value;
    console.log(to);


    var f = from.toString();
    var t = to.toString();







    if (f.length == 0 || t.length == 0) {
        console.log("empty");

        b = false;
    }

    if (b == true) {

        var loader = document.getElementById("load").style.display = "block";


        setTimeout(() => {
            var loader = document.getElementById("load").style.display = "none";

            var sfrom = document.getElementById('sfrom').innerHTML = from;
            var sto = document.getElementById('sto').innerHTML = to;
            var bb2 = document.getElementById("bb2").style.display = "block";
        }, 3000)
    }


}
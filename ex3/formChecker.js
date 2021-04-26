document.getElementById('form').onsubmit = function() {

    const user = document.getElementById('email').value;
    var res = user.split("@");
    if (document.getElementById("email").value ==""||!document.getElementById("email").value.includes("@")||!document.getElementById("email").value.endsWith(".com"))
    {
        alert("Must be a valid email");
        return false;
    }

    const pass = document.getElementById('password').value;
    if (pass == "")
    {
        alert("Password must be filled out");
        return false;
    }

    const quantity1 = document.getElementById('item1').value;
    const quantity2 = document.getElementById('item2').value;
    const quantity3 = document.getElementById('item3').value;
    const quantity4 = document.getElementById('item4').value;
    if (quantity1 == "" || quantity2 == "" || quantity3 == "" || quantity4 == "")
    {
        alert("Item quantities cannot be empty");
        return false;
    }
    if (quantity1 < 0 || quantity2 < 0 || quantity3 < 0 || quantity4 < "")
    {
        alert("Item quantities cannot be negative");
        return false;
    }

    const ship1 = document.getElementById('free').value;
    const ship2 = document.getElementById('overnight').value;
    const ship3 = document.getElementById('three').value;
    if (ship1 == '' && ship2 == '' && ship3== '')
    {
        alert("Shipping method must be chosen!");
        return false;
    }
}

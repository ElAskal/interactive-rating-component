document.getElementById('submit').onclick = function () {
    var selected = document.querySelector('input[type=radio]:checked');
    console.log(selected.value);
    document.getElementById('finalRating').innerHTML = selected.value;
    document.getElementById('rating').style.visibility = "hidden";
    document.getElementById('thanks').style.visibility = "visible";
};
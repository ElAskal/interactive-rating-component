document.getElementById('submit').onclick = function () {
    var selected = document.querySelector('input[type=radio]:checked');
    console.log(selected.value);
    document.getElementById('finalRating').innerHTML = selected.value;
};
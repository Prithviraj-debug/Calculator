var exp = document.querySelector(".exp");
var keys = document.querySelectorAll(".key");
var del = document.querySelector(".del");
var cal = document.querySelector(".cal");
var calc = document.querySelector(".calc");
var clr = document.querySelector(".clr");

for (i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function(event) {
        exp.value += event.currentTarget.value;
        calc.textContent = eval(exp.value)
    })
}

del.addEventListener("click", () => {
    var value = exp.value;
    exp.value = value.substr(0, value.length - 1);
})

clr.addEventListener("click", () => {
    exp.value = '';
    calc.textContent = eval(exp.value)
})
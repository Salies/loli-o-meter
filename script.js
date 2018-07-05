function picture(e) {
    for (document.querySelector(".picture div").classList.toggle("bgc"), document.querySelectorAll("input[type=text]")[2].placeholder = e, i = 0; i < document.querySelectorAll("input[type=text]").length; i++) document.querySelectorAll("input[type=text]")[i].value = "";
    return !0
}

function calculate() {
    let e = document.querySelectorAll("input[type=text]"),
        t = e[3].value.replace(",", ".") / (e[0].value.replace(",", ".") * e[1].value.replace(",", ".") * e[2].value.replace(",", "."));
    return isNaN(t) ? alert("Por favor preencha todos os campos. Use apenas números.") : document.querySelector(".result").innerHTML = `${t.toFixed(2)} t/l`, !0
}
document.querySelector(".submit").addEventListener("click", function() {
    calculate()
});
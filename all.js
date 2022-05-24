let btn = document.getElementById('btn');
setInterval(function () {
    let h = document.getElementById('height');
    let w = document.getElementById('weight');
    if (h.value == "" || w.value == "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});
function BMI() {
    let h = document.getElementById("height");
    let w = document.getElementById("weight");
    let val = document.getElementById("val");
    let jud = document.getElementById("judge");
    let bmi = Math.ceil((w.value / (h.value / 100) ** 2) * 10) / 10;
    val.textContent = bmi;
    if (isNaN(bmi) || bmi == Infinity || bmi == 0) {
        jud.textContent = "輸入錯誤";
        jud.style.color = "red";
    } else if (bmi < 18.5) {
        jud.textContent = "過輕";
        jud.style.color = "green";
    } else if (bmi < 24) {
        jud.textContent = "標準";
        jud.style.color = "black";
    } else if (bmi < 27) {
        jud.textContent = "過重";
        jud.style.color = "yellow";
    } else if (bmi <= 30) {
        jud.textContent = "輕度肥胖";
        jud.style.color = "brown";
    } else if (bmi < 34) {
        jud.textContent = "中度肥胖";
        jud.style.color = "darkred";
    } else if (bmi < 37) {
        jud.textContent = "中度肥胖";
        jud.style.color = "red";
    }
    h.value = "";
    w.value = "";
}
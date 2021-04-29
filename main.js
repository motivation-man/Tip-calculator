function calculateTip(){
    var billTotal = Number(document.getElementById('bill_total').value);
    var tipPercent = Number(document.getElementById('tip_percent').value);
    var noOfPeople = Number(document.getElementById('no_of_people').value);
    var totalBill = billTotal + tipPercent/100*billTotal;
    var tip = tipPercent/100*billTotal;
    var afterSplit = totalBill/noOfPeople;
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = totalBill;
    document.getElementById("totalBill").style.display = "block";
    document.getElementById("bill").innerHTML = tip;
    document.getElementById("splitBill").style.display = "block";
    document.getElementById("split").innerHTML = afterSplit;
}
    document.getElementById("calculate").onclick = function() {
        calculateTip();
    }
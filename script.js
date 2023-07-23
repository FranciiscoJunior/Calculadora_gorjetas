function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual= document.getElementById('serviceQual').value;
    let num0fPeople = document.getElementById('people').value;
    if(bill == '' || serviceQual == 0){
        alert("por favor, preencha os valores")
        return;
    }
    if(num0fPeople == '' || serviceQual == 0){
        num0fPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else{
        document.getElementById('each').style.display = 'block';
    }
    let total = (bill*serviceQual)/num0fPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = 'block';
}
document.getElementById('totaltip') .style.display = "none";
document.getElementById('each') .style.display = "none";

document.getElementById('tipforms').addEventListener('submit', calculateTip);
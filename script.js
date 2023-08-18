function calculateTip(event){
    event.preventDefault();

    let bill = Number(document.getElementById('bill').value);
    let serviceQual= Number(document.getElementById('ServiceQual').value);
    let num0fPeople = Number(document.getElementById('people').value);

    console.log({bill, serviceQual, num0fPeople});

    if(bill == null || serviceQual == 0){
        alert("por favor, preencha os valores")
        return;
    }
    if(num0fPeople == null || num0fPeople == 1 || serviceQual == 0){
        num0fPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else{
        document.getElementById('each').style.display = 'block';
    }
    let total = parseFloat(bill + (bill*serviceQual/100)/num0fPeople);
    let foreach = total / num0fPeople;
    
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = 'block';
}

document.getElementById('totaltip') .style.display = "none";
document.getElementById('each') .style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);
const result1 = document.getElementById("result");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if(height === "" || isNaN(height) || height <= 0 || weight === "" || isNaN(weight) || weight <= 0){
        result1.innerHTML = "Please enter valid height and weight!";
        return;
    }

    const result = calculateBMI(weight, height);
    result1.innerHTML = `Your BMI is ${result}`;
    return;
})

function calculateBMI(weight, height){
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
}
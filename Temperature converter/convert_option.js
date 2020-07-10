var take_value = document.querySelector(".value");
var take_choice = document.getElementsByName("choice");
var change_name_2 = document.querySelector(".change_name");
var change_name = document.querySelector(".change_name_1");
var result = document.querySelector(".result");
var button_convert = document.querySelector(".btn_convert");

button_convert.addEventListener("click", convert);

function convert(){
    if(take_choice[0].checked){
        var celsius = (take_value.value - 32) * 5/9;
        result.value = celsius.toFixed(2);
    }
    else{
        var fahrenheit = 1.8 * take_value.value + 32;
        result.value = fahrenheit.toFixed(2);
    }
}

function convert_celsius(){
    take_value.focus();
    change_name_2.innerHTML = "Fahrenheit";
    change_name.innerHTML = "Celsius";
}

function convert_fahrenheit(){
    take_value.focus();
    change_name_2.innerHTML = "Celsius";
    change_name.innerHTML = "Fahrenheit";
}


// https://stackoverflow.com/questions/1423777/how-can-i-check-whether-a-radio-button-is-selected-with-javascript/1423852

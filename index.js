// Сonverted to value(m, cm, in, ft) //
function conTo(){
const convertTo = document.querySelector('.options-to');
return convertTo.value;
}
//

//Converted from value(m, cm, in, ft) //
function conFrom(){
    const convertFrom = document.querySelector('.options-from');
    return convertFrom.value
}
//


function lengthConverterToMeter(value){
    value = document.querySelector('#input-value').value
   document.getElementById('output-value').innerHTML = value*0.01;
}

const convertBtn = document.querySelector('.convert-btn');
convertBtn.addEventListener('click', lengthConverterToMeter);
convertBtn.addEventListener('click', conTo);



// Объект в JSON формате, содержащий расстояние заданное для конвертации (distance) со
// значением (value) и шкалой (unit), a также обозначение единицы для шкалы, в которую
// должна быть произведена конвертация (convert_to). Например:
// {"distance": {"unit": "m", "value": 0.5}, "convert_to": "ft"}
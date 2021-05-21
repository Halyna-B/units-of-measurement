
function convertUnits(convertFrom, convertTo, value) {
    const units = {
      "m": 1.0,
      "cm": 0.01,
      "ft": 0.304,
      "in": 0.025,
      "mm": 0.001,
      "yd": 0.914,
      "km": 1000,
    };
    convertFrom = document.querySelector('.options-from');
    convertTo = document.querySelector('.options-to');
    value = document.querySelector('#input-value').value
    if(value < 0){
      alert('Please enter a positive number');
    }else{
    const convertedValue = (
      (value * units[convertFrom.value]) /
      units[convertTo.value]).toFixed(2);
        document.getElementById('output-value').innerHTML = convertedValue;
    }
  }


const convertBtn = document.querySelector('.convert-btn');
convertBtn.addEventListener('click', convertUnits);


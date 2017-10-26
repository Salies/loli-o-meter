/*
voice frequency (hertz) -> f

height (meters) -> h
weight (kilograms) -> w
age (years) -> a
bust diameter (centimeters) <-> penis length (centimeters) -> dp

Lq -> loli quoeficient

<== FORMULA ==>
f / h * w * a * dp
*/

var type = 'loli';

function value(clss){
    let obj = document.querySelector(clss).value;
    return obj;
}

function change(value){
    if(value=='shota'){
        document.querySelector('.d').innerHTML = "Comprimento peniano:";
        document.querySelector('.lolimg').style.display = "none";
        document.querySelector('.shotaimg').style.display = "block";
        document.querySelector('.result').style.marginLeft = '250px';
        document.querySelector('.result').style.float = 'left';
        type = value;
    }
    else{
        document.querySelector('.d').innerHTML = "Diâmetro do busto:"
        document.querySelector('.lolimg').style.display = "block";
        document.querySelector('.shotaimg').style.display = "none";
        document.querySelector('.result').style.marginLeft = '0px';
        document.querySelector('.result').style.float = 'none';
        type = value;
    }
}

function formula(){
    //freuqnecy, height, weight, age, bust, cuteness, user age
    var data = [eval(value('.freq').replace(/,/g, '.')), eval(value('.height').replace(/,/g, '.')), eval(value('.weight').replace(/,/g, '.')), eval(value('.age').replace(/,/g, '.')), eval(value('.bust').replace(/,/g, '.')), eval(1 + ((value('.cuteness').replace(/,/g, '.')) / 100)) , eval(value('.u-age').replace(/,/g, '.'))];
    var loli = (data[0] * data[5] / (data[1] * data[2] * data[4])).toFixed(2);

    if(type=='shota'){var sex = ["e", "o"];}
    else{var sex = ["a", "a"];}

    //check if the user is underage
    if(data[3] <= 18 && data[6] >= 18){
        console.log("Olha a cadeia...");
    }

    //ideal loli check
    if(data[3] < 10){
        var extra = `Infelizmente, est${sex[0]} ${type} é nov${sex[1]} demais para ser considerad${sex[1]} ideal.`;
    }
    else if(data [3] > 17){
        var extra = `Infelizmente, est${sex[0]} ${type} é velh${sex[1]} demais para ser considerad${sex[1]} ideal.`;
    }
    else if(data[3]==14 && type=='loli'){
        var extra =`A loli inserida possui um afrodisíaco eficacíssimo.`;
    }
    else{
        var extra = "";
    }
    
    if(isNaN(loli)){
        var output = "Por favor preencha todos os campos obrigatórios."
    }
    else{
        let msg = `O quoeficiente dest${sex[0]} ${type} é de ${loli} tl.`;
        var output = msg + `<br><span class="extra">${extra}</span>`;
    }

    document.querySelector('.result').innerHTML = output;
    document.querySelector('.result').style.display = 'block';
}
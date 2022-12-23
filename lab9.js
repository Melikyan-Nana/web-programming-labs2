function clickMe(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
    button.innerHTML = 'Щелчок';
}
function clickNameSurname(button) {
    if(button.innerHTML == 'Нахшун')
        button.innerHTML = 'Меликян';
    else
    button.innerHTML = 'Нахшун';
}
function clickCondition(button) {
    if (button.innerHTML =='Нажми меня') {
        button.innerHTML ='Ещё раз нажми';
         button.style.color = 'orange'
    }
    else if (button.innerHTML =='Ещё раз нажми') {
        button.innerHTML = 'Ещё';
        button.style.color = 'red'
    }
       
    else if (button.innerHTML == 'Ещё') {
        button.innerHTML = 'Начать сначала';
        button.style.color = 'green'
    }
      
    else{
        button.innerHTML = 'Нажми меня';
        button.style.color = 'blue'
    }
}
    
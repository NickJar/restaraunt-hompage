function generateMenu(){

    let hero2 = document.createElement('IMG');
    let hero3 = document.createElement('IMG');
    hero2.src = "../dist/menu.png"
    hero3.src = "../dist/menu.png"
    hero2.classList.add('menuIMG');
    hero3.classList.add('menuIMG');

    document.getElementById('body').appendChild(hero2);
    document.getElementById('body').appendChild(hero3);

};
export{generateMenu};
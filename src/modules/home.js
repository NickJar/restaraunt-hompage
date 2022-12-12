function generateHome(){

    let hero = document.createElement('IMG');
    hero.src = "../dist/hero-2.jpeg";
    hero.classList.add('heroIMG');

    document.getElementById('body').appendChild(hero);

};
export{generateHome};
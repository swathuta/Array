const spellBook = ['Expelliramus','Accio','Expecto patronum','Wingardium Leviosa'];
let mannaPoints = 50;

const castSpell = () => {
    // choose a random spell from the array
    console.log('Huzzah! a spell has been cast');

    const randomIndex = Math.floor(Math.random() * spellBook.length);
    console.log(Math.random());
    console.log('randomIndex',randomIndex);
    const randomSpell = spellBook[randomIndex];
    console.log('randomSpell',randomSpell);

    const spellElement = document.getElementById('spell');
    const message = `You cast the ${randomSpell} spell`;
    spellElement.textContent = message;

    mannaPoints = mannaPoints - 5;
    console.log('mannaPoints', mannaPoints);
    

    const mannaElement = document.getElementById('manna-points');
    mannaElement.textContent = mannaPoints;
}

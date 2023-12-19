window.addEventListener('load', function() {
    if (window.scrollY <= 0 && window.location.hash != "#back") {
        MoveDown();
        SetAge();
    } 
    else {
        window.scrollTo(0, 1000);
        ageTitle = document.getElementById('age');
        text = ageTitle.textContent;
        newText = text.replace(0, GetAge(dateOfBirth));
        ageTitle.textContent = newText;
    }
});

let dateOfBirth = '2004-11-12';
let maxAge;
let tempAge = 0;
let intervalID;


function MoveDown() {
    setTimeout(function() {
      window.scroll({
        top: 1000,
        behavior: 'smooth',
        block: 'end'
      });
    }, 5500);
}

function GetAge(dateOfBirth) {
    let now = new Date();
    let birthDate = new Date(dateOfBirth);
    let ageInMilliseconds = now - birthDate;
    let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
}

function SetAge() {
    intervalID = setInterval(LoopAge, 120)
    maxAge = GetAge(dateOfBirth);
}

function LoopAge() {
    ageTitle = document.getElementById('age');
    text = ageTitle.textContent;
    newText = text.replace(tempAge, tempAge + 1);
    tempAge += 1;
    ageTitle.textContent = newText;

    if (tempAge == maxAge) {
        clearInterval(intervalID);
    } 
}

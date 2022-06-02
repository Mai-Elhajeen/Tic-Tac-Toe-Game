{/* <i class="ri-checkbox-blank-circle-line"></i>
<i class="ri-close-fill"></i> */}


// !show start page to start game
const startPage = document.querySelector('#start-page')
const chooses = document.querySelectorAll('.choose')

const gamePage = document.querySelector('#game-page')
const showChange = document.querySelector('#show-change')

// change turns ===> turnX = False || turnO = true
let changeTurn = null;

// ? SELECT WHICH YOU WANT TO BE => X or O
chooses.forEach(choose => {
    choose.addEventListener('click', e => {
        if(choose.id === 'playerX') {
            changeTurn = false;
            // console.log(changeTurn);
            showChange.style.left = `0px`
        }else {
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left = `125px`
        }
        startPage.style.display = 'none';
        gamePage.style.display = 'block';
    })
})
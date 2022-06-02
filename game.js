{/* <i class="ri-checkbox-blank-circle-line"></i>
<i class="ri-close-fill"></i> */}


// !show start page to start game
const startPage = document.querySelector('#start-page')
const chooses = document.querySelectorAll('.choose')

const gamePage = document.querySelector('#game-page')
const showChange = document.querySelector('#show-change')
const boxes = document.querySelectorAll('.box')

const winnerPage = document.querySelector('#winner')
const winnerName = document.querySelector('#winner-name')
const quitBtn = document.querySelector('#quit')


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

// ! add X if change turns = false || add O if change turns = true
boxes.forEach(box => {
    box.addEventListener('click', e => {
        if (changeTurn == false) {
            box.innerHTML = `<i class="ri-close-fill"></i>`;
            box.id = 'X'
            box.style.pointerEvent = 'none'
            showChange.style.left = '125px'

            changeTurn = true
        }else {
            box.innerHTML = `<i class="ri-checkbox-blank-circle-line"></i>`;
            box.id = 'O'
            box.style.pointerEvent = 'none'
            showChange.style.left = '0px'
    
            changeTurn = false
        }

        winning();
        drawing();
    })
})
let winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let winning = () => {
    for(let i=0; i <= 7; i++) {
        let combination = winningCombination[i]
        // console.log(combination);

        if (boxes[combination[0]].id == "" || boxes[combination[1]].id == "" || boxes[combination[2]].id == ""){
            continue;

        }else if ((boxes[combination[0]].id == 'X' && boxes[combination[1]].id == 'X' && boxes[combination[2]].id == 'X')){
            // console.log('X is winner')
            winnerName.innerHTML = `Player X Win the Game!`;

            // show winner page & hide game page
            winnerPage.style.display = 'block'
            gamePage.style.display = 'none'

        }else if ((boxes[combination[0]].id == 'O' && boxes[combination[1]].id == 'O' && boxes[combination[2]].id == 'O')) {
            // console.log('O is winner')
            winnerName.innerHTML = `Player O Win the Game!`;

            // show winner page & hide game page
            winnerPage.style.display = 'block'
            gamePage.style.display = 'none'

        }else {
            continue;
        }
    }
}

// game draw
let drawing = () => {
    if (boxes[0].id != '' && boxes[1].id != '' && boxes[2].id != '' && boxes[3].id != '' &&
    boxes[4].id != '' && boxes[5].id != '' && boxes[6].id != '' && boxes[7].id != '' && boxes[8].id != '') {
        winnerName.innerHTML = `Match Draw!`;

        // show winner page & hide game page
        winnerPage.style.display = 'block'
        gamePage.style.display = 'none'
    }
}

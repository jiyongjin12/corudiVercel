function rectangularColision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    );
    // 공격 감지 
}

function determineWinner({ player, enemy, timerID }) {
    clearTimeout(timerID); // 타이머 정지

    document.querySelector("#displayText").style.display = "flex"; // 승리 표시

    if (player.health === enemy.health) { // 비김 
        document.querySelector("#displayText").innerHTML = "draw";
    }
    else if (player.health > enemy.health) { // 1 승리
        document.querySelector("#displayText").innerHTML = "1p Win!";
    }
    else if (player.health < enemy.health) { // 2 승리 
        document.querySelector("#displayText").innerHTML = "2p Win!";
    }
}

let timerID;
let timer = 5; // 타이머

function decreaseTimer() {
    if (timer > 0) {
        timerID = setTimeout(decreaseTimer, 1000);
        timer--;
        document.querySelector("#timer").innerHTML = timer;
        // 타이머 감소
    }

    if (timer === 0) {
        determineWinner({ player, enemy, timerID });
        // 승리 결정
    }
}
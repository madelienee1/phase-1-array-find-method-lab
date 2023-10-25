// code your solution here


function superbowlWin(element) {
    const winningYear = element.find(object => {
        return object.result === "W";
    });

    if (winningYear) {
        return winningYear.year;
    }
    else {
        return undefined;
    }
}

console.log(superbowlWin(record));





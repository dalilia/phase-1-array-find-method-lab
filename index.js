// code your solution here
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]


function superbowlWin(record){
    
    const winObject = record.find(obj => obj.result === "W");
    return winObject ? winObject.year : undefined;
}

const winningYear = superbowlWin(record);
console.log("Winning Year:", winningYear); 
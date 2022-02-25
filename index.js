// code your solution here
// const record = []

// const found = record.find(superbowlWin => result === "W")

// array called record, results: w/l/na, year: year

// function superbowlWin(

// return record.find(superbowlWin)

// fuction superbowlWin() that finds the year within the record
//in which the Broncos won the superbowl, otherwise returns undefined
//will loop through record
// find year whose result returns W





// function superbowlWin(record){
//     for(let entry of record){
//         if(entry.result === "W"){
//             return entry.year
//         }
//     }
// }






// function superbowlWin(record){
//    record.find((foo) => {
//         if(foo.result === "W"){
//            return foo.year
//         }
//     })
// }



function superbowlWin(recordsArray){ //you can pass in any array you want to
    const foundRecord = recordsArray.find(record => record.result === "W")
    if (!!foundRecord === true) {
        return foundRecord.year
    } else {
        return undefined
    }
 }
    //calling .find on the array. .find takes a function
        // on the left of an arrow function is the individual item you are iterating over, the right is what you are doing to it
        //the item.key on the right
        //.find is looking for a boolean value
        // make sure to return something!!!
 



// function checkResult(record) {
// 	return record.result === "W"
    
// (function superbowlWin(record) {
// 	record.find((foo) => {
//     	return foo.year
//         }
//     )}
    
// console.log (superbowlWin(checkResult))


//  superbowlWin(record)

    // function winningYear(entry){
    //     return entry.result === "W"
    // }

// superbowlWin(winningYear)


// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

//   function isResult(record) {
//       return foo.result === "W"
//   }

//   function superbowlWin((foo) => {
//     record.find(isResult)
//     return foo.year
//   )}


let matches = require('../public/matches.json');
let deliveries = require('../public/deliveries.json');
//1. Number of matches played per year for all the years in IPL.
function matches_played(matches) {
    let obj = {};
    matches.map(e => {
        if (obj[e.season]) {
            obj[e.season]++;
            // document.getElementById("match").innerText= obj["2008"];
        }
        else {
            obj[e.season] = 1;
        }
    })
    return obj;

}

// console.log(matches_played(matches))

// 2. Number of matches won per team per year in IPL

function match_won(matches) {
    let obj1 = {};
    matches.map(e => {
        if (!obj1[e.season]) {
            obj1[e.season] = {}
        }
        if (obj1[e.season][e.winner]) {
            obj1[e.season][e.winner]++
        }
        else {
            obj1[e.season][e.winner] = 1;
        }
    })
    return obj1;
}
// console.log(match_won(matches));

// 3. Extra runs conceded per team in the year 2016

// function extra_runs(deliveries, matches) {
//     let arr = [];
//     matches.map(e => {
//         if (e.season == 2016) {
//             arr.push(e.id);
//         }

//     })
    // let extra = [];
    // for (let i = 0; i < arr.length; i++) {
    //     deliveries.map(e => {
    //         if (arr[i] == e.match_id) {
    //             if (e. ) {
    //                 extra.push(e.extra_runs - 1);
    //             }

    //         }
    //     })
    // }
//     // if(extra<1){
//     // }
//     for (let i = 0; i < extra.length; i++) {
//         if (extra[i] > 0) {
//             const sum = extra.reduce((a, b) => a + b, 0);
//             return sum;
//         }
//     }

// }
// console.log(extra_runs(deliveries, matches));
// // console.log(matches.length)
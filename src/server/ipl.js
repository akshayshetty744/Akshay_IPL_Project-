
let matches = require('../public/matches.json');
let deliveries = require('../public/deliveries.json');
//1. Number of matches played per year for all the years in IPL.
function matches_played(matches) {
    let obj = {};
    matches.map(e => {
        if (obj[e.season]) {
            obj[e.season]++;
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
function extras(deliveries, matches) {
    let extraRuns = {}
    let matchIDs = []

    matches.map((e) => {
        if (e.season === '2016') {
            matchIDs.push(e.id)
        }
    })
    deliveries.map((e) => {
        if (matchIDs.includes(e.match_id)) {
            extraRuns[e.bowling_team] = extraRuns[e.bowling_team] + parseInt(e.extra_runs) || parseInt(e.extra_runs)
        }
    })
    return extraRuns;
}
// console.log(extras(deliveries, matches));

//4. Top 10 economical bowlers in the year 2015

function top10(matches, deliveries) {
    let bowlerObj = {}
    let matchID = []
    matches.map((e) => {
        if (e.season === '2015') {
            matchID.push(e.id)
        }
    })
    deliveries.map((e) => {
        if (matchID.includes(e.match_id)) {
            let bowler = e.bowler
            if (!bowlerObj[bowler]) {
                bowlerObj[bowler] = {}
            }
            bowlerObj[bowler]["runs"] = bowlerObj[bowler]["runs"] + parseInt(e.total_runs) || parseInt(e.total_runs)
            bowlerObj[bowler]["balls"] = bowlerObj[bowler]["balls"] + 1 || 1
            bowlerObj[bowler]["economy"] = bowlerObj[bowler]["runs"] / ((bowlerObj[bowler]["balls"]) / 6)
        }
    }
    )

    let out = []
    for (let key in bowlerObj) {
        out.push([bowlerObj[key]["economy"], key])
    }
    out.sort((a, b) => a[0] - b[0])
    let top10Bowlers = out.slice(0, 10)
    let obj = []
    top10Bowlers.forEach((e) => {
        obj.push({ player_name: e[1], economy: Math.round(e[0]) })

    })
    return obj;
}
console.log(top10(matches, deliveries))
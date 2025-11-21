let hero_b = ["Amit", "Ajay", "Akshay", "Sharukh"];
let hero_t = ["Vijay Thalapri", "Allu Arjun", "Prabhash", "Mhesh Babu", "Nani"];

// hero_b.push(hero_t)
// console.log(hero_b);

// let all_Hero = hero_b.concat(hero_t);
// console.log(all_Hero);

// console.log([...hero_b, ...hero_t]);  //mostley used 

let otherArray = [1,2,8,7,[4,6,2,63,41],7,8,[4,2,53,4,2,[14,5,2,3,]],4,2,14,[4,2,5,45,12]];
let newOtherArray = otherArray.flat(Infinity);
// console.log(newOtherArray);

// console.log(Array.isArray("Yogesh"));
// console.log(Array.from("Yogesh"));

let score = 100;
let score2 = 200;
let score3 = 300;
let sscore4= 500;
console.log(Array.of(score,score2,score3,sscore4));

const username = "Eason";
let level = 1;
level = level + 1;
console.log(1, username, level);

const price = 19.99;
console.log(2, price, typeof price);

const city = "Toronto";
console.log(3, `I live in ${city}`);

const nums = [];
nums.push(10, 20, 30);
console.log(4, nums, nums[0]);

const user = new Map();
user.set("name", "Eason");
user.set("age", 20);
for (let key of user.keys()){
console.log(5, key, user.get(key));
}

const grades = {Mary: "95", "Bob": 80, Tim: "85"};
console.log(grades);

console.log(6, 5=="5", 5==="5");

const score = 72;
if(score > 70) console.log(7, "pass");
else console.log(7, "Fail");

console.log(typeof null);
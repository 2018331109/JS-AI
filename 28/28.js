var names=["a", "b", "c"];
for(var i=0;i<names.length;i++){
    console.log(names[i]);
}

names.shift();
console.log(names);
names.unshift("aa");
console.log(names);

names.splice(1, 0, "katherine");
console.log(names);

var sliced=names.slice(1, 7);
console.log(sliced);

var nums=[1, 4, 12, 3, 6];
nums.sort();
console.log(nums);
nums.sort(function(a, b){
    return a-b;
})

console.log(nums);
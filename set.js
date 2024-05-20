let nums=new Set();
nums.add(3);
nums.add(5);
nums.add("suganya");
nums.add("arun");
nums.add(3);

nums.forEach(n=>{
  console.log(n);
});

console.log(nums.has(3));
/*let A={
    name:'sugi',
    age:16,
    work:{
        tech: 'java',
        non_tech:'communication',
        art1:'drawing',
    }
}
//console.log(A.work.art.length);

//console.log(A.work.art?.length);

delete  A.work.non_tech
console.log(A);
*/


let pen={
   work:"writting",
   style:"blue",
   brand:{
    Xo:"nice",
    Relaiance:"good",
   }
}

console.log(pen.brand.Xo);
console.log(pen.brand.Relaiance);

delete pen.brand.Relaiance;
console.log(pen.brand);
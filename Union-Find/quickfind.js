//Quick Find Algorithm in JS
// Time complexity is quadratic 
// Not efficient algorithm

let nums=10,ids=[];
for(let j=0;j<nums;j++){
  ids[j]=j;
}

function union(a,b){
  let x=ids[a];
  for( let k in ids){
    let y=ids[k];
    if(x == y){
      ids[k] = b;
    }
  }
}

function isConnected(p,q){
  return ids[p]==ids[q];
}

function c(x){
  console.log(x);
}

union(2,3);
c(ids);
union(3,5);
c(ids);
union(9,0);
c(ids);
c(isConnected(5,2))

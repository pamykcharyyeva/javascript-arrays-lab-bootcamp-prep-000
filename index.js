var kittens = ['Milo','Otis','Garfield'] //define your array here

function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
};
function destructivelyPrependKitten(name){
 kittens.unshift(name)
 return kittens;
};
function destructivelyRemoveLastKitten (name){
  kitten.shift();
  return kitten;
};
console.log('kittens:' JSON.stringfy)
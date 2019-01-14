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
function appendKitten(name){
  var newArray = kittens.slice();
  newArray.push(name)
  return newArray
};
function prependKitten(name) {
  return [name, ...kittens];
}
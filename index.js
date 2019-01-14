var kittens = ['Milo','Otis','Garfield'] //define your array here

function destructivelyAppendKitten(name){
 kittens.push(name)
 return kittens
};
function destructivelyAddElementToBeginningOfKittensArray(name){
 kittens.unshift(name)
 return kittens;
};
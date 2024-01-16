const nums = [1, 2, 3, 4, 5] 
//return an array of each number, squared.

const squares = nums.map(function(item){
    return item * item
})

console.log(squares)

const names =["alice", "nkechi", "amaka"]
//return an array of the first letter of each string capitalised

const upperCase = names.map((name) => { //map with arrow function
    return name[0].toUpperCase() + name.slice(1)
})

console.log(upperCase)

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// return this array with elements wrappped in <p> tags

const pokemonParagraph = pokemon.map(item => `<p>${item}</p>`) // arrow function has an implicit return. Here's a shorter way of writing same thing
console.log(pokemonParagraph)
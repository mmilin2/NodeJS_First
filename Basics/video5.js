var person = {
    food:"bacon and cheese",
    movie:"bourne"
};

var milind = person;

milind.food = "chicken";
milind.movie = "godfather";

console.log(milind.food);
console.log(milind.movie);

console.log(person.movie);
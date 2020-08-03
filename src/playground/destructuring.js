// const person = {
//     name: 'Phil',
//     Age: 27,
//     location: {
//         city: 'New York',
//         temperature: 75
//     }
// };

// Line 11, 14 are object destructuring
// const { name: firstName = 'Anonymous', Age } = person;
// console.log(`${firstName} is ${Age}.`);

// const { city, temperature: temp } = person.location;

// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// }

// const book = {
//     title: 'Pablo Escobar',
//     author: 'JK Rowling',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self Publish'} = book.publisher;
// if (publisherName) {
//     console.log(`${publisherName}`);
// }



// Array destructuring

// const address = ['1636 Honeysuckle Ln', 'Apt 23-101', 'Tumwater', 'Washington', '98512'];

// const [street, aptNo, city, state, zipcode] = address;
// console.log(`You are at ${street}, ${aptNo}, ${city}, ${state}, ${zipcode}`);

const item = ['Coffee (hot)', , '$2.50']

const [hotCoffee, small, medium, large] = item;
console.log(`A medium ${hotCoffee} costs ${medium}`);
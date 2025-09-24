let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 32 },
  { name: "Charlie", age: 29 }
];

const oldest = people.reduce((max, person) => 
  person.age > max.age ? person : max
);
console.log(oldest);

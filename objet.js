const student=[
{id: 21, name:"Nayan"},
{id: 33, name:"Messi"},
{id: 29, name:"Ronaldo"},
{id: 25, name:"Naymer"}
];

const names =student.map(s=>s.name);
console.log(names);

const ids =student.map(s=>s.id);
console.log(ids);

const bigger = student.filter(s=> s.id < 30);
console.log(bigger);

const finds = student.find(s=> s.id < 30);
console.log(finds);
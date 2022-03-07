const students = [
    {id: 10, name:'Omar Hasnain'},
    {id: 20, name:'Omar Gul'},
    {id:30, name:'Omar Afridi'},
    {id:40, name:'Omar Akmal'}
];

const names = students.map(s => s.name);
const ids = students.filter(s => s.id >10);
const bigger = students.find(s => s.id >10);

console.log(bigger);
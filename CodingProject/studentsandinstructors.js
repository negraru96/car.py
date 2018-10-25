//Students and Instructors
var students= [
{
  Michael_name: 'Michael Jordan',
},
{
  John_name: 'John Rosales',
},
{
  Mark_name: 'Mark Guillen',
},
{
  KB_name: 'KB Tobel',
},
]
console.log(students.Michael_name, students.John_name, students.Mark_name, students.KB_name);

----------------------------------------------------------
var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

for (var printMe in students) {
  console.log(students[printMe].first_name + " " + students[printMe].last_name);



const studentList = [
  {name: "Lucas",
  firstGrade: 7,
  secondGrade: 5,},

  {name: "Ester",
  firstGrade: 10,
  secondGrade: 10,},

  {name: "Talis",
  firstGrade: 6,
  secondGrade: 5,},

  {name: "Victor",
  firstGrade: 7,
  secondGrade: 3,},

  {name: "Luana",
  firstGrade: 9,
  secondGrade: 6,},
]

  function average (firstGrade, secondGrade){
  return ((firstGrade + secondGrade) / 2)
}

for(let student of studentList) {
  if (average(student.firstGrade, student.secondGrade) >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.firstGrade, student.secondGrade)}
    Parabéns, ${student.name}! Você está aprovado(a) no curso!`)
  } else if (average(student.firstGrade, student.secondGrade) <= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average(student.firstGrade, student.secondGrade)}
    Que pena, ${student.name}! Estude mais na próxima vez`)
}
}
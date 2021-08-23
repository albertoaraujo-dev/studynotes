// function scope
let subject = 'create video';

/*
  só é criado outra variável dentro do escopo da função se for passada 
  como parâmetro
*/
function createThink(subject) {
  subject = 'study';
  return subject;
}

console.log(subject);
console.log();
console.log(subject);

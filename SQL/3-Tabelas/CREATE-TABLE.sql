-- criar tabela
CREATE TABLE alunos (
  -- chave primária e adicionar o número de matrícula automáticamente 
  -- AUTOINCREMENT tbm já garante que seja único
	matricula INTEGER PRIMARY KEY AUTOINCREMENT,
	nome TEXT, -- tipo texto (string)
  	cpf INTEGER UNIQUE, --tipo numérico (int/number)
  	responsavel TEXT	
)

CREATE TABLE professores (
	id_professor INTEGER PRIMARY KEY AUTOINCREMENT,
	nome TEXT,
  	cpf INTEGER UNIQUE,
  	materia TEXT	
)

-- tabela que faz a relação entre as tabelas professores e alunos
CREATE TABLE aulas (
	id_professor INTEGER,
	matricula INTEGER,
    -- id_professor e matricula dessa tabela são chaves extrangeiras
    -- que fazem referência as tabelas professores e alunos
  	FOREIGN KEY(id_professor) REFERENCES professores(id_professor),
  	FOREIGN KEY(matricula) REFERENCES alunos(matricula)
)
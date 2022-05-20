-- altera nome da tabela
ALTER TABLE aluno RENAME TO alunos

ALTER TABLE professor RENAME TO professores

-- altera nome da coluna
ALTER TABLE aulas RENAME COLUMN id_aluno TO matricula_aluno
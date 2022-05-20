-- Mostra o conteúdo da tabela da esquerda(anterior) ao LEFT OUTER, 
-- mesmo não tendo o relacionamento
SELECT * 
FROM 
	funcionarios
LEFT OUTER JOIN
	departamentos
    ON departamentos.id_dept = funcionarios.id_departamento
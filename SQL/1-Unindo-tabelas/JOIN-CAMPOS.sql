SELECT funcionarios.nome, funcionarios.cpf, departamentos.descricao
FROM 
	funcionarios
JOIN
	departamentos
    ON departamentos.id_dept = funcionarios.id_departamento
SELECT * 
FROM 
	funcionarios
JOIN
	departamentos
    ON departamentos.id_dept = funcionarios.id_departamento
WHERE
	funcionarios.id_departamento = 2
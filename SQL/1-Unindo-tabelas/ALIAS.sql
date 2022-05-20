--alias só funcionam dentro do select

SELECT func.nome as 'Nome', func.cpf as 'CPF', dept.descricao as 'Departamento'
FROM 
	funcionarios as func
JOIN
	departamentos as dept
    ON dept.id_dept = func.id_departamento
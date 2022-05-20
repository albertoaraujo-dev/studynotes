-- usado para comparar resultados agrupados
-- WHERE não pode ser usado com resultados agrupados

SELECT 
	departamentos.descricao,
    COUNT(funcionarios.id_departamento)
FROM
	funcionarios
JOIN
	departamentos
    	ON funcionarios.id_departamento = departamentos.id_dept
GROUP BY
	departamentos.id_dept
HAVING
	COUNT(funcionarios.id_departamento) >= 2
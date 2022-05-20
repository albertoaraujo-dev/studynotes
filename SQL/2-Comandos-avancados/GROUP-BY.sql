-- agrupa os registros
-- agrupa os registros (funcionarios do mesmo departamento)
SELECT
	id_departamento,
	COUNT(id_departamento)
FROM
	funcionarios
GROUP BY id_departamento
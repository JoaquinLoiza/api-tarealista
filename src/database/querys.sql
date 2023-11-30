
-- Selecciona todas las columnas de la tabla projects
SELECT * FROM projects;

-- Selecciona todas las columnas de la tabla 
-- projects que coincidan con el id = 1
SELECT * FROM projects WHERE id=1;

-- Actualiza los campos especificados en SET
-- para el elemento que coincida con el id
UPDATE projects SET title = ?, creator = ? WHERE id = ?

-- Elimina el registro de la tabla projects
-- que coincida con el id especificado
DELETE FROM projects WHERE id = ?

-- Crea un nuevo proyecto con los valores dados
INSERT INTO projects (title, creator) VALUES ("Trabajo final IPFL", "Joaquin Loiza");

-- Elimina todos los registros de la tabla projects
TRUNCATE TABLE projects;
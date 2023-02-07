cupones_destacados
SELECT * FROM courses where finOferta > NOW() AND precio_oferta=0 ORDER BY visitas desc LIMIT 13

SELECT * FROM courses WHERE subcategories_id = 40 ORDER BY fecha AND visitas desc LIMIT 3
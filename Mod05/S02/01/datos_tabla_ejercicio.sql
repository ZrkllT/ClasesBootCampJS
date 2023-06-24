/*
select * from public.programa_formativo;
select * from public.modulos;
select * from public.sesion;

select * from public.curso;
select * from public.participantes;
select * from public.participante_curso;
*/

insert into public.PROGRAMA_FORMATIVO (pro_id,pro_nombre)
values(1,'Javascript'),(2,'Python'),(3,'UX/UI')

insert into public.MODULOS (pro_id,mod_id,mod_nombre)
values(1,1,'Core DOM'),(1,2,'Basic Objects'),(1,3,'Data Object'),(1,4,'Dom Event')
,(2,1,'Random'),(2,2,'Class'),(2,3,'Sys')
,(3,1,'Page')

insert into public.SESION (pro_id,mod_id,ses_id,ses_tema,ses_fecha)
values(1,1,1,'Document Properties','01-01-2023'),(1,1,2,'Document Methods','02-01-2023')
,(1,2,1,'Arrays','03-01-2023'),(1,3,1,'getDate()','04-01-2023'),(1,3,2,'getDay()','05-01-2023')
,(1,4,1,'Frame Events','06-01-2023'),(1,4,2,'Mouse Events','07-01-2023'),(1,4,3,'Form Events','08-01-2023')
,(2,1,1,'seed([x])','01-02-2023'),(2,2,1,'__init__','02-02-2023'),(2,3,1,'sys.argv','03-02-2023')
,(3,1,1,'Content Page Media','01-03-2023'),(3,1,2,'General Content','02-03-2023'),(3,1,3,'Page Media','03-03-2023')

insert into public.CURSO (pro_id,cur_id,cur_fecha_i,cur_fecha_t)
values(1,1,'01-01-2023','15-01-2023'),(1,2,'16-01-2023','31-01-2023'),(1,3,'01-02-2023','28-02-2023')
,(2,1,'01-01-2023','22-02-2023'),(2,2,'22-02-2023','22-03-2023')
,(3,1,'01-03-2023','31-03-2023')

insert into public.PARTICIPANTES (par_id,par_rut,par_dv,par_nombres,par_paterno,par_materno)
values(1,10,'8','Nombre1','Paterno1','Materno1'),(2,11,'6','Nombre2','Paterno2','Materno2')
,(3,12,'4','Nombre3','Paterno3','Materno3'),(4,13,'2','Nombre4','Paterno4','Materno4')
,(5,14,'0','Nombre5','Paterno5','Materno5'),(6,15,'9','Nombre6','Paterno6','Materno6')
,(7,16,'7','Nombre7','Paterno7','Materno7'),(8,17,'5','Nombre8','Paterno8','Materno8')
,(9,18,'3','Nombre9','Paterno9','Materno9'),(10,19,'1','Nombre10','Paterno10','Materno10')
,(11,20,'5','Nombre11','Paterno11','Materno11'),(12,21,'3','Nombre12','Paterno12','Materno12')
,(13,22,'1','Nombre13','Paterno13','Materno13'),(14,23,'K','Nombre14','Paterno14','Materno14')
,(15,24,'8','Nombre15','Paterno15','Materno15'),(16,25,'6','Nombre16','Paterno16','Materno16')
,(17,26,'4','Nombre17','Paterno17','Materno17'),(18,27,'2','Nombre18','Paterno18','Materno18')
,(19,28,'0','Nombre19','Paterno19','Materno19'),(20,29,'9','Nombre20','Paterno20','Materno20')
,(21,30,'2','Nombre21','Paterno21','Materno21')

insert into public.PARTICIPANTE_CURSO (cur_id,pro_id,par_id,pcu_correl)
values( 1,3,1,1 ),( 1,1,2,1 ),( 1,2,1,1 ),( 3,1,4,1 ),( 3,1,5,1 ),( 3,1,6,1 )
,( 1,2,7,1 ),( 1,1,8,1 ),( 2,2,9,1 ),( 2,2,10,1 ),( 2,1,11,1 ),( 1,1,12,1 )
,( 1,2,13,1 ),( 1,1,14,1 ),( 1,1,15,1 ),( 1,2,16,1 ),( 1,2,17,1 ),( 2,1,18,1 )
,( 2,2,19,1 ),( 2,1,20,1 ),( 1,3,21,1 )




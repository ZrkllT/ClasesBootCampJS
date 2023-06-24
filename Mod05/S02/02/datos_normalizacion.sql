/*
select * from public.ITEMS
select * from public.IMPUESTOS
select * from public.REGIONES
select * from public.COMUNAS
select * from public.CODIGOS_SISTEMA_SALUD
select * from public.PACIENTES
select * from public.FACTURAS
select * from public.FACTURA_ITEMS
*//*
ALTER SEQUENCE PACIENTES_paciente_id_seq RESTART WITH 1
ALTER SEQUENCE FACTURAS_factura_id_seq RESTART WITH 1
*/

/* insert de datos */
insert into public.ITEMS(item_nombre,item_valor)
values('Consulta Medica Especialidades',12000),('Acido Urico en Sangre',5000),('Ecotomografia Trancraneal',120000)

insert into public.IMPUESTOS(impuesto_descripcion,impuesto_valor)
values('IVA',19),('Retencion Honorarios 2023',13),('Retencion Honorarios 2024',13.75)

insert into public.REGIONES(region_id,region_nombre)
values(8,'Biobio')
insert into public.COMUNAS(region_id,comuna_nombre)
values(8,'Concepcion'),(8,'Penco'),(8,'Talcahuano'),(8,'Florida')

insert into public.CODIGOS_SISTEMA_SALUD(css_nombre)
values('Fonasa'),('Dipreca'),('Isapre')

insert into public.PACIENTES(comuna_id,css_id,paciente_nombre,paciente_direccion)
values(1,1,'Alvaro Cerda','Los Rosales'),(2,2,'Juan San Martin','Sin direccion'),(3,3,'Karen Navarrete','asdas')

insert into public.FACTURAS(impuesto_id,paciente_id,factura_fecha)
values
(1,1,'01-04-2023'),(1,1,'01-03-2023'),(2,3,'11-05-2023'),(2,2,'11-05-2023'),(1,2,'11-05-2023')

insert into public.FACTURA_ITEMS(factura_id,item_id)
values(1,1),(2,2),(3,3),(4,2),(5,1),(1,2),(2,3)
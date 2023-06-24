/*
La academia edutecno se encarga de impartir cursos intensivos para preparar expertos en distintas áreas, 
la misma solicita de tu experiencia para diseñar su base de datos y poder gestionar sus procesos, para cumplir 
con los requerimientos debes tomar en cuenta lo siguiente:

- Los programas formativos que imparte actualmente son Javascript, Python, UX/UI, debe permitir agregar más a futuro.
- Los programas formativos están divididos en módulos.
- Cada módulo está dividido en sesiones.
- Se debe tener un control de los cursos que se van impartiendo, tomando en cuenta lo siguiente:
	- Fecha de inicio y Fecha de Fin
	- Asignar los distintos participantes de cada curso.
	- Cada curso debe tener asociado 1 programa formativo.
*//*
- participante 
- curso
- programa_formativo ( fi, ft, alumno )
	- modulos (programa_formativo)
		- sesiones (modulo)
*/
create table PROGRAMA_FORMATIVO(
	pro_id		int not null
,	pro_nombre	char(200)
,	primary key(pro_id)
);

create table MODULOS(
	mod_id		int	not null
,	pro_id		int	not null
,	mod_nombre	char(100)
,	primary key(mod_id,pro_id)
,	foreign key(pro_id) references PROGRAMA_FORMATIVO(pro_id)
);

create table SESION(
	ses_id				int	not null
,	mod_id				int	not null
,	pro_id				int	not null
,	ses_fecha			date
,	ses_hora_inicio		time
,	ses_hora_termino	time
,	ses_tema			char(200)
,	primary key(ses_id,mod_id,pro_id)
,	foreign key(mod_id,pro_id) references MODULOS(mod_id,pro_id)
);

create table CURSO(
	cur_id		int not null /* número del curso (0023)*/
,	pro_id		int not null
,	cur_fecha_i	date
,	cur_fecha_t	date
,	primary key(cur_id,pro_id)
,	foreign key(pro_id) references PROGRAMA_FORMATIVO(pro_id)
);

create table PARTICIPANTES(
	par_id			int	not null
,	par_rut			int	unique
,	par_dv			char(1)
,	par_nombres		char(100)
,	par_paterno		char(100)
,	par_materno		char(100)
,	par_correo		char(200)
,	par_telefono	char(15)
,	primary key(par_id)
);

create table PARTICIPANTE_CURSO(
	cur_id		int	not null
,	pro_id		int not null
,	par_id		int	not null
,	pcu_correl	int	not null
,	primary key(cur_id,pro_id,par_id,pcu_correl)
,	foreign key(cur_id,pro_id) references CURSO(cur_id,pro_id)
,	foreign key(par_id) references PARTICIPANTES(par_id)
);
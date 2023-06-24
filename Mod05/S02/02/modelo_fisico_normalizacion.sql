/* normalización */
create table public.ITEMS(
	item_id		serial not null
,	item_nombre	char(100) unique
,	item_valor	float
,	primary key(item_id)
);

create table public.IMPUESTOS(
	impuesto_id				serial not null
,	impuesto_descripcion	char(100) unique
,	impuesto_valor			float
,	primary key(impuesto_id)
);

create table public.CODIGOS_SISTEMA_SALUD(
	css_id		serial not null
,	css_nombre	char(100) unique
,	primary key(css_id)
);
/*
/* serial */
insert into public.CODIGOS_SISTEMA_SALUD (css_nombre)
values('uno'),('dos'),('tres'),('cuatro')
/* calculo */
insert into public.CODIGOS_SISTEMA_SALUD (css_id,css_nombre)
values(1,'uno'),(2,'dos')
*/
create table public.REGIONES(
	region_id		serial not null
,	region_nombre	char(100) unique
,	primary key(region_id)
);
create table public.COMUNAS(
	comuna_id		serial not null
,	region_id		int not null
,	comuna_nombre	char(100) unique
,	primary key(comuna_id)
,	foreign key(region_id) references public.REGIONES(region_id)
);

create table public.PACIENTES(
	paciente_id			serial not null
,	comuna_id			int not null
,	css_id				int not null
,	paciente_nombre		char(400)
,	paciente_direccion	char(100)
,	primary key(paciente_id)
,	foreign key(comuna_id) references public.COMUNAS(comuna_id)
,	foreign key(css_id) references public.CODIGOS_SISTEMA_SALUD(css_id)
);

create table public.FACTURAS(
	factura_id		serial not null
,	impuesto_id		int not null
,	paciente_id		int not null
,	factura_fecha	date
,	primary key(factura_id)
,	foreign key(impuesto_id) references public.IMPUESTOS(impuesto_id)
,	foreign key(paciente_id) references public.PACIENTES(paciente_id)
);

create table public.FACTURA_ITEMS(
	factura_id	int not null
,	item_id		int not null
,	primary key(factura_id,item_id)
,	foreign key(factura_id) references public.FACTURAS(factura_id)
,	foreign key(item_id) references public.ITEMS(item_id)
);
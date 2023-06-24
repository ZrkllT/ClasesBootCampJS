--
-- NOTE:
--
-- File paths need to be edited. Search for $$PATH$$ and
-- replace it with the path to the directory containing
-- the extracted data files.
--
--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE practica_may05;
--
-- Name: practica_may05; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE practica_may05 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Spain.1252';


ALTER DATABASE practica_may05 OWNER TO postgres;

\connect practica_may05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: curso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.curso (
    cur_id integer NOT NULL,
    pro_id integer NOT NULL,
    cur_fecha_i date,
    cur_fecha_t date
);


ALTER TABLE public.curso OWNER TO postgres;

--
-- Name: modulos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modulos (
    mod_id integer NOT NULL,
    pro_id integer NOT NULL,
    mod_nombre character(100)
);


ALTER TABLE public.modulos OWNER TO postgres;

--
-- Name: participante_curso; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.participante_curso (
    cur_id integer NOT NULL,
    pro_id integer NOT NULL,
    par_id integer NOT NULL,
    pcu_correl integer NOT NULL
);


ALTER TABLE public.participante_curso OWNER TO postgres;

--
-- Name: participantes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.participantes (
    par_id integer NOT NULL,
    par_rut integer,
    par_dv character(1),
    par_nombres character(100),
    par_paterno character(100),
    par_materno character(100),
    par_correo character(200),
    par_telefono character(15)
);


ALTER TABLE public.participantes OWNER TO postgres;

--
-- Name: programa_formativo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.programa_formativo (
    pro_id integer NOT NULL,
    pro_nombre character(200)
);


ALTER TABLE public.programa_formativo OWNER TO postgres;

--
-- Name: sesion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sesion (
    ses_id integer NOT NULL,
    mod_id integer NOT NULL,
    pro_id integer NOT NULL,
    ses_fecha date,
    ses_hora_inicio time without time zone,
    ses_hora_termino time without time zone,
    ses_tema character(200)
);


ALTER TABLE public.sesion OWNER TO postgres;

--
-- Data for Name: curso; Type: TABLE DATA; Schema: public; Owner: postgres
--

\i $$PATH$$/3019.dat

--
-- Data for Name: modulos; Type: TABLE DATA; Schema: public; Owner: postgres
--

\i $$PATH$$/3022.dat

--
-- Data for Name: participante_curso; Type: TABLE DATA; Schema: public; Owner: postgres
--

\i $$PATH$$/3021.dat

--
-- Data for Name: participantes; Type: TABLE DATA; Schema: public; Owner: postgres
--

\i $$PATH$$/3020.dat

--
-- Data for Name: programa_formativo; Type: TABLE DATA; Schema: public; Owner: postgres
--

\i $$PATH$$/3018.dat

--
-- Data for Name: sesion; Type: TABLE DATA; Schema: public; Owner: postgres
--

\i $$PATH$$/3023.dat

--
-- Name: curso curso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pkey PRIMARY KEY (cur_id, pro_id);


--
-- Name: modulos modulos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modulos
    ADD CONSTRAINT modulos_pkey PRIMARY KEY (mod_id, pro_id);


--
-- Name: participante_curso participante_curso_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participante_curso
    ADD CONSTRAINT participante_curso_pkey PRIMARY KEY (cur_id, pro_id, par_id, pcu_correl);


--
-- Name: participantes participantes_par_rut_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participantes
    ADD CONSTRAINT participantes_par_rut_key UNIQUE (par_rut);


--
-- Name: participantes participantes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participantes
    ADD CONSTRAINT participantes_pkey PRIMARY KEY (par_id);


--
-- Name: programa_formativo programa_formativo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.programa_formativo
    ADD CONSTRAINT programa_formativo_pkey PRIMARY KEY (pro_id);


--
-- Name: sesion sesion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sesion
    ADD CONSTRAINT sesion_pkey PRIMARY KEY (ses_id, mod_id, pro_id);


--
-- Name: curso curso_pro_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.curso
    ADD CONSTRAINT curso_pro_id_fkey FOREIGN KEY (pro_id) REFERENCES public.programa_formativo(pro_id);


--
-- Name: modulos modulos_pro_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modulos
    ADD CONSTRAINT modulos_pro_id_fkey FOREIGN KEY (pro_id) REFERENCES public.programa_formativo(pro_id);


--
-- Name: participante_curso participante_curso_cur_id_pro_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participante_curso
    ADD CONSTRAINT participante_curso_cur_id_pro_id_fkey FOREIGN KEY (cur_id, pro_id) REFERENCES public.curso(cur_id, pro_id);


--
-- Name: participante_curso participante_curso_par_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.participante_curso
    ADD CONSTRAINT participante_curso_par_id_fkey FOREIGN KEY (par_id) REFERENCES public.participantes(par_id);


--
-- Name: sesion sesion_mod_id_pro_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sesion
    ADD CONSTRAINT sesion_mod_id_pro_id_fkey FOREIGN KEY (mod_id, pro_id) REFERENCES public.modulos(mod_id, pro_id);


--
-- PostgreSQL database dump complete
--


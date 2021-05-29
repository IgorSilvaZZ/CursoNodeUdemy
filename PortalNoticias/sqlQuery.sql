create database portal_noticias;
use portal_noticias;
create table noticias(
	id int primary key auto_increment,
    titulo varchar(100),
    noticia text,
    data_criaca timestamp default current_timestamp
)auto_increment=1;

insert into noticias (titulo, noticia) 
values ("Titulo da Noticias", "Conteudo da Noticia");

insert into noticias (titulo, noticia) 
values ("Titulo da Noticias De outra noticia", "Conteudo da outra noticia");

select * from noticias;

alter table noticias add column resumo varchar(100);
alter table noticias add column autor varchar(30);
alter table noticias add column data_noticia date;
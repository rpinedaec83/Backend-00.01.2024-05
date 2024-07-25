call crud_color(2,'Gris',null, null, 1);
call crud_color(1,null,null,null, null);
call crud_color(3,'Negro', 1, 2, 1);
call crud_color(4,null, null, 2, 1);
call crud_color(3,null, 1, 2, 1);

select * from color;
select * from color_bck;


delete from color where id=4;
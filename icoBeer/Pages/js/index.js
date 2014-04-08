function Configuracion()
{
    $.mobile.changePage('#Configuracion', { transition: 'pop', role: 'dialog' });
}

function Inicio() {
    $.mobile.changePage('#Inicio', { transition: 'pop', role: 'dialog' });
    var f = new Date();
    cad = f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
 
}




function Modificar() {
    $.mobile.changePage('#Modificar', { transition: 'pop', role: 'dialog' });
}

function Creditos() {
    $.mobile.changePage('#Creditos', { transition: 'pop', role: 'dialog' });
}

$(document).ready(function(){
    db=window.openDatabase(  'basededatos','1.0','hora',1000000)
});
db: null;

//Para asignar un valor
$("#mi_elemento").data("Descripcion", "value")
$("#mi_elemento").data("Fecha", "value")
$("#mi_elemento").data("Hora", "value")
//Para recuperar un valor
$("#mi_elemento").data("Descripcion")
$("#mi_elemento").data("Fecha")
$("#mi_elemento").data("Hora")





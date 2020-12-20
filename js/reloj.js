
 
    function actualizarHora(){
        var fecha = new Date() ,
            horas = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        var pHoras = document.getElementById('horas'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

           // console.log(fecha);

        pDia.textContent = dia;

        var meses = mes + 1;
        pMes.textContent = meses;
       
        pYear.textContent = year;

        if (horas >= 12) {
            
            horas = horas -12;
        } 
         if (horas == 0) {
            horas = 12;

        };


        pHoras.textContent = horas;

        if (minutos < 10) { minutos = '0' + minutos};
        if (segundos < 10) { segundos = '0' + segundos};

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;



    }
    
    var intervalo = setInterval(actualizarHora, 1000);

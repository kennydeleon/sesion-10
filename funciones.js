//pagina 1
function MostrarValores () {
    let nombre="Kenny"
    let edad=26;
    let esEstudiante=true;
    document.write("Nombre: ",nombre,"<br>");
    document.write("Edad: ",edad,"<br>");
    document.write("Es Estudiante: ",esEstudiante,"<br>","<br>" );

    nombre="kike"
    edad=23;
    esEstudiante=true;
    document.write("Nombre: ",nombre,"<br>");
    document.write("Edad: ",edad,"<br>");
    document.write("Es Estudiante: ",esEstudiante,"<br>","<br>" );
}
//pagina 2
function operacionesmatematicas() {
    let a = 10;
    let b = 5;
    
    document.write("<strong> Resultado de Operaciones:</strong> <br> <br>");
    document.write("suma: "+ (a + b)+ "<br>");
    document.write("resta:"+ (a - b)+ "<br>");
    document.write("multiplicacion:"+(a * b)+"<br>");
    document.write("division:"+(a / b)+ "<br>","<br>");

    document.write("<strong> comparaciones: </strong> <br> <br>");
    document.write("¿10 es igual a 5?"+(a == b),"<br>");
    document.write("¿10 es mayor o igual que 5?"+(a >= b),"<br>");
    document.write("¿10 es menor que 5?",(a <= b),"<br>");
    
}
//pagina 3
function verificarConduccion() {
    let esMayordeEdad = true;
    let tieneLicencia = false;

    const puedeConducir = esMayordeEdad && tieneLicencia;
    document.write("<strong>¿puede conducir?: </strong>" + puedeConducir + "<br><br>");

    const mensajebienvenida = `!hola,bienvenido al sistema¡`;
    document.write("<strong>mensaje de bienvenida: </strong>" + mensajebienvenida);
}
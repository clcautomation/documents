let perfiles = [{ id: "fernando", name: "FERNANDO MAYOL", mail: "ventas@camozziweb.com.ar", foto: "../assets/img/fer.jpeg" }, { id: "nazareno", name: "NAZARENO ÁLVAREZ", mail: "ventas@camozziweb.com.ar", foto: "../assets/img/naza.jpeg" }]

// Obteniendo el perfil referenciado en la URL

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

function cargarContenido() {

    // Obteniendo las id de los elementos

    let foto_id = document.getElementById("foto")
    let nombre_id = document.getElementById("nombre")
    let mail_id = document.getElementById("mail")

    // Estableciendo valores


    for (let i = 0; i < perfiles.length; i++) {
        let objeto = perfiles[i];
        if (objeto.id == id) {
            console.log("Nombre: " + objeto.name);
            console.log("Correo: " + objeto.mail);
            console.log("Foto: " + objeto.foto);

            nombre_id.innerHTML = objeto.name
            mail_id.innerHTML = objeto.mail
            mail_id.href = "mailto:" + objeto.mail
            foto_id.src = objeto.foto


            break;
        }
    }



}
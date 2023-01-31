let perfiles = [{ id: "fernando", name: "FERNANDO MAYOL", mail: "ventas@camozziweb.com.ar", foto: "../assets/img/fer.jpeg", tel: "+54 9 11 5613-6073" }, { id: "nazareno", name: "NAZARENO ÁLVAREZ", mail: "nalvarez@camozziweb.com.ar", foto: "../assets/img/naza.jpeg", tel: "+54 9 11 5180-8128" }, { id: "josefina", name: "JOSEFINA MAYOL", mail: "administracion@camozziweb.com.ar", foto: "../assets/img/jose.jpeg", tel: "+54 9 11 2138-7275" }]

// Obteniendo el perfil referenciado en la URL

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");
console.log(id)

function cargarContenido(num) {

    // Obteniendo las id de los elementos

    let foto_id = document.getElementById("foto")
    let nombre_id = document.getElementById("nombre")
    let mail_id = document.getElementById("mail")
    let btn_mail = document.getElementById("btn-mail")
    let btn_tel = document.getElementById("btn-tel")

    // Estableciendo valores

    if (id !== null) {
        for (let i = 0; i < perfiles.length; i++) {
            let objeto = perfiles[i];
            if (objeto.id == id) {
                console.log("Nombre: " + objeto.name);
                console.log("Correo: " + objeto.mail);
                console.log("Foto: " + objeto.foto);

                nombre_id.innerHTML = objeto.name
                mail_id.innerHTML = objeto.mail

                if (num != 2) {
                    mail_id.href = "mailto:" + objeto.mail
                    btn_mail.href = "mailto:" + objeto.mail
                    btn_tel.href = "tel:" + objeto.tel
                } else {
                    btn_mail.innerHTML = objeto.mail
                    btn_tel.innerHTML = objeto.tel
                }

                foto_id.src = objeto.foto


                break;
            }
        }

    } else {
        let objeto = perfiles[0];

        nombre_id.innerHTML = objeto.name
        mail_id.innerHTML = objeto.mail

        if (num != 2) {
            mail_id.href = "mailto:" + objeto.mail
            btn_mail.href = "mailto:" + objeto.mail
            btn_tel.href = "tel:" + objeto.tel
        } else {
            btn_mail.innerHTML = objeto.mail
            btn_tel.innerHTML = objeto.tel
        }

        foto_id.src = objeto.foto
    }


}
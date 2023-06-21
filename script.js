const validarForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("FirstName").value;
    const surname = document.getElementById("SecondName").value;
    const mail = document.getElementById("Mail").value;
    const company = document.getElementById("Company").value;
    const phoneNumber = document.getElementById("Phone").value;
    const message = document.getElementById("Message").value;


    console.log(`
    Nombre: ${name}
    Apellido: ${surname}
    Email: ${mail}
    Compañía: ${company}
    Teléfono: ${phoneNumber}
    Mensaje: ${message}`);

    alert(`Nombre: ${name}\nApellido: ${surname}\nEmail: ${mail}\nCompañía: ${company}\nTeléfono: ${phoneNumber}\nMensaje: ${message}`);
}
form.addEventListener('submit', validarForm )
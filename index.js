

function ocultar() {
    document.getElementById('idiomas_cv').style.display = 'none';
    document.getElementById('boton2').style.display = 'none';
    document.getElementById('boton1').style.display = 'block';
}

function mostrar() {
    document.getElementById('idiomas_cv').style.display = 'block';
    document.getElementById('boton1').style.display = 'none';
    document.getElementById('boton2').style.display = 'block';
}

const foto = document.querySelector("#foto")
const boton = document.getElementById("boton")
        const generar_cv = async() => { 
            const resultados = await fetch("https://randomuser.me/api/");
            const { results } = await resultados.json();
            const data = results[0];
            console.log(data);

            foto.src = data.picture.medium
            document.getElementById("name_cv").innerHTML = data.name.first
            document.getElementById("lastname_cv").innerHTML = data.name.last
            document.getElementById("cell_cv").innerHTML = data.cell
            document.getElementById("phone_cv").innerHTML = data.phone
            document.getElementById("email_cv").innerHTML = data.email
            document.getElementById("street_cv").innerHTML = data.location.street.name+" "+data.location.street.number
            document.getElementById("city_cv").innerHTML = data.location.city
            document.getElementById("postcode_cv").innerHTML = data.location.postcode
            document.getElementById("nat_cv").innerHTML = data.nat
            document.getElementById("age_cv").innerHTML = data.dob.age
        }

        boton.addEventListener("click", generar_cv);
        document.addEventListener("DOMContentLoaded", generar_cv);

    
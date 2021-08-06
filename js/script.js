const url="http://api.weatherstack.com/current?access_key=56296a2905b74a024a89726edbed4b6c&query=Montevideo"; 
       

        fetch(url) //Realizamos el fetch que devolverá una promesa
            .then( respuesta=>respuesta.json()) //Obtenemos una promesa que trataremos como json
            .then(datos=> { //obtenemos una nueva promesa, pero los datos ya están como json.
                
                document.getElementById('ciudad').innerHTML= "Ciudad:" + " " + datos.location.name + ", " + datos.location.country; //escribo los datos del país
                document.getElementById('fecha').innerHTML= datos.location.localtime;
                document.getElementById('temp').innerHTML= "Temp:" + " " + datos.current.temperature + "º" + " " + (datos.current.weather_descriptions);//escribo la temperatura y la descripción
                document.getElementById('imagen').src= datos.current.weather_icons; //imagen
                document.getElementById('humidity').innerHTML= "Humedad:" + " " + datos.current.humidity + "%";
                document.getElementById('feels_like').innerHTML= "Sens. Térmica:" + " " + datos.current.feelslike + "º";
                document.getElementById('vientos').innerHTML= "Vientos: " + datos.current.wind_speed + "km/h";
                document.getElementById('probLluvia').innerHTML= "Precipitaciones: " + datos.current.precip + "%";
            })
            .catch( error => alert("Hubo un error: " + error));
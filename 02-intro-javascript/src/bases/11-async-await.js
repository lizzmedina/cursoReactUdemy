

// const getImagenPromesa = () => new Promise (resolve  => resolve('https://aalsjfñaslgjaskdf.com'));

// getImagenPromesa().then( console.log );

// const getImage = async()=> {
//     return 'https://aalsjfñaslgjaskdf.com';
// }
// //console.log(getImage());
// getImage().then(console.log);


// ***************************************************//

const getImage = async()=> {

    try{

        const apiKey = 'tZjjpYa8ZqajwMM6eXmXwjFIPLyIOG3M';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();

        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src =url;
        document.body.append(img);

    } catch (err) {
        console.error(err);
    }
}
getImage();

// solo podemos usar await en una función async
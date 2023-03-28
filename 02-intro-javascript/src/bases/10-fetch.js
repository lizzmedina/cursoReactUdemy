const apiKey = 'tZjjpYa8ZqajwMM6eXmXwjFIPLyIOG3M';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp =>{
//     resp.json().then(data => {
//         console.log(data);
//     })
// })
// .catch(console.warn);


//codigo más limpio y optimo:
peticion
    .then(resp => resp.json())
    .then(({data}) => {
       // console.log(data.images.original.url);
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src =url;
        document.body.append(img);

    })
    .catch(console.warn);
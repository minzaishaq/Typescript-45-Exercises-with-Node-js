// Creating make_album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;

}

// Calling three functions and creating three variables with different values

let album_1 = make_album("Josh", "Creative");

let album_2 = make_album("jhon", "Modern");

// Calling a make_album function with third parameter
let album_3 = make_album("walton", "Darkness", 20);

// Printing the values
console.log(album_1);
console.log(album_2);
console.log(album_3);
// Creating make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three functions and creating three variables with different values
var album_1 = make_album("Josh", "Creative");
var album_2 = make_album("jhon", "Modern");
// Calling a make_album function with third parameter
var album_3 = make_album("walton", "Darkness", 20);
// Printing the values
console.log(album_1);
console.log(album_2);
console.log(album_3);

//  Q40
 
 function myAlbum(artistName: string, albumTitle: string){
    return {artistName, albumTitle}
 }

 let album1= myAlbum("Atif Aslam", "Suna hai Suna hai");
 let album2= myAlbum("Arjit Singh", "Ve Kemleya");
 let album3= myAlbum("Ali Zafar", "Aly Munja");

 console.log(album1);
 console.log(album2);
 console.log(album3);

 // Number of tracks
 function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: number){
    return{artistName, albumTitle, numberOfTracks}
 }

 let album4 = myAlbum2("Atif Aslam", "Suna hai Suna hai", 30);
 let album5 = myAlbum2("Arjit Singh", "Ve Kemleya", 50);
 let album6 = myAlbum2("Ali Zafar", "Aly Munja");


 console.log(album4);
 console.log(album5);
 console.log(album6);

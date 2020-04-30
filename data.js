const data = [
    {
      artist: "Drake",
      title: "One Dance",
      image:
        "https://www.soul-addict.com/upload/drake%20Views%20From%20The%206%20cover.jpg",
    },
    {
      artist: "Rihanna",
      title: "Diamonds",
      image:
        "https://i.pinimg.com/originals/4b/d3/36/4bd336da122345f86f239c5d7f6593c2.jpg",
    },
    {
      artist: "Coldplay",
      title: "Yellow",
      image: "https://m.media-amazon.com/images/I/91BIt8cpbrL._SS500_.jpg",
    },
    {
      artist: "Kendrick Lamar",
      title: "Humble",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71tAOC%2Bdf8L._SL1400_.jpg",
    },
    {
      artist: "Halsey",
      title: "Without Me",
      image:
        "https://static.fnac-static.com/multimedia/Images/FR/NR/28/e8/ad/11397160/1540-1/tsp20190913093122/Manic.jpg",
    },
    {
      artist: "Dua Lipa",
      title: "Physical",
      image:
        "https://soundofbrit.fr/wp-content/uploads/2020/03/Dua-Lipa-Future-Nostalgia.jpg",
    },
    {
      artist: "J cole",
      title: "Middle Child",
      image:
        "https://static.hotmixradio.fr/wp-content/uploads/j-cole-middle-child.jpg",
    }
  ];

data.sort( ()=> Math.random() - 0.5);

const album = document.querySelectorAll('.album-img');
const song = document.querySelectorAll('.song-name');
const artist = document.querySelectorAll('.artist');

const songName = Array.from(song);
const artistName = Array.from(artist);
const albumImages = Array.from(album);

songName.forEach( (song, index)=> {
  song.textContent = data[index].title;
});
artistName.forEach( (artist, index)=> {
  artist.textContent = data[index].artist;
});
albumImages.forEach( (item, index)=> {
  item.src = data[index].image;
});


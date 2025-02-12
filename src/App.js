import "./styles.css";

export default function App() {
  const names = [
    "Baby driver",
    "Inception",
    "Django Unchained",
    "The Dark Knight",
    "joker",
    "Rambo last blood",
    "No time to die",
    "Terminator dark fate"
  ];
  //array of object
  const movies = [
    {
      name: "Baby driver (2017)",
      poster: "https://movieposters2.com/images/1483631-b.jpg",
      imdb: "7.6",
      summary:
        "Baby, a music-loving orphan also happens to be the prodigiously talented go-to getaway driver for heist mastermind Doc. With the perfect soundtrack picked out for each and every job, Baby ensures Doc's violent, bank-robbing cronies - including Buddy, Bats and Darling - get in and out of Dodge before it's too late. He's not in it for the long haul though, hoping to nail one last job before riding off into the sunset with beautiful diner waitress Debora. Easier said than done."
    },

    {
      name: "Inception (2010)",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      imdb: "8.7",
      summary:
        "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move."
    },

    {
      name: "Django Unchained (2012)",
      poster:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt",
      imdb: "8.4",
      summary:
        "Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave."
    },

    {
      name: "The Dark Knight (2008)",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      imdb: "9",
      summary:
        "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."
    },

    {
      name: "Joker (2019)",
      poster:
        "https://i.pinimg.com/originals/63/7f/e8/637fe8db538df2456654553cdf02d55c.jpg",
      imdb: "8.4",
      summary:
        "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker."
    },

    {
      name: "Rambo last blood (2021)",
      poster:
        "https://i2.wp.com/stallonezone.com/zone/2019/z061719moreno_rambolastblood.png",
      imdb: "6.1",
      summary:
        "Vietnam War veteran John Rambo tries to find some semblance of peace by raising horses on a ranch in Arizona. He's also developed a special familial bond with a woman named Maria and her teenage granddaughter Gabriela. But when a vicious Mexican cartel kidnaps Gabriela, Rambo crosses the border on a bloody and personal quest to rescue her and punish those responsible."
    },

    {
      name: "No time to die (2021)",
      poster: "https://m.media-amazon.com/images/I/61+z06sGHWS._AC_SL1050_.jpg",
      imdb: "7.4",
      summary:
        "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond on the trail of a mysterious villain who's armed with a dangerous new technology."
    },

    {
      name: "Terminator dark fate (2019)",
      poster:
        "https://talenthouse-res.cloudinary.com/image/upload/c_fill,h_909,w_640/v1569188362/user-1026353/submissions/ubzimil3i19rmpeyzw84.jpg",
      imdb: "6.2",
      summary:
        "In Mexico City, a newly modified liquid Terminator -- the Rev-9 model -- arrives from the future to kill a young factory worker named Dani Ramos. Also sent back in time is Grace, a hybrid cyborg human who must protect Ramos from the seemingly indestructible robotic assassin. But the two women soon find some much-needed help from a pair of unexpected allies -- seasoned warrior Sarah Connor and the T-800 Terminator."
    }
  ];
  return (
    <div className="App">
      <section className="movie-list">
      {movies.map((movie) => (
        <Hollywood
          name={movie.name}
          poster={movie.poster}
          imdb={movie.imdb}
          summary={movie.summary}
        />
      ))}
      </section>
    </div>
  );
}

function Hollywood({ name, poster, imdb, summary }) {
  return (
    <div className="movie-container">
      <img className="movie-pic" src={poster} alt={name} />
      <div className="movie-specs">
        <p className="movie-name"> {name} </p>
        <p className="movie-rating"> ⭐ {imdb} </p>
      </div>
      <p className="movie-summary"> {summary} </p>
    </div>
  );
}

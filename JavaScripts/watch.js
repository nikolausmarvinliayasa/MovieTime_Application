// Fungsi untuk mengarahkan ke halaman detail film dengan judul film sebagai parameter
function goToMovieDetail(title) {
    window.location.href = 'watch.html?title=' + encodeURIComponent(title);
}

// Data film
var movies = [
  {
    posterURL: "https://upload.wikimedia.org/wikipedia/id/a/ae/1917_film_poster.jpg",
    mainPoster: "https://i.ebayimg.com/images/g/gVcAAOSw~kFflHUk/s-l960.jpg",
    title: "1917", 
    rating: 8.5,
    year: 2019,
    duration: "1h 59m",
    synopsis: "April 1917, the Western Front. Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldiers’ brothers, from walking straight into a deadly trap.",
    type: "Film",
    genre: "Action",
    releaseDate: "25 December 2019",
    production: "Dreamworks Pictures, Reliance Entertainment",
    director: "Sam Mendes",
    cast: "Dean-Charles Chapman, Pip Carter, Daniel Mays, Colin Firth, Mark Strong, Benedict Cumberbatch",
    trailerURL: "https://www.youtube.com/embed/YqNYrYUiMfg?si=VN_WSCqYpXJNxiKk",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
  mainPoster: "https://sportshub.cbsistatic.com/i/2022/08/22/466e5e6b-1600-4b7a-a687-6b18e07bed1b/spider-man-no-way-home-rerelease.jpg",
    title: "Spider-Man: No Way Home",
    rating: 8.2,
    year: 2021,
    duration: "2h 28m",
    synopsis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    type: "Film",
    genre: "Action",
    releaseDate: "13 December 2021",
    production: "Columbia Pictures, Marvel Studios, Pascal Pictures",
    director: "Jon Watts",
    cast: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, Tobey Maguire",
    trailerURL: "https://www.youtube.com/embed/JfVOs4VSpmA?si=p7CAtHPrCWHP8agL",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
  mainPoster: "https://ntvb.tmsimg.com/assets/p8815512_v_h10_ac.jpg?w=1280&h=720",
    title: "The Avengers",
    rating: "8.0",
    year: 2012,
    duration: "2h 23m",
    synopsis: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).",
    type: "Film",
    genre: "Action",
    releaseDate: "4 May 2012",
    production: "Marvel Studios",
    director: "Joss Whedon",
    cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston, Stellan Skarsgard, Samuel L. Jackson",
    trailerURL: "https://www.youtube.com/embed/eOrNdBpGMv8?si=nQgTb3D4eG2QVjyw",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
  mainPoster: "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
    title: "The Dark Knight",
    rating: "9.0",
    year: 2008,
    duration: "2h 32m",
    synopsis: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
    type: "Film",
    genre: "Action",
    releaseDate: "18 July 2008",
    production: "	Warner Bros. Pictures, Legendary Pictures, Syncopy[a]",
    director: "Christopher Nolan",
    cast: "Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, Morgan Freeman",
    trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY?si=qIdN9PdHY8ZBWiJ8",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
  mainPoster: "https://i0.wp.com/awardswatch.com/wp-content/uploads/2023/02/Screenshot-2023-02-13-at-8.01.58-AM.png?fit=1200%2C676&ssl=1",
    title: "Titanic",
    rating: 7.9,
    year: 1997,
    duration: "3h 15m",
    synopsis: "James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built. She was the most luxurious liner of her era -- the ship of dreams -- which ultimately carried over 1,500 people to their death in the ice cold waters of the North Atlantic in the early hours of April 15, 1912.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "5 January 1998",
    production: "Paramount Pictures(United States and Canada), 20th Century Fox(International)",
    director: "James Cameron",
    cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates, Frances Fisher, Bernard Hill, Jonathan Hyde, Danny Nucci, David Warner, Bill Paxton",
    trailerURL: "https://www.youtube.com/embed/CHekzSiZjrY?si=h-V1qzCT2D2pe2B2",
    category: "Top10"
  },
 {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
  mainPoster: "https://image.tmdb.org/t/p/w1280/ws1dxpFpOXMOBPkplThbNaUtxFp.jpg",
    title: "Frozen",
    rating: 7.4,
    year: 2013,
    duration: "1h 42m",
    synopsis: "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.",
    type: "Film",
    genre: "Drama",
    releaseDate: "29 November 2013",
    production: "Walt Disney Pictures, Walt Disney Animation Studios",
    director: "Chris Buck, Jennifer Lee",
    cast: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad, Santino Fontana",
    trailerURL: "https://www.youtube.com/embed/TbQm5doF_Uc?si=Yhd20SxpTqw9oBma",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
  mainPoster: "https://material.asset.catchplay.com/DIS-TW-004-A1020/artworks/posters/DIS-TW-004-A1020-P1200.jpg?hash=1712050862",
    title: "The Lion King",
    rating: 8.5,
    year: 1994,
    duration: "1h 28m",
    synopsis: "This Disney animated feature follows the adventures of the young lion Simba (Jonathan Taylor Thomas), the heir of his father, Mufasa (James Earl Jones). Simba's wicked uncle, Scar (Jeremy Irons), plots to usurp Mufasa's throne by luring father and son into a stampede of wildebeests. But Simba escapes, and only Mufasa is killed. Simba returns as an adult (Matthew Broderick) to take back his homeland from Scar with the help of his friends Timon (Nathan Lane) and Pumbaa (Ernie Sabella).",
    type: "Film",
    genre: "Animation",
    releaseDate: "24 June 1994",
    production: "Walt Disney Pictures, Walt Disney Feature Animation",
    director: "Roger Allers, Rob Minkoff",
    cast: "Jonathan Taylor Thomas, Matthew Broderick, James Earl Jones, Jeremy Irons, Moira Kelly, Ernie Sabella, Nathan Lane, Robert Guillaume, Rowan Atkinson, Whoopi Goldberg, Cheech Marin, Jim Cummings, Madge Sinclair",
    trailerURL: "https://www.youtube.com/embed/lFzVJEksoDY?si=1ocdKWEh71FqeAZT",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg",
  mainPoster: "https://i.ytimg.com/vi/YXrYgF2iMw8/maxresdefault.jpg",
    title: "Jurassic World",
    rating: 6.9,
    year: 2015,
    duration: "2h 4m",
    synopsis: "Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex. When the massive creature escapes, it sets off a chain reaction that causes the other dinos to run amok. Now, it's up to a former military man and animal expert (Chris Pratt) to use his special skills to save two young brothers and the rest of the tourists from an all-out, prehistoric assault.",
    type: "Film",
    genre: "Action",
    releaseDate: "10 June 2015",
    production: "Amblin Entertainment, Legendary Pictures, The Kennedy/Marshall Company[1]",
    director: "Colin Trevorrow",
    cast: "Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, Irrfan Khan",
    trailerURL: "https://www.youtube.com/embed/RFinNxS5KN4?si=7SsoFicHkT0CJUuT",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  mainPoster: "https://i.ebayimg.com/images/g/VNwAAOSwu3lkuGJI/s-l1200.jpg",
    title: "Barbie",
    rating: 6.8,
    year: 2023,
    duration: "1h 54m",
    synopsis: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "21 July 2023",
    production: "Heyday Films, LuckyChap Entertainment, NB/GG Pictures, Mattel Films",
    director: "Greta Gerwig",
    cast: "Margot Robbie, Ryan Gosling, America Ferrera, Kate McKinnon, Issa Rae, Rhea Perlman, Will Ferrell",
    trailerURL: "https://www.youtube.com/embed/RFinNxS5KN4?si=K_yNTDd7T7N2lv9a",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
  mainPoster: "https://wallpapers.com/images/hd/the-conjuring-poster-y2bs1yiiscn9qdio.jpg",
    title: "The Conjuring",
    rating: 7.5,
    year: 2013,
    duration: "1h 52m",
    synopsis: "In 1970, paranormal investigators and demonologists Lorraine (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to the home of Carolyn (Lili Taylor) and Roger (Ron Livingston) Perron. The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.",
    type: "Film",
    genre: "Horror",
    releaseDate: "16 July 2013",
    production: "New Line Cinema, The Safran Company, Evergreen Media Group",
    director: "James Wan",
    cast: "Vera Farmiga, Patrick Wilson, Ron Livingston, Lili Taylor",
    trailerURL: "https://www.youtube.com/embed/k10ETZ41q5o?si=fdZGRPTEyDXk9560",
    category: "Top10"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f7/The_Idea_of_You_film_poster.jpg",
  mainPoster: "https://media-cache.cinematerial.com/p/500x/1orqm1hy/the-idea-of-you-movie-poster.jpg?v=1714146768",
    title: "The Idea of You",
    rating: 6.2,
    year: 2024,
    duration: "1h 56m",
    synopsis: "A 40-year-old single mum begins an unexpected romance with a 24-year-old boy band singer.",
    type: "Film",
    genre: "Romance",
    releaseDate: "16 March 2024",
    production: "Amazon MGM Studios, Somewhere Pictures, Welle Entertainment, Belle Hope Productions",
    director: "Michael Showalter",
    cast: "Anne Hathaway, Nicholas Galitzine",
    trailerURL: "https://www.youtube.com/embed/V8i6PB0gGOA?si=xbz7e2_wV4rURf6H",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/b/b2/Article_370_film_poster.jpeg",
  mainPoster: "https://kashmirtimes.com/wp-content/uploads/2024/03/A-poster-of-film-Article-370-e1709694497373.jpg",
    title: "Article 370",
    rating: 8.1,
    year: 2024,
    duration: "2h 38m",
    synopsis: "Article 370, which came into effect in October 1949, granted Kashmir autonomy of internal administration, allowing it to make its own laws in all matters except finance, defence, foreign affairs and communications.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "23 February 2024",
    production: "B62 Studios",
    director: "Aditya Suhas Jambhale",
    cast: "Yami Gautam Dhar, Priya Mani",
    trailerURL: "https://www.youtube.com/embed/6Pf6RUmq7S0?si=6W0O_8u_EsdNd4S_",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/2/26/Tillu_Square_Teaser.jpeg",
  mainPoster: "https://img.republicworld.com/tr:w-600,q-75,f-auto/rimages/blob-170403910249916_9.webp",
    title: "Tillu Square",
    rating: "7.0",
    year: 2024,
    duration: "2h 3m",
    synopsis: "One year after a love affair bound him up in a murder case, a foolish DJ has a one-night encounter that leads to even bigger kerfuffles related to his past.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "29 March 2024",
    production: "Sithara Entertainments, Fortune Four Cinemas",
    director: "Mallik Ram",
    cast: "Siddhu Jonnalagadda, Anupama Parameswaran",
    trailerURL: "https://www.youtube.com/embed/JrdixTnMl8E?si=8T46Ucg1ME-XS5SQ",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Yuva_Movie_Poster.jpg/330px-Yuva_Movie_Poster.jpg",
  mainPoster: "https://m.media-amazon.com/images/M/MV5BOGI2Yjg5ZGQtMWNmMi00NDcxLTgwMGItY2ZmNWZmODRmMjRmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg",
    title: "Yuva",
    rating: 5.8,
    year: 2024,
    duration: "2h 42m",
    synopsis: "Three men of vastly different backgrounds and ambitions are bound together after an accident on a bridge in Calcutta, India. Michael (Ajay Devgan) is a passionate youth working for a better India. Arjun (Vivek Oberoi) is blithe and materialistic, concerned only with striking it rich. And Lallan (Abhishek Bachchan) is a violent thug working for a corrupt politician. The fateful crossing highlights each man's outlook, forcing him to make difficult choices and ultimately risk his life.",
    type: "Film",
    genre: "Action",
    releaseDate: "29 March 2024",
    production: "Hombale Films",
    director: "Santhosh Ananddram",
    cast: "Yuva Rajkumar, Sapthami Gowda",
    trailerURL: "https://www.youtube.com/embed/9umBUqn9NeI?si=tnZeyvDGo4eo6514",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/d/dd/Rebel_Moon_%E2%80%93_Part_Two_The_Scargiver_poster.jpg",
  mainPoster: "https://sm.ign.com/ign_in/screenshot/default/bg_ybsy.jpg",
    title: "Rebel Moon – Part Two: The Scargiver",
    rating: 5.2,
    year: 2024,
    duration: "2h 2m",
    synopsis: "A colony on the edge of the galaxy fights for survival against a tyrannical ruling force, relying on the efforts of a small group of rebels.",
    type: "Film",
    genre: "Action",
    releaseDate: "12 April 2024",
    production: "The Stone Quarry, Grand Electric",
    director: "Zack Snyder",
    cast: "Sofia Boutella, Djimon Hounsou, Ed Skrein, Michiel Huisman, Doona Bae, Ray Fisher, Staz Nair, Fra Fee, Elise Duffy, Anthony Hopkins",
    trailerURL: "https://www.youtube.com/embed/Cf16jEmvJUY?si=vKfFVLCVM8J5gUcg",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0d/Fabbricante_di_lacrime%2C_poster.jpg",
  mainPoster: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUlaHUV7Cpj23NT3R_D1to6A3oA95sgY6ZH1GziQwfVFQhbyOq15fyUsfrKIhypsficbDYSE76iE3sgo0df6ZZsS0H9N73gQpgGJYGvsmI9jdvjpabFzMCf-pzIotnMIi6NPsg.webp?r=722",
    title: "The Tearsmith",
    rating: 5.1,
    year: 2024,
    duration: "1h 35m",
    synopsis: "Growing up in a ghastly orphanage run by an abusive matron, Nica coped in the only way she could—by retreating to her imagination, where she lived out fantastical stories, especially about the Tearsmith, the man who makes tears, a terrifying figure who forges all the fears that dwell in people's hearts.",
    type: "Film",
    genre: "Romance",
    releaseDate: "4 April 2024",
    production: "Alessandro Usai, Iginio Straffi",
    director: "Alessandro Genovesi",
    cast: "Simone Baldasseroni, Caterina Ferioli, Sabrina Paravicini, Alessandro Bedetti, Roberta Rovelli, Orlando Cinque, Eco Andriolo, Nicky Passarella, Sveva Romana Candelletta",
    trailerURL: "https://www.youtube.com/embed/qEh_90RnlD8?si=_Q12ePazexl70Kv6",
    category: "New"
  },
  {
  posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp62WljJw6JY1AtFrejcJ3GoEj-2GZVWGYFRn7HSX1ZvLhVIVN",
  mainPoster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e158b797-bda6-4ac3-ae08-30f70f72a3b7/dgytgy8-3b2bca27-8a58-472f-8ef6-61611d802695.jpg/v1/fill/w_1280,h_721,q_75,strp/my_casagrandes_movie_poster_by_finnthejedi1025_dgytgy8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvZTE1OGI3OTctYmRhNi00YWMzLWFlMDgtMzBmNzBmNzJhM2I3XC9kZ3l0Z3k4LTNiMmJjYTI3LThhNTgtNDcyZi04ZWY2LTYxNjExZDgwMjY5NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Ok9vnj8D47mESPrDIcij1LsH1hRMvVbQDi5PXWRKQHA",
    title: "The Casagrandes Movie",
    rating: 5.6,
    year: 2024,
    duration: "1h 25m",
    synopsis: "After a surprise family trip to Mexico derails Ronnie Anne's birthday plans, she is determined to prove that she's old enough to do her own thing, even if it means confronting an ancient pre-teen demigod whose angst has apocalyptic potential.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "22 March 2024",
    production: "	Nickelodeon Movies, Mighty Studios, Nickelodeon Animation Studio",
    director: "Miguel Puga",
    cast: "Izabella Alvarez, Sumalee Montano, Paulina Chávez, Angélica Aragón, Sonia Manzano, Kate del Castillo, Alex Cazares, Carlos PenaVega, Carlos Alazraqui, Ruben Garfias, Leah Mei Gold, Alexa PenaVega, Cristo Fernández, Sergio Aragonés, Roxana Ortega, Jared Kozak",
    trailerURL: "https://www.youtube.com/embed/jOCIRd7kQZ8?si=qO_Sm1PaVl6wOO_C",
    category: "New"
  },
  {
  posterURL: "https://d32qys9a6wm9no.cloudfront.net/images/tvs/poster/d5/e1e3db58fbea6f2dd7c0c7a9bb8d8da4_300x442.jpg?t=1713294776",
  mainPoster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26955077_b_h11_ab.jpg",
    title: "A Man in Full",
    rating: 4.6,
    year: 2024,
    duration: "38m–48m",
    synopsis: "Follows an Atlanta real estate mogul as he faces sudden bankruptcy, and tries to defend his empire from those attempting to capitalize on his fall from grace. A racially mixed, late-century boomtown full of fresh wealth and wily politicians.",
    type: "Series",
    episode: 6,
    genre: "Drama",
    releaseDate: "2 May 2024",
    production: "Royal Ties Productions, David E. Kelley Productions",
    director: "David E. Kelley",
    cast: "Jeff Daniels, Diane Lane, William Jackson Harper, Aml Ameen, Tom Pelphrey, Sarah Jones, Jon Michael Hill, Chanté Adams, Lucy Liu, Bill Camp, Evan Roe",
    trailerURL: "https://www.youtube.com/embed/S9bF4X38O0o?si=YtQG4jKwMMikhx39",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/e/e2/Queen_of_Tears_poster.png",
  mainPoster: "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/Untitled-design-2024-02-23T232344.805.png?w=1024",
    title: "Queen of Tears",
    rating: 8.4,
    year: 2024,
    duration: "1h 16m",
    synopsis: "The series depicts the dizzying crisis and miraculous rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage.",
    type: "Series",
    episode: 16,
    genre: "Romance",
    releaseDate: "9 March 2024",
    production: "Studio Dragon, Culture Depot, Showrunners",
    director: "Jang Young-woo [ko], Kim Hee-won",
    cast: "Kim Soo-hyun, Kim Ji-won",
    trailerURL: "https://www.youtube.com/embed/Gg2D8zrzlOA?si=bOQM0vGYLIG7sRuL",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/15/Night_swim_poster.jpg",
  mainPoster: "https://thecollision.org/wp-content/uploads/2024/01/night-swim.png",
    title: "Night Swim",
    rating: 4.7,
    year: 2024,
    duration: "1h 38m",
    synopsis: "Forced into early retirement by a degenerative illness, former baseball player Ray Waller moves into a new house with his wife and two children. He hopes that the backyard swimming pool will be fun for the kids and provide physical therapy for himself. However, a dark secret from the home's past soon unleashes a malevolent force that drags the family into the depths of inescapable terror.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "5 January 2024",
    production: "Blumhouse Productions, Atomic Monster",
    director: "Bryce McGuire",
    cast: "Wyatt Russell, Kerry Condon",
    trailerURL: "https://www.youtube.com/embed/pcSNqteCEtE?si=jshxXNL3Iaj7Pnoj",
    category: "New"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/e/e2/Queen_of_Tears_poster.png",
  mainPoster: "https://www.comingsoon.net/wp-content/uploads/sites/3/2024/02/Untitled-design-2024-02-23T232344.805.png?w=1024",
    title: "Queen of Tears",
    rating: 8.4,
    year: 2024,
    duration: "1h 16m",
    synopsis: "The series depicts the dizzying crisis and miraculous rekindling of love between Hong Hae-in, a third-generation chaebol heiress of Queens Group, and Baek Hyun-woo, the son of farmers from Yongdu-ri, and their three years of marriage.",
    type: "Series",
    episode: 16,
    genre: "Romance",
    releaseDate: "9 March 2024",
    production: "Studio Dragon, Culture Depot, Showrunners",
    director: "Jang Young-woo [ko], Kim Hee-won",
    cast: "Kim Soo-hyun, Kim Ji-won",
    trailerURL: "https://www.youtube.com/embed/Gg2D8zrzlOA?si=bOQM0vGYLIG7sRuL",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/6/67/Lovely_Runner.png",
  mainPoster: "https://1.vikiplatform.com/c/40466c/26be4e1613.jpg?x=b",
    title: "Lovely Runner",
    rating: 9.8,
    year: 2024,
    duration: "1h 10m",
    synopsis: "The series follows the journey of Im Sol, an ardent fan of idol Ryu Sun-jae. Sol, a once-promising film director whose dreams were shattered by an accident leaving her paralyzed, finds solace in the music of Sun-jae. However, tragedy strikes again when Sun-jae died in a tragic accident, leaving Sol devastated ",
    type: "Series",
    episode: 16,
    genre: "Fantasy",
    releaseDate: "8 April 2024",
    production: "Bon Factory",
    director: "Yoon Jong-ho, Kim Tae-yeop",
    cast: "Byeon Woo-seok, Kim Hye-yoon",
    trailerURL: "https://www.youtube.com/embed/5kk0dYa8Ccc?si=DtA4mLmx8qhJ_Lnb",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7d/At_Eighteen-poster.jpg",
  mainPoster: "https://pbs.twimg.com/media/D-mNkM-X4AAS74D.jpg",
    title: "At Eighteen",
    rating: 9.4,
    year: 2019,
    duration: "1h 10m",
    synopsis: "18-year-old Choi Joon-Woo (Ong Seong-Wu) has gotten used to being lonely. He is not good at expressing his emotions, but he has a cute side. He transfers to a new school where he meets Yoo Soo-Bin (Kim Hyang-Gi). She is a top student, but her life is controlled by her mother.",
    type: "Series",
    episode: 16,
    genre: "Drama",
    releaseDate: "22 July 2019",
    production: "Drama House, KeyEast",
    director: "Shim Na-yeon",
    cast: "Ong Seong-wu, Kim Hyang-gi, Shin Seung-ho, Kang Ki-young",
    trailerURL: "https://www.youtube.com/embed/qLup8QT2PJI?si=_5tyTSs37MwaXrwl",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/id/e/e0/Excellent_Shaman_Ga_Doo-shim.jpg",
  mainPoster: "https://pic4.iqiyipic.com/image/20210729/b7/26/a_100463035_m_601_en_480_270.jpg",
    title: "The Great Shaman Ga Doo-shim",
    rating: 9.6,
    year: 2021,
    duration: "20m",
    synopsis: "Ga Doo-shim (Kim Sae-ron), an 18-year-old girl born with the fate of becoming a shaman, tries to live a normal life. Her grandmother told her if she manages to survive being 18, she can live a normal life thereafter.",
    type: "Series",
    episode: 12,
    genre: "Fantasy",
    releaseDate: "30 July 2021",
    production: "MAYS Entertainment",
    director: "Park Ho-jin",
    cast: "Kim Sae-ron, Nam Da-reum",
    trailerURL: "https://www.youtube.com/embed/9DnN_g24Odg?si=3rW1lG2NN1NB864d",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/11/Beauty_and_the_Devoted.png",
  mainPoster: "https://0.soompi.io/wp-content/uploads/2024/03/14044715/beauty-and-mr-romantic.jpeg",
    title: "Beauty and Mr. Romantic",
    rating: 7.7,
    year: 2024,
    duration: "1h 10m",
    synopsis: "A producer tries to help his actress lover regain success after a major career setback. A family's struggles unveil secrets, leading to revenge, reconciliation, and justice. A producer tries to help his actress lover regain success after a major career setback.",
    type: "Series",
    episode: 50,
    genre: "Romance",
    releaseDate: "23 March 2024",
    production: "RaemongRaein",
    director: "Hong Seok-gu",
    cast: "Im Soo-hyang, Ji Hyun-woo",
    trailerURL: "https://www.youtube.com/embed/Fkcw_Kb8YK0?si=uo5LzGPhr3zGA6ZZ",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f2/Private_Lives.jpg",
  mainPoster: "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/akuratco/images/akurat_20201105110910_31R2B9.jpg",
    title: "Private Lives",
    rating: 6.5,
    year: 2020,
    duration: "1h 10m",
    synopsis: "Swindlers come across a secret of the nation and try to reveal the secret. They must go up against a large company by using all of their skills. Lee Jeong-Hwan (Ko Gyung-Pyo) is a team leader for the major corporation. He looks like an ordinary company employee, but he is a mysterious figure. Cha Joo-Eun (Seohyun) is a swindler, who has the looks of a sweet & innocent woman. She supports herself with her crimes. Jeong Bok-Gi (Kim Hyo-Jin) is a professional swindler. She often targets other swindlers. She is elegant and also charismatic. Kim Jae-Wook (Kim Young-Min) is Jeong Bok-Gi’s partner in crime.",
    type: "Series",
    episode: 16,
    genre: "Drama",
    releaseDate: "7 October 2020",
    production: "Doremi Entertainment",
    director: "Nam Jun hyuk",
    cast: "Seohyun, Go Kyung-pyo, Kim Hyo-jin, Kim Young-min, Tae Won-seok",
    trailerURL: "https://www.youtube.com/embed/8v4Wa3jJ7dE?si=b6P61PGVGBDEx90d",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2c/Agency_TV_series.jpg",
  mainPoster: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABV1cZrp5kbChrOUS5Ltza5ek16w00__SoOJrzdkz_FDGMcIRxqZd4FbkvKZzGguwxYM5yZq80orFit3tmRilHpOIR_O54kmonDUO.jpg?r=19d",
    title: "Agency",
    rating: 7.8,
    year: 2023,
    duration: "60m-72m",
    synopsis: "An office drama depicting a woman who became the first female executive in her group to make her career beyond her first to the highest position. In the background of an advertising agency, it contains realistic stories of the daily lives of those who live a life like war and behind the scenes in the industry.",
    type: "Series",
    episode: 16,
    genre: "Drama",
    releaseDate: "7 January 2023",
    production: "How Pictures, Drama House, SLL",
    director: "Lee Chang-min",
    cast: "Lee Bo-young, Son Na-eun, Jo Sung-ha, Han Joon-woo",
    trailerURL: "https://www.youtube.com/embed/Rpg2LQdk1Nc?si=coBDWzebGXVTukxz",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bd/My_Man_Is_Cupid.jpg",
  mainPoster: "https://m.media-amazon.com/images/S/pv-target-images/6b859894a5b5474f6a3972313ad21db3bb06811f9c7d06b451ac5663c61ef144.png",
    title: "My Man Is Cupid",
    rating: 7.9,
    year: 2023,
    duration: "1h",
    synopsis: "A cupid from 500 years awaiting his release meets a woman born with no red thread of love for all her incarnations. What would happen when they take an interest in each other amidst a series of serial killings and a complicated past life?",
    type: "Series",
    episode: 16,
    genre: "Romance",
    releaseDate: "1 December 2023",
    production: "HB Entertainment",
    director: "Nam Tae-jin",
    cast: "Jang Dong-yoon, Nana, Park Ki-woong",
    trailerURL: "https://www.youtube.com/embed/RLBZVHsTu7E?si=LQc_d2pXjOpLyA8M",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",
  mainPoster: "https://balboapark.org/wp-content/uploads/2023/07/Screen-Shot-2023-07-10-at-1.25.29-PM.png",
    title: "My Hero Academia",
    rating: 8.3,
    year: 2016,
    duration: "20m",
    synopsis: "The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself, and is scouted by the world's greatest hero, All Might, who shares his powers with Izuku after recognizing his value and enrolls him in a prestigious high school for superheroes in training.",
    type: "Series",
    episode: 25,
    genre: "Animation",
    releaseDate: "3 April 2016",
    production: "Bones Studio",
    director: "Kenji Nagasaki, Tomo Okubo, Masahiro Mukai",
    cast: "Daiki Yamashita(Izuku Midoriya), Masamichi Kitada(Kamui Woods), Nobuhiko Okamoto(Katsuki Bakugo), Yuki Kaji(Shoto Todoroki), Ayane Sakura(Ochaco Uraraka)",
    trailerURL: "https://www.youtube.com/embed/EPVkcwyLQQ8?si=UhyjOQ_IDbwkTyi5",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f3/Hello%2C_Me%21.jpg",
  mainPoster: "https://asset.kompas.com/crops/XEJMLWNTFrJ9nsTM5ysXVOIFVio=/0x0:900x600/750x500/data/photo/2021/02/10/6023c142f0fc4.jpg",
    title: "Hello, Me!",
    rating: 7.3,
    year: 2021,
    duration: "1h 10m",
    synopsis: "Hello, Me! tells the story of Bahn Ha-ni who, one day, meets her enthusiastic, passionate and fearless 17-year-old self. With her younger self, she heals her wounds and learns how to love again.",
    type: "Series",
    episode: 16,
    genre: "Romance",
    releaseDate: "17 February 2021",
    production: "Beyond J, Acemaker Movieworks",
    director: "Lee Hyun-seok",
    cast: "Choi Kang-hee, Kim Young-kwang, Lee Re, Eum Moon-suk",
    trailerURL: "https://www.youtube.com/embed/0tLPYOmg4kA?si=kBwc4ftILdS1ZwIA",
    category: "TopRatedSeries"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4f/Insidious_the_red_door.png",
  mainPoster: "https://img.okezone.com/content/2023/06/08/206/2827191/insidious-5-the-red-door-rahasia-gelap-keluarga-lamberts-yang-mengerikan-uVfM6lDHvJ.jpg",
    title: "Insidious: The Red Door",
    rating: 5.5,
    year: 2023,
    duration: "1h 47m",
    synopsis: "Josh Lambert heads east to drop his son, Dalton, off at school. However, Dalton's college dream soon becomes a living nightmare when the repressed demons of his past suddenly return to haunt them both.",
    type: "Film",
    genre: "Horror",
    releaseDate: "7 July 2023",
    production: "Screen Gems, Stage 6 Films, Blumhouse Productions",
    director: "Patrick Wilson",
    cast: "Ty Simpkins, Patrick Wilson, Sinclair Daniel, Hiam Abbass, Rose Byrne",
    trailerURL: "https://www.youtube.com/embed/ZuQuOnYnr3Q?si=Bhv-hgTQYUW3iIFc",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d4/Uncharted_Official_Poster.jpg",
  mainPoster: "https://image.tmdb.org/t/p/original/iOlopNJnQNqDnKZrYlNJ3FUmr1P.jpg",
    title: "Uncharted",
    rating: 6.3,
    year: 2022,
    duration: "1h 56m",
    synopsis: "Treasure hunter Victor 'Sully' Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand Magellan. What starts out as a heist soon becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada can get his hands on it. If Sully and Nate can decipher the clues and solve one of the world's oldest mysteries, they stand to find $5 billion in treasure -- but only if they can learn to work together.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "16 February 2022",
    production: "Columbia Pictures, PlayStation Productions, Atlas Entertainment, Arad Productions",
    director: "Ruben Fleischer",
    cast: "Tom Holland, Mark Wahlberg, Sophia Ali, Tati Gabrielle, Antonio Banderas",
    trailerURL: "https://www.youtube.com/embed/eHp3MbsCbMg?si=-Bhe9NXGTR73GYRp",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg",
  mainPoster: "https://miro.medium.com/v2/resize:fit:1200/1*PiaVSXzFWtOB9-l6q3uPCQ.jpeg",
    title: "Aquaman and the Lost Kingdom",
    rating: 5.6,
    year: 2023,
    duration: "2h 4m",
    synopsis: "After failing to defeat Aquaman the first time, Black Manta wields the power of the mythic Black Trident to unleash an ancient and malevolent force. Hoping to end his reign of terror, Aquaman forges an unlikely alliance with his brother, Orm, the former king of Atlantis. Setting aside their differences, they join forces to protect their kingdom and save the world from irreversible destruction.",
    type: "Film",
    genre: "Action",
    releaseDate: "22 December 2023",
    production: "DC Studios, Atomic Monster, The Safran Company, Domain Entertainment",
    director: "James Wan",
    cast: "Jason Momoa, Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II, Randall Park, Dolph Lundgren, Temuera Morrison, Martin Short, Nicole Kidman",
    trailerURL: "https://www.youtube.com/embed/FV3bqvOHRQo?si=r0z3orqy5nGr-cTr",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg",
  mainPoster: "https://m.media-amazon.com/images/S/pv-target-images/8b314888d0137313a0adf64ae8cbd425701795c5d24e652f1fdb599f71075c33.jpg",
    title: "The Nun",
    rating: 5.3,
    year: 2018,
    duration: "1h 36m",
    synopsis: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun.",
    type: "Film",
    genre: "Horror",
    releaseDate: "5 September 2018",
    production: "New Line Cinema, Atomic Monster, The Safran Company",
    director: "Corin Hardy",
    cast: "Demián Bichir, Taissa Farmiga, Jonas Bloquet",
    trailerURL: "https://www.youtube.com/embed/pzD9zGcUNrw?si=EgU4YlWGiZ0lC75I",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/9/90/Wonka_2023_film_poster.jpg",
  mainPoster: "https://img.englishcinemakyiv.com/ECha7KywzWZvENqNESA6l-Ws40-jKIJOkh827vjZm2s/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy84YzMzYjYyMi00OTBhLTRkZGYtOGQ1My1kNDM4N2U2OTYyZTAuanBn.jpg",
    title: "Wonka",
    rating: "7.0",
    year: 2023,
    duration: "1h 56m",
    synopsis: "Armed with nothing but a hatful of dreams, young chocolatier Willy Wonka manages to change the world, one delectable bite at a time.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "8 December 2028",
    production: "Village Roadshow Pictures, The Roald Dahl Story Company, Heyday Films, Domain Entertainment",
    director: "Paul King",
    cast: "Timothée Chalamet, Calah Lane, Keegan-Michael Key, Paterson Joseph, Matt Lucas, Mathew Baynton, Sally Hawkins, Rowan Atkinson, Jim Carter, Olivia Colman, Hugh Grant",
    trailerURL: "https://www.youtube.com/embed/otNh9bTjXWg?si=6cghaqNQ81WqOnr5",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5c/Fair_play_2023poster.png",
  mainPoster: "https://static1.squarespace.com/static/5efce5920d28887981c5bd9b/5efdfa6ffc0b1550d2cfcbda/64e0df0f6b54c965efe28f14/1692460262790/Fair+Play+cover.jpeg?format=1500w",
    title: "Fair Play",
    rating: 6.4,
    year: 2023,
    duration: "1h 53m",
    synopsis: "An unexpected promotion at a cutthroat hedge fund pushes a newly engaged couple's relationship to the brink.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "20 January 2023",
    production: "T-Street, Star Thrower Entertainment, MRC",
    director: "Chloe Domont",
    cast: "Phoebe Dynevor, Alden Ehrenreich, Eddie Marsan, Rich Sommer",
    trailerURL: "https://www.youtube.com/embed/vICUPlr3EEI?si=ubooCjLf2yZgIYf3",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/5/53/Parasite_%282019_film%29.png",
  mainPoster: "https://assets.mubicdn.net/images/notebook/post_images/29882/images-w1400.jpg?1579663202",
    title: "Parasite",
    rating: 8.5,
    year: 2019,
    duration: "2h 11m",
    synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "21 June 2019",
    production: "Barunson E&A",
    director: "Bong Joon-ho",
    cast: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik, Park So-dam, Jang Hye-jin",
    trailerURL: "https://www.youtube.com/embed/isOGD_7hNIY?si=f6gPDNSkte6NBAvu",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/3/36/ExorcistBelieverPoster.jpg",
  mainPoster: "https://static.platinumcineplex.co.id/images/movie/1695984371landscape-exorcist.jpeg",
    title: "The Exorcist: Believer",
    rating: 4.8,
    year: 2023,
    duration: "1h 51m",
    synopsis: "When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before.",
    type: "Film",
    genre: "Horror",
    releaseDate: "6 October 2023",
    production: "Blumhouse Productions, Morgan Creek Entertainment, Rough House Pictures",
    director: "David Gordon Green",
    cast: "Leslie Odom Jr., Lidya Jewett, Olivia O’Neill, Jennifer Nettles, Norbert Leo Butz, Ann Dowd, Ellen Burstyn",
    trailerURL: "https://www.youtube.com/embed/PIxpPMyGcpU?si=qK5dOyhrX5nBxuEB",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0d/City_Couple%E2%80%99s_Way_of_Love_My_Lovable_Camera_Thief.jpg",
  mainPoster: "https://forum.allkpop.com/suite/attachment/40317-lovestruck-in-the-city-ji-chang-wook-and-kim-ji-won-0-jpg/",
    title: "Lovestruck in the City",
    rating: 7.6,
    year: 2020,
    duration: "28m-40m",
    synopsis: "Heart stolen by a free-spirited woman after a beachside romance, a passionate architect sets out to reunite with her on the streets of Seoul. Heart stolen by a free-spirited woman after a beachside romance, a passionate architect sets out to reunite with her on the streets of Seoul.",
    type: "Series",
    episode: 17,
    genre: "Romance",
    releaseDate: "16 February 2021",
    production: "Kakao M, Story & Pictures Media",
    director: "Park Shin-woo",
    cast: "Ji Chang-wook, Kim Ji-won, Kim Min-seok, Han Ji-eun, Ryu Kyung-soo, So Joo-yeon",
    trailerURL: "https://www.youtube.com/embed/c_LSBRJB3wE?si=wIxj2H9rNfL8RZSc",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7f/Kung_Fu_Panda_4_poster.jpg",
  mainPoster: "https://images8.alphacoders.com/134/1344546.jpeg",
    title: "Kung Fu Panda 4",
    rating: 6.3,
    year: 2024,
    duration: "1h 34m",
    synopsis: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he's going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "3 March 2024",
    production: "DreamWorks Animation",
    director: "Mike Mitchell",
    cast: "Jack Black, Awkwafina, Bryan Cranston, James Hong, Ian McShane, Ke Huy Quan, Dustin Hoffman, Viola Davis",
    trailerURL: "https://www.youtube.com/embed/_inKs4eeHiI?si=x1GMY9mnIr-6sf3M",
    category: "Watchlist"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d6/Five_Nights_At_Freddy%27s_poster.jpeg",
  mainPoster: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/05/17/03-fnf-dm-mobile-banner-1080x745-km-f01-0516231-64643a789a42a-1-384134179.png",
    title: "Five Nights at Freddys",
    rating: 5.5,
    year: 2023,
    duration: "1h 49m",
    synopsis: "A troubled security guard begins working at Freddy Fazbear's Pizzeria. While spending his first night on the job, he realizes the late shift at Freddy's won't be so easy to make it through.",
    type: "Film",
    genre: "Horror",
    releaseDate: "25 October 2023",
    production: "Blumhouse Productions, Scott Cawthon Productions",
    director: "Emma Tammi",
    cast: "Josh Hutcherson, Elizabeth Lail, Piper Rubio, Mary Stuart Masterson, Matthew Lillard",
    trailerURL: "https://www.youtube.com/embed/0VH9WCFV6XQ?si=steb6K1ez9RXXEkr",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
  mainPoster: "https://i0.wp.com/2.bp.blogspot.com/-XmACHofjfTc/VCQGLtltVQI/AAAAAAAAAC8/FHhoheFlWZ0/s1600/interstellar%2Bnew%2Bbanner.jpg",
    title: "Interstellar",
    rating: 8.7,
    year: 2014,
    duration: "2h 49m",
    synopsis: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "6 November 2014",
    production: "Paramount Pictures, Warner Bros. Pictures, Legendary Pictures, Syncopy Inc., Lynda Obst Productions",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastai, Bill Irwin, Ellen Burstyn, Michael Caine",
    trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E?si=dd4GCSSAQ0HGI3ix",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/a/ad/Spy_%C3%97_Family_Code_White_movie_poster.png",
  mainPoster: "https://i.ytimg.com/vi/3sHxvyk57jY/maxresdefault.jpg",
    title: "Spy × Family Code: White",
    rating: 7.4,
    year: 2023,
    duration: "1h 50m",
    synopsis: "A spy and an assassin keep their double lives to themselves while pretending to be the perfect family.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "22 December 2023",
    production: "Wit Studio, CloverWorks",
    director: "Takashi Katagiri",
    cast: "Takuya Eguchi, Atsumi Tanezaki, Saori Hayami, Kenichiro Matsuda",
    trailerURL: "https://www.youtube.com/embed/m5TxWbtQ7qU?si=sKB2Ov-UCIMXxp2r",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/7/75/The_Spies_Who_Loved_Me.jpg",
  mainPoster: "https://cinemags.org/wp-content/uploads/2020/09/eric-yoo-in-na-im-joo-hwan-the-spy-who-loved-me.jpg",
    title: "The Spy Who Loved Me",
    rating: 6.4,
    year: 2020,
    duration: "1h 10m",
    synopsis: "In a globe-trotting assignment that has him skiing off the edges of cliffs and driving a car deep underwater, British super-spy James Bond (Roger Moore) unites with sexy Russian agent Anya Amasova (Barbara Bach) to defeat megalomaniac shipping magnate Karl Stromberg (Curt Jurgens), who is threatening to destroy New York City with nuclear weapons. Bond's most deadly adversary on the case is Stromberg's henchman, Jaws (Richard Kiel), a seven-foot giant with terrifying steel teeth.",
    type: "Series",
    episode: 16,
    genre: "Romance",
    releaseDate: "21 October 2020",
    production: "Story & Pictures Media",
    director: "Lee Jae-jin",
    cast: "Eric Mun, Yoo In-na, Lim Ju-hwan",
    trailerURL: "https://www.youtube.com/embed/glyU5L1iv3k?si=ZlkVN7SvnT1L78GQ",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4d/20th_Century_Girl.jpg",
  mainPoster: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeJPNIe7kURaDKAF_UGH53b99ylf-rWGpS9epVPk40jkZj4XlbPeOowz6N46pzRVyulkjWnBIjFmBb4MXnEBRyHy-CFNyUH_N85Dyc9l6VTEPFbEzLbbbLsHl9uY4ErqHNOTcQ.jpg?r=1b4",
    title: "20th Century Girl",
    rating: 7.3,
    year: 2022,
    duration: "1h 59m",
    synopsis: "A teen girl has her eyes set on a boy for her lovesick best friend. However, things become complicated when she falls in love and is forced to choose between love and friendship.",
    type: "Film",
    genre: "Romance",
    releaseDate: "6 October 2022",
    production: "Yong Film",
    director: "Bang Woo-ri",
    cast: "Kim Yoo-jung, Byeon Woo-seok, Park Jung-woo, Roh Yoon-seo",
    trailerURL: "https://www.youtube.com/embed/KFS4_qevE7M?si=jRoINJZytt_J8c4O",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/6/6b/WildCard.2015.png",
  mainPoster: "https://cdn1-production-images-kly.akamaized.net/hXcfjWTmbl_22GVCnQv_nq174-g=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4572214/original/087847000_1694502431-SVOD_-_Wild_Card_-_Alt_C_-_Landscape.jpg",
    title: "Wild Card",
    rating: 5.6,
    year: 2015,
    duration: "1h 32m",
    synopsis: "A bodyguard (Jason Statham) goes after the sadistic thug who beat his friend, only to find that the object of his wrath is the son of a powerful mob boss.",
    type: "Film",
    genre: "Action",
    releaseDate: "30 January 2015",
    production: "Current Entertainment, Quad Films, SJ Pictures, Sierra/Affinity",
    director: "Simon West",
    cast: "Jason Statham, Stanley Tucci, Sofia Vergara, Milo Ventimiglia, Michael Angarano, Anne Heche, Jason Alexander, Hope Davis, Max Casella, Dominik Garcia-Lorido, Cedric the Entertainer",
    trailerURL: "https://www.youtube.com/embed/7fJGbTfFPkM?si=UT9Lg42RRIuRh7Fw",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/19/Rebel_moon_part1_poster.jpg",
  mainPoster: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd4Ly4log4uLNV3dn2ENHGGBw_Ts1xyP5l_8MO3KBNZTeR58DPKmOg1mSB480jK4RlrbR5CO9CqGLjrx-kYn43yWL56RujRPnxBbh25jhqyMu3Tthz12t2rUv0HtFFOfboQgoQ.webp?r=7c8",
    title: "Rebel Moon",
    rating: 5.6,
    year: 2023,
    duration: "2h 14m",
    synopsis: "When a colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch a young woman with a mysterious past to seek out warriors from neighbouring planets to help them take a stand.",
    type: "Film",
    genre: "Action",
    releaseDate: "15 December 2023",
    production: "The Stone Quarry, Grand Electric",
    director: "Zack Snyder",
    cast: "Sofia Boutella, Djimon Hounsou, Ed Skrein, Michiel Huisman, Doona Bae, Ray Fisher, Charlie Hunnam, Anthony Hopkins",
    trailerURL: "https://www.youtube.com/embed/fhr3MzT6exg?si=DSII29nP9sLD1jNR",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/6/66/Weathering_with_You_Poster.jpg",
  mainPoster: "https://mrwallpaper.com/images/hd/weathering-with-you-sunset-poster-2ffcv3igp4wu0ttw.jpg",
    title: "Weathering with You",
    rating: 7.5,
    year: 2019,
    duration: "1h 52m",
    synopsis: "Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.",
    type: "Film",
    genre: "Animation",
    releaseDate: "19 July 2019",
    production: "CoMix Wave Films, Story Inc.",
    director: "Makoto Shinkai",
    cast: "Kotaro Daigo, Nana Mori",
    trailerURL: "https://www.youtube.com/embed/Q6iK6DjV_iE?si=FHRM4a1iaXzbBnKj",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/3/32/A_Silent_Voice_Film_Poster.jpg",
  mainPoster: "https://m.media-amazon.com/images/I/71oeH+pkAeS.jpg",
    title: "A Silent Voice",
    rating: 8.9,
    year: 2016,
    duration: "2h 9m",
    synopsis: "A grade-school student with a hearing impairment is bullied and transfers to another school. Years later, the former bully is tormented by his behaviour and sets out to make amends.",
    type: "Film",
    genre: "Animation",
    releaseDate: "17 September 2016",
    production: "Kyoto Animation",
    director: "Naoko Yamada",
    cast: "Miyu Irino, Saori Hayami, Aoi Yuki, Kensho Ono, Yuki Kaneko, Yui Ishikawa, Megumi Han, Toshiyuki Toyonaga, Mayu Matsuoka",
    trailerURL: "https://www.youtube.com/embed/nfK6UgLra7g?si=Cdmjxi4L2u9_4Zup",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/6/6e/DescendantsoftheSun.jpg",
  mainPoster: "https://heartoppayasays.files.wordpress.com/2016/04/4627_descendantsofthesun_nowplay_small.jpg",
    title: "Descendants of the Sun",
    rating: 8.2,
    year: 2016,
    duration: "1h",
    synopsis: "This drama tells of the love story that develops between a surgeon and a special forces officer. Some relationships are fated, despite the challenges of time and place.",
    type: "Series",
    episode: 16,
    genre: "Drama",
    releaseDate: "24 February 2016",
    production: "KBS, Next Entertainment World",
    director: "Lee Eung-bok; Baek Sang-hoon",
    cast: "Song Joong-ki, Song Hye-kyo, Jin Goo, Kim Ji-won",
    trailerURL: "https://www.youtube.com/embed/wTGwjDqtfzQ?si=Pteil2j9nhMOnMsl",
    category: "History"
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/5/56/Anyone_But_You_poster.jpg",
  mainPoster: "https://s1.ticketm.net/dam/e/5eb/d7cff089-1de0-4b05-b49a-a8f6b99865eb_RETINA_LANDSCAPE_16_9.jpg",
    title: "Anyone but You",
    rating: 6.1,
    year: 2023,
    duration: "1h 43m",
    synopsis: "Despite having an amazing first date, Bea and Ben's initial attraction quickly turns sour. When they unexpectedly find themselves at a destination wedding in Australia, the pair pretend to be the perfect couple to keep up appearances.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "11 December 2023",
    production: "Columbia Pictures, SK Global, RK Films, Olive Bridge Entertainment",
    director: "Will Gluck",
    cast: "Sydney Sweeney, Glen Powell, Alexandra Shipp, GaTa, Hadley Robinson, Michelle Hurd, Dermot Mulroney, Darren Barnet, Rachel Griffiths",
    trailerURL: "https://www.youtube.com/embed/ESEc6W2h9_k?si=47BQInZ9dwfZ5d74",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_%282024%29_poster.jpg",
  mainPoster: "https://ghostbustersnews.com/wp-content/uploads/2023/12/ghostbusters_frozen_empire_poster_banner.webp",
    title: "Ghostbusters: Frozen Empire",
    rating: 6.2,
    year: 2024,
    duration: "1h 55m",
    synopsis: "The Spengler family returns to the iconic New York City firehouse where the original Ghostbusters have taken ghost-busting to the next level. When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must unite to protect their home and save the world from a second ice age.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "22 March 2024",
    production: "Columbia Pictures, Ghost Corps, Bron Creative, Right of Way Films",
    director: "Gil Kenan",
    cast: "Paul Rudd, Carrie Coon, Finn Wolfhard, Mckenna Grace, Kumail Nanjiani, Patton Oswalt, Ernie Hudson, Annie Potts",
    trailerURL: "https://www.youtube.com/embed/HpOBXh02rVc?si=nBWz7Cvr2dfHhUnO",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg",
  mainPoster: "https://media.licdn.com/dms/image/C4E12AQFqmb7-OObjHQ/article-cover_image-shrink_600_2000/0/1645754543416?e=2147483647&v=beta&t=_2JnQ2k-voWUIPu2Tl7cziBnLj5QV_0XGrh16Zc-9eA",
    title: "The Pursuit of Happyness",
    rating: "8.0",
    year: 2006,
    duration: "1h 57m",
    synopsis: "Life is a struggle for single father Chris Gardner (Will Smith). Evicted from their apartment, he and his young son (Jaden Christopher Syre Smith) find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "15 December 2006",
    production: "Columbia Pictures, Relativity Media, Overbrook Entertainment, Escape Artists",
    director: "Gabriele Muccino",
    cast: "Will Smith, Thandiwe Newton, Jaden Smith",
    trailerURL: "https://www.youtube.com/embed/DMOBlEcRuw8?si=5YYOC1FaltjVNfqb",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/44/We%27re_the_Millers_poster.jpg",
  mainPoster: "https://m.media-amazon.com/images/S/pv-target-images/73650236e8a3e7bc30395743630a75244edd10a9b2c6cc7152cee757a9ba4bf0.jpg",
    title: "We're the Millers",
    rating: "7.0",
    year: 2013,
    duration: "1h 50m",
    synopsis: "Small-time pot dealer David (Jason Sudeikis) learns the hard way that no good deed goes unpunished; trying to help some teens, he is jumped by thugs and loses his cash and stash. Now, David's in big debt to his supplier and -- to wipe the slate clean -- he must go to Mexico to pick up the guy's latest shipment. To accomplish his mission, Dave devises a foolproof plan: He packs a fake family into a huge RV and heads south of the border for a wild weekend that is sure to end with a bang.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "23 October 2013",
    production: "New Line Cinema, Newman/Tooley Films, BAD VERSION Productions, Slap Happy Productions, Heyday Films, Benderspink",
    director: "Rawson Marshall Thurber",
    cast: "Jennifer Aniston, Jason Sudeikis, Emma Roberts, Will Poulter, Nick Offerman, Kathryn Hahn, Ed Helms",
    trailerURL: "https://www.youtube.com/embed/0Vsy5KzsieQ?si=2XNe3sWiMV8wC_0E",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Argylle_poster.jpg",
  mainPoster: "https://cms.disway.id/uploads/4770fb1bfda1b0fc97aa7b85cf7327cf.jpg",
    title: "Argylle",
    rating: 5.7,
    year: 2024,
    duration: "2h 19m",
    synopsis: "Reclusive author Elly Conway writes best-selling espionage novels about a secret agent named Argylle who's on a mission to unravel a global spy syndicate. However, when the plots of her books start to mirror the covert actions of a real-life spy organization, the line between fiction and reality begin to blur.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "1 February 2024",
    production: "Apple Original Films, Marv Studios, Cloudy Production",
    director: "Matthew Vaughn",
    cast: "Henry Cavill, Bryce Dallas Howard, Sam Rockwell, Bryan Cranston, Catherine O'Hara, Dua Lipa, Ariana DeBose, John Cena, Samuel L. Jackson",
    trailerURL: "https://www.youtube.com/embed/7mgu9mNZ8Hk?si=BeCBXlZyS3IlfckF",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
  mainPoster: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F02%2Fa24-everything-everywhere-all-at-once-james-jean-film-poster-art-2.jpg?cbr=1&q=90",
    title: "Everything Everywhere All at Once",
    rating: 7.8,
    year: 2022,
    duration: "2h 20m",
    synopsis: "When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.",
    type: "Film",
    genre: "Comedy",
    releaseDate: "22 June 2022",
    production: "IAC Films, Gozie AGBO, Year of the Rat, Ley Line Entertainment",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: "Michelle Yeoh, Stephanie Hsu, Ke Huy Quan, James Hong, Jamie Lee Curtis",
    trailerURL: "https://www.youtube.com/embed/wxN1T1uxQ2g?si=R3-rBefpEn6mwaQd",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/9/98/EvilDeadRiseTeaser.jpg",
  mainPoster: "https://w0.peakpx.com/wallpaper/212/572/HD-wallpaper-evil-dead-rise-movie-poster-2023.jpg",
    title: "Evil Dead Rise",
    rating: 6.5,
    year: 2023,
    duration: "1h 36m",
    synopsis: "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    type: "Film",
    genre: "Horror",
    releaseDate: "5 May 2023",
    production: "New Line Cinema, Renaissance Pictures, Pacific Renaissance, Wild Atlantic Pictures",
    director: "Lee Cronin",
    cast: "Lily Sullivan, Alyssa Sutherland, Morgan Davies, Gabrielle Echols, Nell Fisher",
    trailerURL: "https://www.youtube.com/embed/BqQNO7BzN08?si=zbKJH1RK0IFxdiPZ",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",	
  mainPoster: "https://www.strifemag.com/wp-content/uploads/calltheone/2018/10/31/it_1_orig.jpg",
    title: "It",
    rating: 7.3,
    year: 2017,
    duration: "2h 15m",
    synopsis: "Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.",
    type: "Film",
    genre: "Horror",
    releaseDate: "8 September 2017",
    production: "New Line Cinema, Lin Pictures, Vertigo Entertainment, KatzSmith Productions",
    director: "Andy Muschietti",
    cast: "Jaeden Lieberher, Bill Skarsgård",
    trailerURL: "https://www.youtube.com/embed/FnCdOQsX5kc?si=mujcMMSWH2yzxBz-",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/6/68/The_Devil%27s_Light_Poster.jpeg",
  mainPoster: "https://www.scotsman.com/webimg/b25lY21zOjQ5ZGRhYzBkLWVmMWEtNGU2Ni1iODA3LTQxZDUyOWZmYzU1YTphMGU4MTY5OC1hNmI2LTRkMWMtYTQyZi1lYTJlYWUwZGUyZTg=.jpg?width=1024&auto=webp&quality=75&crop=3:2,smart",
    title: "Prey for the Devil",
    rating: 5.3,
    year: 2022,
    duration: "1h 33m",
    synopsis: "The Roman Catholic Church combats a global rise in demonic possessions by reopening schools to train priests to perform exorcisms. Although nuns are forbidden to perform this ritual, a professor recognizes Sister Ann's gifts and agrees to train her. Thrust onto the spiritual frontline, she soon finds herself in a battle for the soul of a young girl who's possessed by the same demon that tormented her own mother years earlier.",
    type: "Film",
    genre: "Horror",
    releaseDate: "28 October 2022",
    production: "Gold Circle Films",
    director: "Daniel Stamm",
    cast: "Jacqueline Byers, Colin Salmon, Christian Navarro, Lisa Palfrey, Nicholas Ralph, Ben Cross, Virginia Madsen",
    trailerURL: "https://www.youtube.com/embed/OkEnG6inG4c?si=NvkeevmmaQjajpxW",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bd/ThePopesExorcistPoster.png",
  mainPoster: "https://www.hometheaterforum.com/community/media/2023-popes-exorcist-poster-jpg.31223/full",
    title: "The Popes Exorcist",
    rating: 6.1,
    year: 2023,
    duration: "1h 43m",
    synopsis: "Father Gabriele Amorth, chief exorcist for the Vatican, battles Satan and innocent-possessing demons. A detailed portrait of a priest who performed more than 100,000 exorcisms in his lifetime.",
    type: "Film",
    genre: "Horror",
    releaseDate: "7 April 2023",
    production: "Screen Gems, 2.0 Entertainment, Loyola Productions",
    director: "Julius Avery",
    cast: "Russell Crowe, Daniel Zovatto, Alex Essoe, Franco Nero",
    trailerURL: "https://www.youtube.com/embed/YJXqvnT_rsk?si=-lGAmZ1hLT0ZTDoa",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d5/Halloween_ends_poster.jpg",
  mainPoster: "https://ghostof82.wordpress.com/wp-content/uploads/2023/06/hends.jpg?w=640",
    title: "Halloween Ends",
    rating: "5.0",
    year: 2022,
    duration: "1h 51m",
    synopsis: "Four years after her last encounter with masked killer Michael Myers, Laurie Strode is living with her granddaughter and trying to finish her memoir. Myers hasn't been seen since, and Laurie finally decides to liberate herself from rage and fear and embrace life. However, when a young man stands accused of murdering a boy that he was babysitting, it ignites a cascade of violence and terror that forces Laurie to confront the evil she can't control.",
    type: "Film",
    genre: "Horror",
    releaseDate: "14 October 2022",
    production: "Universal Pictures, Miramax, Blumhouse Productions, Trancas International Films, Rough House Pictures",
    director: "David Gordon Green",
    cast: "Jamie Lee Curtis, Andi Matichak, Rohan Campbell, Will Patton, Kyle Richards, James Jude Courtney",
    trailerURL: "https://www.youtube.com/embed/s0vtbxLa-N8?si=BdfkFi3r8kq5Th8S",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f5/Damsel_2024_poster2.jpg",
  mainPoster: "https://www.heavenofhorror.com/wp-content/uploads/2024/03/Damsel-2024-netflix-review-1200x675.jpg",
    title: "Damsel",
    rating: 6.1,
    year: 2024,
    duration: "1h 50m",
    synopsis: "A young woman agrees to marry a handsome prince -- only to discover it was all a trap. She is thrown into a cave with a fire-breathing dragon and must rely solely on her wits and will to survive.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "8 March 2024",
    production: "Roth/Kirschenbaum Films",
    director: "Juan Carlos Fresnadillo",
    cast: "Millie Bobby Brown, Ray Winstone, Nick Robinson, Shohreh Aghdashloo, Angela Bassett, Robin Wright",
    trailerURL: "https://www.youtube.com/embed/9eN_AGX8GXk?si=X4mTrTHLtXk0m29K",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  mainPoster: "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/7/y/y/large-newposter8952-wall-poster-a-wallpapers-inception-animated-original-imaf5tgggcfznyfd.jpeg?q=90&crop=false",
    title: "Inception",
    rating: 8.8,
    year: 2010,
    duration: "2h 28m",
    synopsis: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "16 July 2010",
    production: "Warner Bros. Pictures, Legendary Pictures, Syncopy",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Cillian Murphy, Tom Berenger, Michael Caine",
    trailerURL: "https://www.youtube.com/embed/LifqWf0BAOA?si=Y-XGMV7kjP7xNwIG",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg",
  mainPoster: "https://lhsmagpie.com/wp-content/uploads/2024/04/GxK-website-wide.jpg",
    title: "Godzilla x Kong: The New Empire",
    rating: 6.3,
    year: 2024,
    duration: "1h 55m",
    synopsis: "Godzilla and the almighty Kong face a colossal threat hidden deep within the planet, challenging their very existence and the survival of the human race.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "28 March 2024",
    production: "Legendary Pictures",
    director: "Adam Wingard",
    cast: "Rebecca Hall, Brian Tyree Henry, Dan Stevens, Kaylee Hottle, Alex Ferns, Fala Chen",
    trailerURL: "https://www.youtube.com/embed/qqrpMRDuPfc?si=eQjfA69zFzQ_8_oT",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/9/90/Wonka_2023_film_poster.jpg",
  mainPoster: "https://img.englishcinemakyiv.com/ECha7KywzWZvENqNESA6l-Ws40-jKIJOkh827vjZm2s/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy84YzMzYjYyMi00OTBhLTRkZGYtOGQ1My1kNDM4N2U2OTYyZTAuanBn.jpg",
    title: "Wonka",
    rating: "7.0",
    year: 2023,
    duration: "1h 56m",
    synopsis: "Armed with nothing but a hatful of dreams, young chocolatier Willy Wonka manages to change the world, one delectable bite at a time.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "8 December 2028",
    production: "Village Roadshow Pictures, The Roald Dahl Story Company, Heyday Films, Domain Entertainment",
    director: "Paul King",
    cast: "Timothée Chalamet, Calah Lane, Keegan-Michael Key, Paterson Joseph, Matt Lucas, Mathew Baynton, Sally Hawkins, Rowan Atkinson, Jim Carter, Olivia Colman, Hugh Grant",
    trailerURL: "https://www.youtube.com/embed/otNh9bTjXWg?si=6cghaqNQ81WqOnr5",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4a/Aquaman_and_the_Lost_Kingdom_poster.jpg",
  mainPoster: "https://miro.medium.com/v2/resize:fit:1200/1*PiaVSXzFWtOB9-l6q3uPCQ.jpeg",
    title: "Aquaman and the Lost Kingdom",
    rating: 5.6,
    year: 2023,
    duration: "2h 4m",
    synopsis: "After failing to defeat Aquaman the first time, Black Manta wields the power of the mythic Black Trident to unleash an ancient and malevolent force. Hoping to end his reign of terror, Aquaman forges an unlikely alliance with his brother, Orm, the former king of Atlantis. Setting aside their differences, they join forces to protect their kingdom and save the world from irreversible destruction.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "22 December 2023",
    production: "DC Studios, Atomic Monster, The Safran Company, Domain Entertainment",
    director: "James Wan",
    cast: "Jason Momoa, Patrick Wilson, Amber Heard, Yahya Abdul-Mateen II, Randall Park, Dolph Lundgren, Temuera Morrison, Martin Short, Nicole Kidman",
    trailerURL: "https://www.youtube.com/embed/FV3bqvOHRQo?si=r0z3orqy5nGr-cTr",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
  mainPoster: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F02%2Fa24-everything-everywhere-all-at-once-james-jean-film-poster-art-2.jpg?cbr=1&q=90",
    title: "Everything Everywhere All at Once",
    rating: 7.8,
    year: 2022,
    duration: "2h 20m",
    synopsis: "When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.",
    type: "Film",
    genre: "Adventure",
    releaseDate: "22 June 2022",
    production: "IAC Films, Gozie AGBO, Year of the Rat, Ley Line Entertainment",
    director: "Daniel Kwan, Daniel Scheinert",
    cast: "Michelle Yeoh, Stephanie Hsu, Ke Huy Quan, James Hong, Jamie Lee Curtis",
    trailerURL: "https://www.youtube.com/embed/wxN1T1uxQ2g?si=R3-rBefpEn6mwaQd",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
  mainPoster: "https://apollohou.com/wp-content/uploads/img_9027.jpg",
    title: "Oppenheimer",
    rating: 8.3,
    year: 2023,
    duration: "3h",
    synopsis: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
    type: "Film",
    genre: "Drama",
    releaseDate: "19 July 2023",
    production: "Syncopy, Atlas Entertainment",
    director: "Christopher Nolan",
    cast: "Cillian Murphy, Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Josh Hartnett, Casey Affleck, Rami Malek, Kenneth Branagh",
    trailerURL: "https://www.youtube.com/embed/uYPbbksJxIg?si=udLZ5efzaG9yDnfj",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg",
  mainPoster: "https://media.licdn.com/dms/image/C4E12AQFqmb7-OObjHQ/article-cover_image-shrink_600_2000/0/1645754543416?e=2147483647&v=beta&t=_2JnQ2k-voWUIPu2Tl7cziBnLj5QV_0XGrh16Zc-9eA",
    title: "The Pursuit of Happyness",
    rating: "8.0",
    year: 2006,
    duration: "1h 57m",
    synopsis: "Life is a struggle for single father Chris Gardner (Will Smith). Evicted from their apartment, he and his young son (Jaden Christopher Syre Smith) find themselves alone with no place to go. Even though Chris eventually lands a job as an intern at a prestigious brokerage firm, the position pays no money. The pair must live in shelters and endure many hardships, but Chris refuses to give in to despair as he struggles to create a better life for himself and his son.",
    type: "Film",
    genre: "Drama",
    releaseDate: "15 December 2006",
    production: "Columbia Pictures, Relativity Media, Overbrook Entertainment, Escape Artists",
    director: "Gabriele Muccino",
    cast: "Will Smith, Thandiwe Newton, Jaden Smith",
    trailerURL: "https://www.youtube.com/embed/DMOBlEcRuw8?si=5YYOC1FaltjVNfqb",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0d/Fabbricante_di_lacrime%2C_poster.jpg",
  mainPoster: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUlaHUV7Cpj23NT3R_D1to6A3oA95sgY6ZH1GziQwfVFQhbyOq15fyUsfrKIhypsficbDYSE76iE3sgo0df6ZZsS0H9N73gQpgGJYGvsmI9jdvjpabFzMCf-pzIotnMIi6NPsg.webp?r=722",
    title: "The Tearsmith",
    rating: 5.1,
    year: 2024,
    duration: "1h 35m",
    synopsis: "Growing up in a ghastly orphanage run by an abusive matron, Nica coped in the only way she could—by retreating to her imagination, where she lived out fantastical stories, especially about the Tearsmith, the man who makes tears, a terrifying figure who forges all the fears that dwell in people's hearts.",
    type: "Film",
    genre: "Drama",
    releaseDate: "4 April 2024",
    production: "Alessandro Usai, Iginio Straffi",
    director: "Alessandro Genovesi",
    cast: "Simone Baldasseroni, Caterina Ferioli, Sabrina Paravicini, Alessandro Bedetti, Roberta Rovelli, Orlando Cinque, Eco Andriolo, Nicky Passarella, Sveva Romana Candelletta",
    trailerURL: "https://www.youtube.com/embed/qEh_90RnlD8?si=_Q12ePazexl70Kv6",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
  mainPoster: "https://i0.wp.com/2.bp.blogspot.com/-XmACHofjfTc/VCQGLtltVQI/AAAAAAAAAC8/FHhoheFlWZ0/s1600/interstellar%2Bnew%2Bbanner.jpg",
    title: "Interstellar",
    rating: 8.7,
    year: 2014,
    duration: "2h 49m",
    synopsis: "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
    type: "Film",
    genre: "Drama",
    releaseDate: "6 November 2014",
    production: "Paramount Pictures, Warner Bros. Pictures, Legendary Pictures, Syncopy Inc., Lynda Obst Productions",
    director: "Christopher Nolan",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastai, Bill Irwin, Ellen Burstyn, Michael Caine",
    trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E?si=dd4GCSSAQ0HGI3ix",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
  mainPoster: "https://facts.net/wp-content/uploads/2023/09/24-facts-about-kung-fu-panda-kung-fu-panda-1693919985.jpg",
    title: "Kung Fu Panda",
    rating: 7.6,
    year: 2008,
    duration: "1h 32m",
    synopsis: "When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace.",
    type: "Film",
    genre: "Animation",
    releaseDate: "13 June 2008",
    production: "DreamWorks Animation",
    director: "Mark Osborne, John Stevenson",
    cast: "Jack Black, Dustin Hoffman, Angelina Jolie, Ian McShane, Seth Rogen, Lucy Liu, David Cross, Randall Duk Kim, James Hong, Dan Fogler, Michael Clarke Duncan, Jackie Chan",
    trailerURL: "https://www.youtube.com/embed/NRc-ze7Wrxw?si=ZkcbnKqfsgHMF4da",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7f/Kung_Fu_Panda_4_poster.jpg",
  mainPoster: "https://images8.alphacoders.com/134/1344546.jpeg",
    title: "Kung Fu Panda 4",
    rating: 6.3,
    year: 2024,
    duration: "1h 34m",
    synopsis: "Po must train a new warrior when he's chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he's going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places.",
    type: "Film",
    genre: "Animation",
    releaseDate: "3 March 2024",
    production: "DreamWorks Animation",
    director: "Mike Mitchell",
    cast: "Jack Black, Awkwafina, Bryan Cranston, James Hong, Ian McShane, Ke Huy Quan, Dustin Hoffman, Viola Davis",
    trailerURL: "https://www.youtube.com/embed/_inKs4eeHiI?si=x1GMY9mnIr-6sf3M",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
  mainPoster: "https://image.tmdb.org/t/p/w1280/ws1dxpFpOXMOBPkplThbNaUtxFp.jpg",
    title: "Frozen",
    rating: 7.4,
    year: 2013,
    duration: "1h 42m",
    synopsis: "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.",
    type: "Film",
    genre: "Animation",
    releaseDate: "29 November 2013",
    production: "Walt Disney Pictures, Walt Disney Animation Studios",
    director: "Chris Buck, Jennifer Lee",
    cast: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad, Santino Fontana",
    trailerURL: "https://www.youtube.com/embed/TbQm5doF_Uc?si=Yhd20SxpTqw9oBma",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7f/Suzume_no_Tojimari_poster.jpg",
  mainPoster: "https://assets-a1.kompasiana.com/items/album/2023/07/19/suzume-64b75bf3a0688f4fad71e093.jpg?t=o&v=780",
    title: "Suzume",
    rating: 7.6,
    year: 2023,
    duration: "2h 2m",
    synopsis: "As the skies turn red and the planet trembles, Japan stands on the brink of disaster. However, a determined teenager named Suzume sets out on a mission to save her country. Able to see supernatural forces that others cannot, it's up to her to close the mysterious doors that are spreading chaos across the land. A perilous journey awaits as the fate of Japan rests on her shoulders.",
    type: "Film",
    genre: "Animation",
    releaseDate: "8 March 2023",
    production: "CoMix Wave Films",
    director: "Makoto Shinkai",
    cast: "Nanoka Hara, Hokuto Matsumur, Eri Fukatsu, Shota Sometani, Sairi Ito, Kotone Hanase, Kana Hanazawa, Matsumoto Hakuo II, Ryunosuke Kamiki",
    trailerURL: "https://www.youtube.com/embed/F7nQ0VUAOXg?si=eZcyq6WtjUHJaQCN",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
  mainPoster: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/12/8-best-characters-in-spirited-away-ranked.jpg",
    title: "Spirited Away",
    rating: 8.6,
    year: 2001,
    duration: "2h 5m",
    synopsis: "Ten-year-old Chihiro and her parents end up at an abandoned amusement park inhabited by supernatural beings. Soon, she learns that she must work to free her parents who have been turned into pigs.",
    type: "Film",
    genre: "Animation",
    releaseDate: "10 July 2001",
    production: "Studio Ghibli",
    director: "Hayao Miyazaki",
    cast: "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naito, Yasuko Sawaguchi, Tsunehiko Kamijo, Takehiko Ono, Bunta Sugawara",
    trailerURL: "https://www.youtube.com/embed/fDUFP7EeXLE?si=CPh5vmzwxPvPJB9c",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
  mainPoster: "https://material.asset.catchplay.com/NBC-ID-001-A1013/artworks/posters/NBC-ID-001-A1013-P448.jpg?hash=1716380370",
    title: "The Super Mario Bros. Movie",
    rating: "7.0",
    year: 2023,
    duration: "1h 32m",
    synopsis: "While working underground to fix a water main, Brooklyn plumbers and brothers Mario and Luigi are transported through a mysterious pipe to a magical new world. But when the siblings are separated, an epic adventure begins.",
    type: "Film",
    genre: "Animation",
    releaseDate: "5 April 2023",
    production: "Universal Pictures, Illumination, Nintendo",
    director: "Aaron Horvath, Michael Jelenic",
    cast: "Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, Fred Armisen",
    trailerURL: "https://www.youtube.com/embed/TnGl01FkMMo?si=ViJp0C0Ivw5FxfYp",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/3/31/Ghostbusters_%282024%29_poster.jpg",
  mainPoster: "https://ghostbustersnews.com/wp-content/uploads/2023/12/ghostbusters_frozen_empire_poster_banner.webp",
    title: "Ghostbusters: Frozen Empire",
    rating: 6.2,
    year: 2024,
    duration: "1h 55m",
    synopsis: "The Spengler family returns to the iconic New York City firehouse where the original Ghostbusters have taken ghost-busting to the next level. When the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must unite to protect their home and save the world from a second ice age.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "22 March 2024",
    production: "Columbia Pictures, Ghost Corps, Bron Creative, Right of Way Films",
    director: "Gil Kenan",
    cast: "Paul Rudd, Carrie Coon, Finn Wolfhard, Mckenna Grace, Kumail Nanjiani, Patton Oswalt, Ernie Hudson, Annie Potts",
    trailerURL: "https://www.youtube.com/embed/HpOBXh02rVc?si=nBWz7Cvr2dfHhUnO",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/9/90/Wonka_2023_film_poster.jpg",
  mainPoster: "https://img.englishcinemakyiv.com/ECha7KywzWZvENqNESA6l-Ws40-jKIJOkh827vjZm2s/resize:fill:800:450:1:0/gravity:sm/aHR0cHM6Ly9leHBhdGNpbmVtYXByb2QuYmxvYi5jb3JlLndpbmRvd3MubmV0L2ltYWdlcy84YzMzYjYyMi00OTBhLTRkZGYtOGQ1My1kNDM4N2U2OTYyZTAuanBn.jpg",
    title: "Wonka",
    rating: "7.0",
    year: 2023,
    duration: "1h 56m",
    synopsis: "Armed with nothing but a hatful of dreams, young chocolatier Willy Wonka manages to change the world, one delectable bite at a time.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "8 December 2028",
    production: "Village Roadshow Pictures, The Roald Dahl Story Company, Heyday Films, Domain Entertainment",
    director: "Paul King",
    cast: "Timothée Chalamet, Calah Lane, Keegan-Michael Key, Paterson Joseph, Matt Lucas, Mathew Baynton, Sally Hawkins, Rowan Atkinson, Jim Carter, Olivia Colman, Hugh Grant",
    trailerURL: "https://www.youtube.com/embed/otNh9bTjXWg?si=6cghaqNQ81WqOnr5",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/1/19/Rebel_moon_part1_poster.jpg",
  mainPoster: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd4Ly4log4uLNV3dn2ENHGGBw_Ts1xyP5l_8MO3KBNZTeR58DPKmOg1mSB480jK4RlrbR5CO9CqGLjrx-kYn43yWL56RujRPnxBbh25jhqyMu3Tthz12t2rUv0HtFFOfboQgoQ.webp?r=7c8",
    title: "Rebel Moon",
    rating: 5.6,
    year: 2023,
    duration: "2h 14m",
    synopsis: "When a colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch a young woman with a mysterious past to seek out warriors from neighbouring planets to help them take a stand.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "15 December 2023",
    production: "The Stone Quarry, Grand Electric",
    director: "Zack Snyder",
    cast: "Sofia Boutella, Djimon Hounsou, Ed Skrein, Michiel Huisman, Doona Bae, Ray Fisher, Charlie Hunnam, Anthony Hopkins",
    trailerURL: "https://www.youtube.com/embed/fhr3MzT6exg?si=DSII29nP9sLD1jNR",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
  mainPoster: "https://material.asset.catchplay.com/NBC-ID-001-A1013/artworks/posters/NBC-ID-001-A1013-P448.jpg?hash=1716380370",
    title: "The Super Mario Bros. Movie",
    rating: "7.0",
    year: 2023,
    duration: "1h 32m",
    synopsis: "While working underground to fix a water main, Brooklyn plumbers and brothers Mario and Luigi are transported through a mysterious pipe to a magical new world. But when the siblings are separated, an epic adventure begins.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "5 April 2023",
    production: "Universal Pictures, Illumination, Nintendo",
    director: "Aaron Horvath, Michael Jelenic",
    cast: "Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, Fred Armisen",
    trailerURL: "https://www.youtube.com/embed/TnGl01FkMMo?si=ViJp0C0Ivw5FxfYp",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/f/f5/Damsel_2024_poster2.jpg",
  mainPoster: "https://www.heavenofhorror.com/wp-content/uploads/2024/03/Damsel-2024-netflix-review-1200x675.jpg",
    title: "Damsel",
    rating: 6.1,
    year: 2024,
    duration: "1h 50m",
    synopsis: "A young woman agrees to marry a handsome prince -- only to discover it was all a trap. She is thrown into a cave with a fire-breathing dragon and must rely solely on her wits and will to survive.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "8 March 2024",
    production: "Roth/Kirschenbaum Films",
    director: "Juan Carlos Fresnadillo",
    cast: "Millie Bobby Brown, Ray Winstone, Nick Robinson, Shohreh Aghdashloo, Angela Bassett, Robin Wright",
    trailerURL: "https://www.youtube.com/embed/9eN_AGX8GXk?si=X4mTrTHLtXk0m29K",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
  mainPoster: "https://sportshub.cbsistatic.com/i/2022/08/22/466e5e6b-1600-4b7a-a687-6b18e07bed1b/spider-man-no-way-home-rerelease.jpg",
    title: "Spider-Man: No Way Home",
    rating: 8.2,
    year: 2021,
    duration: "2h 28m",
    synopsis: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    type: "Film",
    genre: "Fantasy",
    releaseDate: "13 December 2021",
    production: "Columbia Pictures, Marvel Studios, Pascal Pictures",
    director: "Jon Watts",
    cast: "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, Tobey Maguire",
    trailerURL: "https://www.youtube.com/embed/JfVOs4VSpmA?si=p7CAtHPrCWHP8agL",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  mainPoster: "https://rukminim2.flixcart.com/image/850/1000/juk4gi80/poster/7/y/y/large-newposter8952-wall-poster-a-wallpapers-inception-animated-original-imaf5tgggcfznyfd.jpeg?q=90&crop=false",
    title: "Inception",
    rating: 8.8,
    year: 2010,
    duration: "2h 28m",
    synopsis: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "16 July 2010",
    production: "Warner Bros. Pictures, Legendary Pictures, Syncopy",
    director: "Christopher Nolan",
    cast: "Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page, Tom Hardy, Cillian Murphy, Tom Berenger, Michael Caine",
    trailerURL: "https://www.youtube.com/embed/LifqWf0BAOA?si=Y-XGMV7kjP7xNwIG",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/0/05/Argylle_poster.jpg",
  mainPoster: "https://cms.disway.id/uploads/4770fb1bfda1b0fc97aa7b85cf7327cf.jpg",
    title: "Argylle",
    rating: 5.7,
    year: 2024,
    duration: "2h 19m",
    synopsis: "Reclusive author Elly Conway writes best-selling espionage novels about a secret agent named Argylle who's on a mission to unravel a global spy syndicate. However, when the plots of her books start to mirror the covert actions of a real-life spy organization, the line between fiction and reality begin to blur.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "1 February 2024",
    production: "Apple Original Films, Marv Studios, Cloudy Production",
    director: "Matthew Vaughn",
    cast: "Henry Cavill, Bryce Dallas Howard, Sam Rockwell, Bryan Cranston, Catherine O'Hara, Dua Lipa, Ariana DeBose, John Cena, Samuel L. Jackson",
    trailerURL: "https://www.youtube.com/embed/7mgu9mNZ8Hk?si=BeCBXlZyS3IlfckF",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/5/5a/It_%282017%29_poster.jpg",	
  mainPoster: "https://www.strifemag.com/wp-content/uploads/calltheone/2018/10/31/it_1_orig.jpg",
    title: "It",
    rating: 7.3,
    year: 2017,
    duration: "2h 15m",
    synopsis: "Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "8 September 2017",
    production: "New Line Cinema, Lin Pictures, Vertigo Entertainment, KatzSmith Productions",
    director: "Andy Muschietti",
    cast: "Jaeden Lieberher, Bill Skarsgård",
    trailerURL: "https://www.youtube.com/embed/FnCdOQsX5kc?si=mujcMMSWH2yzxBz-",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/9/98/EvilDeadRiseTeaser.jpg",
  mainPoster: "https://w0.peakpx.com/wallpaper/212/572/HD-wallpaper-evil-dead-rise-movie-poster-2023.jpg",
    title: "Evil Dead Rise",
    rating: 6.5,
    year: 2023,
    duration: "1h 36m",
    synopsis: "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "5 May 2023",
    production: "New Line Cinema, Renaissance Pictures, Pacific Renaissance, Wild Atlantic Pictures",
    director: "Lee Cronin",
    cast: "Lily Sullivan, Alyssa Sutherland, Morgan Davies, Gabrielle Echols, Nell Fisher",
    trailerURL: "https://www.youtube.com/embed/BqQNO7BzN08?si=zbKJH1RK0IFxdiPZ",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/3/34/TheNunPoster.jpg",
  mainPoster: "https://m.media-amazon.com/images/S/pv-target-images/8b314888d0137313a0adf64ae8cbd425701795c5d24e652f1fdb599f71075c33.jpg",
    title: "The Nun",
    rating: 5.3,
    year: 2018,
    duration: "1h 36m",
    synopsis: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "5 September 2018",
    production: "New Line Cinema, Atomic Monster, The Safran Company",
    director: "Corin Hardy",
    cast: "Demián Bichir, Taissa Farmiga, Jonas Bloquet",
    trailerURL: "https://www.youtube.com/embed/pzD9zGcUNrw?si=EgU4YlWGiZ0lC75I",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Conjuring_poster.jpg",
  mainPoster: "https://wallpapers.com/images/hd/the-conjuring-poster-y2bs1yiiscn9qdio.jpg",
    title: "The Conjuring",
    rating: 7.5,
    year: 2013,
    duration: "1h 52m",
    synopsis: "In 1970, paranormal investigators and demonologists Lorraine (Vera Farmiga) and Ed (Patrick Wilson) Warren are summoned to the home of Carolyn (Lili Taylor) and Roger (Ron Livingston) Perron. The Perrons and their five daughters have recently moved into a secluded farmhouse, where a supernatural presence has made itself known. Though the manifestations are relatively benign at first, events soon escalate in horrifying fashion, especially after the Warrens discover the house's macabre history.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "16 July 2013",
    production: "New Line Cinema, The Safran Company, Evergreen Media Group",
    director: "James Wan",
    cast: "Vera Farmiga, Patrick Wilson, Ron Livingston, Lili Taylor",
    trailerURL: "https://www.youtube.com/embed/k10ETZ41q5o?si=fdZGRPTEyDXk9560",
    category: ""
  },
  {
  posterURL: "https://upload.wikimedia.org/wikipedia/en/e/e1/Joker_%282019_film%29_poster.jpg",
  mainPoster: "https://wallpapers.com/images/hd/joker-poster-37j6jfl9mk1jmozx.jpg",
    title: "Joker",
    rating: 8.4,
    year: 2019,
    duration: "2h 2m",
    synopsis: "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
    type: "Film",
    genre: "Thriller",
    releaseDate: "2 October 2019",
    production: "Warner Bros. Pictures, Village Roadshow Pictures, Bron Creative, Joint Effort, DC Films",
    director: "Todd Phillips",
    cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy",
    trailerURL: "https://www.youtube.com/embed/t433PEQGErc?si=Us2yr3a17JK8mwY6",
    category: ""
  },
];

function addIconChangingListeners() {
  const movieCardButtons = document.querySelectorAll('.movie-card-button');

  movieCardButtons.forEach(function(movieCardButton) {
      const title = movieCardButton.parentElement.querySelector('.movie-card-title').textContent;

      // Check if the movie is in the watchlist
      const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
      const isAdded = watchlist.some(movie => movie.title === title);

      // Update icon based on watchlist status
      const cardImg = movieCardButton.querySelector('img');
      const cardDesc = movieCardButton.querySelector('p');
      if (isAdded) {
          cardImg.src = 'Assets/Icon/bookmark (1).png'; // Adjusted for file name
          cardDesc.textContent = "Added to Watchlist";
          movieCardButton.classList.add('clicked');
      } else {
          cardImg.src = 'Assets/Icon/bookmark.png';
          cardDesc.textContent = "Add to Watchlist";
          movieCardButton.classList.remove('clicked');
      }

      movieCardButton.addEventListener('click', function() {
          const isAdded = movieCardButton.classList.contains('clicked');
          const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
          if (!isAdded) {
              // alert("1");
              const movieIndex = watchlist.findIndex(movie => movie.title === title);
              if (movieIndex === -1) {
                  const movie = movies.find(movie => movie.title === title);
                  if (movie) {
                      watchlist.unshift(movie);
                      localStorage.setItem('watchlist', JSON.stringify(watchlist));
                      cardImg.src = 'Assets/Icon/bookmark (1).png';
                      cardDesc.textContent = "Added to Watchlist";
                      movieCardButton.classList.add('clicked');
                  }
              }
          } else {
              // alert("2");
              const movieIndex = watchlist.findIndex(movie => movie.title === title);
              if (movieIndex !== -1) {
                  watchlist.splice(movieIndex, 1);
                  localStorage.setItem('watchlist', JSON.stringify(watchlist));
                  cardImg.src = 'Assets/Icon/bookmark.png';
                  cardDesc.textContent = "Add to Watchlist";
                  movieCardButton.classList.remove('clicked');
              }
          }
          window.location.reload();
      });
  });
}

function addDraggableTotalEpisode() {
  var totalEpisode = document.querySelector('.total-episode');

  var isDown = false;
  var startY;
  var scrollTop;

  totalEpisode.addEventListener('mousedown', function(event) {
      isDown = true;
      startY = event.pageY - totalEpisode.offsetTop;
      scrollTop = totalEpisode.scrollTop;
  });

  totalEpisode.addEventListener('mouseleave', function() {
      isDown = false;
  });

  totalEpisode.addEventListener('mouseup', function() {
      isDown = false;
  });

  totalEpisode.addEventListener('mousemove', function(event) {
      if (!isDown) return;
      event.preventDefault();
      var y = event.pageY - totalEpisode.offsetTop;
      var walk = (y - startY) * 1;
      totalEpisode.scrollTop = scrollTop - walk;
  });
};

function addDraggableListeners() {
    var containers = document.querySelectorAll('.movie-category-container');

    containers.forEach(function(container) {
        var isDown = false;
        var startX;
        var scrollLeft;

        container.addEventListener('mousedown', function(event) {
            isDown = true;
            startX = event.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', function() {
            isDown = false;
        });

        container.addEventListener('mouseup', function() {
            isDown = false;
        });

        container.addEventListener('mousemove', function(event) {
            if (!isDown) return;
            event.preventDefault();
            var x = event.pageX - container.offsetLeft;
            var walk = (x - startX) * 1; // Adjust scrolling speed
            container.scrollLeft = scrollLeft - walk;
        });
    });
}

function generateEpisodes(n) {
  const totalEpisodeDiv = document.querySelector('.total-episode');
  totalEpisodeDiv.innerHTML = '';

  for (let i = 1; i <= n; i++) {
    const episodeDiv = document.createElement('div');
    episodeDiv.classList.add('episode');

    const p = document.createElement('p');
    p.classList.add('lexend');
    p.textContent = `Episode ${i}`;

    episodeDiv.appendChild(p);
    totalEpisodeDiv.appendChild(episodeDiv);
  }
}

function addToWatchlist(title) {
  let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  const movieIndex = watchlist.findIndex(movie => movie.title === title);
  const movie = movies.find(movie => movie.title === title);

  if (movieIndex === -1 && movie) {
      watchlist.push(movie);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      // alert(`${title} has been added to your watchlist!`);
  } else if (movieIndex !== -1) {
      // Remove the movie from the watchlist
      watchlist.splice(movieIndex, 1);
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
      // alert(`${title} has been removed from your watchlist!`);
  } else {
      // alert(`${title} is not found in the movie database!`);
  }
}

  // Fungsi untuk menampilkan detail film berdasarkan judul yang diterima dari parameter
function showMovieDetailByTitle(title) {
    var movie = movies.find(movie => movie.title === title);

    document.getElementById('movie-video').src = movie.trailerURL;
    document.getElementById('movie-poster').src = movie.posterURL;
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-rating').textContent = movie.rating + "/10";
    document.getElementById('movie-year').textContent = movie.year;
    document.getElementById('movie-duration').textContent = movie.duration;
    document.getElementById('movie-synopsis').textContent = movie.synopsis;
    document.getElementById('movie-type').textContent = movie.type;
    document.getElementById('movie-genre').textContent = movie.genre;
    document.getElementById('movie-date').textContent = movie.releaseDate;
    document.getElementById('movie-production').textContent = movie.production;
    document.getElementById('movie-director').textContent = movie.director;
    document.getElementById('movie-cast').textContent = movie.cast;
    document.getElementById('movie-trailer').src = movie.trailerURL;

    if(movie.type !== "Series"){
      document.querySelector('.detail-children-right').style.display = "none";
      document.querySelector('.detail-children-left').style.width = '100%';
      document.querySelector('.detail-children-left').style.marginRight = '0px';
      document.querySelector('.episode-marker').style.display = 'none';
      document.querySelector('.episode-number').style.display = 'none';
    }
    else {
      generateEpisodes(movie.episode);
      addDraggableTotalEpisode();
      document.getElementById('movie-episode').textContent = movie.episode;
    }

    const addButton = document.getElementById('add-button');
    if (addButton) {
        addButton.onclick = function() {
            addToWatchlist(movie.title);
        };
    }

    var similarMovies = movies.filter(movieSearched => movieSearched.genre === movie.genre);
    similarMovies = similarMovies.filter(movieSearched => movieSearched.title !== movie.title);

    const movieCardsHTML = similarMovies.map(movie => `
        <div class="movie-card-container">
            <img class="movie-card-poster" src="${movie.mainPoster}" alt="${movie.title}" width="272px" height="170px">
            <img onclick="goToMovieDetail('${movie.title}')" class="movie-card-play" src="Assets/Icon/PlayButton.png" alt="">
            <div class="movie-card-rating-section">
                <img src="Assets/Icon/star (1).png" alt="">
                <p class="lexend">${movie.rating}</p>
            </div>
            <p onclick="goToMovieDetail('${movie.title}')" class="movie-card-title lexend">${movie.title}</p>
            <div class="movie-card-button" onclick="addToWatchlist('${movie.title}')">
                <img src="Assets/Icon/bookmark.png" alt="">
                <p class="lexend">Add to Watchlist</p>
            </div>
        </div>
    `).join('');

    const moreLikeThis = document.querySelector('.more-like-this');

    var moreHTML = `
        <div class="all-movie-list">
            <div class="movie-category-container">
                ${movieCardsHTML}
            </div>
        </div>
      `;

      moreLikeThis.insertAdjacentHTML('beforeend', moreHTML);
      addIconChangingListeners();
      addDraggableListeners();
}

// Ambil judul film yang dipilih dari URL
const urlParams = new URLSearchParams(window.location.search);
const selectedMovieTitle = urlParams.get('title');
showMovieDetailByTitle(selectedMovieTitle);



const addButton = document.getElementById('add-button');
// alert(addButton);
const title = addButton.parentElement.querySelector('#movie-title').textContent;
// alert(title);
// Check if the movie is in the watchlist
const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
const isAdded = watchlist.some(movie => movie.title === title);

// Update icon based on watchlist status
const cardImg = addButton.querySelector('img');
const cardDesc = addButton.querySelector('p');
if (isAdded) {
    cardImg.src = 'Assets/Icon/bookmark (1).png'; // Adjusted for file name
    cardDesc.textContent = "Added to Watchlist";
    addButton.classList.add('clicked');
} else {
    cardImg.src = 'Assets/Icon/bookmark.png';
    cardDesc.textContent = "Add to Watchlist";
    addButton.classList.remove('clicked');
}

addButton.addEventListener('click', function() {
    // alert("p");
    const isAdded = addButton.classList.contains('clicked');
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!isAdded) {
        // alert("1");
        const movieIndex = watchlist.findIndex(movie => movie.title === title);
        if (movieIndex === -1) {
            const movie = movies.find(movie => movie.title === title);
            if (movie) {
                watchlist.unshift(movie);
                localStorage.setItem('watchlist', JSON.stringify(watchlist));
                cardImg.src = 'Assets/Icon/bookmark (1).png';
                cardDesc.textContent = "Added to Watchlist";
                addButton.classList.add('clicked');
            }
        }
    } else {
        // alert("2");
        const movieIndex = watchlist.findIndex(movie => movie.title === title);
        if (movieIndex !== -1) {
            watchlist.splice(movieIndex, 1);
            localStorage.setItem('watchlist', JSON.stringify(watchlist));
            cardImg.src = 'Assets/Icon/bookmark.png';
            cardDesc.textContent = "Add to Watchlist";
            addButton.classList.remove('clicked');
        }
    }
    window.location.reload();
});

const stars = document.querySelectorAll('.stars img');
let previousRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        const value = parseInt(this.getAttribute('data-value'));

        if (value === previousRating) {
            stars.forEach(s => {
                s.classList.remove('rated');
            });
            previousRating = 0;
        } else {
            stars.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('rated');
                } else {
                    s.classList.remove('rated');
                }
            });
            previousRating = value;
        }
    });
});

textarea = document.querySelector("#autoresizing");
textarea.addEventListener('input', autoResize, false);
 
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

function toggleButton() {
    var commentText = document.getElementsByClassName('comment-text')[0].value;
    var postButton = document.getElementById('post-button');

    if (commentText.trim() === "") {
        postButton.disabled = true;
    } else {
        postButton.disabled = false;
    }
}

function toggleReplyButton(){
  var commentText = document.getElementsByClassName('reply-comment-text')[0].value;
  var replyButton = document.getElementById('reply-button');

  if(commentText.trim() === ""){
    replyButton.disabled = true;
  } else {
    replyButton.disabled = false;
  }
}

function addLikeCounter(){
    // Get all elements with the class 'comment-like-section'
  const commentLikeSections = document.querySelectorAll('.comment-like-section');
  // alert(commentLikeSections.length);
// Loop through each comment-like-section element
  commentLikeSections.forEach(commentLikeSection => {
    let isLiked = false;

    // Add click event listener to toggle like
    commentLikeSection.addEventListener('click', function(){
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if(isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) - 1;
            if(commentLikeCount.textContent === "1"){
              commentLikeCount.textContent = 0;
            }
            else if(commentLikeCount.textContent === "4"){
              commentLikeCount.textContent = 3;
            }
            commentLikeCount.style.color = "#FFFFFF";
            isLiked = false;
        }
        else {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) + 1;
            if(commentLikeCount.textContent === "0"){
              commentLikeCount.textContent = 1;
            }
            else if(commentLikeCount.textContent === "3"){
              commentLikeCount.textContent = 4;
            }
            commentLikeCount.style.color = "#47B5FF";
            isLiked = true;
        }
    });

    // Add mouseover event listener to change icon and count color
    commentLikeSection.addEventListener('mouseover', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            commentLikeCount.style.color = "#47B5FF";
        }
    });

    // Add mouseout event listener to change icon and count color
    commentLikeSection.addEventListener('mouseout', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            commentLikeCount.style.color = "#FFFFFF";
        }
    });
  });
};

addLikeCounter();

function addLikeCounterForPostedReply(){
  // Get all elements with the class 'comment-like-section'
  const commentLikeSections = document.querySelectorAll('.posted-reply-like-counter');

  // Loop through each comment-like-section element
  commentLikeSections.forEach(commentLikeSection => {
  let isLiked = false;

  // Add click event listener to toggle like
    commentLikeSection.addEventListener('click', function(){
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if(isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) - 1;
            if(commentLikeCount.textContent === "1"){
              commentLikeCount.textContent = 0;
            }
            else if(commentLikeCount.textContent === "4"){
              commentLikeCount.textContent = 3;
            }
            commentLikeCount.style.color = "#FFFFFF";
            isLiked = false;
        }
        else {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            // commentLikeCount.textContent = parseInt(commentLikeCount.textContent) + 1;
            if(commentLikeCount.textContent === "0"){
              commentLikeCount.textContent = 1;
            }
            else if(commentLikeCount.textContent === "3"){
              commentLikeCount.textContent = 4;
            }
            commentLikeCount.style.color = "#47B5FF";
            isLiked = true;
        }
    });

    // Add mouseover event listener to change icon and count color
    commentLikeSection.addEventListener('mouseover', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like (1).png';
            commentLikeCount.style.color = "#47B5FF";
        }
    });

    // Add mouseout event listener to change icon and count color
    commentLikeSection.addEventListener('mouseout', function() {
        const commentLikeIcon = this.querySelector('img');
        const commentLikeCount = this.querySelector('p');
        if (!isLiked) {
            commentLikeIcon.src = 'Assets/Icon/like.png';
            commentLikeCount.style.color = "#FFFFFF";
        }
    });
  });
};

function postComment() {
    var commentText = document.getElementsByClassName('comment-text')[0].value;
    // window.alert(commentText);

    var currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

    var newCommentSection = document.createElement("div");
    newCommentSection.classList.add("comment-1");
    
    newCommentSection.innerHTML = `
        <div class="posted-comment-section">
            <div class="flex-row">
                <img src="Assets/Icon/profilepicture.png" alt="">
                <div class="flex-column">
                    <p class="lexend comment-author">You</p>
                    <p class="lexend comment-date">${formattedDate}</p>
                    <p class="lexend comment-description">${commentText}</p>
                </div>
            </div>
            <div class="flex-row comment-details">
                <div class="comment-like-section posted-reply-like-counter" id="comment-like-section">
                    <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
                    <p class="lexend comment-like-count">0</p>
                </div>
                <div class="comment-reply-section">
                    <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
                    <p class="lexend comment-reply-count">0</p>
                </div>
                <p class="reply-comment lexend">Reply</p>
            </div>
        </div>
    `;

    var postedComments = document.getElementById("posted-comments");
    postedComments.insertBefore(newCommentSection, postedComments.firstChild);

    addLikeCounter();

    document.querySelector(".comment-text").value = "";
    
    document.getElementById('post-button').disabled = true;
};

var toggleReplyStatus = 0;

function toggleReplies() {
    const postedReplySections = document.querySelectorAll('.posted-reply-section');
    
    postedReplySections.forEach(postedReplySection => {
        postedReplySection.classList.toggle('show');
    });

    if(toggleReplyStatus === 0){
      toggleReplyStatus = 1;
    }
    else {
      toggleReplyStatus = 0;
    }
}

const replyParagraph = document.querySelector('.reply-comment');
const cancelButton = document.querySelector('.cancel-button');
const replyContainer = document.querySelector('.reply-a-comment-container');

replyContainer.style.display = 'none';
function toggleReplyContainer() {
  if (replyContainer.style.display === 'none') {
    replyContainer.style.display = 'block';
  } else {
    replyContainer.style.display = 'none';
  }
}

replyParagraph.addEventListener('click', toggleReplyContainer);
cancelButton.addEventListener('click', toggleReplyContainer);

function replyComment() {
    var replyCountElement = document.querySelector('.ferlie-comment');
    var currentCount = parseInt(replyCountElement.textContent);
    replyCountElement.textContent = currentCount + 1;
    

    if(toggleReplyStatus === 1){
      toggleReplies();
      toggleReplyStatus = 0;
    }
    
    var commentText = document.getElementsByClassName('reply-comment-text')[0].value;
    // window.alert(commentText);

    var currentDate = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var formattedDate = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0') + " - " + currentDate.getDate() + " " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear();

    var newPostedReplySection = document.createElement("div");
    newPostedReplySection.classList.add('posted-reply-section');
    
    newPostedReplySection.innerHTML = `
        <div class="flex-row">
          <img src="Assets/Icon/profilepicture.png" alt="">
          <div class="flex-column">
            <p class="lexend comment-author">You</p>
            <p class="lexend comment-date">${formattedDate}</p>
            <p class="lexend comment-description">${commentText}</p>
          </div>
        </div>
        <div class="flex-row comment-details">
          <div class="comment-like-section posted-reply-like-counter">
            <img src="Assets/Icon/like.png" class="comment-like-icon" alt="">
            <p class="lexend comment-like-count">0</p>
          </div>
          <div class="comment-reply-section">
            <img src="Assets/Icon/comment.png" class="comment-reply-icon" alt="">
            <p class="lexend comment-reply-count">0</p>
          </div>
          <p class="reply-comment lexend">Reply</p>
        </div>
    `;

    var postedReplyContainer = document.querySelector(".posted-reply-container");    

    postedReplyContainer.appendChild(newPostedReplySection);
    
    addLikeCounterForPostedReply();

    toggleReplyContainer();
    toggleReplies();

    document.querySelector(".reply-comment-text").value = "";
    
    document.getElementById('reply-button').disabled = true;
};

/* Header */
// window.addEventListener('scroll', function() {
//   const header = document.querySelector('header');
//   if (window.scrollY > 0) {
//       header.classList.add('scrolled');
//   } else {
//       header.classList.remove('scrolled');
//   }
// });

// let menu = document.querySelector('#icon');
// let navbar = document.querySelector('.navigation');
// let dropdown = document.querySelector('.dropdown');

// menu.onclick = () => {
//   menu.classList.toggle('bx-x');
//   navbar.classList.toggle('nyala');
//   dropdown.classList.remove('active'); 
// }

// dropdown.onclick = (event) => {
//   event.stopPropagation();
//   dropdown.classList.toggle('active');
// }

// if (window.matchMedia('(min-width: 1000px)').matches) {
//   dropdown.onclick = (event) => {
//       event.stopPropagation();
//       dropdown.classList.toggle('active');
//   }
// }
// document.addEventListener('DOMContentLoaded', function() {
//   const searchInput = document.querySelector('.search input[type="text"]');

//   searchInput.addEventListener('input', function() {
//       if (searchInput.value.trim() !== '') {
//           searchInput.classList.add('expanded');
//       } else {
//           searchInput.classList.remove('expanded');
//       }
//   });

//   var profileIcon = document.getElementById('profileIcon');
//   var dropdownMenu = document.getElementById('dropdownMenu');

//   profileIcon.addEventListener('click', function () {
//       dropdownMenu.classList.toggle('show');
//       setTimeout(function() {
//           dropdownMenu.classList.toggle('opacity-transition');
//       }, 1);
//   });

//   document.addEventListener('click', function (e) {
//       if (!dropdownMenu.contains(e.target) && !profileIcon.contains(e.target)) {
//           dropdownMenu.classList.remove('show');
//       }
//   });




//   let dropdown = document.querySelector('.dropdown');
//   let categoryDropdown = document.querySelector('.dropdown-content');

//   function toggleDropdown() {
//       categoryDropdown.classList.toggle('active');
//   }

//   dropdown.addEventListener('click', function(event) {
//       event.stopPropagation();
//       toggleDropdown();
//   });

//   document.addEventListener('click', function (e) {
//       if (!categoryDropdown.contains(e.target) && !dropdown.contains(e.target)) {
//           categoryDropdown.classList.remove('active');
//       }
//   });
//   categoryDropdown.addEventListener('click', function(event) {
//       event.stopPropagation();
//   });

// });








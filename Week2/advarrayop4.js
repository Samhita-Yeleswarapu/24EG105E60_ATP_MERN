//ASSIGNMENT 4: 
//Movie Streaming Platform
//You are working on a movie recommendation system.
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
   // 1. filter() only "Sci-Fi" movies
const r1=movies.filter((movie)=>movie.genre=='Sci-Fi')
console.log(r1)

    //2. map() to return:
      //      "Inception (8.8)"
const r2=movies.map((movie)=>movie.title=='Inception' && movie.rating==8.8)
console.log(r2)

    //3. reduce() to find average movie rating
const r3=movies.reduce((acc,movie)=>(acc+movie.rating)/2,0)
console.log(r3)

    //4. find() movie "Joker"
    const r4=movies.find((movie)=>movie.title=='Joker')
    console.log(r4)

    //5. findIndex() of "Avengers"
const r5=movies.findIndex((movie)=>movie.title=='Avengers')
console.log(r5)
import React, { useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=400";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemon = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedPromises = await Promise.all(detailedPokemon);
      setPokemon(detailedPromises);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curEle) =>
    curEle.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return(
    <div className="w-screen bg-[#242424] flex justify-center items-center h-screen"> 
    <p className=" bg-gradient-to-r text-3xl from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent py-3 px-4 ">Loading...</p>
    </div>
    )
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#242424] min-h-screen h-[100%]">
      <section>
      <p className="flex items-center justify-center text-3xl py-8 h-12 font-bold  bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500  bg-clip-text text-transparent tracking-wide">
        Let's Catch Pokemons !{" "}
      </p>
      <div className="flex justify-center items-center">
        <span className="text-white text-xl px-2 ">Search : </span>
        <input
        name="searchBar"
          type="text"
          className="rounded-full pl-3 outline-none"
          placeholder="Search Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      </section>


    <section className="flex justify-center items-center">
      <ul className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center items-center text-white  mt-5">
        {searchData.map((currPokemon) => {
          return (
            <PokemonCards
              key={currPokemon.id}
              currPokemon={currPokemon}
            ></PokemonCards>
          );
        })}
      </ul>
      </section>
    </div>
  );
};

export default Pokemon;

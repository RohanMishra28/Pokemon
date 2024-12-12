import React from "react";

const PokemonCards = ({ currPokemon }) => {
  return (
    <ul>
      <li className="py-2">
        {" "}
        <div className="h-[23rem] w-[21rem] rounded-xl bg-white overflow-hidden ">
          <div className="bg-green-100 h-[40%] pt-4 flex items-center justify-center ">
            <img
              className="h-[100%] p-1"
              src={currPokemon.sprites.other.dream_world.front_default}
              alt={currPokemon.name}
            />
          </div>
          <div className="flex justify-center items-center flex-col gap-2 ">
            <h3 className="text-black text-2xl font-semibold  capitalize">
              {currPokemon.name}
            </h3>
            <h4 className="text-white text-sm bg-green-400   w-fit rounded-full px-4 py-1 capitalize font-bold">
              {currPokemon.types
                .map((currEle) => {
                  return currEle.type.name;
                })
                .join(", ")}
            </h4>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-2">
            <p className="text-md text-black font-semibold px-3 py-2 tracking-tight">
              Height:
              <span className="text-sm pl-2 font-light">
                {currPokemon.height}
              </span>
            </p>
            <p className="text-md text-black font-semibold px-3 py-2 tracking-tight">
              Weight:
              <span className="text-sm pl-2 font-light">
                {currPokemon.weight}
              </span>
            </p>
            <p className="text-md text-black font-semibold px-3 py-2 tracking-tight">
              Speed:
              <span className="text-sm pl-2 font-light">
                {currPokemon.stats[5].base_stat}
              </span>
            </p>
            <p className="text-md flex justify-center flex-col text-black font-semibold px-3 py-2 tracking-tight">
              Experience:{" "}
              <span className="text-sm font-light flex justify-center">
                {" "}
                {currPokemon.base_experience}
              </span>{" "}
            </p>
            <p className="text-md flex justify-center flex-col w-fit text-black font-semibold px-3 py-2 tracking-tight ">
              Attack:{" "}
              <span className="text-sm font-light flex justify-center">
                {" "}
                {currPokemon.stats[1].base_stat}
              </span>
            </p>
            <p className="text-md flex justify-center flex-col text-black font-semibold px-3 py-2 tracking-tight w-fit">
              Ability:{" "}
              <span className="text-sm font-light flex justify-center">
                {" "}
                {currPokemon.abilities
                  .map((abilityInfo) => abilityInfo.ability.name)
                  .slice(0, 1)
                  .join(", ")}
              </span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default PokemonCards;

{
  /* <li className='py-2' key={currPokemon.id} >{currPokemon.name}
        
</li> */
}

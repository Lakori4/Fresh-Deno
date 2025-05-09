export type Character = {
  id: string;
  name: string;
  image: string;
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: { name: string}
  location: { name: string }
  episode: string[],
};

export type Episode = {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Character[],
}

export type EpsChar = {
  character: Character,
  episodes: Episode[],
}
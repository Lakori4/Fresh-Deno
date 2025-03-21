export type Character = {
  id: string;
  name: string;
  image: string;
  status: string,
  origin: { name: string}
  episode: string[],
};

export type Episode = {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
}
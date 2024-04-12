import axios from "axios";

interface Player {
  firstname: string;
  lastname: string;
  age: number;
  photo: string;
  id: number;
  season: number;
}

export default async function Apicall(id: string, season: string): Promise<Player> {
  interface RequestOptions {
    method: string;
    url: string;
    headers: {
      "X-RapidAPI-Key": string;
      "X-RapidAPI-Host": string;
    };
  }

  const options: RequestOptions = {
    method: "GET",
    url: "https://api-football-v1.p.rapidapi.com/v3/players",
    headers: {
      "X-RapidAPI-Key": "bab6dbce6dmsh39602424deb690ap1f6557jsn0e26ef03544d",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  };

  const res = await axios.request({
    ...options,
    params: { id, season },
  });
  return res.data.response[0].player as Player;
}
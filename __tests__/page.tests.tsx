import Apicall from "@/app/apicall";
import axios from "axios";

jest.mock('axios');

describe('Apicall function', () => {
  it('fetches player data from the API', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const mockPlayerData = {
      firstname: 'John',
      lastname: 'Doe',
      age: 25,
      photo: 'https://example.com/photo.jpg',
      id: 1,
      season: 2023,
    };

    const mockedApiResponse = {
      data: {
        response: [ { player: mockPlayerData } ]
      }
    };

    mockedAxios.request.mockResolvedValue(mockedApiResponse);

    const playerId = '1';
    const season = '2023';

    const player = await Apicall(playerId, season);

    expect(player).toEqual(mockPlayerData);
    expect(mockedAxios.request).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/players',
      headers: {
        'X-RapidAPI-Key': 'bab6dbce6dmsh39602424deb690ap1f6557jsn0e26ef03544d',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      },
      params: { id: playerId, season },
    });
  });
});

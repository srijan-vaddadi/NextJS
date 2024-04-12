import Apicall from "@/app/apicall";
import { table } from "console";

interface PlayerPageProps {
  params: {
    player: string;
    season: string;
  };
}

export default async function PlayerPage({ params }: PlayerPageProps) {
  const player = await Apicall(params.player, params.season);
  console.log(player);

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{player.firstname}</td>
          <td>{player.lastname}</td>
          <td>{player.age}</td>
          <td>
            <img src={player.photo} alt="No image for player" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

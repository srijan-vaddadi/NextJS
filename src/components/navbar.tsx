'use client'

import { useRouter } from "next/navigation";
import React from "react";
import { SyntheticEvent, useState } from "react";

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter()
  const [player, setplayer] = useState('')
  const [season, setseason] = useState('')

  const handleSubmit = (evt: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    evt.preventDefault()
    router.push(`/${player}/${season}`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Player ID:
            <input type="text" value={player} onChange={(evt) => setplayer(evt.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            Season:
            <input type="text" value={season} onChange={(evt) => setseason(evt.target.value)}/>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <br/>
      <br/>
    </div>
  );
};

export default Navbar;

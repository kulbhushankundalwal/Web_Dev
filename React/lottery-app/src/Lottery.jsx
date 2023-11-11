import { useState } from "react";
import { generateTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(generateTicket(3));

  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(generateTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <br />
      <Button text="Buy New Ticket" action={buyTicket} />
      <br />
      <h3 style={{ color: "green" }}>
        {isWinning && "Congratulations! You won...!"}
      </h3>
    </div>
  );
}

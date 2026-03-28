import React, { useEffect, useState } from 'react';
import ticketStyle from './Ticket.module.css';
import generateTambolaTicket from '../../resources/ticketGenerator';

const Ticket = () => {
  const [ticketNumbers, setTicketNumber] = useState([]);
  useEffect(() => {
    setTicketNumber(generateTambolaTicket());
    console.log(ticketNumbers);
  }, [])

  const handleClick = (e) => {
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "grey";
  }
  return (<>
    <div className={ticketStyle.outerBorder}>
      <div className={ticketStyle.firstRow + " " + ticketStyle.row}>
        {
          ticketNumbers.length &&
          (
            ticketNumbers[0].map(ticketNumber => <div className={ticketStyle.numberBox} onClick={handleClick} >{ticketNumber === 0 ? ' ' : ticketNumber}</div>)
          )
        }
      </div>
      <div className={ticketStyle.secondRow + " " + ticketStyle.row}>
        {
          ticketNumbers.length &&
          (
            ticketNumbers[1].map(ticketNumber => <div className={ticketStyle.numberBox} onClick={handleClick}>{ticketNumber === 0 ? ' ' : ticketNumber}</div>)
          )
        }
      </div>
      <div className={ticketStyle.thirdRow + " " + ticketStyle.row}>
        {
          ticketNumbers.length &&
          (
            ticketNumbers[2].map(ticketNumber => <div className={ticketStyle.numberBox} disabled onClick={handleClick}>{ticketNumber === 0 ? ' ' : ticketNumber}</div>)
          )
        }
      </div>
    </div>
  </>)
}
export default Ticket;

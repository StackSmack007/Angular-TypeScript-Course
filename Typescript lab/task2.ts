// enum Status {
//   available = 1,
//   departed = 2,
//   sold = 3
// }

// interface ITicket {
//   destination: string;
//   price: number;
//   status: Status;
// }

// function storeTickets(tickets: string[], criteria: string): ITicket[] {
//   const sortTypes = {
//     destination: (a: ITicket, b: ITicket) =>
//       a.destination.localeCompare(b.destination),
//     price: (a: ITicket, b: ITicket) => a.price - b.price,
//     status: (a: ITicket, b: ITicket) => a.status - b.status
//   };
//   if (sortTypes[criteria] === null)
//     throw new Error("Invalid Sorting criteria!");

//   return tickets
//     .map(t => t.split("|"))
//     .map(([destination, price, status]) => {
//       return { destination, price: +price, status: Status[status] };
//     })
//     .sort(sortTypes[criteria]);
// }
// console.log(
//   storeTickets(
//     [
//       "Philadelphia|94.20|available",
//       "New York City|95.99|available",
//       "New York City|95.99|sold",
//       "Boston|126.20|departed"
//     ],
//     "destination"
//   )
// );

 
  interface ITicket {
    destination: string;
    price: number;
    status: string;
  }
  
  function storeTickets(tickets: string[], criteria: string): ITicket[] {
    const sortTypes = {
      destination: (a: ITicket, b: ITicket) =>
        a.destination.localeCompare(b.destination),
      price: (a: ITicket, b: ITicket) => a.price - b.price,
      status: (a: ITicket, b: ITicket) => a.status.localeCompare(b.status)
    };
    if (sortTypes[criteria] === null)
      throw new Error("Invalid Sorting criteria!");
  
    return tickets
      .map(t => t.split("|"))
      .map(([destination, price, status]) => {
        return { destination, price: +price, status };
      })
      .sort(sortTypes[criteria]);
  }
  console.log(
    storeTickets(
        ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
       'status'
    )
  );
  

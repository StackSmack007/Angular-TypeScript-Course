function storeTickets(tickets, criteria) {
    var sortTypes = {
        destination: function (a, b) {
            return a.destination.localeCompare(b.destination);
        },
        price: function (a, b) { return a.price - b.price; },
        status: function (a, b) { return a.status.localeCompare(b.status); }
    };
    if (sortTypes[criteria] === null)
        throw new Error("Invalid Sorting criteria!");
    return tickets
        .map(function (t) { return t.split("|"); })
        .map(function (_a) {
        var destination = _a[0], price = _a[1], status = _a[2];
        return { destination: destination, price: +price, status: status };
    })
        .sort(sortTypes[criteria]);
}
console.log(storeTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'status'));

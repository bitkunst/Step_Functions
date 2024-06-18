exports.handler = async (event) => {
  const seatList = [1, 45, 13, 65, 879];
  var randSeat = seatList[Math.floor(Math.random() * seatList.length)];

  var pairing = `${event.name} will be on seat #: ${randSeat}`;
  return pairing;
};

/**
 * [
  {
    "name": "Gina"
  },
  {
    "name": "Paulo"
  },
  {
    "name": "Carl"
  }
]
 */


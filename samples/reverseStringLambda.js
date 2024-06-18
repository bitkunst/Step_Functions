exports.handler = async (event) => {
  const reversedName = await reverse(event);
  return {
    statsCode: 200,
    body: JSON.stringify(reversedName),
  };
};

async function reverse(event) {
  return event.name.split("").reverse().join("");
}

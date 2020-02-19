const goGetIt = async () => {
  return new Promise(resolve => setTimeout(resolve, 15000)).then(
    () => 'made it',
  );
};

module.exports.handler = async (event, context) => {
  const response = await goGetIt();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, we got: ${response}.`,
    }),
  };
};

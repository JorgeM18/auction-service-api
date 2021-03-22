
export const helloLambda = async (event) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "hello world from lambda and the serverless framework!" }),
  };
};
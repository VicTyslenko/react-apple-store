// const sendRequest = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();

//   return result;
// };

// export default sendRequest;
const sendRequest = async (url) => {
  const baseUrl = process.env.PUBLIC_URL || "";
  const fullUrl = baseUrl + url;

  const response = await fetch(fullUrl);
  const result = await response.json();

  return result;
};

export default sendRequest;

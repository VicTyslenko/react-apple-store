// const sendRequest = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();

//   return result;
// };

// export default sendRequest;

const sendRequest = async (url, method = "GET", data = null) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return result;
};

export default sendRequest;

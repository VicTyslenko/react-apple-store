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

  return {
    data: result,
    status: response.status,
  };
};

export default sendRequest;

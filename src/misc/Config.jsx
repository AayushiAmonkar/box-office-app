const API_BASE_URL = "https://api.tvmaze.com";

const apiGet = async (queryString) => {
  const response = await fetch(`${API_BASE_URL}${queryString}`).then((r) =>
    r.json()
  );
  // throw new Error("oops");
  return response;

  // fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
  // .then((r) => r.json())
  // .then((res) => {
  //   setResult(res);
  //   console.log(res);
  // });
};

export { apiGet };

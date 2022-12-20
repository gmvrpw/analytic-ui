const BASE_URL = "http://192.168.1.105:8080/api";

export const httpApi = () => (next) => (action) => {
  if (!action.rest) {
    next(action);
    return;
  }

  const url =
    `${BASE_URL}${action.rest}?` +
    new URLSearchParams(action.method === "GET" ? action.query : {});

  next({
    ...action,
    type: action.type + "_START",
  });

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://192.168.1.105:8080",
  };

  console.log(action.query);

  fetch(url, {
    method: action.method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //credentials: "same-origin", // include, *same-origin, omit
    headers: headers,
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: action.method === "GET" ? undefined : JSON.stringify(action.query), // body data type must match "Content-Type" header
  })
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        next({
          data: data,
          type: action.type + "_SUCCESS",
          prevAction: action,
        });
      } else {
        next({
          error: data,
          type: action.type + "_FAIL",
          prevAction: action,
        });
      }
    })
    .catch((error) => {
      next({
        error: error,
        type: action.type + "_FAIL",
        prevAction: action,
      });
    });
};

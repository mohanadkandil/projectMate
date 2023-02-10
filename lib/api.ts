export const fetcher = async ({ url, method, body, json = true }) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("API Error");

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

/*
    register and login are the mechanicm in the input form to send 
    the data to the backend through /api route that will make the post request
*/
export const register = async (user) => {
  return fetcher({ url: "/api/register", method: "POST", body: user });
};

export const signin = async (user) => {
  return fetcher({ url: "/api/login", method: "POST", body: user });
};

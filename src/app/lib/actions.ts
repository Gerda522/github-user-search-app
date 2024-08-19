"use server";

export async function getUser(username: string) {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: "Bearer " + process.env.GITHUB_KEY,
      "X-GitHub-Api-Version": "2022-11-28",
    },
  };

  try {
    const response = await fetch(
      "https://api.github.com/users/" + username,
      requestOptions
    );

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

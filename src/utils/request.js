/**
 * Util function to get users and posts
 */
export const getData = async (dataType, abortController) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${dataType}`, {
      signal: abortController.signal
    });
    return await res.json();
  } catch (err) {
    console.log('Failed to parse: ', JSON.stringify(err));
    throw new Error(err);
  }
};

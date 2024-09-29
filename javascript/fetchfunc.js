const API_URL ="https:api.github.com/users/Lachi1234";
async function handlePromise()
{
    const data=await fetch(API_URL);
    const json.Value=await data.json;
}
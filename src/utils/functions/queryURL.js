export const convertToURLObject = (url) => {
    const arr = url.slice(1).split(/&|=/); 
    let params = {};
    for(let i = 0; i < arr.length; i += 2){
      const key = arr[i], value = decodeURIComponent(arr[i + 1]);
      params[key] = value;
    }
    return params;
};

export const setQuery = (agrs) => {
  const payload = agrs.Fro
  const url = new URL(document.location);
  
  if(payload.length===0) return;
  payload.map((item, index) => {
    url.searchParams.set(Object.keys(index), Object.values(index));
  })
  return;
}
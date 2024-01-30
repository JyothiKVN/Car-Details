export function filterBasedOnQuery(query: any, cardetails: any[]): any[] {
  // console.log(query, cardetails);
  const results = cardetails.filter((item) => {
    let flag = false;
    const keys = Object.keys(query);

    for (let i = 0; i < keys.length; i++) {
      if (query[keys[i]] && query[keys[i]] === item[keys[i]]) {
        flag = true;
      } else {
        flag = false;
        return;
      }
    }
    return flag;
  });
  // console.log(results);
  return results;
}

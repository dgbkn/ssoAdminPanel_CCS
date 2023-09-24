export const fetchData = async (urlPart, method = 'GET', params = {}, token = null) => {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  if (token) {
    requestOptions.headers['Authorization'] = `Bearer ${token}`;
  }

  let finalUrl = `http://localhost:3001/superAdmin/${urlPart}`;

  if (method === 'GET') {
    const queryString = Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');

    if (queryString) {
      finalUrl += `?${queryString}`;
    }
  } else if (method === 'POST') {
    let bodyData = '';

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        bodyData += `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}&`;
      }
    }
    bodyData = bodyData.slice(0, -1); // Remove the trailing "&"
    requestOptions.body = bodyData;
  }

  try {
    const response = await fetch(finalUrl, requestOptions);

    if (!response.ok) {
      // throw new Error('Network response was not ok');
      try{
        const responseData = await response.json();
        if(responseData){
          return responseData;
        }
      }catch(err){
        return {status: 'error', message: 'Network response was not ok'};
      }

    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (err) {
    console.log(err);
  } finally {
    console.log(false);
  }
};


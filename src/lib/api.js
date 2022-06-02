// const FIREBASE_DOMAIN = 'http://localhost/drupal-xampp/node_type/';
// const { REACT_APP_API_URL } = process.env;
// const { REACT_PUBLIC_DRUPAL_BASE_URL } = process.env;
// const { OAUTH_CLIENT_ID } = process.env;
// const { OAUTH_CLIENT_SECRET } = process.env;
// const { SCOPE } = process.env;
// console.log(process.env.REACT_PUBLIC_DRUPAL_BASE_URL);



export async function getAllProducts() {

  const response = await fetch(`http://localhost/drupal-xampp/get/all/node/products`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch products.');
  }

  const transformedProducts = []; // creating arrary to push objets in it each time

  for (const key in data) {
    
    const productsObj = {
      id: key,
      ...data[key],// spread operator sends the array data in it 
      
    };

    // console.log(productsObj + 'api');// gets json data from new object
   
    
    transformedProducts.push(productsObj);
  }

  return transformedProducts;
}


export async function getSingleProduct(productId) {

  const response = await fetch( `http://localhost/drupal-xampp/node_type/${productId}?_format=json`, {mode:'cors'}
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedProduct = {
    id: productId,
    ...data,
  };
// console.log(loadedProduct);
  return loadedProduct;
}

export async function addContact(contactData) {
  // console.log(contactData);
  const response = await fetch(`http://localhost/drupal-xampp/entity/contact_message?_format=json`, {
    method: 'POST',
    body: JSON.stringify(contactData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create Contact Details.');
  }

  return null;
}


export async function authcode(auth_code) {


  let redirect_uri = 'http://localhost:3000/api/auth/callback/drupal';
  const formData = new URLSearchParams();

  formData.append('grant_type', 'authorization_code');
  formData.append('client_id', '7c49c444-5d02-4d5b-bafd-ef804ad69eea');
  formData.append('client_secret', 12345);
  formData.append("code", auth_code);
  formData.append("redirect_uri", redirect_uri);



  const response = await fetch(`http://localhost/reactjs/oauth/token`, {
    method: "POST",
            mode:'cors',
            body: formData,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not access user data.');
  }

   return  refreshAccessToken(data.access_token,data.expires_in)
  
}


async function refreshAccessToken(token,expires_time) {   
  const response = await fetch(`http://localhost/reactjs/oauth/userinfo?_format=json`, {
      method: "POST",
      mode:'cors',
      // body: UserData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Authorization': `Bearer ${token}`,
      },
})

const data = await response.json()
 

  if (!response.ok) {
    throw new Error(data.message || 'Could not access user data.');
  }

  // console.log(data);

   
  const userdata = {
    id: data.sub,
    username: data.preferred_username,
    name: data.name,
    email: data.email,
    access_token:token,
    expires_in: expires_time,
  }
  


return userdata;
 
}



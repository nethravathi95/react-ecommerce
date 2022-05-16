// const FIREBASE_DOMAIN = 'http://localhost/drupal-xampp/node_type/';
// const { REACT_APP_API_URL } = process.env;


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
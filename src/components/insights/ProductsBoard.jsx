import { useState } from 'react';
import { db } from '../../firebase-config';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from '@firebase/firestore';
import { useEffect } from 'react';
import {
  DeleteOutlined,
  FolderAddOutlined,
  PlusOutlined,
} from '@ant-design/icons';

function ProductsBoard() {
  const [products, setProducts] = useState([]);

  const ProductCollectionRef = collection(db, 'products');

  const obj = {
    company: 'Lenovo ',
    name: 'Thinkpad',
    price: '26450',
    // model: 'A6600',
  };
  // Creating Data onto FireBase
  const CreateUserHandler = async (product) => {
    await addDoc(ProductCollectionRef, product);
  };

  // Delete the Data from the Firebase
  const DeleteProductHandler = async (product) => {
    const document = doc(db, 'products', product.id);
    console.log(document);
    await deleteDoc(document);
    window.location.reload();
    // await addDoc(ProductCollectionRef, product)
    console.log(product);
  };

  useEffect(() => {
    const GetProducts = async () => {
      const { docs } = await getDocs(ProductCollectionRef);
      const products = docs.map((elem) => ({ ...elem.data(), id: elem.id }));
      console.log('products: ', products);
      setProducts(products);
    };
    GetProducts();
  }, []);
  return (
    <>
      <button
        style={{
          backgroundColor: '#0D99FF',
          color: 'black',
          padding: '15px',
          fontSize: '15px',
          border: 'none',
          marginBottom: '18px',
        }}
        onClick={() => {
          CreateUserHandler(obj);
        }}
      >
        <PlusOutlined /> Add User
      </button>

      <div style={{ width: '80%', background: '#E3E5E6' }}>
        <ol>
          {products.map((product, key) => {
            return (
              <>
                <li
                  key={key}
                  style={{
                    border: '1px solid white',
                    width: '100%',
                    fontSize: '20px',
                    padding: '5px',
                  }}
                >
                  <h5>
                    {product.company} - {product.name} - {product.price}
                  </h5>{' '}
                  <br />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'right',
                      alignContent: 'center',
                      margin: '10px',
                    }}
                  >
                    <button
                      style={{ padding: '10px' }}
                      onClick={() => {
                        DeleteProductHandler(product);
                      }}
                    >
                      <DeleteOutlined
                        style={{ color: 'red', fontSize: '25px' }}
                      />
                      Delete
                    </button>
                  </div>
                </li>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default ProductsBoard;

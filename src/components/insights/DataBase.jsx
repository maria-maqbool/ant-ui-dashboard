import React, { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { Button, Modal } from 'antd';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

const DataBase = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [company, setCompany] = useState('MS');
  const [price, setPrice] = useState('');
  const [selectedProduct, setSelectedProduct] = useState({
    productName: '',
    company: '',
    price: '',
    id: '',
  });

  const UsersCollectionRef = collection(db, 'Items');
  console.log(UsersCollectionRef);

  // const AddData = {
  //   product: 'LED',
  //   company: 'Dell',
  //   price: '657876',
  // };

  const CreateUser = async (product) => {
    console.log(product);
    await addDoc(UsersCollectionRef, product);
    window.location.reload();
  };

  useEffect(() => {
    const getUsersData = async () => {
      const { docs } = await getDocs(UsersCollectionRef);
      setProducts(docs.map((elem) => ({ ...elem.data(), id: elem.id })));
      console.log(setProducts);
    };
    getUsersData();
  }, []);

  const deleteProduct = async (id, product) => {
    console.log('id: ', id);
    const userDoc = doc(db, 'Items', id);
    console.log(userDoc);
    console.log(id);
    // console.log('Got the Document ID');
    await deleteDoc(userDoc);
    // console.log('Deleted the Document');
    window.location.reload();
  };

  const EditProduct = async (product) => {
    console.log('product: ', product);
    setSelectedProduct({ ...product });
    setCompany(value.company);
    setProductName(value.productName);
    console.log('selectedProduct: ', selectedProduct);
    // const userDoc = doc(db, 'Items', id);
    // const NewPrice = { price: setPrice(price) };
    // const NewPrice = { price: Number(price) + 1 };

    console.log('Updated the Data on System');
    await updateDoc(userDoc, NewPrice);
    console.log('Updated the Data on the Server');
    window.location.reload();
  };

  const NameChangeHandle = (event) => {
    console.log(event.target.value);
    setProductName(event.target.value);
  };

  const CompanyChangeHanlde = (event) => {
    console.log(event.target.value);
    setCompany(event.target.value);
  };

  const PriceChangeHandle = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
  };

  const onSubmit = (product, company, price) => {
    const payload = {
      product,
      company,
      price,
    };
    console.log(payload);
    CreateUser(payload);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Edit Modal

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const showModalEdit = (value) => {
    console.log('value: ', value);
    setSelectedProduct({ ...value });

    setIsEditModalOpen(true);
  };
  const handleOkEdit = () => {
    setIsEditModalOpen(false);
  };
  const handleCancelEdit = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Add Data
      </Button>
      <h3 className='text-xl'>Products:</h3>
      {JSON.stringify(selectedProduct)}
      <ul>
        {products.map((val, key) => {
          return (
            <>
              <li key={`products-${key}`}>
                {val.product} - {val.company} - {val.price} -{' '}
                <button
                  onClick={() => {
                    deleteProduct(val.id);
                  }}
                >
                  Delete
                </button>
                {/* <button
                  onClick={() => {
                    EditProduct(val);
                  }}
                >
                  Edit */}
                <Button
                  type='primary'
                  onClick={() => {
                    showModalEdit(val);
                  }}
                  style={{ margin: '20px' }}
                >
                  Edit
                </Button>
                <Modal
                  title='Basic Modal'
                  open={isEditModalOpen}
                  onOk={handleOkEdit}
                  onCancel={handleCancelEdit}
                >
                  MSK-{JSON.stringify(selectedProduct)}
                  <input
                    type='text'
                    placeholder='Edit Product'
                    value={selectedProduct.productName}
                  />
                  <input
                    type='text'
                    placeholder='Edit Company'
                    onChange={(event) => {
                      setCompany(event.target.value);
                    }}
                    value={company}
                  />
                  <input
                    type='text'
                    placeholder='Edit Price'
                    onChange={(event) => {
                      setPrice(event.target.value);
                    }}
                    value={price}
                  />
                  <br />
                  <button
                    onClick={() => {
                      EditProduct(val.id, val.price);
                    }}
                  >
                    submit
                  </button>
                </Modal>
                {/* </button> */}
              </li>
            </>
          );
        })}
      </ul>

      <div className='text-white mt-20 mx-6'>
        <Modal
          title='Basic Modal'
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <input type='text' placeholder='Enter Product' value={productName} />
          <input
            type='text'
            placeholder='Enter Company'
            onChange={CompanyChangeHanlde}
            value={company}
          />
          <input
            type='text'
            placeholder='Enter Price'
            onChange={PriceChangeHandle}
            value={price}
          />
          <br />
          <button
            onClick={() => {
              onSubmit(productName, company, price);
            }}
          >
            submit
          </button>
        </Modal>
      </div>
    </>
  );
};

export default DataBase;

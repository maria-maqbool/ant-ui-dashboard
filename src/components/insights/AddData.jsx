import React, { useState } from 'react';
import { Input } from 'antd';
import { Col, Row } from 'antd';
import { db } from '../../firebase-config';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';

const AddData = () => {
  const [RoomsData, setRoomsData] = useState([]);
  const empCollectionRef = collection(db, 'roomsData');
  //   const [options, setOptions] = useState([]);

  const handleRoomChange = (event) => {
    setRooms(event.target.value);
  };

  const handleDeviceChange = (event) => {
    setDevice(event.target.value);
  };

  const createUser = async () => {
    await addDoc(empCollectionRef, {
      rooms: 'bedroom',
      device: ' 6 device',
      date: String(new Date()),
    });
    getUsers();
    CloseEvent();
    Swal.fire('Submitted!', 'Your file has been submitted.', 'success');
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    console.log('data: ', data);
    setRoomsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Row style={{ margin: '20px 0' }}>
        <Col span={12}>
          <Input
            placeholder='Room'
            variant='outlined'
            onChange={handleRoomChange}
            value={rooms}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Input
            placeholder='Devices'
            type='number'
            variant='outlined'
            onChange={handleDeviceChange}
            value={device}
          />
        </Col>
      </Row>
    </>
  );
};

export default AddData;

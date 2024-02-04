import React, { useState } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { MembersData, RoomsData, DevicesData } from './HomeData';
import Member from './Member';
import Room from './Room';
import AreaChart from './AreaChart';
import BarChart from './BarChart';
import Device from './Device';
import HistoryItem from './HistoryItem';

const Home = () => {
  const [size, setSize] = useState('large'); // default is 'middle'

  return (
    // <div>
    //   <ContentSection>
    //     <h1>Heading</h1>
    //   </ContentSection>
    // </div>
    <>
      <div className='main-container' style={{ display: 'flex' }}>
        <div className='left-container' style={{ width: '75%' }}>
          <div className='rooms'>
            <h3>Rooms</h3>
            <div
              className='cards'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {RoomsData.map((val) => {
                return (
                  <>
                    <Room
                      icon={val.icon}
                      room={val.room}
                      devices={val.devices}
                    />
                  </>
                );
              })}
            </div>
          </div>

          <div className='levels'>
            <h3>Levels</h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <Card
                style={{
                  width: 350,
                }}
              >
                <AreaChart />
              </Card>

              <Card
                style={{
                  width: 350,
                }}
              >
                <BarChart />
              </Card>
            </div>
          </div>

          <div className='devices-section'>
            <h3>Devices</h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {DevicesData.map((data) => {
                return (
                  <>
                    <Device
                      btn={data.btn}
                      switchIcon={data.switchIcon}
                      icon={data.icon}
                      deviceName={data.deviceName}
                    />
                  </>
                );
              })}
            </div>
          </div>
          {/* <div style={{ padding: '20px' }}>
            <DataBase />
          </div> */}
        </div>
        <div
          className='right-container'
          style={{
            borderLeft: '2px solid #F5F5F5',
            padding: '0 20px',
            width: '25%',
          }}
        >
          <div style={{ margin: '20px 10px' }}>
            <h3>Members</h3>
            <Card
              hoverable
              style={{
                width: 220,
              }}
            >
              {MembersData.map((val) => {
                return (
                  <>
                    <Member userName={val.memberName} userAccess={val.access} />
                  </>
                );
              })}

              <Button
                type='primary'
                shape='round'
                size={size}
                style={{ padding: '5px 40px' }}
              >
                Add Member
              </Button>
            </Card>
          </div>
          <div style={{ margin: '20px 10px' }}>
            <h3>History</h3>
            <div>
              <HistoryItem />
              <HistoryItem />
              <HistoryItem />
              <HistoryItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

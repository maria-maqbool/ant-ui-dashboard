import { FaKitchenSet } from 'react-icons/fa6';
import { GiSofa } from 'react-icons/gi';
import { IoBedOutline } from 'react-icons/io5';
import { GiBathtub } from 'react-icons/gi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';
import { MdCoffeeMaker } from 'react-icons/md';
import { FaTv } from 'react-icons/fa';
import { FaCrosshairs } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa6';
import { MdToggleOn } from 'react-icons/md';

const MembersData = [
  {
    key: '1',
    // profile: '',
    memberName: 'Jaquline',
    access: 'Full Access',
  },
  {
    key: '2',
    // profile: '',
    memberName: 'Sennorita',
    access: 'Limited Access',
  },
  {
    key: '3',
    // profile: '',
    memberName: 'Firoz',
    access: 'Full Access',
  },
];

const RoomsData = [
  {
    key: '1',
    icon: <FaKitchenSet />,
    room: 'Kitchen',
    devices: '8 devices',
  },
  {
    key: '2',
    icon: <GiSofa />,
    room: 'Living Room',
    devices: '12 devices',
  },
  {
    key: '3',
    icon: <IoBedOutline />,
    room: 'Bedroom',
    devices: '4 devices',
  },
  {
    key: '4',
    icon: <GiBathtub />,
    room: 'Bathroom',
    devices: '3 devices',
  },
];

const DevicesData = [
  {
    id: '1',
    btn: 'Off',
    switchIcon: <FaToggleOff />,
    icon: <FaCrosshairs />,
    deviceName: 'Air Conditioner',
  },
  {
    id: '2',
    btn: 'On',
    switchIcon: <MdToggleOn />,
    icon: <FaTv />,
    deviceName: 'Smart TV',
  },
  {
    id: '3',
    btn: 'Off',
    switchIcon: <FaToggleOff />,
    icon: <MdCoffeeMaker />,
    deviceName: 'Coffee Machine',
  },
  {
    id: '4',
    btn: 'On',
    switchIcon: <MdToggleOn />,
    icon: <CgSmartHomeRefrigerator />,
    deviceName: 'Refrigerator',
  },
];

export { MembersData, RoomsData, DevicesData };

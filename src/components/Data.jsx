import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import { BiBarChartSquare } from 'react-icons/bi';
import { BiDetail } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

const MenuItems = [
  {
    key: '1',
    icon: <IoHomeOutline />,
    label: <Link to={'/'}>Home</Link>,
  },
  {
    key: '2',
    icon: <BiBarChartSquare />,
    label: <Link to={'/insights'}>Insights</Link>,
  },
  {
    key: '3',
    icon: <BiDetail />,
    label: <Link to={'/recommends'}>Recommends</Link>,
  },
  {
    key: '4',
    icon: <HiOutlineMail />,
    label: <Link to={'/messages'}>Messages (2)</Link>,
  },
];

export { MenuItems };

import axios from 'axios';
import { useState } from 'react';

useState

export const apiCall = async ()=>{
  const {data} = await axios.get('http://localhost:8080');
  return data;
}
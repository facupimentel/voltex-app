import React from 'react'
import NavBar from './NavBar';
import {useState} from 'react'
import { useUser } from '../../context/UserContext';
import { cargarProductos } from '../BaseDatos/AgregarProductos';
import { borrarProductos } from '../BaseDatos/BorrarProductos';

const Header = ({totalProductos}) => {
  const {user} = useUser()

  return (
    <>
      <NavBar totalProductos={totalProductos} />

      
    </>
  );
}

export default Header

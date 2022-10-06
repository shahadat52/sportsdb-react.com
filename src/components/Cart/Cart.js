import React from 'react';
import CartInfo from '../CartInfo/CartInfo';
import './Cart.css'

const Cart = ({playerinfo,handleDelete}) => {
   
    
    return (
        <div className='cart text-white '>
            <p className='text-center text-xl font-bold'>Selected Players</p>
           <CartInfo 
           playerinfo ={playerinfo}
           key = {playerinfo.idPlayer}
           handleDelete ={handleDelete}
           ></CartInfo>
        </div>
    );
};

export default Cart;
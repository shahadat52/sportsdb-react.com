import React from 'react';
import './CartInfo.css'

const CartInfo = ({playerinfo,handleDelete}) => {

    return (
        <div>
            {
              playerinfo.map(player => 
              <li className='flex justify-center  '><div className=''>Name: <small>{player.strPlayer}</small></div> <div className=''><button 
              onClick={()=> handleDelete(player.idPlayer)}
              className='bg-orange-300 mt-2 ml-20 px-6 rounded-lg text-left right-0'>Delete</button> </div> </li>)  
            }
        </div>
    );
};

export default CartInfo;
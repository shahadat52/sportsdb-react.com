import React, { useEffect } from 'react';
import logo from '../../logo.png'
import './Player.css'
import Swal from 'sweetalert2'
const Player = (props) => {
    const {player,pl}= props
    const {players,setplayers,cart,setcart} = pl
    const {strNationality,strTeam,strPlayer,idPlayer,strThumb } = player;

    useEffect(()=>{
            const storedCart = JSON.parse(localStorage.getItem('book-mark'));
            if(storedCart){
                setcart((storedCart));
            }
           

    },[])
   
    const handleAddToCart = (id) => {
        const info = {
            strNationality,
            strTeam,
            strPlayer,
            idPlayer,
            quantity: 1,
            strThumb
        }
        const oldDb = JSON.parse(localStorage.getItem('book-mark'))
        if(oldDb){
            const isExist = oldDb.find(pl => pl.idPlayer === idPlayer)
            if(isExist){
                isExist.quantity = isExist.quantity + 1
            localStorage.setItem('book-mark', JSON.stringify(oldDb))
            }
            else{
            localStorage.setItem('book-mark', JSON.stringify([...oldDb, info]))

            }
        }
        else{
            localStorage.setItem('book-mark', JSON.stringify([info]))
        }
        if(cart){
            const isExist = cart.find(p => p.idPlayer === id)
            
            if(isExist){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Already added</a>'
                  })
                return;
            }
            if(cart.length >= 5){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Enough Added</a>'
                  })
                return;

            }
            const newCart = [...cart,info]
            

            setcart(newCart)

        }
        else{

            setcart(info)
        }
    }

    return (
        <div className='player relative' data-aos="zoom-out-up">
            <img src={strThumb ? strThumb : logo} alt={logo} />
            <div className='pl-4 text-white'>
                <p className='text-2xl font-bold'>Name: {strPlayer}</p>
                <p><small className='font-bold'>ID: {idPlayer}</small></p>
                <small>Team: {strTeam}</small> <br />
                <small>Country:{strNationality}</small>
            </div>
            <button 
            
            onClick={() => handleAddToCart(idPlayer)}
        
            className="absolute bottom-0 w-full left-0 right-0 px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Add to cart</span></button>

            
        </div>
    );
};

export default Player;
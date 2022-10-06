
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Main.css'
import Swal from 'sweetalert2'

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [search,setSearch] = useState("");
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
        .then(res => res.json())
        .then(data => setPlayers(data.player))
        
    },[search])

    const handleDelete =(id)=>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          const leftCart = cart.filter(pd => pd.idPlayer !== id);
        setCart(leftCart)

        const storedCart = localStorage.getItem('book-mark');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        console.log(shoppingCart)
        if(shoppingCart){
           const newBookMart =  shoppingCart.filter(cart => cart.idPlayer !== id)
            localStorage.setItem('book-mark', JSON.stringify(newBookMart));
        }
    }
    }
    return (
        <div className='main-container'>
            <div className='mx-auto'>  <input    onChange={(e)=>setSearch(e.target.value) } className='px-8 ml-5 text-center text-white search-field  h-10 w-1/2 rounded-lg' type="text" placeholder='Enter player name' /> 
            {/* <button className="relative px-5 py-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Search</span></button> */}
            
            <Players
            players = {players}
            setplayers = {setPlayers}
            cart = {cart}
            setcart = {setCart}
            ></Players>
           
            </div>
            <div className='cart-container absolute'>
                
                 <Cart
                 playerinfo= {cart}
                 handleDelete = {handleDelete}
                 
                 ></Cart>
            </div>
        </div>
    );
};

export default Main;
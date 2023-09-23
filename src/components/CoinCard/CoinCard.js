import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    const { id, name, image, symbol } = coin;
    return (
        <div className='shadow-lg rounded-2xl w-{250px} bg-white p-4'>
            <Link to={`/coin-details/${id}`}>
                <div className='flex justify-between items-center'>
                    <div className='flex-shrink-0'>
                        <img className='mx-auto object-cover rounded-full h-16 w-16' src={image} alt="" />
                    </div>
                    <div className='flex flex-col '>
                        <p className='text-gray-600 font-medium'>{name}</p>
                        <p className='flex justify-end text-gray-500'>{symbol}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default CoinCard;
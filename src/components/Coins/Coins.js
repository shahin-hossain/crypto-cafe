import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setCoins(data))

    }, [])

    return (
        <>
            <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                <h1 className='text-center text-3xl font-bold text-gray-700'>Available Crypto Currency </h1>
                <h2 className='text-gray-600 text-center text-xl mb-12 font-semibold mt-1'>Total Coins {coins.length}</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {coins.map(coin => <CoinCard
                        key={coin.id}
                        coin={coin}
                    />)}
                </div>
            </div>
        </>
    );
};

export default Coins;
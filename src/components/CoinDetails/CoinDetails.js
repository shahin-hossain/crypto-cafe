import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoinDetails = () => {
    const coins = useLoaderData();
    // console.log(coins)

    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl'>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center'>
                <div className='order-2 md:order-1'>
                    <h1 className='text-3xl'>General Info:</h1>
                    <hr></hr>
                    <h2> Coin Name: {coins.name}</h2>
                    <h2> Market Cap Rank: {coins.market_cap_rank}</h2>
                    <h2> Origin: {coins.origin ? coins.origin : 'Not Applicable '}</h2>
                    <br />
                    <h1 className='text-3xl'>Scores:</h1>
                    <hr></hr>
                    <h2> Community Score: {coins.community_score}</h2>
                    <h2> Developer Score: {coins.developer_score}</h2>
                    <h2> Coin Gecko Score: {coins.coingecko_score}</h2>
                </div>
                <div className='flex justify-center items-center order-1 md:order-2'>
                    <img src={coins.image?.large} alt="coinImg" />
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;
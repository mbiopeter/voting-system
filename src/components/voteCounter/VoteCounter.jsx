
import React from 'react';

const VoteCounter = ({ candidate }) => {
    return (
        <div className={`flex flex-row justify-between items-center rounded-sm shadow-md w-full p-5`}>
            <div className='flex flex-row gap-5 items-center'>
                <div className='h-[70px] w-[70px] overflow-hidden'>
                    <img src={candidate.img_url} alt={candidate.full_name} className='h-[70px] w-[70px]' />
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                        <span className='text-[#000000] text-[16px] capitalize font-[600]'>{candidate.position}</span>
                        <span className='text-[#000000] text-[16px] capitalize font-[600]'>({candidate.party})</span>
                    </div>
                    <span>{candidate.full_name}</span>
                </div>
            </div>
            <div>
                <span className='text-[#000000] text-[16px] capitalize font-[600]'>{candidate.vote_count}</span>
            </div>
        </div>
    );
};

export default VoteCounter;

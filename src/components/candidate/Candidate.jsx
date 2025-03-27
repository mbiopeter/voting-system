
import React from 'react';

const Candidate = ({ candidate, voted, setVoted,votting }) => {
    return (
        <div onClick={voted ? null : setVoted} className={`flex flex-row justify-between items-center rounded-sm shadow-md w-full lg:w-[45%] p-5`}>
            <div className='flex flex-row gap-5 items-center'>
                <div className='h-[70px] w-[70px] overflow-hidden'>
                    <img src={candidate.img_url} alt={candidate.full_name} className='h-[70px] w-[70px]' />
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-2'>
                        <span className='text-[#000000] text-[16px] capitalize font-[600]'>{candidate.party}</span>
                    </div>
                    <span>{candidate.full_name}</span>
                </div>
            </div>
            <div>
                <button className={`py-1 transition-colors duration-1000 flex cursor-pointer font-[600] text-white px-2 rounded-sm ${votting || voted ? 'bg-green-600' : 'bg-red-600'}`}>{ votting ? 'VOTTING' :voted ? 'VOTED': 'VOTE'}</button>
            </div>
        </div>
    );
};

export default Candidate;

import React, { useEffect, useState } from 'react';
import Candidate from '../../components/candidate/Candidate';
import MainHeading from '../../components/Headings/MainHeading';
import { candidateDetails, categories } from '../../model/votting';
import Loader from '../../components/loader/Loader';

const Home = () => {
    const [votedCandidates, setVotedCandidates] = useState({});
    const [loading, setLoading] = useState(false);

    //fetch voted user id and there posistion
    const handleFetchVottedCandidate = async () => {
        try{
            setLoading(true);

        }catch(error){
            return;
        }finally{
            setTimeout(() => {
                setLoading(false);
            },2000)
        }
    }

    const handleFetchCandindatesDetails = async () => {
        try{
            setLoading(true);

        }catch(error){
            return;
        }finally{
            setTimeout(() => {
                setLoading(false);
            },2000)
        }
    }

    useEffect(() => {
        handleFetchVottedCandidate();
        handleFetchCandindatesDetails();
    },[])
    
    const handleVote = (position, candidate) => {
        if (!votedCandidates[position]) {
            setVotedCandidates((prev) => ({ ...prev, [position]: candidate }));
            createVotingRequest(candidate);
        }
    };

    const createVotingRequest = (candidate) => {
        const votingRequestBody = {
            id: candidate.id,
            position: candidate.position,
            full_name: candidate.full_name,
            party: candidate.party,
        };
        console.log("Voting Request Body:", votingRequestBody);
        //axios request to vote in a candidate
    };

    const renderCandidates = (position) => {
        return candidateDetails
            .filter(candidate => candidate.position === position)
            .map(candidate => (
                <Candidate 
                    key={candidate.id} 
                    candidate={candidate} 
                    voted={votedCandidates[position]?.id === candidate.id} 
                    setVoted={() => handleVote(position, candidate)} 
                />
            ));
    };

    return (
        loading ? <Loader />:
            <div className='w-full py-5 lg:py-10 px-10 lg:px-20 h-auto flex items-center flex-col gap-5'>
                {categories.map(position => (
                    <div key={position} className='w-full flex flex-col gap-5'>
                        <MainHeading title={position} />
                        <div className='flex flex-row gap-20 justify-center flex-wrap'>
                            {renderCandidates(position)}
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react';
import Candidate from '../../components/candidate/Candidate';
import MainHeading from '../../components/Headings/MainHeading';
import { categories } from '../../model/votting';
import Loader from '../../components/loader/Loader';
import axios from 'axios';
import { serverUrl } from '../../const/url';
import { ToastContainer, toast } from 'react-toastify';

const Home = ({ user }) => {
    if (!user) {
        return <p className="text-center text-red-500">User not found. Please log in.</p>;
    }
    const userId = user.id;
    const [votedCandidates, setVotedCandidates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [votting, setVotting] = useState(false);
    const [candidateDetails, setCandidateDetails] = useState([]);

    // Fetch voted candidate details
    const fetchVotedCandidates = async () => {
        try {
            setVotting(true);
            const response = await axios.get(`${serverUrl}/candidates/voted`, { params: { userId } });
            setVotedCandidates(response.data);
        } catch (error) {
            console.error('Error fetching voted candidates:', error);
        } finally {
            setTimeout(() => {
                setVotting(false);
            },500)    
        }
    };

    const fetchCandidatesDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${serverUrl}/candidates`);
            setCandidateDetails(response.data);
        } catch (error) {
            console.error('Error fetching candidates:', error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            },500)   
        }
    };

    useEffect(() => {
        fetchVotedCandidates();
        fetchCandidatesDetails();
    }, []);

    const handleVote = async (position, candidate) => {
        if (!votedCandidates.some(voted => voted.id === candidate.id)) {
            try {
                const votingRequestBody = {
                    candidateId: candidate.id,
                    userId: user.id
                };
                await axios.post(`${serverUrl}/candidates/vote`, votingRequestBody);
                
                await fetchVotedCandidates();
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    };

    const renderCandidates = (position) => {
        return candidateDetails
            .filter(candidate => candidate.position.toLowerCase() === position.toLowerCase())
            .map(candidate => (
                <Candidate
                    key={candidate.id}
                    candidate={candidate}
                    voted={votedCandidates.some(voted => voted.id === candidate.id)}
                    setVoted={() => handleVote(position, candidate)}
                />
            ));
    };

    return (
        loading ? <Loader /> :
            <div className='w-full py-5 lg:py-10 px-10 lg:px-20 h-auto flex items-center flex-col gap-5'>
                <ToastContainer />
                {categories.map(position => (
                    <div key={position} className='w-full flex flex-col gap-5'>
                        <MainHeading title={position} />
                        <div className='flex flex-row gap-20 justify-start flex-wrap'>
                            {renderCandidates(position)}
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Home;

import React, { useEffect, useState } from 'react'
import { categories } from '../../model/votting'
import VoteCounter from '../../components/voteCounter/VoteCounter'
import Table from '../../components/table/Table';
import Loader from '../../components/loader/Loader';
import axios from 'axios';
import { serverUrl } from '../../const/url';
import { ToastContainer, toast } from 'react-toastify';

const Admin = () => {
    const [reload, setReload] = useState(false);
    const [full_name, setFullName] = useState("");
    const [party, setParty] = useState("");
    const [position, setPosition] = useState("");
    const [img_url, setImg_url] = useState(null);

    const[loading,setLoading] = useState(false);

    const handleImageChange = (e) => {
        setImg_url(e.target.files[0]);
    };

    const handleSubmit = async () => {
        try {
            if (!full_name || !party || !position || !img_url) {
                toast.error("Please fill all fields and upload an image.");
                return;
            }

            const formData = new FormData();
            formData.append("full_name", full_name);
            formData.append("party", party);
            formData.append("position", position);
            formData.append("img_url", img_url);

            const response = await axios.post(`${serverUrl}/candidates/new`,formData );
            setReload(!reload)
            toast.success(response.data.message);
            setFullName("");
            setParty("");
            setPosition("");
            setImg_url("");
        } catch (error) {
            toast.error(error.response.data.error);
            return;
        }
    };
    const [votesCount, setVotesCount] = useState([]);
    const handleFetchVotesCount = async () => {
        try{
            const response = await axios.get(`${serverUrl}/candidates`);
            setVotesCount(response.data)

        }catch(error){
            return;
        }
    }

    const [rows,setRows ] = useState([])
    const handleFetchVottingHistory = async () => {
        try{
            setLoading(true);
            const response = await axios.get(`${serverUrl}/candidates/votes`);
            setRows(response.data)

        }catch(error){
            return
        }finally{
            setTimeout(() => {
                setLoading(false);
            },2000)
        }
    }
    
    useEffect(() => {
        handleFetchVotesCount();
        
    },[reload])
    useEffect(() => {
        handleFetchVottingHistory();
        
    },[])



    const columns = ["Voter Name", "Candidate Voted For", "Party", "Position"];


    return (
        loading ? <Loader />:
            <div className='flex flex-col gap-10 w-full py-5 lg:py-10 px-10 lg:px-20'>
                <ToastContainer />
                <div className='w-full flex flex-col gap-10 lg:flex-row justify-between'>
                    <div className='w-full lg:w-[47%] shadow-lg flex flex-col gap-5 p-5'>
                        <span className='uppercase text-16 font-[700] text-[#000000]'>ADD CANDIDATE</span>
                        <input 
                            type="text" 
                            className='outline-none w-full p-2 border-[#ccc] border-[1px] text-[13px] rounded-sm' 
                            placeholder='Candidate Name' 
                            value={full_name} 
                            onChange={(e) => setFullName(e.target.value)}/>
                        <input 
                            type="text" 
                            className='outline-none w-full p-2 border-[#ccc] border-[1px] text-[13px] rounded-sm' 
                            placeholder='Candidate Party' 
                            value={party} 
                            onChange={(e) => setParty(e.target.value)}/>
                        <select 
                            className='outline-none w-full p-2 border-[#ccc] border-[1px] text-[13px] rounded-sm' 
                            value={position} 
                            onChange={(e) => setPosition(e.target.value)}>
                            <option value="">Select</option>
                            {categories.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                        <input 
                            type="file" 
                            className='outline-none w-full p-2 border-[#ccc] border-[1px] text-[13px] rounded-sm' 
                            onChange={handleImageChange}/>
                        <button 
                            className='bg-red-500 text-white w-full p-2 text-[13px] rounded-sm font-[700] cursor-pointer'
                            onClick={handleSubmit}>
                            ADD CANDIDATE
                        </button>
                    </div>

                    <div className='w-full lg:w-[47%] max-h-[50vh] shadow-lg flex flex-col gap-5 p-5 overflow-auto'>
                        <span className='uppercase text-16 font-[700] text-[#000000]'>LIVE VOTES COUNTER</span>
                        {votesCount.length > 0 && votesCount.map((item) => (
                            <VoteCounter 
                                candidate={item}
                            />
                        ))}
                    </div>
                </div>
                {rows.length > 0 &&<div className='w-full shadow-lg flex flex-col gap-5 p-5'>
                    <span className='uppercase text-16 font-[700] text-[#000000]'>VOTING HISTORY</span>
                    <Table columns={columns} rows={rows} />
                </div>}
            </div>
        
    )
}

export default Admin

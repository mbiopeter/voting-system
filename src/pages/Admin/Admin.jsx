import React, { useEffect, useState } from 'react'
import { categories, votesCount } from '../../model/votting'
import VoteCounter from '../../components/voteCounter/VoteCounter'
import Table from '../../components/table/Table';
import Loader from '../../components/loader/Loader';

const Admin = () => {
    const [name, setName] = useState("");
    const [party, setParty] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const[loading,setLoading] = useState(false);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!name || !party || !category || !image) {
            alert("Please fill all fields and upload an image.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("party", party);
        formData.append("category", category);
        formData.append("image", image);

        try {
            console.log(formData);
            //send a post api request with form data body
        } catch (error) {
            return;
        }
    };

    const handleFetchVotesCount = async () => {
        try{
            setLoading(true);
            //api endpoint to fetch vottingcount

        }catch(error){
            return;
        }finally{
            setTimeout(() => {
                setLoading(false);
            },2000)
        }
    }

    const handleFetchVottingHistory = async () => {
        try{
            setLoading(true);
            //api endpoint to fetch voting history

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
        handleFetchVottingHistory();
    },[])



    const columns = ["Voter Name", "Candidate Voted For", "Party", "Position"];

    const rows = [
        { "Voter Name": "John Doe", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Jane Smith", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Michael Johnson", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Emily Davis", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Robert Wilson", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Laura Martinez", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "David Anderson", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Sarah Thomas", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "James Garcia", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Patricia Martinez", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Daniel White", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Elizabeth Harris", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Christopher Clark", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Jessica Rodriguez", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Thomas Lewis", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Nancy Hall", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Eric Allen", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Karen Young", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Steven King", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Barbara Wright", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Brian Scott", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Jennifer Adams", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Matthew Baker", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Susan Nelson", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Ryan Carter", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Ashley Mitchell", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Kevin Perez", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Megan Roberts", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Joshua Phillips", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Stephanie Evans", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Gregory Turner", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Rachel Campbell", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Anthony Parker", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Lisa Edwards", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Brandon Collins", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Heather Stewart", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Adam Morris", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Cynthia Rogers", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Jason Reed", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Angela Cook", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Dennis Murphy", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Nicole Bell", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Paul Bailey", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
        { "Voter Name": "Sandra Rivera", "Candidate Voted For": "Alice Brown", Party: "Democratic", Position: "President" },
        { "Voter Name": "Timothy Cooper", "Candidate Voted For": "Bob Green", Party: "Republican", Position: "Senator" },
        { "Voter Name": "Deborah Richardson", "Candidate Voted For": "Charlie White", Party: "Independent", Position: "Governor" },
    ];

    return (
        loading ? <Loader />:
            <div className='flex flex-col gap-10 w-full py-5 lg:py-10 px-10 lg:px-20'>
                
                <div className='w-full flex flex-col gap-10 lg:flex-row justify-between'>
                    <div className='w-full lg:w-[47%] shadow-lg flex flex-col gap-5 p-5'>
                        <span className='uppercase text-16 font-[700] text-[#000000]'>ADD CANDIDATE</span>
                        <input 
                            type="text" 
                            className='outline-none w-full p-2 border-[#ccc] border-[1px] text-[13px] rounded-sm' 
                            placeholder='Candidate Name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}/>
                        <input 
                            type="text" 
                            className='outline-none w-full p-2 border-[#ccc] border-[1px] text-[13px] rounded-sm' 
                            placeholder='Candidate Party' 
                            value={party} 
                            onChange={(e) => setParty(e.target.value)}/>
                        <select 
                            className='outline-none w-full p-2 border-[#ccc] border-[1px] text-[13px] rounded-sm' 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)}>
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
                        {votesCount.map((item) => (
                            <VoteCounter 
                                candidate={item}
                            />
                        ))}
                    </div>
                </div>
                <div className='w-full shadow-lg flex flex-col gap-5 p-5'>
                    <span className='uppercase text-16 font-[700] text-[#000000]'>VOTING HISTORY</span>
                    <Table columns={columns} rows={rows} />
                </div>
            </div>
        
    )
}

export default Admin

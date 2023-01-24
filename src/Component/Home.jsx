import React, { useState } from 'react'
import './Home.css'

const Home = () => {
    const [condition, setCondition] = useState(false);
    const [fdata, setFdata] = useState(
        {
            Name: '',
            Department: '',
            Rating: ''
        }
    )
    const [data, setData] = useState([]);

    const Changfun = (e) => {
        setFdata({ ...fdata, [e.target.name]: e.target.value });
    }

    function mytogfun() {
        setCondition(!condition)
        setFdata(
            {
                Name: '',
                Department: '',
                Rating: ''
            }
        )
    }

    const Submitfun = (e) => {
        e.preventDefault();
        const obj = {
            Name: fdata.Name,
            Department: fdata.Department,
            Rating: fdata.Rating
        }
        const newaarr = data;
        newaarr.push(obj);
        setData(newaarr)
        console.log(data);
        setCondition(!condition);
    }
    if (condition) {

        return (
            <div className='hide-div'>
                <h1 className='h1-tag'>EMPLOYEE FEEDBACK DATA</h1>
                <div className='hide-box'>
                    {

                        data.map((v, i) => {
                            console.log(data)
                            return (
                                <span key={i}> Name : {v.Name} | Department : {v.Department} | Rating : {v.Rating}</span>
                            )

                        })
                    }
                </div>
                <div>
                    <button onClick={(e) => mytogfun(e)}>Go Back</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='maindiv'>
                <h1 className='h1-tag'>EMPLOYEE FEEDBACK FORM</h1>
                <form className='form'>
                    <label htmlFor="N">Name: </label>
                    <input type="text" name="Name" value={fdata.Name} onChange={(e) => Changfun(e)} />
                    <br />
                    <br />
                    <label>Department: </label>
                    <input type="text" name="Department" value={fdata.Department} onChange={(e) => Changfun(e)} />
                    <br />
                    <br />
                    <label>Rating: </label>
                    <input type="number" name="Rating" value={fdata.Rating} onChange={(e) => Changfun(e)} />
                    <br />
                    <br />
                    <button type='button' onClick={(e) => Submitfun(e)}>Submit</button>
                </form>

            </div>
        )
    }

}

export default Home;

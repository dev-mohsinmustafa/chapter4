// additional

import React from 'react';
import { useSelector, useDispatch } from "react-redux";


import { increment, incrementByAmount } from '../../redux/reducers/reward';
import { useState } from 'react';



const Reward = () => {
    const points = useSelector(state => state.reward.points);


    const dispatch = useDispatch();


    const [userInput, setUserInput] = useState("0")


    return (
        <>
            <div className="container">
                <h4>
                    <b style={{ color: "red" }}>Additional Reward Component</b>
                </h4>

                <h3 style={{ backgroundColor: 'yellow' }}>Total Point : {points}</h3>



                <button onClick={() => dispatch(increment())}>Increment +</button>


                <button onClick={() => dispatch(incrementByAmount(7))}>IncrementBySeven +7</button>


                <input type="text" name="" id="" onChange={(event) => setUserInput(event.target.value)} />
                <button onClick={() => dispatch(incrementByAmount(Number(userInput)))}>IncrementByAmount By User {userInput.points}</button>


            </div>
        </>
    )
}

export default Reward;







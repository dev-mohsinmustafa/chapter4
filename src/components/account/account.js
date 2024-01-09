import React from 'react';
import { useState } from 'react';
import {useSelector,useDispatch} from "react-redux";


import { increment,decrement, incrementByAmount, getUserAccount } from '../../redux/slices/accountSlice';

const Account = () => {


    const amount = useSelector(state => state.account.amount);
    const points = useSelector(state => state.bonus.points);
  
  
    const dispatch = useDispatch();

    const [value, setValue] = useState(0);


    return (
        <div>
            <div className="container">
                <h4>
                    <b style={{ color: "red" }}>Account Component</b>
                </h4>

                <h3 style={{ backgroundColor: 'yellow' }}>Amount : ${amount}</h3>
                <h3 style={{ backgroundColor: 'yellow' }}>Total Point : {points}</h3>



                <button onClick={()=>dispatch(increment())}>Increment +</button>
                <button onClick={()=>dispatch(decrement())}>Decrement -</button>
                <input type="text" onChange={(e) => setValue(+e.target.value)}></input>
                <button onClick={() => dispatch(incrementByAmount(value))}>
                    Increment By {value.amount} + 
                </button>



                <button onClick={() => dispatch(getUserAccount(1))}>Get User</button>

            </div>
        </div>
    )
}

export default Account;







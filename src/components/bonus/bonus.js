import React from 'react';
import {useSelector,useDispatch} from "react-redux";


import { increment } from '../../redux/slices/bonusSlice';


const Bonus = () => {
    const points = useSelector(state => state.bonus.points);
    const amount = useSelector(state => state.account.amount);
  
  
    const dispatch = useDispatch();


    return (
        <div>
            <div className="container">
                <h4>
                    <b style={{ color: "red" }}>Bonus Component</b>
                </h4>

                <h3 style={{ backgroundColor: 'yellow' }}>Amount : ${amount}</h3>
                <h3 style={{ backgroundColor: 'yellow' }}>Total Point : {points}</h3>



                <button onClick={() => dispatch(increment())}>Increment +</button>
            </div>
        </div>
    )
}

export default Bonus;







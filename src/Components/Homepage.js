import React, {useReducer, useState} from 'react';

export default function Homepage() {
    const [number, setNumber] = useState(1);
    function countReducer(oldCount, action) {
        if(action.type === 'UP') {
            return oldCount + action.number;
        } else if(action.type === 'DOWN') {
            return oldCount - action.number;
        } else if(action.type === 'RESET') {
            return 0;
        }
    }
    const [count, countDispatch] = useReducer(countReducer, 0); //set을 안쓰고 보통 Dispatch를 씀
    function down() {
        countDispatch({type: 'DOWN', number:number});
    }
    function up() {
        countDispatch({type: 'UP', number:number});
    }
    function reset() {
        countDispatch({type: 'RESET', number:number});
    }
    function numberChange(e) {
        setNumber(Number(e.target.value));
    }
    return (
        <div>
            <input type="button" value="-" onClick={down}/>
            <input type="button" value="0" onClick={reset}/>
            <input type="button" value="+" onClick={up}/>
            <input type="text" value={number} onClick={numberChange}/>
            <span>{count}</span>
        </div>
    )
}
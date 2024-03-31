import React, { useRef } from 'react';
import { setTrainer } from '../store/state/trainer.Slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function FromTrainer() {
    const trainerInput = useRef();
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(setTrainer(trainerInput.current.value.trim()));
        navigator('/pokedex');
    };

    return (
        <div>
            <form className="from-trainer-form" onSubmit={handleSubmit}>
                <input type="text" ref={trainerInput} className="from-trainer-input" />
                <button type="submit" className="from-trainer-button">Begin</button>
            </form>
        </div>
    );
}
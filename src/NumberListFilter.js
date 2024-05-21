import React, { useState } from 'react';

const NumberListFilter = () => {
    const [inputValue, setInputValue] = useState('');
    const [numbers, setNumbers] = useState([1, 13, 6, 52, 4, 14]);
    const [filterType, setFilterType] = useState('All');

    const handleAddNumber = () => {
        if (inputValue !== '') {
            setNumbers([...numbers, parseInt(inputValue)]);
            setInputValue('');
        }
    };

    const handleFilterChange = (e) => {
        setFilterType(e.target.value);
    };

    const filteredNumbers = numbers.filter((number) => {
        if (filterType === 'Even') {
            return number % 2 === 0;
        }
        if (filterType === 'Odd') {
            return number % 2 !== 0;
        }
        return true;
    });

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Введите число"
            />
            <button onClick={handleAddNumber}>+</button>

            <select value={filterType} onChange={handleFilterChange}>
                <option value="All">Все</option>
                <option value="Even">Четные</option>
                <option value="Odd">Нечетные</option>
            </select>

            <ul>
                {filteredNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default NumberListFilter;
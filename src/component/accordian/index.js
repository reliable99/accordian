import data from './data'
import React, { useState } from 'react'
import './style.css'

const Index = () => {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    function handleSingleSelection(getCurrentId){
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function HandleMultipleSelection(getCurrentId) {
        let copyMltiple = [...multiple]
        const findIndexOfCurrentId = copyMltiple.indexOf(getCurrentId)

        if(findIndexOfCurrentId === -1) copyMltiple.push(getCurrentId)
        else copyMltiple.splice(findIndexOfCurrentId, 1)
    setMultiple(copyMltiple)
    }
    console.log(selected, multiple)
  return (
    <div className='wrapper'>
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enamble Multi Selection</button>
        <div className='accordian'>
            {
                data && data.length > 0 ? 
                data.map(dataItem=> 
                <div className='item'>
                    <div onClick= { enableMultiSelection? () => HandleMultipleSelection(dataItem.id) :()=> handleSingleSelection(dataItem.id)} className='tittle'>
                        <h3>{dataItem.Question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className='content'>{dataItem.Answer}</div> : selected === dataItem.id && <div className='content'>{dataItem.Answer}</div>
                    }
                </div>)
                :<div>No data found</div>
            }
        </div>
        
    </div>
  )
}

export default Index
import React, { useState } from 'react'
import TagInput from '../../components/TagInput'

const AddEditNotes = () => {
    const [title,setTitle]=useState("")
  return (
    <div>
        <div className="flex flex-col gap-2">
            <label className="input-label">Title</label>
            <input 
                type='text'
                className='text-2xl text-slate-950 outline-none'
                placeholder='Goals to set'
            
            />
        </div>
        <div className="flex flex-col gap-2 mt-4">
            <label  className="input-label">Details</label>
            <textarea type="text" className="text-sm text-slate-950 outline-none bg-slate-50 rounded" placeholder='Enter the details here.....' rows={10}/> 
        </div>
        <div className="mt-3">
            <label className="input-label">Tags</label>
            <TagInput/>
        </div>
        <button className="btn-primary font-medium mt-5 p-3" onClick={()=>{}}>Add</button>
    </div>
  )
}

export default AddEditNotes
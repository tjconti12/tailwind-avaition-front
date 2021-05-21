import { useState } from 'react';

const DeleteModal = ({setShowDelete, idToDelete, getEvents}) => {

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://tailwind-backend.herokuapp.com/Events/${idToDelete}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
            });
            const data = await response.json();
        } catch (error) {
            console.error(error)
        } finally {
            setShowDelete(false)
            getEvents()
        }
    }

    return (
        <div className="absolute w-6/12 h-2/5 shadow-xl border-2 border-black inset-2/4 transform -translate-x-1/2 -translate-y-1/2 bg-white z-1000 flex flex-col justify-start items-center">
            
            <h2 className="text-6xl text-center my-10" >Delete Event?</h2>
            <button className="text-2xl bg-gray-500 text-white px-2 py-1 rounded-2xl mb-6" onClick={() => setShowDelete(false)}>Close</button>
            <button className="text-2xl bg-red-500 text-white px-2 py-1 rounded-2xl" onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default DeleteModal
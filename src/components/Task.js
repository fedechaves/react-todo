import { FaTimes, FaTrash } from 'react-icons/fa'

const task = ({ task }) => {
  return (
    <div className='task'>
      <h3>{task.text} <FaTrash style={{ cursor: 'pointer' }} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default task

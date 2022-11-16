import { FaTimes, FaTrash } from 'react-icons/fa'

const task = ({ task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} 
    onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTrash style={{ cursor: 'pointer' }} 
          onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default task

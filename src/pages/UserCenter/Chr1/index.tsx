import { FC, useEffect, useId } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Chr1: FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            Chr1
            <br />
            <Link to='add' state={{ type: 'add' }}>add</Link>
            <br />
            <Link to='edit' state={{ type: 'edit' }}>edit</Link>
            <br />
            <button onClick={() => navigate('add', { state: { type: 'add' } })}>新增</button>
        </div>
    )
}

export default Chr1
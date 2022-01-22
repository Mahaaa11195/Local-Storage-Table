import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View=({details,deleteDetail})=>{
    return details.map((detail)=>(
        <tr key={detail.userName}>
            <td>{detail.userName}</td>
            <td>{detail.passWord}</td>
            <td>{detail.email}</td>
            <td>{detail.age}</td>
            <td className='delete-btn' onClick={()=>{deleteDetail(detail.userName)}}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}

export default View;

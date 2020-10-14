import React from 'react'
import './logos-group.scss'
import { ReactComponent as Tesla } from '../../assets/tesla.svg'
import { ReactComponent as Microsoft } from '../../assets/microsoft.svg'
import { ReactComponent as HP } from '../../assets/hewlett-packard.svg'
import { ReactComponent as Oracle } from '../../assets/oracle.svg'
import { ReactComponent as Google } from '../../assets/google.svg'
import { ReactComponent as Nvidia } from '../../assets/nvidia.svg'

const LogosGroup = () => {
  return (
    <div className='logos-group'>
      <h4>Join the thousands of innovators already building with us</h4>
      <div className="logos">
        <Tesla />
        <Microsoft />
        <HP />
        <Oracle />
        <Google />
        <Nvidia />
      </div>
    </div>
  )
}
export default LogosGroup
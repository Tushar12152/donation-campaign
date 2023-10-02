import PropTypes from 'prop-types'
import UseAuthCon from '../Hooks/UseAuthCon';
import { Link, useNavigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loader}=UseAuthCon()
    console.log(7,user)
  const navigate=useNavigate()
   if(loader){
    return <h1>loading</h1>
   }

   if(user){
    navigate("/login")
    return  children
   }

  return <div>
     <h1 className='text-center font-bold text-4xl mt-20'>please login First</h1>
     <p className='text-center font-semibold text-2xl mt-2'>for login go to <Link className='text-blue-400 ' to='/login'  >login</Link></p>

  </div>
};

Private.propTypes={
    children:PropTypes.node.isRequired
}
export default Private;
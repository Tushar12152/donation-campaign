import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Donate = ({donate}) => {
    // console.log(donate)
    const {id,image, title, category,  price, card_background_color, category_background_color, text_color}=donate
    return (
        <div className='mt-10 '>
               <div className='rounded-md flex flex-col lg:flex-row' style={{ backgroundColor: card_background_color }}>
                  <img className=' w-[220px] h-[200px]  py-1 mx-auto lg:mx-0 ' src={image} alt="" />

                        <div className='ml-4 p-5'>
                        <h1  style={{color: text_color,backgroundColor: category_background_color}} className='w-20  p-1 rounded-lg' >{category}</h1>
                        <p  className='font-semibold py-1' >{title}</p>
                        <p className='pb-4' style={{ color: text_color }}>${price}.00</p>

                        <Link to={`/donate/${id}`}>
                            <button style={{backgroundColor:text_color}} className='text-white p-2 rounded '>View Details</button>
                        </Link>
                        </div>
              </div>
        </div>
    );
};
Donate.propTypes={
    donate:PropTypes.object.isRequired
}
export default Donate;
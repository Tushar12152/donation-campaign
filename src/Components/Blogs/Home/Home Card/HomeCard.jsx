import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const HomeCard = ({donate}) => {
    // console.log(donate)
    const {id,image,title,category,card_background_color,category_background_color,text_color}=donate

    // console.log(card_background_color)
    return (
        <div >
            <Link to={`/donate/${id}`}>
            <div className='rounded-md' style={{ backgroundColor: card_background_color }}>
                  <img className='w-[312px] mx-auto py-1 h-[194px]' src={image} alt="" />
                <div className='ml-4 py-2'>
                <h1  style={{color: text_color,backgroundColor: category_background_color}} className='w-20 text-center p-1 rounded-lg' >{category}</h1>
                  <p  className='font-semibold' style={{ color: text_color }}>{title}</p>
                </div>
              </div>
            </Link>
        </div>
        
        
    );
};

HomeCard.propTypes={
    donate:PropTypes.object.isRequired,
}
export default HomeCard;
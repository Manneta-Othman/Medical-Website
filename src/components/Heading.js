import './components.css';

const Heading = ({title, subHeading}) => {
    return ( 
        <div className="heading">
            <p className='caption'>{subHeading}</p>
            <h2>{title}</h2>
        </div>
     );
}
 
export default Heading;
import '../styles/Divisor.css'

const Divisor = ({children}) => {
    return(
        <div className='divisor-container'>
            <hr className='divisor'/>
            <div className='title-wrapper'>
                <p className='divisor-title'>{children}</p>
            </div>
        </div>
    );
};

export default Divisor;
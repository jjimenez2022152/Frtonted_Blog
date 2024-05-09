import yo from '../assets/img/Yoxd.jpg';

export const Yo = ({ text }) => {
    return (
        <div className='auth-form-logo-container'>
            <img className='rounded-full' src={yo} alt="Alejandro Jimenez"  />
            <span>{text}</span>
        </div>
    );
}

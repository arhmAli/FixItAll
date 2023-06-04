import './header.css'
// import myImage from './assets/my-image.jpg';
const Header=()=>{
    return(
        <div className='box'>
            {/* <img src={myImage} alt="My Image" /> */}
        <h1>
            Welcome to 
            <br/><span className='name'>Fix It All.</span>
        </h1>
        </div>
    )
}
export default Header
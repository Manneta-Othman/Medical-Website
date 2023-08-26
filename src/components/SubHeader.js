import './components.css'


const SubHeader = ({img, subTitle, title}) => {
    return ( 
        <div className="sub-header">
            <div className="image">
                <img src={img} alt="about"/>
                <span className="circle1"></span>
                <span className="circle2"></span>
            </div>
            <div className="content">
                <p className="body1">{subTitle}</p>
                <h1>{title}</h1>
            </div>
            <div className="line">
                <div className="left"></div>
                <div className="center"></div>
                <div className="right"></div>
            </div>
        </div>
     );
}
 
export default SubHeader;
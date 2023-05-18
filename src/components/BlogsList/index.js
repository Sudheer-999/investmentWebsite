import {Link} from 'react-router-dom'
import './index.css'
import DashboardContext from '../../context/DashboardContext'

const Home = () => (
  <DashboardContext.Consumer>
    {value => {
      const {handleName} = value

      return (
        <div className="main-container">
          <div className="back-button-layer">
            <img
              src="https://res.cloudinary.com/djzsbpran/image/upload/v1684319917/Back_Arrow_m3wdhz.png"
              alt="back icon"
              className="back-icon"
            />
          </div>
          <h1 className="first-head">
            Create <span className="highlighted-text">Investor </span>{' '}
            <span className="highlighted-head-end">Profile</span>
          </h1>
          <div className="bottom-section">
            <div className="image-section">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684321966/rafiki_wlpgjn.png"
                alt="investor"
                className="investor-image"
              />
            </div>
            <form className="form-con">
              <div className="input-item">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684322187/Group_12_aasfnj.png"
                  className="icon"
                  alt="icons"
                />
                <div className="input-section">
                  <label className="label-text" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="name-input"
                    id="name"
                    onChange={handleName}
                  />
                </div>
              </div>
              <div className="input-item">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684333439/Mail_wuesdf.png"
                  className="mail-icon"
                  alt="icons"
                />
                <div className="input-section">
                  <label className="label-text" htmlFor="name">
                    Mail
                  </label>
                  <input
                    className="name-input"
                    style={{color: '#7E7E7E', fontWeight: '500'}}
                    id="name"
                  />
                </div>
              </div>
              <div className="input-item">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684334529/Push_Notifications_x2h2pv.png"
                  className="mail-icon"
                  alt="icons"
                />
                <div className="input-section">
                  <label className="label-text" htmlFor="name">
                    Phone no.
                  </label>
                  <input className="name-input" id="name" />
                </div>
              </div>
              <div className="input-item">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684334528/LinkedIn_Circled_lojqws.png"
                  className="mail-icon"
                  alt="icons"
                />
                <div className="input-section">
                  <label className="label-text" htmlFor="name">
                    Linkedin Link
                  </label>
                  <input className="name-input" id="name" />
                </div>
              </div>
              <div className="input-item">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684334529/Flag_ntcgg3.png"
                  className="mail-icon"
                  alt="icons"
                />
                <div className="input-section">
                  <label className="label-text" htmlFor="name">
                    Country
                  </label>
                  <input className="name-input" id="name" />
                </div>
              </div>
              <div className="input-item">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684334528/Country_hogyhe.png"
                  className="mail-icon"
                  alt="icons"
                />
                <div className="input-section">
                  <label className="label-text" htmlFor="name">
                    State
                  </label>
                  <input className="name-input" id="name" />
                </div>
              </div>
              <div className="two-blocks">
                <div className="input-item alpha">
                  <img
                    src="https://res.cloudinary.com/djzsbpran/image/upload/v1684334528/City_nudvmy.png"
                    className="mail-icon"
                    alt="icons"
                  />
                  <div className="input-section">
                    <label className="label-text" htmlFor="name">
                      City
                    </label>
                    <input className="name-input" id="name" />
                  </div>
                </div>
                <div className="input-item">
                  <img
                    src="https://res.cloudinary.com/djzsbpran/image/upload/v1684334528/Pin_Pad_clxiuq.png"
                    className="mail-icon"
                    alt="icons"
                  />
                  <div className="input-section">
                    <label className="label-text" htmlFor="name">
                      Pin code
                    </label>
                    <input className="name-input" id="name" />
                  </div>
                </div>
              </div>
              <div className="check-section">
                <input type="checkbox" className="check" id="conditions" />
                <label htmlFor="condtions" className="condition-label">
                  I hereby by agree to terms and conditions and whatever
                  information is asked for i have provided the right information
                </label>
              </div>
              <div className="btn-section">
                <Link to="/dashboard">
                  <button type="button" className="next-button">
                    Next
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )
    }}
  </DashboardContext.Consumer>
)

export default Home

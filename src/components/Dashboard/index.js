import './index.css'
import {Link} from 'react-router-dom'
import DashboardContext from '../../context/DashboardContext'

const Dashboard = () => (
  <DashboardContext.Consumer>
    {value => {
      const {name} = value

      return (
        <div className="dashboard-container">
          <div className="header-con">
            <div className="header-left">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/djzsbpran/image/upload/v1684319917/Back_Arrow_m3wdhz.png"
                  alt="header back"
                  className="back-icon-board dash"
                />
              </Link>
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684378950/image_2_pkez0r.png"
                alt="website logo"
                className="website-logo"
              />
            </div>
            <img
              src="https://res.cloudinary.com/djzsbpran/image/upload/v1684378999/Alarm_bqxap5.png"
              alt="bell icon"
              className="bell-icon"
            />
          </div>
          <div className="dash-bottom">
            <div className="side-bar">
              <img
                src="https://res.cloudinary.com/djzsbpran/image/upload/v1684379638/Ellipse_1_ee8mhj.png"
                alt="profile"
                className="profile-image"
              />
              <h1 className="profile-name">{name}</h1>
              <div className="dash-options">
                <h1 className="option selected">Dashboard</h1>
                <h1 className="option">Profile</h1>
                <h1 className="option">Edit Profile</h1>
                <h1 className="option">My network</h1>
                <h1 className="option">Need Help?</h1>
                <h1 className="option">Logout</h1>
              </div>
            </div>
            <div className="body-con">
              <h1 className="live-deals">Live Deals</h1>
              <h1 className="most-funded">Most Funded</h1>
            </div>
          </div>
        </div>
      )
    }}
  </DashboardContext.Consumer>
)

export default Dashboard

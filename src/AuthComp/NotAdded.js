
import { isAuth ,signOut} from '../Helper/helper'
import limg from './Images/login.jpg'
import MessageDisplay from './Helper/MessageDisplay'

const center = {
    "position": "absolute",
    "top": "40%",
    "left": "30%",
    "transform": "translate(-30%,-40%)"
}

const Logout = () => {
     signOut();
     window.location.reload();

}

const NotAdded = () => {
    return (
        <div className="container" style={center}>
            <div className="columns">
                <div className="column is-three-fifths mt-5">
                    <p className="subtitle is-4 mb-3" style={{ 'fontWeight': '500' }}>Welcome {isAuth().firstName} {isAuth().lastName},</p>
                    <MessageDisplay message="You are not associated with any outlet.Please contact your outlet manager and come back later." type="is-primary" />
                    <div className="buttons">
                        <button className="button is-primary" onClick={Logout}>Log out</button>
                    </div>
                </div>
                <div className="column is-two-thirds">
                    <img src={limg} alt="desc" />
                </div>
            </div>
        </div>
    )
}

export default NotAdded;
import React from 'react';

// const profilePic = {
//     width:"160px", 
//     height:"160px", 
//     borderRadius:"80px"
// },


const Profile = () => {

    return (
        <div>
            <div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    margin: "18px, 0px"
                }}>
                    {/* <img style={profilePic} src=""/> */}
                </div>
                <div>
                    <h4>Aaron Jefferson</h4>
                </div>
                <div> 
                    <h5>Friends Placeholder</h5>
                    <h5>Events Placeholder</h5>
                </div>
            </div>
        </div>
    )
}

export default Profile;


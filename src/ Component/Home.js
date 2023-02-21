import React from 'react'

export default function Home(props) {
    console.log(props.updateUser.currentRole);


    // console.log("yahan home me " + role);
    return (
        <div>
            <h1>Hello {props.updateUser.currentUser}</h1>
            <h1>Hello you are {props.updateUser.currentRole}</h1>


        </div>
    )
}

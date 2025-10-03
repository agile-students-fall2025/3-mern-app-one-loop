import { Link } from 'react-router-dom'
import './About.css'

/* 
The about js file represents the about page of this app
@param {*} param0 is an object containing any props passed to this component from its parent component
@returns the contents of this component in JSX form
*/

const About = props => {
    return (
        <>
            <h1>About Us!</h1>

            <div>
                <p>This is some placeholder text about myself</p>
                <p>Remove this placeholder and replace it with text that is fetched from the backend</p>
                <img src="https://www.saadsifar.com/images/profile.jpeg" alt="an image of myself fetched form the backend"></img>
            </div>

        </>
    )
}

// make this component available to be imported from any other file
export default About
import { useEffect, useState } from 'react'
import axios from 'axios'
import './About.css'

/* 
The about js file represents the about page of this app
@param {*} param0 is an object containing any props passed to this component from its parent component
@returns the contents of this component in JSX form
*/

const About = props => {
    const [text, setText] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
            .then(response => {
                // axios bundles all response data into the response.data property
                setText(response.data.paragraphs)
                setImageUrl(response.data.imageUrl)
            })
            .catch(err => {
                // convert error message into a string so we can simply dump it to the screen
                const errMsg = JSON.stringify(err, null, 2)
                setError(errMsg)
            })
            .finally(() => setLoaded(true))
    }, [])


    return (
        <>
            <h1>About Us!</h1>

            {error && <p className="About-error">{error}</p>}
            {!loaded && <p>Loading ...</p>}
            <div className="about-section">
                {/* Map over the paragraphs array and render each one */}
                {text && text.map((paragraph, index) => (
                    <p key={index} className="about-para">{paragraph}</p>
                ))}
                {imageUrl && <img src={imageUrl} className="profile-pic" alt="profile picture" />}
            </div>

        </>
    )
}

// make this component available to be imported from any other file
export default About
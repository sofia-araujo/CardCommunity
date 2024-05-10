import {Why, Text} from '../Styles/Whyus'

const Whyus = ({title, text}) => {
    return(
        <Why>
            <h2>{title}</h2>
            <Text>{text}</Text>
        </Why>
    )
}

export default Whyus
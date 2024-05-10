import { Entrar, Text, Subtitle, Title} from "../Styles/Join"

const Join = ({title, subtitle, text}) => {
    return(
        <Entrar>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Text>{text}</Text>
        </Entrar>
    )
}

export default Join
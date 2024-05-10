import Button from "./Button"
import {Inscricao, Title, Subtitle, Price, Price2, Price3} from '../Styles/Subscription.js'

const Subscription = ({title, price, subtitle}) =>{
    return(
        <Inscricao>
            <Title>{title}</Title>
            <Price><Price2>{price}</Price2><Price3>per month</Price3></Price>
            <Subtitle>{subtitle}</Subtitle>
            <Button 
            name='Sign Up'/>
        </Inscricao>
    )
}

export default Subscription
import Join from "./Join"
import Subscription from "./Subscription"
import Whyus from "./Whyus"
import {Down, Cartao} from '../Styles/Card'
const Card = () => {
    return(
        <Cartao>
            <Join 
            title='Join our community'
            subtitle='30-day, hassie-free 
            money back guarantee'
            text='Gain acess to our full library of tutoriais
            along with expert code reviews. Perfect for any
            developers who are serious about honing their skills'/>
            <Down>
                <Subscription
                title='Monthly Subscription'
                price='$29'
                subtitle='Full acess for less than $1 a day'
                />
                <Whyus 
                title='Why Us'
                text='Tutoriais by industry experts Peer & expert
                code review Coding exercises Acess to our Github repos
                Community forum Flashcard decks New videos every week'/>
            </Down>
        </Cartao>
    )
}

export default Card
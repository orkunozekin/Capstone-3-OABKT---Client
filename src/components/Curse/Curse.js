import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import { render } from 'react-dom'

class Curse extends Component {

    handleClickEvent = () => {
        // logic to send curse to void
    }

    render() {
        return (
            <>
                <Header />
                
                <h2>Curse Here</h2>
                <form>
                    <textarea className='curse-box'></textarea>
                    <button className='Void' onClick={}>Send into Void</button>
                </form>
                <Link className="navlink" to='/login'>or login here</Link>
            </>

        )
    }
}
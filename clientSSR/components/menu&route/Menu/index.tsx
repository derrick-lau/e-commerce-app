import Route from '../Route';
import Imenu from '../../../abstractions/Imenu';


const Menu: React.FC<Imenu> = ({stores}) => (
    <>
    {stores.map(({...props}) => (
        <Route key={props.id} {...props}/>
    ))}
    </>
)

export default Menu;

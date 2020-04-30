import Route from '../Route';
import Imenu from '../../abstractions/Imenu';


const Menu: React.FC<Imenu> = ({menu}) => (
    <>
    {menu.map(({...props}) => (
        <Route key={props.id} {...props}/>
    ))}
    </>
)

export default Menu;

import Route from '../Route';
import MenuContext from '../../context/MenuContext';


const Menu: React.FC = () => (
    <MenuContext.Consumer>
    {
        menu => (
                menu.map(({...props}) => (
                <Route key={props.id} {...props}/>
            ))
        )
    }
    </MenuContext.Consumer>
)

export default Menu;

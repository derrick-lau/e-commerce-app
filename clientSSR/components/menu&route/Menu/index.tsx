import Route from '../Route';
import MenuContext from '../../context/MenuContext';


const Menu: React.FC = () => (
    <MenuContext.Consumer>
    {
        menu => (
                menu.map(({id, section, pageLink, imgLink}) => (
                <Route 
                    key={id} 
                    id={id}
                    section={section} 
                    pageLink={pageLink} 
                    imgLink={imgLink}
                />
            ))
        )
    }
    </MenuContext.Consumer>
)

export default Menu;

import Header from '../Header';

const Layout:React.FC = (props) => (

  <div style={{margin: 20, padding: 20}}>
    <Header />
    {props.children}
  </div>

);

export default Layout;

import Header from '../Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
};

const Layout:React.FC = (props) => (

  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
  
);

export default Layout;

// RETRIEVED FROM https://nextjs.org/learn/basics/using-shared-components/the-layout-component
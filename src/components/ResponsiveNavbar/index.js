import React from 'react';
import HamburgerNavbar from '../HamburgerNavbar';
import WebNavbar from '../WebNavbar';


class ResponsiveNavbar extends React.Component {

    constructor() {
        super();
        this.state = { 
            width: 0, 
            height: 0,
            mobileMenuIsOpen: false,
         };

         
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        
        const { currentPage, bgColor, children } = this.props
        return (<div className={ bgColor }>
            { (this.state.width < 950) ? (<HamburgerNavbar/>) : (<WebNavbar selected={ currentPage }/>)}
            
            {/* { children } */}
        </div>
        )
    }
}

export default ResponsiveNavbar;
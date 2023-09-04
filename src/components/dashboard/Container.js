import React from 'react';
import Header from './Header'
import SideNav from './SideNav'
// import SideNav from './src/components/dashboard/Sidenav';


const Container = (props) => {

    return (
        
        <>
               <SideNav/>
               
                <div className='dashboardBodyContainer'>
                    <Header/>
                    {props.children}
                </div>
        </>
    );
}

export default Container;
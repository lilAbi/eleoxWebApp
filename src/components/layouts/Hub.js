import ShowImage from '../parts/ShowImage';
import HeaderLayout from './HeaderLayout';
import SideBarLayout from './SideBarLayout';
import MainContent from './MainContent';

import { useState, useEffect } from 'react';
import imgSource from './../../assest/eleoxLogo.png';


function Hub({token, handleLogout}){

    //keep track what page the main content screen is on
    const [pageNumber, setPageNumber] = useState(1);

    return(
        <div className="grid-container">

            {/*Logo*/}
            <div className="item-a">
                <div className="box">
                    <ShowImage classType={"gridImage"} imgSrc={imgSource}/>
                </div>
            </div>

            {/*header*/}
            <div className="item-b">
                <HeaderLayout/>
            </div>

            {/*sideBar*/}
            <div className="item-c">
                <SideBarLayout updatePageNumber={setPageNumber}/>
            </div>

            {/*main content*/}
            <div className="item-d">
                <MainContent token={token} handleLogout={handleLogout} pageNum={pageNumber}/>
            </div>

        </div>
    );

}


export default Hub;
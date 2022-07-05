import HomePage from "./HomePage";


import slideshow1 from '../assest/pic1.png'
import slideshow2 from '../assest/pic2.png'
import slideshow3 from '../assest/pic3.png'
import slideshow4 from '../assest/pic4.png'


const imagesArr = [slideshow1, slideshow2, slideshow3, slideshow4];


function MainContent({pageNum}){


    function selectPage(pageNumber){
        switch(pageNumber){

            case 1:
                return(<HomePage imageArr={imagesArr}/>)

            case 2:
                return displayListPage();

            case 3:
                return addEmployeePage();

            default:
                return(<p>CONTENT NOT FOUND</p>)
        }
    }

    return(
        <div className="MainContentLayout">
            {selectPage(pageNum)}
        </div>
    );

}

//display list of employess with ability to see comments and delete them too
function displayListPage(){
    return(
        <>
            <p> displayList Page</p>
        </>
    );
}

//display form box to add new employee
function addEmployeePage(){
    return(
        <>
            <p> addEmployeePage Page</p>
        </>
    );
}

export default MainContent;
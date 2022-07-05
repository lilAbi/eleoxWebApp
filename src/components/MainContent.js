import HomePage from "./HomePage";
import DisplayEmpLayout from "./DisplayEmpLayout";


import slideshow1 from '../assest/pic1.png'
import slideshow2 from '../assest/pic2.png'
import slideshow3 from '../assest/pic3.png'
import slideshow4 from '../assest/pic4.png'


const imagesArr = [slideshow1, slideshow2, slideshow3, slideshow4];


function MainContent({pageNum, token}){


    function selectPage(pageNumber){
        switch(pageNumber){

            case 1:
                return(<HomePage imageArr={imagesArr}/>);

            case 2:
                return (<DisplayEmpLayout token={token}/>);

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

//display form box to add new employee
function addEmployeePage(){
    return(
        <>
            <p> addEmployeePage Page</p>
        </>
    );
}

export default MainContent;
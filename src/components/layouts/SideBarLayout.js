import LabelWithAction from "../parts/LableWithAction";



function SideBarLayout({updatePageNumber, handleLogout}){
    return(
        <div className="SideBarLayout">
            <LabelWithAction    classType={"sideBarLabelText"}
                                text={"Home"}
                                handleClick={()=>updatePageNumber(1)}
                                />

            <LabelWithAction    classType={"sideBarLabelText"}
                                text={"Display Employees"}
                                handleClick={()=>updatePageNumber(2)}
                                />

            <LabelWithAction    classType={"sideBarLabelText"}
                                text={"Add Employee"}
                                handleClick={()=>updatePageNumber(3)}
                                />

            <LabelWithAction    classType={"sideBarLabelText"}
                                text={"Logout"}
                                handleClick={()=>handleLogout(false)}
                                />
        </div>
    );
}




export default SideBarLayout;
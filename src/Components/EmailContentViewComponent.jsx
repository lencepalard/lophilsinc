import react,{useState} from "react";
import icon_dots from "../Assets/icon_dots.PNG"
import user_icon from "../Assets/user-icon.png"
function EmaillContentViewComponent(){
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="EmaillContentViewComponent cursor-pointer" >

            <div className="Body-Content-Container mx-11 p-4 mt-0">
                <span className="label-style mx-5 mt-0  font-mono">Unread</span>
            </div>

            <div className="expandable-content   mx-20 mt-5 border-2 p-3 h-24 rounded-md">
                    <div className="content-header flex inline-block" onClick={(id) => setIsOpen(!isOpen)}>
                        <img src={icon_dots} className="w-5 h-5 inline-block mt-4"/> 
                          <input type="checkbox" className="ml-2 w-4 h-4 inline-block  mt-4"/>
                             <button className="calendar-btn inline-block bg-gray-100 border rounded-md w-10 p-2 text-center ml-5 text-xs w-14 mt--10"><b className="text-lg">28</b><br/>JUN</button>
                            <img src={user_icon} className="rounded-full w-10 h-10 ml-5 mt-2"/>
                            <h3 className="mt-1  ml-5"><b>FW: NEW PROJECT 3  NEW-102923/329</b><br/>
                         <span className="mt-5">Lenard Palce sbtek.khr@gmail.com June 28,2022 at 7:20 PM | June 28,2022 at 6:40 PM | $5</span>
                        </h3>
                    </div>
                    {isOpen && 
                        <div className="content-body   border-dashed border-t-2 border-gray-100  p-30">
                      
                             {/* map ako dto */}

                             <div className="right-lbl-content float-right block">
                                <span className="bg-sky-100 mr-2 ml-2 rounded-md p-1  ring-2 ring-sky-300">New Project 3/admin</span><br/>
                                <span className="bg-sky-100 mr-2 ml-2 rounded-md p-1  ring-2 ring-sky-300">New Project 3</span><br/>
                                <span className="bg-sky-100 mr-2 ml-2 rounded-md p-1  ring-2 ring-sky-300">Mountain Homes Construction/ New Mattr</span><br/>
                                <span className="bg-sky-100 mr-2 ml-2 rounded-md p-1  ring-2 ring-sky-300">Mountain Homes Construction</span>
                            </div>
                        </div>
                     }
            </div>
            
        </div>
    );
}

export default EmaillContentViewComponent;
import react from 'react'
import icon_save from "../Assets/icon-save.png"
import icon_filter from "../Assets/icon-filter.PNG"
import icon_remove from "../Assets/icon-remove.PNG"
function HeaderView(){
    return(
        <div className="Content-Container  mx-10 mt-10 ">

            <div className='Header-container mx-10 mt10 border-b-2 p-5 flex'>

                <input type="checkbox" id="check-box-1" className="w-4 h-4 "/>
                <button className="mx-5 bg-green-50 p-1 p-0.1 text-center w-20 rounded uppercase hover:shadow-lg border-1 ring-2 ring-green-400 text-green-500  text-sm">
                            Save <img src={icon_save} className="w-4 h-4 float-right mt-0.5 mr-1"/> 
                </button>

                <button className="bg-white-400 rounded border-1 ring-1 ring-gray-400 p-1 uppercase text-center text-sm hover:shadow-lg">
                            Manage Filter <img src={icon_filter} className="w-4 h-4 float-right mt-0.5 mx-2"/> 
                </button> 

                    <span className="ml-2 text-gray-600">|</span>

                <button className="mx-5 bg-red-50 p-1 p-0.1 text-center w-20 rounded uppercase hover:shadow-lg border-1 ring-2 ring-red-400 text-red-500  text-sm">
                            Delete <img src={icon_remove} className="w-4 h-4 float-right mt-0.5 mr-1"/> 
                </button>
            </div>
        </div>
    )
}
export default HeaderView;
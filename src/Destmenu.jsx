import './App.css'
function Destmenu(){
    return(
        <div className='Menu4'>
            <div className='menucontent'>
                <select className="Destination">
                    <option selected>Destination</option>
                    <option value="1">Destination1</option>
                    <option value="2">Destination2</option>
                    <option value="3">Destination3</option>
                </select>
                <div className='fromdate'></div>
                <div className='returndate'></div>
                <div className='duration'></div>
                <div><button>Submit</button></div>
            </div>
        </div>
    );

}
export default Destmenu;
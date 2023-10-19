import '../components/Menu2.css';
function Menu2(){
    return(
        <div className='Menu4'>
            <div className='menucontent'>
                <select className="destination">
                    <option selected>Destination</option>
                    <option value="1">Destination1</option>
                    <option value="2">Destination2</option>
                    <option value="3">Destination3</option>
                </select>
                <div class="fromdate">
                        <input type="date" placeholder='Depart Date' />
                </div>
                        
                
                <div class="returndate">
                        <input type="text" placeholder='Return Date' />
                </div>
                        
                <select className="duration">
                    <option selected>Duration</option>
                    <option value="1">Duration1</option>
                    <option value="2">Duration2</option>
                    <option value="3">Duration3</option>
                </select>
                <div><button className='butt2'>Submit</button></div>
            </div>
        </div>
    );

}
export default Menu2;
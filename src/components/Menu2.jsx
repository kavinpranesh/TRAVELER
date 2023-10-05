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
                        <div class="date" id="date1" data-target-input="nearest">
                            <input type="date" placeholder='Depart Date' />
                </div>
                        </div>
                
                <div class="returndate">
                        <div class="date" id="date2" data-target-input="nearest">
                            <input type="date" placeholder="Return Date" />
                </div>
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
import { TabLink } from "./tab2";






var a=[{name:"peddi",age:22,gender:"male"},{name:"puneeth",age:22,gender:"male"},{name:"teja",age:21,gender:"male"},{name:"pushvathi",age:21,gender:"female"},
{name:"thiru",age:12,gender:"gojja"}];

function TabCOM(){
    return(
        <table>
            {
                a.map((val)=>{
                    return(
                    
                <TabLink  value={val} extraprop={"hello"}></TabLink>
                    )
                   
                })
            }
        </table>
    )
}

export default TabCOM;
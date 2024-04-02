
var a=[{name:"peddi",age:22,gender:"male",salary:1000}
,{name:"puneeth",age:22,gender:"male",salary:2000},
{name:"teja",age:21,gender:"male",salary:2000},
{name:"pushvathi",age:21,gender:"female",salary:4000},
{name:"thiru",age:12,gender:"gojja",salary:5000}];

function TaskMain(){
    const filterQuery="2000"
    const filterArray=(query)=>{
    return  a.filter((value =>value.salary == query))
        }
        return(
            <>
            {
                filterArray("5000").map(value=><>
                <h4>name:{value.name}</h4>
                <h4>salary :{value.salary}</h4>
                <h4>gender :{value.gender}</h4>
                </>

                    )
            }
            </>
        )
}
export default TaskMain;
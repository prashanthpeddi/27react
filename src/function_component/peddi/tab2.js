


export function TabLink(prop){
    const {value,extraprop}=prop
    return(
        <tr>
 <td>{prop.value.name}</td>
 <td> {prop.value.age}</td> 
 <td>{prop.value.gender}</td>
 <td>{extraprop}</td>
        </tr>
       
    )
}
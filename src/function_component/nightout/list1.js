import { ListComponents } from "./listt2";




var a = ["helo", "hii", "hello1", "hii1"];
function PeddiHello() {

    return (
        <ol>
            {
                a.map((val) => {
                    return (

                       <ListComponents  value={val}></ListComponents>

                    )
                })
            }
        </ol>


    )
}

export default PeddiHello
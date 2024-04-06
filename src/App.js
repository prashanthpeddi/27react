import logo from './logo.svg';
import './App.css';
import Peddi from './function_component/imge';
import TableComponent from './class_component/table';
import { ListComponent } from './class_component/list';
import { Button } from './function_component/butt';
import ListCom from './function_component/list';
import PeddiPrashanth from './function_component/prop';
import PropLink from './function_component/prop/propLink';
import List from './function_component/main/list';
import Table from './function_component/table/table1';
import PeddiHello from './function_component/nightout/list1';
import TabCOM from './function_component/peddi/tab1';
import TaskMain from './function_component/task/main';
import ChildHello from './function_component/chidren/child';
import IlineStyle from './function_component/chidren/style/inline';
import External from './function_component/chidren/style/external';
import BasicExample from './function_component/boot/task/1';
import ButtonComponent from './class_component/new/button';
import FriutOne from './class_component/friut/1';
import NewFruit from './class_component/friut/curd';
import FecthData from './class_component/fetch/main';



function App() {
  return (
    <div>
     {/* <Peddi />
     <TableComponent />
     <ListComponent />
     <Button />
     <ListCom />
     
     <PeddiPrashanth/> */}

     {/* <PropLink />

     <List></List>
    <Table></Table> */}
    {/* <PeddiHello></PeddiHello>
    <TabCOM></TabCOM>
    <TaskMain></TaskMain>
   <ChildHello>
   hello
   </ChildHello> */}
   {/* <IlineStyle></IlineStyle>
   <External></External>
   <BasicExample></BasicExample> */}
   <ButtonComponent></ButtonComponent>
   {/* <FriutOne></FriutOne> */}

   {/* <NewFruit></NewFruit> */}
   <FecthData  favcol={"red"}></FecthData>
     
    </div>
  );
}

export default App;

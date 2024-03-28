import logo from './logo.svg';
import './App.css';
import Peddi from './function_component/imge';
import TableComponent from './class_component/table';
import { ListComponent } from './class_component/list';
import { Button } from './function_component/butt';
import ListCom from './function_component/list';
import PeddiPrashanth from './function_component/prop';

function App() {
  return (
    <div>
     <Peddi />
     <TableComponent />
     <ListComponent />
     <Button />
     <ListCom />
     <PeddiPrashanth/>
     
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
            <Button variant="primary" className="mr-2 ">Primary</Button>
            <Button variant="secondary" className="mr-2">Secondary</Button>
            <Button variant="success" className="mr-2">Success</Button>
            <Button variant="warning" className="mr-2">Warning</Button>
            <Button variant="danger" className="mr-2">Danger</Button>
            <Button variant="info" className="mr-2">Info</Button>
            <Button variant="light" className="mr-2">Light</Button>
            <Button variant="dark" className="mr-2">Dark</Button>
            <Button variant="link" className="mr-2">Link</Button>
     </div>
  );
}

export default App;

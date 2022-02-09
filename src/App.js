import { Select } from "antd";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import logo from "./logo.svg";
import "./App.css";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Select
          data-testid="people-select"
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">Yiminghe</Option>
        </Select>
      </header>
    </div>
  );
}

export default App;

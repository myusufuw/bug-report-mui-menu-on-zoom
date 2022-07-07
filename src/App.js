// COMPONENTS
import Content from './components/Content/Content'
import Layout from "./components/Layout/Layout";
import Vehicles from './components/Vehicles/Vehicles';

// STYLES
import "./styles.css";

export default function App() {
  return (
    <Layout>
        <Vehicles />
    </Layout>
  );
}

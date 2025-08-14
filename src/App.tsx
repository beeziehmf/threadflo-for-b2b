import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightSidebar from './components/RightSidebar';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
}

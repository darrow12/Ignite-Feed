import { Header } from './components/Header';
import { Post } from './Post';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <h1>hello world</h1>
      <Post author="Darrow" content="Hello React world!" />
      <Post author="Jucelino" content="Olá" />
    </>
  )
}

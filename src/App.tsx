import { useState } from 'react';
import { Selectable } from './lib/Selectable';

const ITEMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const ITEMS2 = ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

function App() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className='App'>
      <header className='Header'>
        Selectable Demo – Drag anywhere to start selecting
        <div className='Links'>
          <a href='https://github.com/worx-to/drag-tools'>GitHub</a>
        </div>
      </header>
      <main className='Content'>
        <Selectable
          onSelect={setSelected}
          isEnabled={true}
          containerClassName='Container'
          selectAreaClassName='Area'
          itemClassName='Item'>
          {ITEMS.map(i => (
            <div key={i} data-id={i} className={`Item Item1 ${selected.includes(i) && ' Selected'}`}>
              {i}
            </div>
          ))}
          {ITEMS2.map(i => (
            <div key={i} data-id={i} className={`Item ${selected.includes(i) && ' Selected'}`}>
              {i}
            </div>
          ))}
        </Selectable>
      </main>
    </div>
  );
}

export default App;

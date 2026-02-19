import { useEffect } from 'react';
import { useHabitActions, useHabitState } from './providers/habitProvider';

function App() {
  const { getHabits } = useHabitActions();
  const { habits, isPending, isError } = useHabitState();

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Habit List</h1>

      {isPending && <p>Loading...</p>}
      {isError && <p>Something went wrong ❌</p>}

      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.title} — {habit.completed ? '✅ Done' : '❌ Not Done'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

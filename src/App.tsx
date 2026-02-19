import { useEffect } from 'react';
import { useHabitActions, useHabitState } from './providers/habitProvider';
import { useAuthState, useAuthActions } from './providers/authProvider';

function App() {
  const { isAuthenticated } = useAuthState();
  const { login, logout } = useAuthActions();

  const { getHabits } = useHabitActions();
  const { habits, isPending, isError } = useHabitState();

  useEffect(() => {
    if (isAuthenticated) {
      getHabits();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div>
        <h1>Please Login</h1>
        <button onClick={() => login('email@example.com', 'password')}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={logout}>Logout</button>

      <h1>Habit List</h1>

      {isPending && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}

      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.title} — {habit.completed ? 'Done' : 'Not Done'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

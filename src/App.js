import React from 'react';

const Form = () => {
  return (
    <div className="new-user-form">
      <form>
        <div>
          <p>
            <label>Username</label>
            <input />
          </p>
          <p>
            <label>Age (years)</label>
            <input />
          </p>
          <button>Add User</button>
        </div>
      </form>
    </div>
  )
}

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;

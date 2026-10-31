import "./App.css";

const App = () => {
  
  return (
    <div>
      <header>
        <h1>Tracker</h1>
        <p>Help students to find their internship opportunities</p>
      </header>

      <main>
        <h2>Find "your" internship</h2>
        <input type="text" placeholder="Search for internships..." />
        <button>Search</button>

        <h2>Post Your Information</h2>
        <p>Click here to post your information.</p>
      </main>
    </div>
  );
};

export default App;
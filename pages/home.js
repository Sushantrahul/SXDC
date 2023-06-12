import { useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'


const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [rows, setRows] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform file upload logic here, such as sending the file to a server
    console.log(selectedFile);
  };

  const addRow = () => {
    setRows([...rows, { id: Date.now() }]);
  };

  const removeRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [name]: value } : row))
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(rows);
  };
  
  return (<>
    <main className={styles.main}>
      <p>File Upload</p>
      <div className={styles.card}>
          <form onSubmit={handleFormSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
          </form>
      </div>

      <p>Inline data upload</p>
      <div className={styles.span}>
      <form onSubmit={handleSubmit}>
        {rows.map((row) => (
          <div key={row.id}>
            <input type="text" name="name"  placeholder="Name" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="email"  placeholder="email" onChange={(event) => handleInputChange(row.id, event)}/>
            <button type="button" onClick={() => removeRow(row.id)}>
              Remove
            </button>
        </div>
        ))}
        <button type="button" onClick={addRow}>
          Add Row
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
    </main>
  </>);
}

export default HomePage;
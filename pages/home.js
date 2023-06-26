import { useState } from 'react';
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'


const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [rows, setRows] = useState([]);
  const [file, setFile] = useState();

  const handleSubmitfile = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => setFile(data.file));

  };
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
     
          <span className={styles.card}>
              <h2>File Upload</h2>
          </span>          
          <form onSubmit={handleSubmitfile}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
          </form>
          {file && (
        <Image src={file.url} alt="File content" />
      )}

     
      <span className={styles.card}>
      <h2>Inline data upload</h2>  
      </span>
      <form onSubmit={handleSubmit}>
      <div className={styles.grid}>
      <input type="text" name="Sr#"  placeholder="sr" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Salt Name"  placeholder="salt" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Brand"  placeholder="brand" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Manifacturer"  placeholder="manifacturer" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Manifacturer Date"  placeholder="mani_date" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Expiry Date"  placeholder="exp_date" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="MRP"  placeholder="mrp" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Packaging"  placeholder="pkg" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Quantity"  placeholder="qnt" onChange={(event) => handleInputChange(row.id, event)}/>
      </div>
        {rows.map((row) => (
          <div className={styles.grid} key={row.id}>
            <input type="text" name="Sr#"  placeholder="sr" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Salt Name"  placeholder="salt" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Brand"  placeholder="brand" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Manifacturer"  placeholder="manifacturer" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Manifacturer Date"  placeholder="mani_date" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Expiry Date"  placeholder="exp_date" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="MRP"  placeholder="mrp" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Packaging"  placeholder="pkg" onChange={(event) => handleInputChange(row.id, event)}/>
            <input type="text" name="Quantity"  placeholder="qnt" onChange={(event) => handleInputChange(row.id, event)}/>

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
    
    </main>
  </>);
}

export default HomePage;
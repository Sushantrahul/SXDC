import { useRouter } from "next/router";
import { useState } from 'react';
import styles from '@/styles/Home.module.css'


const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform file upload logic here, such as sending the file to a server
    console.log(selectedFile);
  };
  
  return (<>
       <div>
      <h2>File Upload</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  </>);
}

export default HomePage;
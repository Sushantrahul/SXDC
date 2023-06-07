import { useRouter } from "next/router";
import styles from '@/styles/Home.module.css'


const HomePage = () => {
  //const router = useRouter();
  //const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");
  
  return (<>
      <main className={styles.main}>
        <form>
            <div className={styles.center}>
            <p>Upload your Monthly returns</p>
              <p><input type='button' value="Upload Monthly Returns" /></p>
              <p><input type='submit' /></p>              
            </div>
            <div className={styles.center}>
              <p>Add single return : </p>
              <p><input type='button' value="Upload Monthly Returns" /></p>
            </div>
        </form>    
      </main>
  </>);
};

export default HomePage;
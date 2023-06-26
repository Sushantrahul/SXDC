import { useState } from 'react';
import { useRouter } from "next/router"
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const ValidationPage = () => {
    const router = useRouter();
    const [cat,dlnum,fname, mail,add,phone ] = useState("");
    const [cat2,dlnum2,Pname,mail2,add2,phone2 ] = useState("");
    //const { ref } = router.query;
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Do your login logic here, such as making an API call to authenticate the user
      // If login is successful, redirect to home page
      router.push("/home");
      onSubmit={handleSubmit}
    };
    
    return (<>
        <main className={styles.main}>
            <div classname={styles.description}>

            <label>Category :
                <input type="text" value={cat} />
            </label>

            <label>DL Number :
                <input type="text" value={dlnum} />
   
            </label>
            
            <label>Name :
                <input type="text" value={fname} />

            </label>
            <label>Email :
                <input type="email" value={mail} />

            </label>
            <label>Address:
                <input type="text" value={add} />

            </label>
            <label>Phone :
                <input type="tel" value={phone} />

            </label>


            </div>
           {/*  End of Login user detail ## */}
           

           {/* Start of Destination details */}

           <span className={styles.center}>
            Recipient Details (your DI office details)
           </span>

            <div classname={styles.description}>
            <form onSubmit={handleSubmit}>
            <label>Juridiction :
                <input type="text" value={cat2} />
            </label>
            
            <label>DL Number :
                <input type="text" value={dlnum2} />
   
            </label>
            
            <label>Party Name :
                <input type="text" value={Pname} />

            </label>
            <label>Email :
                <input type="email" value={mail2} />

            </label>
            <label>Address:
                <input type="text" value={add2} />

            </label>
            <label>Phone :
                <input type="tel" value={phone2} />

            </label>

            <button type="submit">Submit</button>

            </form>
            </div>

        </main>
    </>);
}    
export default ValidationPage;
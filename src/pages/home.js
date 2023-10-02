import styles from './css/Home.module.css';

export default function home()
{
    return(
        <>
            
            <div className= {styles.container}>
                <div className= {styles.pictures}>
                    <img src = "../pictures/home.jpg"/>  
                </div>
                <div className= {styles.opening}>
                    <h1>Hi, I'm William</h1>
                    <p>
                        I am a Computer Science Undergraduate focusing on Software Engineering.
                        <br/>
                        I am a full stack engineer, mostly coding in javascript in both front end and backend.
                    </p>
                </div>
            </div>
            
        </>
    )
}
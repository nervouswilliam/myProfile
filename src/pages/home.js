import styles from './css/Home.module.css';

export default function home()
{
    return(
        <>
            
            <div className= {styles.container}>
                <div className= {styles.pictures}>
                    <img src = "../pictures/landscapeHome.jpg"/>  
                </div>
                <div className= {styles.opening}>
                    <h1>Hi, I'm William</h1>
                    <p>
                        I am a Computer Science Undergraduate focusing on Software Engineering.
                        <br/>
                        I am a full stack engineer, mostly coding in javascript in both front end and backend.
                        <br/>
                        <br/>
                        <h1>Welcome To my Profile</h1>
                    </p>
                </div>
            </div>

            <div className = {styles.quotes}>
                <div className = {styles.content}>
                    <b>Everyone in this country should learn to program a computer... <br/>because it teaches you how to think</b>
                </div>
                <div className = {styles.author}>
                    <p>Steve Jobs - co founder and CEO of Apple (1955 - 2011)</p>
                </div>
            </div>
            
            
        </>
    )
}
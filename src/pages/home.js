import styles from './css/Home.module.css';
import WilliamCV from './cv/WilliamCV.pdf';
// import Linkedin from './pictures/Logo.png';

export default function home()
{
    const handleClickLinkedin = () => {
        window.location.replace('https://www.linkedin.com/in/jeremiah-william-sebastian-5ab68b117/');
    }

    const handleClickGithub = () => {
        window.location.replace('https://github.com/nervouswilliam?tab=repositories');
    }
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

            <div className= {styles.knowMe}>
                <p>To get to know me, you can download my Curriculum Vitae below:</p>
            </div>

            <a
                href = {WilliamCV}
                download = "CVWilliamPDF"
                target = "blank"
                rel = "noreferrer"
            >

                <div className={styles.resume}>
                    <button>Download CV</button>
                </div>

            </a>

            <div className={styles.socials}>
                <p>Here are my socials, feel free to contact me personally:</p>
            </div>

            <div className= {styles.media}>
                <div className= {styles.Linkedin}>
                    <button onClick={handleClickLinkedin}><img src = '../pictures/Logo.png'/></button>
                </div>
                <div className = {styles.Github}>
                    <button onClick = {handleClickGithub}> <img src = '../pictures/github.png'/> </button>
                </div>
            </div>
            
            
        </>
    )
}
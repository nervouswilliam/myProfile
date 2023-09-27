import './css/UniversityLife.css';

export default function universityLife()
{
    return(
        <>
            <div className = "life">
                <h1>my university life</h1>
            </div>
            <div className = "heading">
                <h2>First Year</h2>
            </div>
             
                <div className = "box">
                    <div className = "picture">
                        <img src = "../pictures/firstYear.jpg"/>
                    </div>
                    <div className = "content">
                        <p>
                            As we all know, in 2021, the pandemic is still on-going and as a result for the whole first year, I went to University Online.
                            <br/>
                            I definitely didn't get the whole university feeling that most people would describe them to me when I was in High School.
                            <br/>
                            There wasn't a lot of change in the environment, the class atmosphere is close to 0, and it felt alot like my final years in High School.
                            <br/>
                            But there is one thing for sure, I was fortunate enough to meet some friends that helped me throughout my first year of University, even now in my third year.
                        </p>
                    </div>
                </div>

            <div className = "heading">
                <h2>Second Year</h2>
            </div>
            <div className = "box">
                    <div className = "secondYear">
                        <img src = "../pictures/secondYear.png"/>
                    </div>
                    <div className = "content">
                        <p>
                            In my second year, there was a bit of change. With the pandemic slowing down, my university starts to allow hybrid classes
                            <br/>
                            There was a change of pace, since I was already accustomed to going class online, so it was kind of a challenge.
                            <br/>
                            The atmosphere wasn't at it's peak at the 3rd semester, since most of the class are hybrid. Some are still online though.
                            <br/>
                            However, in the 4th semester is where the atmosphere is almost at it's peak. All of the class are fully onsite, so I could finally experience the university life to the fullest.
                        </p>
                    </div>
            </div>

            <div className = "heading">
                <h2>Third Year</h2>
            </div>
            <div className = "box">
                    <div className = "secondYear">
                        <img src = "../pictures/thirdYear.jpg"/>
                    </div>
                    <div className = "content">
                        <p>
                            Currently I am in my 5th semester. So far, I could say that I am enjoying class more than ever. I have also gained the passion in creating websites like this one right now.
                            <br/>
                            In my 5th semester, I have decided to learn mobile programming to further expand my knowledge as a future Software engineer. 
                            <br/>
                            At first I didn't know which career I would like to pursue, however now after I have passed 4 semester, I can see where my passion would lead me to.
                            <br/>
                            Approaching my 6th semester, where I would like to go on an internship, I wish to further hone my skills in programming as well as developing websites and mobile applications.
                        </p>
                    </div>
            </div>

             
        </>
        
        
    );
}
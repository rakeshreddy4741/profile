import logo from './logo.svg';
import './App.css';
import photo from './image.jpg';


const skillsList = ["java", "Html", "Css", "Java Script", "React", "Node.js", "Express", "MongoDB"]

function App() {
  return <div className='container'>
    <Card />
  </div>;
}

function Card() {
  return (
    <div className="card">
      <img src={photo} className='image' alt="profile" />
      <div className="card-body">
        <h2> Rakesh Reddy Vavilala</h2>
        <p >
          Rakesh Reddy Vavilala is a Full Stack Developer with extensive experience in building high quality web applications.
        </p>
        <Skills skill={skillsList} />
      </div>

    </div>
  );
}

export default App;

function Skills(props) {
  return (
    <div className='skills'>
      {props.skill.map((skill, index) => (
        <span key={index} className="skill">{skill + " "}</span>
      ))}
    </div>
  );
}
import './App.css';
import Review from './Components/Review.jsx';
function App() {
  return (
    <div className="App">
      <header className='header'>Our Reviews</header>
      <div className="underline"></div>
      <br></br>
      <br></br>
      <Review />
      <div className="disclaimer">
        Most of the CSS of this website was inspired from the 
        following Github Repo by 
        <a href="https://github.com/john-smilga" target=" "id="author-repo">John Smilga:</a>  
        <a href="https://github.com/john-smilga/react-projects/blob/master/03-reviews/final/src/index.css" target={" "}>03-Reviews's CSS</a>
      </div>
    </div>
  );
}

export default App;

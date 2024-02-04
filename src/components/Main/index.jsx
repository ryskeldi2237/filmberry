import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import './Main.sass'
function Main() {
  return (
    <div className="container">
      <div className="main__info">
        <div className="main__status">TOP</div>
        <div className="main__title">Spider man no way home </div>
        <div className="main__desc">
          Peter Parker is unmasked and no longer able to separate his normal
          life from the high-stakes of being a super-hero. When he asks for help
          from Doctor Strange the stakes become even more dangerous, forcing him
          to discover what it truly means to be Spider-Man.
        </div>
        <div className="main__date">
          2021 |<span> 12+</span>
        </div>
        <div className="main__group">
          <FaStar />
          <span className="main__review">7.8</span>
          <div className="main__genre">
            Seans <span>1</span> - Eplscode <span>1</span> - Genre
            <span>Action, Adventure, Science Fiction</span>
          </div>
        </div>
        <Link to="/page/634649">
          <button className="watch-button">⏵ WATCH</button>
        </Link>
      </div>
    </div>
  );
}
export default Main;

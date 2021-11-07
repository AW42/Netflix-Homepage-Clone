import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

function Netflix() {
  return (
    <>
      <div class="navbar">
        <div class="navbar_logo">
          <img
            id="logo"
            src="https://www.linkpicture.com/q/netflix.png"
            alt="logo"
          />
        </div>

        <div class="options">
          <div class="navbar_items">
            <a href="#">Home</a>
          </div>
          <div class="navbar_items">
            <a href="#">TV Shows</a>
          </div>
          <div class="navbar_items">
            <a href="#">Movies</a>
          </div>
          <div class="navbar_items">
            <a href="#">New & popular</a>
          </div>
          <div class="navbar_items">
            <a href="#">My List</a>
          </div>
          <div class="navbar_items">
            <a href="#">Watch it again </a>
          </div>
        </div>

        <div className="dropDown">
          <Dropdown class="show dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
              <Dropdown.Item href="#/action-2">TV Shows</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Movies</Dropdown.Item>
              <Dropdown.Item href="#/action-3">New & popular</Dropdown.Item>
              <Dropdown.Item href="#/action-3">My List</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Watch it again</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div class="main">
        <div class="contents">
          <i>
            <h1 class="title">YOU</h1>
          </i>
          <div class="buttons">
            <button class="btn1">
              Play <i class="fas fa-play"></i>
            </button>
            <button class="btn2">More Info</button>
          </div>
          <h1 class="description">
            A charming first encounter quickly turns into something more
            nefarious when bookstore manager Joe takes a very strong liking to
            grad student Beck.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Netflix;

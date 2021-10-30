import { Link } from "react-router-dom"

export const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-md-5">
  <Link to="#"><img src="img/title.jpg" class="navbar-brand shadow"/></Link>
  <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/nomination">Nomination</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/voting">Voting</Link>
      </li>
    </ul>
  </div>
</nav>)
}

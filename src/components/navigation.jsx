export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-md-5">
  <a class="navbar-brand" href="#"><img src="img/home.jpg" height="50"/><b className="d-none d-md-inline"> STUDENT ICON AWARD</b></a>
  <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/nomination">Nomination</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/voting">Voting</a>
      </li>
    </ul>
  </div>
</nav>)
}

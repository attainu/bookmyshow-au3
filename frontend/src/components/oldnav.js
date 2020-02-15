<nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between ">
<div className="d-flex">
<a class="navbar-brand" href="#">
<img src="https://static.startuptalky.com/2018/10/logo.png" width="120" height="50" class="d-inline-block align-top" alt=""/>
</a>
<input class="form-control mr-sm-2 w-100 " type="search" placeholder="Search" aria-label="Search"/>
</div>
<ul class="navbar-nav justify-space-around">
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
City
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" >New Delhi</a>
<a class="dropdown-item" >Mumbai</a>
<a class="dropdown-item" >Hyderabad</a>
</div>
</li>

<li class="nav-item">
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
Sign In
</button>
<SignModal/>
</li>
<li className="nav-item">
<button class="btn" type="button" >
<span class="navbar-toggler-icon"></span>
</button>
</li>
</ul>   
</nav>

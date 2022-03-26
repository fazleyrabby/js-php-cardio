<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nested Menu with PHP</title></title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    
<?php 
   $menu = '[{"icon":"menu1","name":"menu1","children":[{"icon":"menu1sub","name":"menu1sub","children":[{"icon":"menu1subsub","name":"menu1subsub"}]}]},{"icon":"menu2","name":"menu2","children":[{"icon":"menu2sub","name":"menu2sub"}]},{"icon":"menu3","name":"menu3"}]';

?>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Nested Menu</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav">
            <li class="nav-item active"> <a class="nav-link" href="#">Home </a> </li>
            <li class="nav-item"><a class="nav-link" href="#"> About </a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Treeview menu  </a>
              <ul class="dropdown-menu">
                <li> <a class="dropdown-item" href="#"> Dropdown item 1 </a></li>
                <li> <a class="dropdown-item" href="#"> Dropdown item 2 &raquo; </a>
                  <ul class="submenu dropdown-menu">
                    <li><a class="dropdown-item" href="#">Submenu item 1</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 2</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 3 &raquo; </a>
                      <ul class="submenu dropdown-menu">
                        <li><a class="dropdown-item" href="#">Multi level 1</a></li>
                        <li><a class="dropdown-item" href="#">Multi level 2</a></li>
                      </ul>
                    </li>
                    <li><a class="dropdown-item" href="#">Submenu item 4</a></li>
                    <li><a class="dropdown-item" href="#">Submenu item 5</a></li>
                  </ul>
                </li>
                <li><a class="dropdown-item" href="#"> Dropdown item 3 </a></li>
                <li><a class="dropdown-item" href="#"> Dropdown item 4 </a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- navbar-collapse.// -->
        </div>
        <!-- container-fluid.// -->
        </nav>

        <script src="./script.js" type="module"></script>
</body>
</html>
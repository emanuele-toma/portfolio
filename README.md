<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="media/favicon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <script src="https://kit.fontawesome.com/1cfdb2ff8d.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/fuse.js@6.4.6"></script>

    <title>MyProjects - Emanuele Toma</title>
</head>

<body>
    <div class="navbar sticky">
        <div class="sinistra">
            <span class="top-item">
                <div><i class="fas fa-bars"></i></div>
            </span>
            <span class="logo">
                <img height="23px" src="media/logo-dark.png">
            </span>
        </div>

        <div class="centro">
            <span class="barra-ricerca">
                <input onchange="btn_update();" onkeypress="this.onchange();" onpaste="this.onchange();" oninput="this.onchange();" onkeyup="btn_enter(event)" id="txt-cerca" type="text" placeholder="Cerca">
                <button class="btn-cerca" onclick="cerca()"><i class="fas fa-search"></i></button>
            </span>
        </div>

        <div class="destra">
            <span class="profilo">
                <img src="media/icona.png" height="32px">
            </span>
        </div>
    </div>
    <div class="container">
        <div class="side-container sticky">
            <div class="sidebar">
                <div class="menu-item noselect">
                    <div class="icona"><i class="fas fa-home"></i></div>
                    <sub class="sottotitolo">Home</sub>
                </div>
                <div class="menu-item noselect">
                    <div class="icona"><i class="fas fa-code"></i></div>
                    <sub class="sottotitolo">Linguaggi</sub>
                </div>
                <div class="menu-item noselect">
                    <div class="icona"><i class="fas fa-folder-open"></i></div>
                    <sub class="sottotitolo">Raccolta</sub>
                </div>
            </div>
        </div>
        
        <div class="content">
            
            <div class="filler">
            </div>
            <div class="filler">
            </div>
            <div class="filler">
            </div>
            <div class="filler">
            </div>
            
        </div>
    </div>
    <script src="main.js"></script>
</body>

</html>

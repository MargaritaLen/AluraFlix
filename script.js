function on(element) {
  element.classList.remove("off");
}
function off(element) {
  element.classList.add("off");
}

var listaNameFilmes = ["La huesped", "The witch", "La razon de estar contigo"];
var listaNameSeries = ["Kingdom", "La Piloto", "One Piece"];
var listaNameJogos = ["Among us", "UNO", "Texas Chain Saw Massacre"];

var listaImgFilmes = [
  "https://www.themoviedb.org/t/p/original/2BcXskV3zyySAomN3xObv6O4SUt.jpg",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ1SJ0bj3ze-RJrAntfXx8wA8CXPuxzDpljyd90cO6JhG06fw7I",
  "https://www.rocalibros.com/archivos/imagenes/mayores/3170.jpg"
];
var listaImgSeries = [
  "https://flxt.tmsimg.com/assets/p16296544_b_v13_ab.jpg",
  "https://images.squarespace-cdn.com/content/v1/59888a11a5790a7d30e531f7/1515623866328-6ID27OXD3FRV3XGJSX19/LAPILOTOOK.jpg",
  "https://media.vandalsports.com/i/620x775/8-2023/2023829200_1.jpg"
];
var listaImgJogos = [
  "https://i.ebayimg.com/images/g/0PUAAOSwqZ9gsUHs/s-l1200.jpg",
  "https://pcgame.lk/wp-content/uploads/2022/09/uno-pc-uplay-cover.jpg",
  "https://upload.wikimedia.org/wikipedia/en/8/8d/The_Texas_Chain_Saw_Massacre_%282023%29_cover.jpg"
];

var listaLinkFilmes = [
  "",
  "https://www.youtube.com/watch?v=eYJuGhT5nYs",
  "https://www.youtube.com/watch?v=NTgDQKbtY0w"
];
var listaLinkSeries = [
  "https://www.imdb.com/title/tt6611916/?ref_=nv_sr_srsg_6_tt_8_nm_0_q_kingdom",
  "https://www.imdb.com/title/tt6607810/?ref_=fn_al_tt_1",
  "https://www.imdb.com/title/tt11737520/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_one%2520piece"
];
var listaLinkJogos = [
  "https://store.steampowered.com/app/945360/Among_Us/",
  "https://www.ubisoft.com/es-mx/game/uno/uno",
  "https://store.steampowered.com/app/1433140/The_Texas_Chain_Saw_Massacre/"
];

var title = document.querySelector("#title");
var seletor = document.querySelector("#seletor");
var imagens = document.querySelector("#imagens");
var rodape = document.querySelector("#rodape");
var cadastro = document.querySelector("#cadastro");
var remover = document.querySelector("#remover");

function mostrarLista() {
  let select = document.querySelector("#select").value;
  off(seletor);
  off(cadastro);
  off(remover);
  let listRem = document.querySelector("#listRem");
  listRem.innerHTML=""
  on(imagens);
  switch (select) {
    case "filmes":
      document.querySelector("body").style.backgroundImage =
        "url('https://media.istockphoto.com/id/1053469608/photo/television-blur-background-living-room.jpg?s=612x612&w=0&k=20&c=JjN7mXu2Y_-lG23C6LWqkTDGikjsGPzWGMJ7BcaZyA8=')";
      title.innerHTML = "Mis Películas";
      on(title);
      imagens.innerHTML = "";
      for (let i = 0; i < listaImgFilmes.length; i++) {
        imagens.innerHTML +=
          "<a href=" +
          listaLinkFilmes[i] +
          " target='blank'><img src=" +
          listaImgFilmes[i] +
          "></a>";
      }
      break;
    case "series":
      document.querySelector("body").style.backgroundImage =
        "url('https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/05/netflix-smart-tv-2338075.jpg')";
      title.innerHTML = "Mis Series";
      on(title);
      imagens.innerHTML = "";
      for (let j = 0; j < listaImgSeries.length; j++) {
        imagens.innerHTML +=
          "<a href=" +
          listaLinkSeries[j] +
          " target='blank'><img src=" +
          listaImgSeries[j] +
          "></a>";
      }
      break;
    case "jogos":
      document.querySelector("body").style.backgroundImage =
        "url('https://w0.peakpx.com/wallpaper/891/462/HD-wallpaper-video-game-illusion-connect-blur.jpg')";
      title.innerHTML = "Mis Juegos";
      on(title);
      imagens.innerHTML = "";
      for (let g = 0; g < listaImgJogos.length; g++) {
        imagens.innerHTML +=
          "<a href=" +
          listaLinkJogos[g] +
          " target='blank'><img src=" +
          listaImgJogos[g] +
          "></a>";
      }
      break;
  }
  on(rodape);
}
function trocarLista() {
  off(title);
  off(rodape);
  on(seletor);
  imagens.innerHTML = "";
  document.querySelector("body").style.backgroundImage = "url('')";
  document.querySelector("#select").value = "";
}
function abrirRem() {
  off(title);
  off(seletor);
  off(imagens);
  off(rodape);
  imagens.innerHTML = "";
  on(remover);
  let select = document.querySelector("#select").value;
  let removerTitle = document.querySelector("#removerTitle");
  let removerSubTitle = document.querySelector("#removerSubTitle");
  let listRem = document.querySelector("#listRem");

  switch (select) {
    case "filmes":
      removerTitle.innerHTML = "Remover Pelicula(s)";
      removerSubTitle.innerHTML = "Elija las películas que desea eliminar:";
      listaNameFilmes.forEach((element, index) => {
        listRem.innerHTML += "<div class='checbox'><input type='checkbox' id='"+element+"' value='"+index+"' class='optionRem'><label for='"+element+"'>"+element+"</label></div>"
      } )
      break;
    case "series":
      removerTitle.innerHTML = "Remover Serie(s)";
      removerSubTitle.innerHTML = "Elija la(s) serie(s) que desea eliminar:";
      listaNameSeries.forEach((element, index) => {
        listRem.innerHTML += "<div class='checbox'><input type='checkbox' id='"+element+"' value='"+index+"' class='optionRem'><label for='"+element+"'>"+element+"</label></div>"
      } )
      break;
    case "jogos":
      removerTitle.innerHTML = "Remover juego(s)";
      removerSubTitle.innerHTML = "Elija el/los juego(s) que desea eliminar:";
      listaNameJogos.forEach((element, index) => {
        listRem.innerHTML += "<div class='checbox'><input type='checkbox' id='"+element+"' value='"+index+"' class='optionRem'><label for='"+element+"'>"+element+"</label></div>"
      } )
      break;
  }
}
function abrirCadastro() {
  off(title);
  off(seletor);
  off(imagens);
  off(rodape);
  imagens.innerHTML = "";
  on(cadastro);
  let select = document.querySelector("#select").value;
  let titleCad = document.querySelector("#cadastroTitle");
  let nameInLab = document.querySelector("#nameInLab");
  let linkInLab = document.querySelector("#linkInLab");

  switch (select) {
    case "filmes":
      titleCad.innerHTML = "Añadir nueva película";
      nameInLab.innerHTML = "Nombre de la pelicula:";
      linkInLab.innerHTML = "Link del trailer:";
      break;
    case "series":
      titleCad.innerHTML = "Añadir nueva serie";
      nameInLab.innerHTML = "Nombre de la serie:";
      linkInLab.innerHTML = "Link informacion o trailer:";
      break;
    case "jogos":
      titleCad.innerHTML = "Añadir nuevo juego";
      nameInLab.innerHTML = "Nombre del juego:";
      linkInLab.innerHTML = "Link del juego:";
      break;
  }
}
function checkNome() {
  let cadastroName = document
    .querySelector("#cadastroName")
    .value.toLowerCase();
  let botaoCad = document.querySelector("#botaoCad");
  let cadErro = document.querySelector("#cadErro");
  let select = document.querySelector("#select").value;
  switch (select) {
    case "filmes":
      for (let ii = 0; ii < listaNameFilmes.length; ii++) {
        if (listaNameFilmes[ii].toLowerCase() === cadastroName) {
          botaoCad.disabled = true;
          cadErro.innerHTML = "Pelicula añadida";
        } else {
          botaoCad.disabled = false;
          cadErro.innerHTML = "";
        }
      }
      break;
    case "series":
      for (let jj = 0; jj < listaNameSeries.length; jj++) {
        if (listaNameSeries[jj].toLowerCase() === cadastroName) {
          botaoCad.disabled = true;
          cadErro.innerHTML = "Serie añadida";
        } else {
          botaoCad.disabled = false;
          cadErro.innerHTML = "";
        }
      }
      break;
    case "jogos":
      for (let gg = 0; gg < listaNameJogos.length; gg++) {
        if (listaNameJogos[gg].toLowerCase() === cadastroName) {
          botaoCad.disabled = true;
          cadErro.innerHTML = "Juego añadido";
        } else {
          botaoCad.disabled = false;
          cadErro.innerHTML = "";
        }
      }
      break;
  }
}
function checkImg() {
  let cadastroImg = document.querySelector("#cadastroImg").value;
  let botaoCad = document.querySelector("#botaoCad");
  let cadErro = document.querySelector("#cadErro");
  if (cadastroImg.endsWith(".jpg") || cadastroImg.endsWith(".png")) {
    botaoCad.disabled = false;
    cadErro.innerHTML = "";
  } else {
    botaoCad.disabled = true;
    cadErro.innerHTML = "Direccion no válida";
  }
}
function cadastrar() {
  let cadastroName = document
    .querySelector("#cadastroName")
    .value.toLowerCase();
  let select = document.querySelector("#select").value;
  let cadastroImg = document.querySelector("#cadastroImg").value;
  let cadastroLink = document.querySelector("#cadastroLink").value;

  switch (select) {
    case "filmes":
      listaNameFilmes.push(cadastroName);
      listaImgFilmes.push(cadastroImg);
      listaLinkFilmes.push(cadastroLink);
      break;
    case "series":
      listaNameSeries.push(cadastroName);
      listaImgSeries.push(cadastroImg);
      listaLinkSeries.push(cadastroLink);
      break;
    case "jogos":
      listaNameJogos.push(cadastroName);
      listaImgJogos.push(cadastroImg);
      listaLinkJogos.push(cadastroLink);
      break;
  }
  mostrarLista();
}
function removerFun() {
  let elements = document.querySelectorAll(".optionRem")
  let select = document.querySelector("#select").value;
  let listRem = document.querySelector("#listRem");
  
  elements.forEach(element => {
    if (element.checked){
      switch (select){
        case "filmes":
          listaNameFilmes.splice(element.value, 1)
          listaLinkFilmes.splice(element.value, 1)
          listaImgFilmes.splice(element.value, 1)
          break
        case "series":
          listaNameSeries.splice(element.value, 1)
          listaLinkSeries.splice(element.value, 1)
          listaImgSeries.splice(element.value, 1)
          break
        case "jogos":
          listaNameJogos.splice(element.value, 1)
          listaLinkJogos.splice(element.value, 1)
          listaImgJogos.splice(element.value, 1)
          break
      }
    }
  })
  
  listRem.innerHTML=""
  mostrarLista();
}
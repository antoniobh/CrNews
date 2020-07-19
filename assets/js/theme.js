// Espero a que el documento se encuetre completamente cargado

$(document).ready(()=>{


  // runInizialite();
  /*
  *   Agrego un evento de escucha de click a todos los objetos que se encuentren
  *  dentro del DOM y tengan la clase .theme-filter.
  *
  *  paso al objeto cliqueado en la funcion anonima, en forma de arrow function
  *
  */
  $('.theme-filter').click((e)=>{
    /*
    *  Elimino la clase active a todos los elementos del menu
    */


    $('.theme-filter').removeClass('theme-active')

    // Agrero la clase activa al elemento cliqueado
    $(e.currentTarget).addClass('theme-active')


    $('#theme-home').css({'display':'none'})
    /*
    *   El objeto recibido por el click le extraigo su atributo themeFilter con
    *   javaScript.
    *
    */

    e = e.currentTarget.dataset.themeFilter;
    /*
    *   pregunto si el data-filter fue igual a 'todo'
    *   en caso de ser asi, aplico css a todos para ver todas las categorias,
    *  en caso de no ser asi, paso el parametro a la funcion de filtrado de tema
    *
    *
    *  Para una presentacion del codigo mas amena, utilizo un if ternario
    */


    //lo que evaluo  ? lo que hago sí si : lo que hago sí no
    (e=="todo") ? $('section').css({'display':'block'}) : filterTopic(e);
  })


// Creo la funcion de filtrado de temas
  function filterTopic(e) {
    /*
    *    busco todos los elementos de <section> en el DOM y con la funcio each()
    *    le pregunto a cada uno si es o no el elemto cliqueado para asi hacer
    *    el cambio en el css del elemto y mostrarlo o no en pantalla
    */
        $('section').each(function(index, element){
          //lo que evaluo  ? lo que hago sí si : lo que hago sí no
          (e==$(element).data("theme-type")) ? $(element).css({'display':'block'}) : $(element).css({'display':'none'});
        })
    }


    /*
    *
    *          Filtrado por dia
    *
    *
    */


  $('#theme-filter-date').click(()=>{
    date = $('#theme-input-filter-date')[0].value.split('-');

    fullDate=date[2]+"/"+date[1]+"/"+date[0];

    today = convertDate(new Date());
    daySelected = convertDate(new Date(date));



    if(fullDate!=='undefined/undefined/'){
      $('#theme-home').css({'display':'none'})
      $('.theme-card-news').each(function(index,element){

        $(element).addClass('theme-no-show-news')
        $(element).removeClass('theme-show-news')



        if(today === daySelected){
          $(element).data("created")==='today' ? $(element).addClass('theme-show-news') : $(element).addClass('theme-no-show-news');
        }else{
          if($(element).data("created")!=='today'){
            convertDate(new Date($(element).data("created")))===daySelected ? $(element).addClass('theme-show-news') : $(element).addClass('theme-no-show-news');
          }
        }

      })
      }
  })


  $('#theme-destroy-filter-date').click(function(){
    $('#theme-home').css({'display':'none'})
    $('.theme-card-news').each(function(index,element){
      $(element).addClass('theme-show-news');
      $(element).removeClass('theme-no-show-news');
    })
  })



  function convertDate(date){
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    return day+"/"+month+"/"+year

  }


})


function createCard(tittle, subtittle, content,image,category,createdAt, dataCreated){


  let collg12 = $("<div>", {'class':'col-lg-12 theme-card-news','data-created':dataCreated})
  let row = $("<div>", {'class':'row'})
  let colsm9 = $("<div>", {'class':'col-sm-9'})
  let h4 = $("<h4>", {'text':category,'class':'theme-'+category+' theme-category-News'})
  let h3 = $("<h3>", {'text':tittle})
  let h5 = $("<h5>", {'style':'color:#1fa06b; margin-bottom: 20px;','text':subtittle})
  let contentNew = $("<p>", {'style':'text-align: justify','text':content})
  let create = $("<p>", {'class':'theme-createdAt','text':createdAt})
  let themeCardBody = $("<div>", {'class':'col-sm-3 theme-card-body'})
  let img = $("<img>", {'class':'img-fluid img-thumbnail','src':image})



  $(colsm9).append(h4)
  $(colsm9).append(h3)
  $(colsm9).append(h5)
  $(colsm9).append(contentNew)
  $(colsm9).append(create)

  $(themeCardBody).append(img)

  $(row).append(colsm9)
  $(row).append(themeCardBody)

  $(collg12).append(row)
  $(collg12).append('<hr>')


return collg12;


}

// CONSIGNA:
// obtener el total de segundos de todos los videos del tipo 'Redux Video'
// pistas: convertirlo en objetos
// Vale por el primer parcial
// Fecha de entrega: Domingo 30 AGO 23:59
// Fecha de solucio: Miercoles 2 de SEP
// Modalidad de entrega. Pull Request.

const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

function convertirEnObjetos(){
    let videos = [];
    let arr = str.split('\n')
    let renglones = arr.slice(1, arr.length -1);


    renglones.forEach(renglon => {
      let objeto = {
        duracion: {
            minutos: parseInt(renglon.split('"')[1].split(':')[0]),
            segundos: parseInt(renglon.split(':')[1].split('"')[0])
        },
        tipo: renglon.split(">")[1].split("<")[0]
      };
      videos.push(objeto);     
    });
    return videos;
};

const videos = convertirEnObjetos();

const videosRedux= videos
                        .filter(video => video.tipo === 'Redux Video')
                        .map(video =>({tipo: video.tipo, duracion: video.duracion.minutos*60 + video.duracion.segundos}));

let segundosTotales = 0;
videosRedux.forEach(video => segundosTotales += video.duracion);

console.log("Total de segundos de todos los videos del tipo 'Redux Video': ", segundosTotales);

import Slide from './Slide';
import Kegiatan from './Kegiatan';
import Jurusan from './Jurusan';

import slideOne  from './../Assets/kegiatan1.jpg';

const Layouts = () => {
     return (
       <div>
         <Slide />
         <div className="container">
           <div className="row">
             <div className="col-12 text-center my-5">
               <h1>Kegiatan</h1>
             </div>
           </div>

           <div className="row">
             <div className="col-12 col-md-6 col-lg-4 mb-4">
               <Kegiatan image={slideOne} desc="Sepak Bola" />
             </div>
             <div className="col-12 col-md-6 col-lg-4 mb-4">
               <Kegiatan image={slideOne} desc="Voli" />
             </div>
             <div className="col-12 col-md-6 col-lg-4 mb-4">
               <Kegiatan image={slideOne} desc="Basket" />
             </div>
           </div>

           <div className="row">
             <div className="col-12 text-center my-5">
               <h1>Jurusan</h1>
             </div>
           </div>

           <div className="row">
             <div className="col-12 col-md-6 col-lg-4 mb-4">
               <Jurusan title="Multimedia" />
             </div>
             <div className="col-12 col-md-6 col-lg-4 mb-4">
               <Jurusan title="Akutansi" />
             </div>
             <div className="col-12 col-md-6 col-lg-4 mb-4">
               <Jurusan title="Perkantoran" />
             </div>
           </div>
         </div>
       </div>
     );
}

export default Layouts;
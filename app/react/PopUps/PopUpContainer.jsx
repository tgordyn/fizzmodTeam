import React from 'react'
import {connect} from 'react-redux'
import { Desactivacion, Activacion } from '../../action/popup'
import PopUpObservacion from './PopUpObservacion'
import PopUpSustitucion from './PopUpSustitucion'
import PopUpOpciones from './PopUpOpciones'
import PopUpOrden from './PopUpOrden'
import PopUpServiciosExtras from './PopUpServiciosExtras'
import PopUpInfoPicker from './PopUpInfoPicker'
import PopUpControladorDePeso from './PopUpControladorDePeso'


const PopUpContainer = ({active, handleCloseClick, Activar})=>{

      const handleBtnClick = (n) => {
            Activar(n)
          };
        
 
return(
    

      <>
  <PopUpOrden
          active={active}
          Activar={handleBtnClick}
          onCloseClick={handleCloseClick}
    />
       <PopUpInfoPicker
          active={active}
          onCloseClick={handleCloseClick}
    />
    <PopUpObservacion
          active={active}
          onCloseClick={handleCloseClick}
    />
     <PopUpSustitucion
          active={active}
          onCloseClick={handleCloseClick}
    />
    <PopUpServiciosExtras
          active={active}
          onCloseClick={handleCloseClick}
    />
    <PopUpOpciones
          active={active}
          Activar={handleBtnClick}
          onCloseClick={handleCloseClick}
    />
     <PopUpControladorDePeso
     
     />
 </> 

)

}

const mapStateToProps = (state, ownProp)=>{
  return{
      active: state.popupReducer.numero
  }

}

const mapDispatchToProps = (dispatch, ownProp)=>{
   return { 
   Activar: (n) => dispatch(Activacion(n)),
   handleCloseClick:()=>(dispatch(Desactivacion()))   }
}

export default connect(mapStateToProps,mapDispatchToProps)(PopUpContainer)
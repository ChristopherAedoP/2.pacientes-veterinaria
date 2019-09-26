import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './Components/Header';
import NuevaCita from './Components/NuevaCita';
import ListaCitas from './Components/ListaCitas';

class App extends Component {
  state = {  
    citas : []
  }
  //cuando la aplicacion carga
  componentDidMount(){
    const citasLS = localStorage.getItem('citas')
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }
  componentDidUpdate(){
    localStorage.setItem('citas',JSON.stringify(this.state.citas))
  }

  crearNuevaCita = datos => {
    //copair state actual
    const citas = [...this.state.citas,datos];
    this.setState({
      citas:citas
    })
  }
  eliminarCita = id => {
    //copiar state
    const citasActuales = [...this.state.citas]
    //elimiar id de la lista actual de citas.
    const citas = citasActuales.filter(cita => cita.id !== id)

    this.setState({
      citas
    })
  }
  render(){
    return ( 
      <div className="container">
        <Header titulo='Administracion Pacientes Veterinaria' />

        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita}/>
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={this.state.citas} 
              eliminarCita={this.eliminarCita}
            />
          </div>

        </div>
      </div>
     );
  }
};
 
export default App;



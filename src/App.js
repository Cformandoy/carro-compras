import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {

  state = {
    productos:[
      {name: 'Tomates', price: 1500, img:'productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img:'productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img:'productos/lechuga.jpg'},
    ],
    carro:[
      // {name: 'Tomates', price: 1500, img:'productos/tomate.jpg', cantidad:1},
    ],
    esCarroVisible : false,
  }

  agregarAlCarro = (producto) => {

    const {carro} = this.state
    if (carro.find(X=> X.name === producto.name)){
      const newCarro = carro.map(X=> X.name === producto.name
        ? ({
          ...X,
          cantidad:X.cantidad + 1
        })
        :X)
        return this.setState({carro:newCarro})
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad:1,

      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible : !this.state.es})
  }

  render(){
    const { esCarroVisible } = this.state

    return(
      <div>
        <Navbar 
          carro={this.state.carro} 
          esCarroVisible = {esCarroVisible} 
          mostrarCarro = {this.mostrarCarro}
        />
        <Layout>
          <Title/>
          <Productos
            agregarAlCarro = {this.agregarAlCarro}
            productos = {this.state.productos}
          />

        </Layout>
        
      </div>
    )
  }
}


export default App;

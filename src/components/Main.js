import { useState } from "react"
import { BaseColaboradores } from "../BaseColaboradores"
import { v4 as uuid } from 'uuid';

    const Main = () => {

    const [colaboradores, setColaboradores] = useState(BaseColaboradores);

    const [nombreColaboradores, setNombreColaboradores] = useState("")
    const [correoColaboradores, setCorreoColaboradores] = useState("")
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)

    const unique_id = uuid();

    const enviarFormulario = (e) => {
        e.preventDefault()
        setListaColaboradores([...listaColaboradores, { 
            id: unique_id.substring(0, 2),
            nombre: nombreColaboradores, 
            correo: correoColaboradores }])
    }

    const capturaInput = (e) => {
        setNombreColaboradores(e.target.value)
        setCorreoColaboradores(e.target.value)
    }

    const [search, setNewSearch] = useState("");

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };
    
    const filtered = !search ? listaColaboradores :
        listaColaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <header>
                <h1>Lista de Colaboradores 2022</h1>
            </header>
            <div className="row">
                <div className="col-12 buscador-contain">
                    <h1>Buscar Colaborador</h1>
                    <input onChange={(e) => setNewSearch(e.target.value)}  id="buscador" name="buscador" type="search" placeholder="Ingresar Nombre"/>
                </div>
                <div className="col-6 p-50">
                    <h3>Agregar Colaboradores</h3>
                    <form onSubmit={enviarFormulario}>

                    <div className="form-group">
                        <input onChange={(e) => setNombreColaboradores(e.target.value)} type="text" className="form-control" id="nombre" placeholder="Ingresa Nombre" />
                        
                    </div>
                    <div className="form-group">
                        <input onChange={(e) =>  setCorreoColaboradores(e.target.value)} type="mail" className="form-control" id="correo" placeholder="Ingresa Correo" />
                        
                    </div>

                        <button className="boton btn btn-primary"> Agregar Colaborador</button>
                    </form>
                    
                </div>
                <div className="lista col-6 p-50">
                    <h3>Lista Colaboradores</h3>
                    <ul className="lista list-group">
                        {filtered.map(colaborador => 
                        <li className="list-group-item" key={colaborador.id}>
                            {colaborador.id} - {colaborador.nombre} - {colaborador.correo}
                        </li>
                        )}
                    </ul>
                </div>
            </div>


        

        
            




            
        </div>
    )}

export default Main
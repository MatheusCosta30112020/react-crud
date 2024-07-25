// import { useState } from 'react'

export function Clientes(){
    return(
        <div className="container">

            {/* titulo */}
            <div className="container p-3 mt-3 mb-3 bg-success rounded text-white">
                <h1 className="text-center">Cadastro de clientes</h1>
            </div>

            {/* formulario */}
            <form className="d-flex flex-column gap-3">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Nome do cliente"
                />
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Telefone"
                />
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="E-mail"
                />
                <input type="date" className="form-control" />
                <select className="form-control">
                    <option value="go">GO</option>
                    <option value="df">DF</option>
                    <option value="sp">SP</option>
                </select>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Cidade"
                />
                <div className="container d-flex gap-3 justify-content-center">
                <button className="btn btn-primary w-50">Cadastrar</button>
                <button className="btn btn-danger w-50">Cancelar</button>
                </div>
            </form>

            {/* tabela */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Data Nasc.</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alex Silva</td>
                        <td>(62) 9 9857-3828</td>
                        <td>28/02/2000</td>
                        <td>Goiânia</td>
                    </tr>
                    <tr>
                        <td>Bianca Alburquerque</td>
                        <td>(62) 9 9857-3828</td>
                        <td>28/02/2000</td>
                        <td>Goiânia</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
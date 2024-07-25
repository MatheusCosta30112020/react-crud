import './produto.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function Produtos(){
  const url = "http://localhost:3000/produto"

  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState();
  const [quantidade, setQuantidade] = useState('');
  const [foto, setFoto] = useState('');

  const [classInserir, setClassInserir] = useState('');
  const [classAlterar, setClassAlterar] = useState('sumir');
  const [data, setData] = useState([]);

  /*** Carregar dados do banco */
  useEffect(() => {
    axios.get(url)
         .then( res  => setData(res.data))
  }, [data, setData]);
  
  /*** Inserir dados no banco */
  const Inserir = () => {
    axios.post(url, {
      produto, valor, quantidade, foto
    })
  }
  /*** Cadastrando dados no banco */
  const Cadastrar = (e) => {
    e.preventDefault()

    if(!produto){
      alert("Por favor preencha o campo nome do produto")
      return false
    }else if(!valor){
      alert("Por favor preencha o campo valor do produto")
      return false
    }else if(!quantidade){
      alert("Por favor preencha o campo quantidade do produto")
      return false
    }else{
      alert("Produto cadastrado com sucesso!")
      Inserir()
      setProduto('')
      setValor('')
      setQuantidade('')
      setFoto('')

    }
  }
    return(
        <div className='container'>

            <div className="container bg-primary p-3 mt-3 mb-3 text-white rounded">
                <h1 className='mt-5 mb-5 text-center'>Cadastro de Produtos</h1>
            </div>
  
        <form onSubmit={Cadastrar}  className='mb-5'>
            <div className="row mb-3">
              <div className="col">
                <input 
                  type="text" 
                  value={produto}
                  className='form-control'
                  placeholder='Nome do Produto'
                  onChange={(e) => setProduto(e.target.value)}
                />
              </div>
              <div className="col">
                <input 
                  type="text" 
                  value={valor}
                  placeholder='Valor'
                  className='form-control'
                  onChange={(e) => setValor(e.target.value) }
                />
              </div>
              <div className="col">
                <input 
                  type="text" 
                  placeholder='Quantidade'
                  value={quantidade}
                  className='form-control'
                  onChange={(e) => setQuantidade(e.target.value) }
                />
              </div>
            </div>
            
            
            <div className="row mb-3">
            <div className='col'>
                <input 
                  type="text"
                  value={foto}
                  className='form-control'
                  placeholder='Url de imagem'
                  onChange={(e) => setFoto(e.target.value) }
                />
              </div>
            </div>
          <div className="btn-group">
          <button type='submit' className={`btn btn-outline-success ${classInserir}`}>Inserir</button>
          <button type='submit' className={`btn btn-outline-primary ${classAlterar}`}>Salvar</button>
          </div>
        </form>
  
        <table className='table table'>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome do Produto</th>
              <th scope="col">Valor</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Imagem</th>
              <th scope="col" className='text-center'>Ações</th>
            </tr>
          </thead>
          <tbody>
            { data.map(( item ) => (
               <tr key={item.id}>
               <th scope="row1">{item.id}</th>
               <td>{item.produto}</td>
               <td>{item.Valor}</td>
               <td>{item.quantidade}</td>
               <td>
                 <img 
                   width={40} 
                   src={item.foto} alt="imagem do produto"/>
               </td>
               <td>
                 <div className='btn-group d-flex gap-3'>
                   <button className='btn btn-outline-warning'>
                   <i className="fa-solid fa-pen-to-square"></i>
                   </button>
                   <button className='btn btn-outline-danger'>
                   <i className="fa-solid fa-trash"></i>
                   </button>
                 </div>
               </td>
             </tr>
   
            ))}
           
          </tbody>
        </table>
        
      </div>
    )
}
import s from '../assets/Paginado.module.css'
const Paginado = ({ pokemonesPorPagina, numeroTotalPokemones, paginado, paginaActual, setPaginaActual }) => {
    let numeroPaginas = []
    for (var i = 1; i <= Math.ceil(numeroTotalPokemones / pokemonesPorPagina); i++) {
        numeroPaginas.push(i)
    }
    const prev = () =>{
        if(paginaActual > 1) setPaginaActual(paginaActual - 1) 
    }
    const next = () =>{
        if(paginaActual < numeroPaginas.length)
        setPaginaActual(paginaActual + 1) 
   
    }
    

    return (
        <ul className={s.paginado}>
            <li  className={s.paginadoItem} onClick={prev}>prev</li>
            {numeroPaginas && numeroPaginas.map(numero => {
                return(
                    <li key={numero} className={s.paginadoItem}>
                        <a onClick={() => paginado(numero)}>{numero}</a>
                    </li>
                )})}
            <li  className={s.paginadoItem} onClick={next}>Next</li>
        </ul>
    )
}

export default Paginado
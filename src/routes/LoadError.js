import React from 'react'

export default function LoadError() {
    return (
        <div>
            <div>
                <h2>Loading Error</h2>
            </div>
            <button onClick={() => window.location.reload(false)}>
                Clique aqui para atualizar a pagina quando o servidor estiver online
            </button>
        </div>
    )
}
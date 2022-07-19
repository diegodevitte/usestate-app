import React, { useState } from 'react'

const ErrorApp = () => {
    const [error, setError] = useState("");
    return (
        <div>
            <button onClick={() => setError("Error show")}>
                Error
            </button>
            <button onClick={() => setError("Another error show")}>
                Another Error
            </button>
            <button onClick={() => setError("")}>
                Proceso Exitos
            </button>
            {
                error &&
                <h1>{error}</h1>
            }
        </div>
    )
}

export default ErrorApp
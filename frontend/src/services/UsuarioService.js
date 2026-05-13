// No usamos import porque lo bajaste por el index.html
const API_URL = "http://localhost:8080/api/usuarios";

export const loginUsuario = async (credenciales) => {
    try {
        // Usamos window.axios para que reconozca el script del HTML
        const respuesta = await window.axios.post(`${API_URL}/login`, credenciales);
        return respuesta.data; 
    } catch (error) {
        console.error("Error en la autenticación:", error);
        throw error;
    }
};

export const registrarUsuario = async (nuevoUsuario) => {
    try {
        const respuesta = await window.axios.post(API_URL, nuevoUsuario);
        return respuesta.data;
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
};
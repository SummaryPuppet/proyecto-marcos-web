export const validarPromocion = async (codigo) => {
  const response = await fetch(
    "http://localhost:8080/api/promociones/validar",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        codigo: codigo,
      }),
    },
  );

  return await response.json();
};

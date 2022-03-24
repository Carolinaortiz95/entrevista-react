const initialState = {
  stock: [
    {
      codigo: 1,
      descripcion: "Secador de pelo",
    },
    {
      codigo: 2,
      descripcion: "Teclado",
    },
    {
      codigo: 3,
      descripcion: "Mouse",
    },
    {
      codigo: 4,
      descripcion: "Silla",
    },
    {
      codigo: 5,
      descripcion: "Mesa",
    },
    {
      codigo: 6,
      descripcion: "Celular",
    },
    {
      codigo: 7,
      descripcion: "Televisor",
    },
    {
      codigo: 8,
      descripcion: "Cuaderno",
    },
    {
      codigo: 9,
      descripcion: "Lapiz",
    },
    {
      codigo: 10,
      descripcion: "Sillon",
    },
  ],
  filterStock: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "FILTER_BY_CODE":
      const filterByCode = state.stock.filter((item) => {
        if (item.codigo.toString() === action.payload) {
          return item;
        }
      });
      return {
        ...state,
        filterStock: filterByCode,
      };

    case "FILTER_BY_DESCRIPTION":
      const filterByDescription = state.stock.filter((item) =>
        item.descripcion.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        filterStock: filterByDescription,
      };

    default:
      return state;
  }
}

export default rootReducer;

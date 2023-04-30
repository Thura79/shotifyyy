import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState('');

  const fetchdata = async () => {
    const api = await fetch("https://dummyjson.com/products");
    const {products} = await api.json();
    setProductList(products);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: productList });
    const filterproduct = productList.filter(pd => pd.title.toLowerCase().includes(search))
    dispatch({type: "GET_PRODUCT", payload: filterproduct})
  }, [productList, search]);


  const initialState = {
    products: [],
    cart: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCT":
        return { ...state, products: action.payload };
      case "ADD-TO-CART":
        const isExisted = state.cart.find((pd) => pd.id === action.payload.id);
        if (isExisted) {
          return state;
        } else {
          return { ...state, cart: [...state.cart, { ...action.payload }] };
        }
      case "REMOVE-CART":
        return {...state, cart: state.cart.filter(item => item.id !== action.payload.id)};
      case "CLEAR":
        return {...state, cart: []};
      default:
        return state;
    }
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch, search, setSearch};

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const StateCustom = () => useContext(StateContext);

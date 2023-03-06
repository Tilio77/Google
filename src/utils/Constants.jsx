import { GoSearch } from "react-icons/go";
import { BsImage } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { SlTag } from "react-icons/sl";

export const menu = [
    { name: "Todo", icon: <GoSearch /> },
    { name: "Imágenes", icon: <BsImage size={14} /> },
    { name: "Noticias", icon: <BiNews /> },
    { name: "Vídeos", icon: <RiVideoLine /> },
    { name: "Comprar", icon: <SlTag size={14} /> },
];

export const quickLinks = [
    "Nosotros",
    "Publicidad",
    "Negocios",
    "Cómo funciona la búsqueda",
];

export const settingMenu = [
    "Privacidad", 
    "Terminos", 
    "Ajustes"
];

export const pagination = [
    { page: 1, startIndex: 1 },
    { page: 2, startIndex: 11 },
    { page: 3, startIndex: 21 },
    { page: 4, startIndex: 31 },
    { page: 5, startIndex: 41 },
    { page: 6, startIndex: 51 },
    { page: 7, startIndex: 61 },
    { page: 8, startIndex: 71 },
    { page: 9, startIndex: 81 },
    { page: 10, startIndex: 91 },
];
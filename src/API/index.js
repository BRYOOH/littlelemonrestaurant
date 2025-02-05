import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:4000",
});

export const UserLogin=async(data)=>{await API.post("/login",data);};
export const UserSignup=async(data)=>{await API.post("/signup",data);}
export const GetAll=async(data)=>{await API.get("/getall",data)}
export const AddReservation=async(data)=>{await API.post("/addReserve",data);}
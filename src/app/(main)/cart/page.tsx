import {products} from "@/lib/dummyDb"
import Image from "next/image";
import {GrView} from "react-icons/gr";
import {BiTrash} from "react-icons/bi";
import React from "react";
import Link from "next/link";
import {IoCheckboxOutline} from "react-icons/io5";

const page = () => {

    const cartItems = [];
    cartItems.push(products[5]);
    cartItems.push(products[1]);


    return <div className={`container flex flex-col items-center justify-start  h-full`}>
        <div className={" px-5 flex flex-col gap-4 items-center  grow  w-full"}>
            {
                cartItems.map((item) => (
                    <CartCard key={item.id} data={ {model: item.model, id:item.id ,price:String(item.price),image:item.image[0]  }} />
                ))
            }
            {
                cartItems.map((item) => (
                    <CartCard key={item.id} data={ {model: item.model, id:item.id ,price:String(item.price),image:item.image[0]  }} />
                ))
            }{
            cartItems.map((item) => (
                <CartCard key={item.id} data={ {model: item.model, id:item.id ,price:String(item.price),image:item.image[0]  }} />
            ))
        }{
            cartItems.map((item) => (
                <CartCard key={item.id} data={ {model: item.model, id:item.id ,price:String(item.price),image:item.image[0]  }} />
            ))
        }{
            cartItems.map((item) => (
                <CartCard key={item.id} data={ {model: item.model, id:item.id ,price:String(item.price),image:item.image[0]  }} />
            ))
        }{
            cartItems.map((item) => (
                <CartCard key={item.id} data={ {model: item.model, id:item.id ,price:String(item.price),image:item.image[0]  }} />
            ))
        }{
            cartItems.map((item) => (
                <CartCard key={item.id} data={ {model: item.model, id:item.id ,price:String(item.price),image:item.image[0]  }} />
            ))
        }
        </div>
        <div className={"p-4 w-full bg-gray-300   flex flex-row justify-between items-center"}>
                <div>
                    <h1 className={"text-black text-2xl font-bold"}>Total: $834</h1>
                </div>
                <div>
                    <button className={"btn bg-black hover:bg-white hover:text-black hover:ring-1 btn-lg hover:ring-black rounded-sm text-white text-xl"}>Checkout <IoCheckboxOutline/></button>
                </div>
        </div>
    </div>

}



const CartCard:React.FC<{data:{model:string; image:string; price: string; id:string}}> = ({data:item})=> {
    return <div className={"w-full grid grid-cols-5 items-center p-4 bg-white rounded-sm"} key={item.id}>
        <div className={"w-full flex justify-center items-center"}>
            <div
                className={"w-20 rounded-sm aspect-square flex justify-center items-center overflow-hidden group"}>
                <Image src={item.image} alt={item.model} width={200} height={200}
                       className={"w-full h-full object-cover object-center group-hover:scale-110 duration-150"}/>
            </div>
        </div>
        <div className={"w-full flex justify-center items-center"}>
            <h1 className={"text-xl font-semibold"}>{item.model}</h1>
        </div>
        <div className={"w-full flex justify-center items-center"}>
            <h1 className={"text-lg text-yellow-500"}>$ {item.price}</h1>
        </div>
        <div className={"w-full flex justify-center text-lg items-center"}>
            <h1>1</h1>
        </div>
        <div className={"w-full p-4 gap-4 grid-cols-2 grid"}>
            <Link href={"/products/"+item.id} className={"btn text-white rounded-sm text-lg btn-success"}><GrView/></Link>
            <button className={"btn text-white rounded-sm text-lg btn-error flex flex-row items-center justify-center"}><BiTrash/></button>

        </div>
    </div>;
}
export default page;
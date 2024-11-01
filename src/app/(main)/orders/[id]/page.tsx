import {orders} from "@/lib/dummyDb";
import Image from "next/image";
import Link from "next/link";

const page = ({ params }: { params: { id: string } }) => {
    const orderDetails = orders.find((order) => order.id === params.id);
    return <div className={"w-full h-full flex justify-start items-center gap-4 flex-col p-4 "}>
        <h1 className={"text-xl font-bold "}>Order Details</h1>
        <div className={'w-full grid-cols-2 grid gap-4 flex-row'}>
            <div className={'w-full flex justify-center items-center flex-col gap-4'}>
                <div className="w-full flex justify-center items-center gap-4 flex-col">
                    <div className="w-full flex justify-center items-center gap-4 flex-col">
                        <div className="w-full flex justify-center items-center gap-4 flex-col">
                            <h1 className="text-xl font-semibold">Order ID: {orderDetails?.id}</h1>
                            <h1 className="text-lg text-gray-400">Order Status: {orderDetails?.status}</h1>
                        </div>
                    </div>
                </div>
                <div className={"w-32 flex justify-center items-center"}>
                    <Image src={orderDetails?.product?.image[0] || ""} alt={"image"} width={500} height={500} className={"w-full "}/>
                </div>
                <div>
                    <Link href={"/products/"+orderDetails?.product.id} className={"btn text-white bg-black rounded-sm text-lg btn-success hover:bg-white hover:text-black hover:border-2 hover:border-black duration-300"}>View Product</Link>
                </div>
            </div>
            <div className={"w-full justify-center items-start flex flex-col"}>
                <h1 className="text-xl font-semibold">{orderDetails?.product.model}</h1>
                <h1 className="text-lg text-gray-700">Order Date: {orderDetails?.date}</h1>
                <h1 className="text-lg text-gray-700">Total: ${orderDetails?.total}</h1>
                <h1 className="text-lg text-gray-700">Payment Method: {orderDetails?.paymentMethod}</h1>
                <h1 className="text-lg text-gray-700">Shipping Address: {orderDetails?.shippingAddress.name}</h1>
                <h1 className="text-lg text-gray-700">Shipping Address: {orderDetails?.shippingAddress.address}</h1>
                <h1 className="text-lg text-gray-700">Shipping Address: {orderDetails?.shippingAddress.city}</h1>
                <h1 className="text-lg text-gray-700">Shipping Address: {orderDetails?.shippingAddress.state}</h1>
                <h1 className="text-lg text-gray-700">Shipping Address: {orderDetails?.shippingAddress.zip}</h1>

            </div>
        </div>
    </div>
}

export default page
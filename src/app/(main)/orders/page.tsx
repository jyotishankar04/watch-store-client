import OrderCard from "@/components/projectComp/main/OrderCard";
import {orders} from "@/lib/dummyDb";

const page = () => {

    return <div className={"w-full h-full flex justify-start items-center gap-4 flex-col p-4 "}>
        <h1 className={"text-xl font-bold "}>Orders</h1>
        <div className={'w-full flex justify-center items-center gap-4 flex-col'}>
            {
                orders.map((item)=>{
                    return <OrderCard key={item.id} order={item}/>
                })
            }
        </div>
    </div>
}



export default page;
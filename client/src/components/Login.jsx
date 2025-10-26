import { Card } from "./Card"

export const Login = ()=>{
    return <Card className="flex justify-center items-center w-100 h-100" >
        <div className=" rounded-xl flex flex-col " >
        <p className=" text-[#f4f1ce] mt-5 self-center text-xl font-bold " >Login</p>
    <form className=" p-5 flex flex-col gap-2" >
        <input  name="email" className="focus:border-[#fe9833] focus:outline focus:outline-[#fe9833] rounded-md p-2 text-[#f4f1ce] bg-black border border-neutral-700" type="text" placeholder="Email" />
        <input  name="password" className="focus:border-[#fe9833] focus:outline focus:outline-[#fe9833] rounded-md p-2 text-[#f4f1ce] bg-black border border-neutral-700" type="password" placeholder="Password" />
        <button type="button" className=" hover:text-black hover:bg-[#fe9833] rounded-md p-2 text-[#f4f1ce] bg-black border border-neutral-700" >Submit</button>
    </form>
    </div>
    </Card>
}
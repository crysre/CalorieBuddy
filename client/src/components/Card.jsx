export const Card = ({className, children})=>{
    return <div className={`${className} border rounded-lg  border-neutral-700/80 backdrop-blur-lg bg-[#130e0d]`} >
        {children}
    </div>
}
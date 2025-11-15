export const Card = ({className, children})=>{
    return <div className={`${className} border rounded-lg  border-neutral-700/80 backdrop-blur-lg bg-[#4A70A9] ` } >
        {children}
    </div>
}
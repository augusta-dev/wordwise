import Image from "next/image";

const DashBoardButton = (props) => {
    return(
        <div className={`${props.className} w-[32%] h-fit rounded-lg px-3 py-2 text-[12px] leading-[8px]`}>
            <Image src={props.icon} alt="" className="inline h-4 relative -top-[3px]" />
            <p className="inline relative pl-[2px] -top-[2px]">{props.text}</p>
        </div>
        
    )
}
export default DashBoardButton;
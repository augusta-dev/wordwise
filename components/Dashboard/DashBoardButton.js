import Image from "next/image";

const DashBoardButton = (props) => {
    return(
        <button className={`${props.className}  h-fit rounded-lg px-3 py-2 text-[12px] leading-[8px] text-left`} onClick={props.onClick}>
            <Image src={props.icon} alt="" className="inline h-4 relative -top-[3px]" />
            <p className="inline relative pl-[2px] -top-[2px]">{props.text}</p>
        </button>
        
    )
}
export default DashBoardButton;
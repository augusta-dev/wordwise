import Image from "next/image";
import search from '../../assets/search.svg';
import Input from "../UI/Input";

const WordSearch = () => {
	return (
		<div className="mt-4 shadow-main rounded-md h-8 flex flex-wrap">
			<input className="placeholder:text-purpleBody text-purpleBody text-center text-lg inline bg-transparent w-[87%] focus:outline-none" placeholder="+ Add Word" type="text" />
            <button className="bg-lightPurple h-full w-[13%] align-middle flex px-3 rounded-md rounded-l-none">
            <Image src={search} className="flex-end self-center px-auto" alt='search icon' />
            </button>
            

		</div>
	);
};
export default WordSearch;

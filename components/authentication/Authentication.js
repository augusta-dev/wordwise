// import { Button } from "@mui/material";
const Authentication = () => {
    const revealSignIn = () => {
        alert("Yes");
    }
    
	return (
		<div className="w-full flex flex-col">
			<button
				variant="contained"
				className="bg-purpleBody rounded-3xl shadow font-semibold font-rubik normal-case text-lg py-1 text-white hover:bg-lightPurple active:bg-lightPurple hover:drop-shadow transition-all ease-in-out duration-500 hover:shadow-lg focus:bg-lightPurple focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mb-3" 
			>
				Sign in
			</button>
			<button
				variant="contained"
				className="bg-purpleBody rounded-3xl shadow font-semibold font-rubik normal-case text-lg py-1 text-white hover:bg-lightPurple active:bg-lightPurple hover:drop-shadow transition-all ease-in-out duration-500 hover:shadow-lg focus:bg-lightPurple focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" 
				data-te-ripple-init
				data-te-ripple-color='#210124'
			>
				Sign up
			</button>
		</div>
	);
};
export default Authentication;

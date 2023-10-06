import { Button } from "@mui/material";
const Authentication = () => {
    const revealSignIn = () => {
        alert("Yes");
    }
    
	return (
		<div className="w-full flex flex-col">
			<Button
				variant="contained"
				className="bg-purpleBody hover:bg-purpleBody rounded-3xl shadow mb-3 font-semibold font-rubik normal-case text-lg" onClick={revealSignIn}
			>
				Sign in
			</Button>
			<Button
				variant="contained"
				className="bg-purpleBody hover:bg-purpleBody rounded-3xl shadow font-semibold font-rubik normal-case text-lg"
			>
				Sign up
			</Button>
		</div>
	);
};
export default Authentication;

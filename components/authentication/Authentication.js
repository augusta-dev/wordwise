import Button from "../UI/Button"; 
const Authentication = () => {
    const revealSignIn = () => {
        alert("Yes");
    }
    
	return (
		<div className="w-full flex flex-col">
			<Button
				variant="contained"
				className="mt-4 mb-2" 
			>
				Sign in
			</Button>
			<Button
				variant="contained"
				className="mt-1"
			>
				Sign up
			</Button>
		</div>
	);
};
export default Authentication;

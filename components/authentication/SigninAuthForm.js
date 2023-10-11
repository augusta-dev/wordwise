'use client';
import Input from "../UI/Input";
import Button from '../UI/Button'
// import form from 'next/form'
const SigninAuthForm = (props) => {
    return(
        <form>
			<Input
				className="text-lightPurple bg-white"
				placeholder="Enter your email address"
				type="email"
			>
				Enter your email address
			</Input>
			<Input
				className="text-lightPurple bg-white"
				type="password"
				placeholder="Enter your password"
			/>
            <Button
						className="mb-2 mt-8"
						type="submit"
					>
						{" "}
						Sign in
					</Button>
		</form>
    )
}
export default SigninAuthForm;
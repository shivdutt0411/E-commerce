import { Dialog, Box, TextField, Typography, Button, styled } from "@mui/material";
import { useState, useContext } from "react";
import { authenticatesignUp } from "../../services/signUp";
import { DataContext } from "../../context/DataProvider";
import { authenticatelogin } from "../../services/login";
import { displayCart } from "../../services/displayCart";


const Wrapper = styled(Box)({
    height: "70vh",
    width: "90vh",
    display: "flex",
    overflow: "hidden"
});

const LeftBox = styled(Box)({
    background: "#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 65%",
    height: "70vh",
    width: "30%",
    padding: "45px 35px",
    "&>h5": {
        fontWeight: 600,
        color: "#ffffff"

    }
})

const RightBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "25px 35px",
    flex: "1",

    "& > div, &> button, &>p": {
        marginTop: "20px"
    }
});

const LoginButton = styled(Button)({
    textTransform: "none",
    background: "#fb641b",
    color: "#fff",
    height: "48px",
    bordereRadius: "2px"

})

const RequestOTP = styled(Button)({
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: "48px",
    borderRadius: "2px",
    boxShadow: "0 2px 4px 0 rgb(0 0 0/ 20%)"

})

const CreateAccount = styled(Typography)({
    fontSize: "14px",
    textAlign: "center",
    color: "#2874f0",
    cursor: "pointer",
    fontWeight: "600"
})

const account = {
    login: {
        view: "login"
    },
    signup: {
        view: "signup"
    }
}

const initialSignUp = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    userName: "",
    password: ""

}

const initialLogin = {
    userName: "",
    password: ""
}

export default function LoginDialog({ open, setOpen }) {
    const [toggle, setToggle] = useState(account.login);
    const [signUp, setSignUp] = useState(initialSignUp);
    const[error,setError] = useState(false);
    const [login, setLogin] = useState(initialLogin)
    const { setDetails,setCartItems } = useContext(DataContext);
    function handleClose() {
        setOpen(false);
        setToggle(account.login);
        setError(false);

    }

    function handleOpen() {
        setToggle(account.signup);
        
    }

    function onInput(e) {
        setSignUp({ ...signUp, [e.target.name]: e.target.value });
    }

    function onValueChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    async function signUpUser() {
        let response = await authenticatesignUp(signUp);
        if (response.message.firstName) {
            handleClose();
            setDetails(signUp.firstName);

        }
        else {
            alert(response.message);

        }
    }

    async function loginUser() {
        try {
            let response = await authenticatelogin(login);
            if (response.message.firstName) {
                handleClose();
                setDetails({firstName:response.message.firstName,userName:response.message.userName});
                const {cart} = await displayCart(response.message.userName);
                setCartItems(cart);

            }
            else{
                setError(true);
                
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (<Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>





        {toggle.view === "login" ?
            <Wrapper>
                <LeftBox>
                    <Typography variant="h5">Login</Typography>
                    <Typography style={{ marginTop: "20px", color: "#bbbbbb" }}>Get access to your Orders, Wishlist and Recommendation</Typography>

                </LeftBox>
                <RightBox>
                    <TextField variant="standard" label="Enter Email/Mobile number" name="userName" onChange={(e) => onValueChange(e)} />
                    <TextField variant="standard" label="Enter password" name="password" onChange={(e) => onValueChange(e)} />
                    {error && <Typography style={{color:"red"}}>Please enter valid userName/password</Typography>}
                    <Typography style={{ fontSize: "12px", color: "#878787" }}>By continuing, you agree to flipkart's Terms of use and Privacy Policy.</Typography>
                    <LoginButton onClick={loginUser}>Login</LoginButton>
                    <Typography style={{ textAlign: "center" }}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={handleOpen}>New to flipkart? Create an account.</CreateAccount>
                </RightBox>
            </Wrapper> :
            <Wrapper>
                <LeftBox>
                    <Typography variant="h5">Looks like you're new here!</Typography>
                    <Typography style={{ marginTop: "20px", color: "#bbbbbb" }}>Sign up with your mobile number to get started</Typography>

                </LeftBox>
                <RightBox>
                    <TextField variant="standard" label="First Name" name="firstName" onChange={(e) => onInput(e)} />
                    <TextField variant="standard" label="Last Name" name="lastName" onChange={(e) => onInput(e)} />
                    <TextField variant="standard" label="Email" name="email" onChange={(e) => onInput(e)} />
                    <TextField variant="standard" label="Mobile Number" name="phone" onChange={(e) => onInput(e)} />
                    <TextField variant="standard" label="UserName" name="userName" onChange={(e) => onInput(e)} />
                    <TextField variant="standard" label="Password" name="password" onChange={(e) => onInput(e)} />
                    <LoginButton onClick={signUpUser}>Continue</LoginButton>
                </RightBox>
            </Wrapper>}



    </Dialog>)
}

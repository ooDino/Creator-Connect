import {VStack, ButtonGroup, FormControl, FormLabel, Button, FormErrorMessage, Input, Heading} from "@chakra-ui/react"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup";

const Login = () => {

    const navigate = useNavigate();
    
    const formik =  useFormik({
        initialValues: {username: "", password: ""},
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Username is required.")
                .min(6,"Username not long enough")
                .max(28, "Username too long!"),
            password: Yup.string()
                .required("Password is required.")
                .min(6,"Password not long enough")
                .max(28, "Password too long!"),
        }),
        onSubmit: (values, actions) => {
            const vals = {...values}
            actions.resetForm();
            fetch ("http://localhost:4000/auth/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(vals),
            }).catch(err => {
                return;
            }).then(res => {
                if (!res || !res.ok || res.status >= 400) {
                    return;
                }
                return res.json();
            })
            .then(data => {
                if (!data) return;
                navigate("/landing");
            });
        },
    });

    return (
        <VStack 
            as="form" 
            w={{base:"90%", md: "500px"}} 
            m="auto" 
            justify="center" 
            h="100vh"
            spacing="1rem"
            onSubmit={formik.handleSubmit}
        >
            
            <Heading>Log In</Heading>

            <FormControl isInvalid={formik.errors.username && formik.touched.username}>
                <FormLabel>Username</FormLabel>
                <Input 
                    name="username" 
                    placeholder="Enter desired username" 
                    autoComplete="off"
                    size="lg"
                    {...formik.getFieldProps("username")}
                />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
            
            <FormControl isInvalid={formik.errors.password && formik.touched.password}>
                <FormLabel>Password</FormLabel>
                <Input 
                    name="password" 
                    placeholder="Enter desired password" 
                    autoComplete="off"
                    size="lg"
                    type="password"
                    {...formik.getFieldProps("password")}
                />
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>        
            </FormControl>

            <ButtonGroup pt="1rem">
                <Button colorScheme="teal" type="submit">Log In</Button>
                <Button onClick={() => navigate("/signup")}>Create Account</Button>
            </ButtonGroup>
        </VStack>
    );
};

export default Login;
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import uselogin from "../../hooks/uselogin";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: 'user@gmail.com',
        password: '123456',
    });

    const [showPassword, setShowPassword] = useState(false);

    const { loading, error, login } = uselogin();

    return (
        <>
            <Input placeholder="Enter email" size={"sm"} type="email" fontSize={15}
                value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <InputGroup>
                <Input
                    placeholder="Enter password"
                    type={showPassword ? "text" : "password"}
                    fontSize={15}
                    value={inputs.password}
                    size={"sm"}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                <InputRightElement h={"full"}>
                    <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>

            {
                error && (
                    <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                        <AlertIcon size={4} />
                        {error.message}
                    </Alert>
                )
            }

            <Button w={'full'} colorScheme="blue" isLoading={loading} onClick={() => login(inputs)}>
                Login
            </Button>
        </>
    )
}

export default Login

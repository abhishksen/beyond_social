import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react"
import { useState } from "react"
import uselogin from "../../hooks/uselogin";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: 'user@gmail.com',
        password: '123456',
    });

    const { loading, error, login } = uselogin();

    return (
        <>
            <Input placeholder="Enter email" size={"sm"} type="email" fontSize={15}
                value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input placeholder="Enter password" size={"sm"} type="password" fontSize={15}
                value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />

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

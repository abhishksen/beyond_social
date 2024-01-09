import { Button, Input } from "@chakra-ui/react"
import { useState } from "react"

const Login = () => {
    const [inputs, setInputs] = useState({
        email: 'user@gmail.com',
        password: '123456',
    })

    return (
        <>
            <Input placeholder="Enter email" size={"sm"} type="email" fontSize={15}
                value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input placeholder="Enter password" size={"sm"} type="password" fontSize={15}
                value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <Button w={'full'} colorScheme="blue">
                Login
            </Button>
        </>
    )
}

export default Login

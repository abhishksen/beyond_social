import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <Input placeholder="Name" type="text" fontSize={15}
                value={inputs.fullName} size={"sm"} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
            <Input placeholder="Username" type="text" fontSize={15}
                value={inputs.userName} size={"sm"} onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
            />
            <Input placeholder="Enter email" type="email" fontSize={15}
                value={inputs.email} size={"sm"} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
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
            <Button w={'full'} colorScheme="blue">
                Create Account
            </Button>
        </>
    )
}

export default Signup

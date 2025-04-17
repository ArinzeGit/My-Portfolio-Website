interface Props {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const validateName = (name:string) => {
    if (name === "") {
        return ( "Name is required");
    }
    return "";
}

export const validateEmail = (email:string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    if (email === "") {
        return ( "Email is required");
    } else if (!emailPattern.test(email)) {
        return ( "Enter a valid email");

    }
    return "";
}

export const validateMessage = (message:string) => {
    if (message === "") {
        return ( "Message is empty");
    }
    return "";
}
    
const validateFormInput = ({ name, email, subject, message }: Props) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
    let error:Props = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
    error.name=validateName(name);
    error.email=validateEmail(email);
    error.message=validateMessage(message);
    return error;
};

export default validateFormInput;
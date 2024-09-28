"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import BorderLabel from "@/components/atoms/BorderLabel";
import LoginIcon from "@mui/icons-material/Login";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const SignUpPage = () => {
  const handleChange = () => {
    alert("onchange!");
  };
  return (
    <>
      <div className="flex flex-col space-y-2 border-b-2 py-2">
        <h3 className="text-start text-2xl ">Sign Up</h3>
        <Label className="text-start">Email:</Label>
        <Input size="large" type="email" onChange={handleChange}></Input>
        <Label className="text-start">Password:</Label>
        <Input size="large" type="password" onChange={handleChange}></Input>
        <Button size="small" color="secondary" onClick={handleChange}>
          <span className="px-2">
            <LoginIcon />
          </span>
          SIGN IN
        </Button>
        <div className="flex justify-start">
          <BorderLabel href="/auth/signin">Back to Sign In</BorderLabel>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;

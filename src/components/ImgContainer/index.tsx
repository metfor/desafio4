import { Contaier, MyImage } from "./styles";

export function ImgContainer() {
  return (
    <Contaier>
      <MyImage
        className="img"
        src="/../public/login.svg"
        alt="login"
        width="300"
        height="302"
      />
    </Contaier>
  );
}

import { FcAbout, FcGoogle } from "react-icons/fc";
import {
  Contaier,
  Title,
  Welcome,
  Content,
  LoginP,
  Form,
  InputLogin,
  Checkbox,
  TextBox,
  MyP,
  MyLink,
  Box,
  BoxLink,
  MyButtonLogin,
  ButtonGoogleLogin,
  BoxCadastro,
  BoxButton,
  BoxIcon,
} from "./styles";

export function Login() {
  return (
    <Contaier>
      <Content>
        <Welcome>Bem vindo de volta</Welcome>
        <Title>Faça login na sua conta</Title>
        <LoginP>E-mail</LoginP>
        <InputLogin placeholder="codelandia@gmail.com" />
        <LoginP>Senha</LoginP>
        <InputLogin type="password" placeholder="*********" />
        <TextBox>
          <Box>
            <Checkbox type="checkbox" />
            <MyP>Lembre de mim</MyP>
          </Box>
          <BoxLink>
            <MyLink href="/">Esqueceu sua senha ? </MyLink>
          </BoxLink>
        </TextBox>
        <MyButtonLogin>Entrar</MyButtonLogin>
        <BoxButton>
          <BoxIcon>
        <FcGoogle />
        </BoxIcon>
        <ButtonGoogleLogin>
          
           Ou faça login com o Google
        </ButtonGoogleLogin>
        </BoxButton>
        <BoxCadastro>
          <MyP>
            Não tem conta? <MyLink href="/">Cadastre-se</MyLink>
          </MyP>
        </BoxCadastro>
      </Content>
    </Contaier>
  );
}

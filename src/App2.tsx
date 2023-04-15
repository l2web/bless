import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';

import './styles/global.css';

export function App() {
  return (
    <><section className="bg-purple-900 transition-colors duration-500">
      <div className="container w-full h-screen flex">
        <div className="user signinBox w-1/2 relative">
          <div className="imgBox absolute w-full h-full">
            <div className="bg-gradient-to-br from-purple-700 via-purple-900 to-purple-700 w-full h-full animate-gradient" />
          </div>
          <div className="formBox flex items-center justify-center w-full h-full p-8">
            <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
              <label htmlFor="email" className="flex flex-col gap-3">
                <Text className="font-semibold">Endereço de e-mail</Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Envelope />
                  </TextInput.Icon>

                  <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
                </TextInput.Root>
              </label>

              <label htmlFor="password" className="flex flex-col gap-3">
                <Text className="font-semibold">Sua senha</Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Lock />
                  </TextInput.Icon>

                  <TextInput.Input type="password" id="password" placeholder="******" />
                </TextInput.Root>
              </label>

              <label htmlFor="remember" className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
              </label>

              <Button type="submit" className="mt-4">Entrar na plataforma</Button>
            </form>

            <footer className="flex flex-col items-center gap-4 mt-8">
              <Text asChild size="sm">
                <a href="" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
              </Text>
              <Text asChild size="sm">
                <a href="" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma agora!</a>
              </Text>
            </footer>
          </div>
        </div>
      </div></section></>
  )
}
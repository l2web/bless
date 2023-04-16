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
    <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-600 bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 animate-gradient">
     <header className="flex flex-col items-center justify-center">
      
    <Text size="lg" className="text-gray-400 mt-1">
      Faça login e comece a usar!
    </Text>
  </header>

      <div className="feature-item bg-white flex flex-col items-center justify-top max-h-96 shadow-md">
      <div className="flex items-center">
        <Logo />
        <Heading size="lg" className="ml-2 font-semibold text-gray-900">
          Bless
        </Heading>
        </div>
        <form className="flex flex-col gap-2 items-stretch w-full max-w-sm mt-10 mr-10 ml-10">        
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold text-gray-400">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>

              <TextInput.Input type="email" id="email" placeholder="Digite seu e-mail" />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-3">
            <Text className="font-semibold text-gray-400">Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>

              <TextInput.Input type="password" id="password" placeholder="******" />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Text size="sm" className="text-gray-300">Lembrar de mim por 30 dias</Text>
          </label>

          <Button type="submit" className="mt-4">Entrar na plataforma</Button>
        </form>

        <footer className="flex flex-col items-center gap-2 mt-2">
          <Text asChild size="sm">
            <a href="" className="text-gray-800 underline hover:text-gray-400">Esqueceu sua senha?</a>
          </Text>
          <Text asChild size="sm">
            <a href="" className="text-gray-800 underline hover:text-gray-400">Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
      </div>
    </div>
  );
}

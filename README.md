# Barber Less - Website da Barbearia

Uma aplicação web moderna e responsiva para a barbearia Barber Less, localizada em São Paulo. O projeto oferece uma interface intuitiva para visualização de serviços, profissionais e agendamentos via WhatsApp.

## 📋 Funcionalidades

### Principais Recursos
- **Interface Responsiva**: Design adaptativo que funciona em desktop, tablet e mobile
- **Sistema de Abas**: Navegação por diferentes seções (Serviços, Profissionais, Fidelidade, etc.)
- **Agendamento via WhatsApp**: Integração direta com WhatsApp para facilitar os agendamentos
- **Busca de Serviços**: Funcionalidade de pesquisa para encontrar serviços específicos
- **Informações Completas**: Horários, localização, formas de pagamento e comodidades

### Seções Disponíveis
- **Serviços**: Lista completa com preços, duração e botões de agendamento
- **Profissionais**: Equipe disponível com opção de seleção
- **Comodidades**: Wi-fi, estacionamento, acessibilidade e atendimento infantil
- **Informações**: Localização, horários, formas de pagamento e contatos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com variáveis CSS e design responsivo
- **JavaScript Vanilla**: Interatividade e funcionalidades dinâmicas
- **Font Awesome 6.4.0**: Ícones profissionais
- **Google Fonts**: Tipografia otimizada

## 🎨 Design e UX

### Características do Design
- **Tema Dark**: Interface moderna com fundo escuro e contraste otimizado
- **Paleta de Cores**: 
  - Preto (#000000) como cor principal
  - Laranja (#ff9800) para destaques e CTAs
  - Verde (#4CAF50) para preços e badges
  - Cinza (#aaa, #777) para textos secundários

### Experiência do Usuário
- **Navegação Intuitiva**: Sistema de abas para organização do conteúdo
- **Feedback Visual**: Hover effects e transições suaves
- **Responsividade**: Adaptação automática para diferentes tamanhos de tela
- **Acessibilidade**: Estrutura semântica e contraste adequado

## 📱 Responsividade

### Breakpoints
- **Desktop**: > 992px - Layout com sidebar fixa
- **Tablet**: 768px - 992px - Sidebar adaptativa
- **Mobile**: < 576px - Layout vertical otimizado

### Adaptações Mobile
- Header reorganizado verticalmente
- Grid de comodidades reduzido para 2 colunas
- Serviços em layout vertical
- Sidebar transformada em seção inferior

## 🚀 Como Executar

### Requisitos
- Navegador web moderno
- Servidor local (opcional, mas recomendado)

### Instalação
1. Clone ou baixe o projeto
2. Certifique-se de que a estrutura de pastas está correta:
   ```
   projeto/
   ├── index.html
   ├── src/
   │   ├── styles/
   │   │   ├── reset.css
   │   │   └── main.css
   │   ├── imagem/
   │   │   ├── icone_png.png
   │   │   ├── oie_123462534IV5DQ6.png
   │   │   ├── icone-servicos.png
   │   │   └── icone-profissional.png
   │   └── index.js
   ```
3. Abra o arquivo `index.html` em um navegador

### Servidor Local (Recomendado)
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (live-server)
npx live-server

# Com PHP
php -S localhost:8000
```

## 🏪 Informações da Barbearia

### Localização
**Endereço**: Rua José Barros Magaldi, 301 - Jardim São João  
**CEP**: 05815-000  
**Cidade**: São Paulo/SP

### Horários de Funcionamento
- **Terça a Quinta**: 10:00 - 20:00
- **Sexta e Sábado**: 08:00 - 20:00
- **Domingo e Segunda**: Fechado

### Contato
- **Telefone/WhatsApp**: (11) 96258-1678
- **Instagram**: [@barberless_](https://www.instagram.com/barberless_?igsh=Zjl0dTF)

## 💰 Serviços Disponíveis

| Serviço | Preço | Duração |
|---------|-------|---------|
| Barba | R$ 30,00 | 15 min |
| Botox | R$ 50,00 | 90 min |
| Celagem | R$ 100,00 | 105 min |
| Corte | R$ 40,00 | 45 min |
| Corte e Barba | R$ 70,00 | 60 min |
| Corte e Sobrancelha | R$ 45,00 | 45 min |
| Nevou | R$ 100,00 | 105 min |
| Penteado | R$ 30,00 | 30 min |
| Pezinho | R$ 20,00 | 15 min |
| Pezinho e Sobrancelha | R$ 30,00 | 30 min |
| Sobrancelha | R$ 15,00 | 15 min |

## 💳 Formas de Pagamento

- Dinheiro
- Cartão de Crédito
- Cartão de Débito

## 🏗️ Estrutura do Código

### Arquivos Principais
- **index.html**: Estrutura principal da aplicação
- **src/styles/main.css**: Estilos customizados e responsividade
- **src/styles/reset.css**: Reset CSS para consistência entre navegadores
- **src/index.js**: Lógica JavaScript para interatividade

### Componentes
- **Header**: Logo, avaliação e botão de agendamento
- **Banner**: Imagem principal da barbearia
- **Navigation**: Sistema de abas para diferentes seções
- **Services**: Lista de serviços com busca e agendamento
- **Professionals**: Equipe disponível
- **Sidebar**: Informações complementares (horários, localização, contato)

## 🔧 Funcionalidades JavaScript

### Principais Funcionalidades
- **Sistema de Abas**: Navegação entre diferentes seções
- **Agendamento**: Redirecionamento para WhatsApp com dados pré-preenchidos
- **Busca**: Filtro de serviços e profissionais em tempo real
- **Favoritos**: Toggle para marcar a barbearia como favorita
- **Informações**: Modals informativos sobre comodidades

### Integrações
- **WhatsApp API**: Para agendamentos e contato direto
- **Font Awesome**: Biblioteca de ícones
- **Responsive Design**: Adaptação automática para diferentes dispositivos

## 📊 Características Técnicas

### Performance
- Carregamento otimizado de recursos
- Uso de CDN para bibliotecas externas
- CSS com variáveis para manutenção eficiente
- JavaScript vanilla para melhor performance

### SEO e Acessibilidade
- Estrutura HTML semântica
- Meta tags apropriadas
- Alt texts para imagens
- Contraste de cores adequado

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Barber Less. Todos os direitos reservados.

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato:
- **WhatsApp**: (11) 96258-1678
- **Instagram**: [@barberless_](https://www.instagram.com/barberless_?igsh=Zjl0dTF)

---

**Desenvolvido para Barber Less - Barbearia Profissional em São Paulo**

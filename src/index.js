// Função para alternar entre as abas
function switchTab(tabName) {
    // Oculta todos os conteúdos das abas
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove a classe ativa de todas as abas
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Ativa a aba selecionada
    document.querySelector(`.nav-tab[data-tab="${tabName}"]`).classList.add('active');

    // Exibe o conteúdo da aba selecionada
    const targetContent = document.getElementById(tabName);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // Adiciona ou remove a classe tab-services-active no container
    const container = document.querySelector('.container');
    if (tabName === 'services') {
        container.classList.add('tab-services-active');
    } else {
        container.classList.remove('tab-services-active');
    }
}

// Configurar listeners para as abas
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        const tabName = this.getAttribute('data-tab');
        switchTab(tabName);
    });
});

// Favorite button toggle
const favoriteBtn = document.querySelector('.favorite-btn');
favoriteBtn.addEventListener('click', function () {
    const icon = this.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.style.color = '#ff4d4d';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.style.color = '#777';
    }
});

// Schedule button - Modificado para WhatsApp
document.querySelector('.schedule-btn').addEventListener('click', function () {
    const confirmed = confirm('Deseja iniciar um agendamento na Barber Less?');
    if (confirmed) {
        // Redireciona para o link do WhatsApp
        window.location.href = 'https://api.whatsapp.com/send?phone=5511962581678';
    }
});

// Botões de agendamento de serviços - Modificado para WhatsApp
document.querySelectorAll('.service-book-btn').forEach(button => {
    button.addEventListener('click', function () {
        const serviceName = this.closest('.service-item').querySelector('.service-name').textContent;
        const servicePrice = this.closest('.service-item').querySelector('.service-price').textContent;
        const serviceDuration = this.closest('.service-item').querySelector('.service-duration').textContent.trim();

        const confirmed = confirm(`Confirmar agendamento para:
Serviço: ${serviceName}
Preço: ${servicePrice}
Duração: ${serviceDuration}`);

        if (confirmed) {
            // Redireciona para o link do WhatsApp com informações do serviço
            const message = encodeURIComponent(`Olá! Gostaria de agendar: ${serviceName} - ${servicePrice} - ${serviceDuration}`);
            window.location.href = `https://api.whatsapp.com/send?phone=5511962581678&text=${message}`;
        }
    });
});

// Amenity items click
document.querySelectorAll('.amenity-item').forEach(item => {
    item.addEventListener('click', function () {
        const amenityName = this.querySelector('.amenity-name').textContent;
        let message = '';

        switch (amenityName) {
            case 'Wi-fi':
                message = 'Wi-fi gratuito disponível para clientes.';
                break;
            case 'Estacionamento':
                message = 'Estacionamento disponível próximo ao estabelecimento.';
                break;
            case 'Acessibilidade':
                message = 'Estabelecimento com acesso para cadeirantes.';
                break;
            case 'Atende crianças':
                message = 'Atendemos crianças de todas as idades.';
                break;
        }

        if (message) {
            alert(message);
        }
    });
});

// Map button
document.querySelector('.map-btn').addEventListener('click', function () {
    alert('Abrindo mapa para Rua José Barros Magaldi, 301 - São Paulo/SP');
});

// Funcionalidade de pesquisa para serviços
const searchServiceInput = document.querySelector('#services .search-bar input');
if (searchServiceInput) {
    searchServiceInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const serviceItems = document.querySelectorAll('#services .service-item');

        serviceItems.forEach(item => {
            const serviceName = item.querySelector('.service-name').textContent.toLowerCase();
            if (serviceName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Funcionalidade de pesquisa para profissionais
const searchProfessionalsInput = document.querySelector('#professionals .search-bar input');
if (searchProfessionalsInput) {
    searchProfessionalsInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const professionalItems = document.querySelectorAll('.professional-item');

        professionalItems.forEach(item => {
            const professionalName = item.querySelector('.professional-name').textContent.toLowerCase();
            if (professionalName.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Data atual para badge "HOJE" no horário
const today = new Date().getDay(); // 0 = domingo, 1 = segunda, etc.
const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
const scheduleDays = document.querySelectorAll('.schedule-day');

scheduleDays.forEach(day => {
    const dayText = day.textContent.trim();
    if (days[today] === dayText) {
        // Remove qualquer badge existente
        const existingBadge = day.querySelector('.today-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        const badge = document.createElement('span');
        badge.classList.add('today-badge');
        badge.textContent = 'HOJE';
        day.appendChild(badge);
    }
});

// Funcionalidade para seleção de profissionais
document.querySelectorAll('.professional-select-btn').forEach(button => {
    button.addEventListener('click', function () {
        const professionalName = this.closest('.professional-item').querySelector('.professional-name').textContent;

        // Perguntar se deseja agendar com este profissional
        const confirmed = confirm(`Deseja agendar com: ${professionalName}?`);
        if (confirmed) {
            // Redireciona para o WhatsApp mencionando o profissional
            const message = encodeURIComponent(`Olá! Gostaria de agendar um horário com ${professionalName}.`);
            window.location.href = `https://api.whatsapp.com/send?phone=5511962581678&text=${message}`;
        }

        // Destaque o profissional selecionado
        document.querySelectorAll('.professional-item').forEach(item => {
            item.style.backgroundColor = '';
        });
        this.closest('.professional-item').style.backgroundColor = '#222';
    });
});

// Inicializa a aba "serviços" como ativa por padrão
document.addEventListener('DOMContentLoaded', function () {
    switchTab('services');
});
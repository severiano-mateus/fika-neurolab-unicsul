// ==========================================================================
// 1. ROTAS E VISTAS DA SINGLE PAGE APPLICATION (SPA)
// ==========================================================================
const rotas = {
    inicio: {
        titulo: "Projeto: Fika NeuroLab",
        gridClass: "grid-8",
        exibirSidebar: true,
        render: () => `
            <section class="apresentacao">
                <img src="./img/blue1.webp" alt="Ilustração da neurodiversidade" class="img-apresentacao" onerror="this.style.display='none'">
                <h2>Inclusão e Diversidade<br>Cognitiva no Mercado de Tecnologia</h2>
                <p>Conectando a pluralidade de mentes neurodivergentes a oportunidades reais em TI, promovendo autonomia, equidade e transformação cultural nas empresas.</p>
                <p><em>O <strong>Fika NeuroLab</strong> é uma organização sem fins lucrativos que nasceu para impulsionar a inclusão de pessoas no espectro autista (TEA) e neurodivergentes no mercado de trabalho. Entendemos que a verdadeira inovação no universo da Tecnologia da Informação só é possível através da diversidade de mentes e vivências. Atuamos para transformar os processos seletivos tradicionais, preparando profissionais para o mercado e capacitando empresas para construírem culturas corporativas genuinamente acolhedoras e acessíveis.</em></p> 
            </section>

            <section>
                <h2>Impacto e Transformação Digital</h2>
                <p>Acreditamos que a neurodiversidade é um motor de inovação. Profissionais autistas e neurodivergentes trazem perspetivas únicas, alta capacidade de foco, pensamento analítico e habilidades de resolução de problemas que transformam o ecossistema de Tecnologia da Informação.</p>
            </section>

            <section>
                <h2>Nossos Pilares de Atuação</h2>
                <p>Para construir pontes sólidas entre talentos e o mercado de trabalho, atuamos em três frentes estratégicas: a capacitação técnica e comportamental de profissionais, a consultoria para adaptação de processos seletivos e a consciencialização das lideranças corporativas.</p>
            </section>

            <section>
                <h2>Apoiando Mentes e Conectando Futuros</h2>
                <p>Oferecemos suporte contínuo desde o mentorado individual até à integração completa nas equipas de desenvolvimento. Para as empresas parceiras, fornecemos formações e acompanhamento especializado para garantir um ambiente acessível, acolhedor e de alta performance.</p>
            </section>
        `
    },
    projetos: {
        titulo: "Projetos - Fika NeuroLab",
        gridClass: "grid-full",
        exibirSidebar: false,
        render: () => `
            <section class="apresentacao">
                <h2>Nossas Iniciativas e Projetos</h2>
                <p>Desenvolvemos programas focados na capacitação, inclusão no mercado de trabalho e criação de redes de apoio para pessoas neurodivergentes na área de Tecnologia da Informação.</p>
            </section>

            <section id="inclusao" style="margin-top: 1.5rem;">
                <h2>Inclusão Digital e Capacitação Técnica</h2>
                <p>Oferecemos trilhas de aprendizagem acessíveis voltadas ao desenvolvimento de software, design de interfaces (UI/UX) e análise de dados. Nossos cursos são adaptados para respeitar diferentes ritmos e estilos de aprendizagem.</p>
            </section>

            <section id="mentorias" style="margin-top: 1.5rem;">
                <h2>Mentorias Individuais e Carreira</h2>
                <p>Conectamos profissionais neurodivergentes a mentores experientes do mercado de TI. Trabalhamos desde a preparação para entrevistas e construção de portfólios até o desenvolvimento de soft skills e adaptação ao ambiente corporativo.</p>
            </section>

            <section id="parcerias" style="margin-top: 1.5rem;">
                <h2>Parcerias Corporativas e Consultoria</h2>
                <p>Atuamos em conjunto com empresas de tecnologia para revisar processos seletivos, promover treinamentos de conscientização para lideranças e estruturar ambientes de trabalho verdadeiramente inclusivos.</p>
            </section>
        `
    },
    cadastro: {
        titulo: "Cadastro - Fika NeuroLab",
        gridClass: "grid-full",
        exibirSidebar: false,
        render: () => `
            <section class="apresentacao">
                <h2>Faça Parte da Nossa Comunidade</h2>
                <p>Preencha o formulário abaixo para realizar o seu cadastro no <strong>Instituto Fika NeuroLab</strong>. Seus dados são coletados com total segurança e utilizados exclusivamente para integrar você às nossas iniciativas de inclusão, mentorias ou redes de apoio.</p>
            </section>

            <section class="engajamento" style="margin-top: 1.5rem;">
                <h2>Formulário de Inscrição</h2>

                <div class="alert alert-success" style="display: none;" id="mensagem-sucesso-cadastro">
                    Cadastro realizado com sucesso! Seus dados foram salvos no localStorage.
                </div>

                <form id="form-cadastro-completo" novalidate>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        
                        <label for="nome">Nome Completo</label>
                        <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">
                        <span class="field-error-text">Digite o nome completo.</span>

                        <label for="nascimento">Data de Nascimento</label>
                        <input type="date" id="nascimento" name="nascimento" required>
                        <span class="field-error-text">Informe sua data de nascimento.</span>

                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
                        <span class="field-error-text">CPF inválido.</span>

                        <label for="perfil">Como deseja participar?</label>
                        <select id="perfil" name="perfil" required>
                            <option value="" disabled selected>Selecione seu perfil de interesse</option>
                            <option value="voluntario">Voluntário / Mentor</option>
                            <option value="doador">Doador / Apoiador</option>
                            <option value="parceiro">Empresa Parceira</option>
                            <option value="neurodivergente">Participante Neurodivergente</option>
                        </select>
                        <span class="field-error-text">Selecione uma opção.</span>
                    </fieldset>

                    <fieldset>
                        <legend>Informações de Contato</legend>
                        
                        <label for="email">E-mail Principal</label>
                        <input type="email" id="email" name="email" required placeholder="seuemail@dominio.com">
                        <span class="field-error-text">Insira um e-mail válido.</span>

                        <label for="telefone">Telefone / WhatsApp</label>
                        <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000">
                        <span class="field-error-text">Telefone inválido.</span>
                    </fieldset>

                    <button type="submit">Concluir Cadastro</button>
                </form>
            </section>
        `
    },
    sobre: {
        titulo: "Sobre o Autor - Fika NeuroLab",
        gridClass: "grid-full",
        exibirSidebar: false,
        render: () => `
            <section class="apresentacao">
                <h2>Sobre o Criador do Projeto</h2>
                <p>Conheça a trajetória e a motivação por trás da idealização do <strong>Fika NeuroLab</strong>.</p>
            </section>

            <section class="historia-autor" style="margin-top: 1.5rem;">
                <h2>Raízes e o Primeiro Contato com criação Web</h2>
                <p>Natural de Araçatuba, sempre fui uma criança curiosa e cheia de "porquês". Aprendi a ler cedo e, aos 13 anos, encontrei no <strong>RPG Maker</strong> a forma perfeita de unir as histórias e mundos que criava na mente com a programação.</p>
                <p>Essa paixão por criar e partilhar conteúdo na internet expandiu-se rapidamente para a criação de sites e blogs. No passado, mergulhei de cabeça neste universo desenvolvendo páginas em plataformas como Blogspot e Tumblr, dedicadas a conteúdos e comunidades de jogos.</p>

                <h2 style="margin-top: 1.5rem;">Caminho Académico e Profissional</h2>
                <p>Atualmente, sigo a minha jornada académica na graduação de Análise e Desenvolvimento de Sistemas (ADS). No cenário profissional, atuo como atendente de controle técnico na área de VP e engenharia de serviço aos clientes na Vivo, unindo a resolução analítica de problemas ao suporte tecnológico.</p>

                <h2 style="margin-top: 1.5rem;">A Paixão Redescobrida</h2>
                <p>Hoje, sinto-me completamente apaixonado novamente por criação de sites. Aquele entusiasmo de antigamente evoluiu: crio protótipos de interfaces no Figma e me aventurando em criação de sites, transformando ideias em projetos reais.</p>

                <h2 style="margin-top: 1.5rem;">O Propósito do Fika NeuroLab</h2>
                <p>O <strong>Fika NeuroLab</strong> nasce dessa fusão entre a tecnologia, o design e o desejo genuíno de inclusão. Acredito que a diversidade cognitiva é um motor potente de inovação, e o meu objetivo é construir pontes que transformem o mercado de TI num espaço plural, acessível e acolhedor para todos.</p>
            </section>
        `
    }
};

// ==========================================================================
// 2. ROTEADOR E INTERCEPTAÇÃO DE NAVEGAÇÃO
// ==========================================================================
function navegarPara(nomeRota, ancora = null, salvarHistorico = true) {
    const rota = rotas[nomeRota] || rotas.inicio;
    const containerMain = document.getElementById("conteudo-principal");
    const colunaLateral = document.getElementById("coluna-lateral");

    if (!containerMain) return;

    // Atualiza Conteúdo e Classe do Grid
    containerMain.innerHTML = rota.render();
    containerMain.className = rota.gridClass;

    // Alterna Visibilidade da Coluna Lateral
    if (colunaLateral) {
        colunaLateral.style.display = rota.exibirSidebar ? "flex" : "none";
    }

    // Atualiza Título
    document.title = rota.titulo;

    // Atualiza Estado Visual do Menu
    document.querySelectorAll(".menu-principal a").forEach(link => {
        if (link.getAttribute("data-pagina") === nomeRota) {
            link.classList.add("menu-ativo");
        } else {
            link.classList.remove("menu-ativo");
        }
    });

    // Atualiza Histórico
    if (salvarHistorico) {
        const hash = ancora ? `#${nomeRota}/${ancora}` : `#${nomeRota}`;
        history.pushState({ rota: nomeRota, ancora: ancora }, rota.titulo, hash);
    }

    // Scroll Suave para Âncoras
    if (ancora) {
        setTimeout(() => {
            const elAncora = document.getElementById(ancora);
            if (elAncora) elAncora.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        window.scrollTo(0, 0);
    }

    // Fecha Drawer Mobile
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle && menuToggle.checked) {
        menuToggle.checked = false;
    }

    // Reatribui Validações
    if (nomeRota === "inicio") {
        inicializarValidacaoFormulario();
    }

    if (nomeRota === "cadastro") {
        inicializarFormCadastroDinâmico();
    }
}

// ==========================================================================
// 3. INICIALIZAÇÃO E EVENTOS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const link = e.target.closest("[data-pagina]");
        if (link) {
            e.preventDefault();
            const rota = link.getAttribute("data-pagina");
            const ancora = link.getAttribute("data-ancora") || null;
            navegarPara(rota, ancora);
        }
    });

    window.addEventListener("popstate", (e) => {
        if (e.state && e.state.rota) {
            navegarPara(e.state.rota, e.state.ancora, false);
        } else {
            processarHashURL();
        }
    });

    processarHashURL();
    inicializarAcessibilidade();
    inicializarMenuMobile();
    inicializarValidacaoFormulario();
});

function processarHashURL() {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
        const partes = hash.split("/");
        const rota = partes[0];
        const ancora = partes[1] || null;
        if (rotas[rota]) {
            navegarPara(rota, ancora, false);
            return;
        }
    }
    navegarPara("inicio", null, false);
}

// ==========================================================================
// 4. PERSISTÊNCIA E LOCALSTORAGE
// ==========================================================================
const CHAVE_CADASTROS = 'fika_neurolab_cadastros';
const CHAVE_ACESSIBILIDADE = 'fika_neurolab_acessibilidade';

function salvarCadastroStorage(dados) {
    const cadastros = obterCadastrosStorage();
    cadastros.push({
        ...dados,
        dataCriacao: new Date().toISOString()
    });
    localStorage.setItem(CHAVE_CADASTROS, JSON.stringify(cadastros));
}

function obterCadastrosStorage() {
    const dados = localStorage.getItem(CHAVE_CADASTROS);
    return dados ? JSON.parse(dados) : [];
}

function salvarPreferenciasAcessibilidade(preferencias) {
    localStorage.setItem(CHAVE_ACESSIBILIDADE, JSON.stringify(preferencias));
}

function obterPreferenciasAcessibilidade() {
    const dados = localStorage.getItem(CHAVE_ACESSIBILIDADE);
    return dados ? JSON.parse(dados) : { tamanhoFonte: 1, altoContraste: false };
}

// ==========================================================================
// 5. MÓDULO DE ACESSIBILIDADE E MENU
// ==========================================================================
function inicializarAcessibilidade() {
    const btnAumentar = document.getElementById('btn-aumentar-fonte');
    const btnDiminuir = document.getElementById('btn-diminuir-fonte');
    const btnContraste = document.getElementById('btn-alto-contraste');

    let prefs = obterPreferenciasAcessibilidade();
    aplicarPreferencias(prefs);

    if (btnAumentar) {
        btnAumentar.addEventListener('click', () => {
            if (prefs.tamanhoFonte < 1.3) {
                prefs.tamanhoFonte = parseFloat((prefs.tamanhoFonte + 0.1).toFixed(1));
                aplicarPreferencias(prefs);
            }
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener('click', () => {
            if (prefs.tamanhoFonte > 0.8) {
                prefs.tamanhoFonte = parseFloat((prefs.tamanhoFonte - 0.1).toFixed(1));
                aplicarPreferencias(prefs);
            }
        });
    }

    if (btnContraste) {
        btnContraste.addEventListener('click', () => {
            prefs.altoContraste = !prefs.altoContraste;
            aplicarPreferencias(prefs);
        });
    }

    function aplicarPreferencias(p) {
        document.documentElement.style.setProperty('--font-size', `${p.tamanhoFonte}rem`);
        if (p.altoContraste) {
            document.body.classList.add('alto-contraste');
        } else {
            document.body.classList.remove('alto-contraste');
        }
        salvarPreferenciasAcessibilidade(p);
    }
}

function inicializarMenuMobile() {
    const menuToggle = document.getElementById('menu-toggle');
    const linksMenu = document.querySelectorAll('nav#menu a');

    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle && menuToggle.checked) {
                menuToggle.checked = false;
            }
        });
    });
}

// ==========================================================================
// 6. VALIDAÇÕES DE FORMULÁRIO
// ==========================================================================
function inicializarValidacaoFormulario() {
    const form = document.getElementById('form-contato-ajuda');
    if (!form) return;

    const inputNome = document.getElementById('nome-ajuda');
    const inputEmail = document.getElementById('email-ajuda');
    const inputMensagem = document.getElementById('mensagem-ajuda');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    if (inputNome) inputNome.addEventListener('input', () => validarNome(inputNome));
    if (inputEmail) inputEmail.addEventListener('input', () => validarEmail(inputEmail));
    if (inputMensagem) inputMensagem.addEventListener('input', () => validarMensagem(inputMensagem));

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNomeValido = validarNome(inputNome);
        const isEmailValido = validarEmail(inputEmail);
        const isMensagemValida = validarMensagem(inputMensagem);

        if (isNomeValido && isEmailValido && isMensagemValida) {
            const dadosFormulario = {
                origem: 'ajuda_lateral',
                nome: inputNome.value.trim(),
                email: inputEmail.value.trim(),
                mensagem: inputMensagem.value.trim()
            };

            salvarCadastroStorage(dadosFormulario);

            if (msgSucesso) {
                msgSucesso.style.display = 'block';
                setTimeout(() => { msgSucesso.style.display = 'none'; }, 5000);
            }

            form.reset();
            limparEstadosCampos([inputNome, inputEmail, inputMensagem]);
        }
    });
}

function inicializarFormCadastroDinâmico() {
    const form = document.getElementById('form-cadastro-completo');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valido = true;

        Array.from(form.elements).forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'SELECT') {
                const erroSpan = el.nextElementSibling;
                if (!el.checkValidity() || el.value.trim() === '') {
                    el.classList.remove('campo-valido');
                    el.classList.add('campo-invalido');
                    if (erroSpan && erroSpan.classList.contains('field-error-text')) {
                        erroSpan.style.display = 'block';
                    }
                    valido = false;
                } else {
                    el.classList.remove('campo-invalido');
                    el.classList.add('campo-valido');
                    if (erroSpan && erroSpan.classList.contains('field-error-text')) {
                        erroSpan.style.display = 'none';
                    }
                }
            }
        });

        if (valido) {
            const dadosCadastro = {
                origem: 'cadastro_completo',
                nome: document.getElementById('nome')?.value.trim(),
                nascimento: document.getElementById('nascimento')?.value,
                cpf: document.getElementById('cpf')?.value.trim(),
                perfil: document.getElementById('perfil')?.value,
                email: document.getElementById('email')?.value.trim(),
                telefone: document.getElementById('telefone')?.value.trim()
            };

            salvarCadastroStorage(dadosCadastro);

            const msgSucesso = document.getElementById('mensagem-sucesso-cadastro');
            if (msgSucesso) {
                msgSucesso.style.display = 'block';
                setTimeout(() => { msgSucesso.style.display = 'none'; }, 5000);
            }
            form.reset();

            Array.from(form.elements).forEach(el => {
                el.classList.remove('campo-valido', 'campo-invalido');
            });
        }
    });
}

function validarNome(campo) {
    if (!campo) return false;
    const erroSpan = campo.nextElementSibling;
    if (campo.value.trim().length >= 3) {
        marcarCampoValido(campo, erroSpan);
        return true;
    } else {
        marcarCampoInvalido(campo, erroSpan);
        return false;
    }
}

function validarEmail(campo) {
    if (!campo) return false;
    const erroSpan = campo.nextElementSibling;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexEmail.test(campo.value.trim())) {
        marcarCampoValido(campo, erroSpan);
        return true;
    } else {
        marcarCampoInvalido(campo, erroSpan);
        return false;
    }
}

function validarMensagem(campo) {
    if (!campo) return false;
    const erroSpan = campo.nextElementSibling;
    if (campo.value.trim().length > 0) {
        marcarCampoValido(campo, erroSpan);
        return true;
    } else {
        marcarCampoInvalido(campo, erroSpan);
        return false;
    }
}

function marcarCampoValido(campo, erroSpan) {
    campo.classList.remove('campo-invalido');
    campo.classList.add('campo-valido');
    if (erroSpan && erroSpan.classList.contains('field-error-text')) {
        erroSpan.style.display = 'none';
    }
}

function marcarCampoInvalido(campo, erroSpan) {
    campo.classList.remove('campo-valido');
    campo.classList.add('campo-invalido');
    if (erroSpan && erroSpan.classList.contains('field-error-text')) {
        erroSpan.style.display = 'block';
    }
}

function limparEstadosCampos(campos) {
    campos.forEach(campo => {
        if (campo) {
            campo.classList.remove('campo-valido', 'campo-invalido');
            const erroSpan = campo.nextElementSibling;
            if (erroSpan && erroSpan.classList.contains('field-error-text')) {
                erroSpan.style.display = 'none';
            }
        }
    });
}

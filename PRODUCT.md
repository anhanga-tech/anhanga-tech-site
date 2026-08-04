# anhangá.tech — plano de produto e negócio

Este documento é a fonte de verdade do planejamento de negócio da anhangá.tech. Serve pra continuar o trabalho em qualquer sessão futura sem precisar re-derivar decisões já tomadas. Atualize-o sempre que uma decisão de produto, preço, posicionamento ou arquitetura mudar.

O backlog de execução (o que falta construir no site) vive nas [issues do repositório](https://github.com/felipewilliam2/anhanga-tech-site/issues), não aqui — este documento é sobre **o quê e por quê**, as issues são sobre **o que falta fazer**.

## Sobre a empresa

anhangá.tech é uma agência de soluções tech com IA voltada para **pequenos negócios**, inspirada na análise da concorrente [Playbook Lab](https://playbooklab.com.br) — agência boutique de automação/IA para vendas B2B, modelo de squad sob medida sem preço público, fundadores com background comercial.

A diferença central de público: o cliente da Playbook Lab tem time de vendas estruturado e orçamento pra squad bespoke. O cliente da anhangá.tech normalmente é o próprio dono atendendo, sem CRM, sensível a preço, decide rápido.

## Modelo de negócio

Duas linhas de oferta em paralelo:

1. **Produtizada** — sistemas pré-prontos, preço fechado, fácil de instalar e manter. Funciona como isca de SEO (páginas de produto otimizadas pra buscas de intenção específica).
2. **Consultiva** — solução personalizada pra quem precisa de algo sob medida, mais parecido com o modelo da Playbook Lab (mas mais enxuto — ver seção própria abaixo).

**Por quê esse modelo dual:** a trilha produtizada resolve o perfil de pequeno negócio (preço baixo, decisão rápida) e gera descoberta orgânica via SEO. A trilha consultiva captura quem tem necessidade maior e vira upsell natural da produtizada — uma "escada de valor".

**Cuidado de arquitetura:** as duas ofertas não podem se misturar na mesma página. Google rankeia melhor páginas com intenção única, e o visitante fica confuso sobre qual caminho seguir. Página de produto = preço + CTA "contratar". Página de consultoria = sem preço, CTA "agende uma conversa".

### Decisões de escopo

- **Nicho:** genérico no início (produtos que servem qualquer pequeno negócio), não vertical específico — prioriza alcance de SEO com termos amplos. A segmentação por vertical acontece na camada de SEO (landing pages), não no produto (ver seção de SEO).
- **Canal:** multicanal desde o início (WhatsApp + site + Instagram DM), não só WhatsApp como a Playbook Lab.
- **Precificação:** setup (cobrança única de instalação/configuração) + mensalidade recorrente de manutenção.

## Produtos (trilha produtizada)

### Linha inicial

| # | Produto | Dor que resolve | Status |
|---|---|---|---|
| 1 | Atendente IA | Mensagem fora do horário / volume alto sem resposta | Standalone — **MVP** |
| 2 | Agenda automática | Marcação/remarcação/lembrete manual | Standalone |
| 3 | Recuperador de orçamento parado | Lead pediu preço e sumiu | Add-on do Atendente IA |
| 4 | Triagem de lead | Dono perde tempo com curioso antes de saber se vale a pena | Add-on do Atendente IA |
| 5 | Painel/resumo diário | Dono sem visibilidade do dia | Standalone |

**Por que produtos 3 e 4 são add-ons, não produtos independentes:** dependem tecnicamente da mesma infra/dados do Atendente IA (histórico de conversa, Chatwoot). Oferecer como produto separado geraria complexidade comercial desnecessária — ficam como upgrade pago de quem já tem o Atendente IA, sem página de SEO própria.

**Por que Atendente IA é o MVP:** maior demanda/busca universal, menor dependência de integrações externas complexas (agenda/CRM), e serve de motor reaproveitável — os produtos 2 e 4 podem nascer como extensão do mesmo agente conversacional.

### Detalhamento por produto

**1 — Atendente IA**
- Setup: conexão dos canais, configuração da base de conhecimento do negócio, treinamento de tom de voz, testes/ajuste fino.
- Mensalidade: hospedagem da automação, custo de uso de IA, manutenção/ajustes, suporte via WhatsApp.
- Tiers: Básico (WhatsApp, volume menor, FAQ/horário/preço/catálogo) / Pro (WhatsApp+Instagram+site, volume maior, + triagem de lead + resumo diário).

**2 — Agenda automática**
- Setup: conexão de calendário (Google/Outlook), configuração de serviços/horários, regras de remarcação/cancelamento, mensagens de lembrete.
- Mensalidade: hospedagem + envio de lembretes (templates pagos fora da janela de 24h do WhatsApp) + manutenção.
- Tiers: Básico (1 profissional, lembrete automático) / Pro (múltiplos profissionais, remarcação self-service, sync bidirecional).
- É a extensão mais natural do Atendente IA — o mesmo agente detecta intenção de agendamento.

**3 — Recuperador de orçamento parado** (add-on)
- Setup: gatilho de tempo sem resposta, sequência de reengajamento, integração com onde o orçamento fica registrado.
- Mensalidade: hospedagem + envio de templates aprovados + manutenção.
- Depende do histórico de conversa do Atendente IA.

**4 — Triagem de lead** (add-on)
- Setup: critérios de qualificação (perguntas-chave, definição de fit), configuração de notificação de lead qualificado.
- Mensalidade: hospedagem + uso de IA + manutenção.
- Roda como camada de bot dentro do Chatwoot antes do humano assumir. Também vendável solo pra quem já tem atendimento humano e só quer a camada de filtro.

**5 — Painel/resumo diário**
- Setup: conectar fontes de dado (Chatwoot, Cal.com, Supabase), definir conteúdo do resumo.
- Mensalidade: hospedagem + geração/envio + manutenção.
- Tiers: Básico (resumo em texto via WhatsApp/e-mail) / Pro (dashboard web via Metabase).

### Precificação e nomes comerciais

Baseado em benchmark de mercado BR (chatbot IA WhatsApp R$49-500+/mês; agendamento automático R$39,90-500/mês):

| Produto | Nome comercial | Setup | Mensalidade |
|---|---|---|---|
| Atendente IA Básico | Anhangá Atende | R$497 | R$149/mês (~500 conversas) |
| Atendente IA Pro | Anhangá Atende Pro | R$897 | R$349/mês (multicanal, ~2.000 conversas) |
| Agenda automática Básico | Anhangá Agenda | R$297 | R$79/mês (1 profissional) |
| Agenda automática Pro | Anhangá Agenda Pro | R$497 | R$149/mês (múltiplos profissionais, sync bidirecional) |
| Painel/resumo diário Básico | Anhangá Radar | R$197 | R$49/mês (resumo em texto) |
| Painel/resumo diário Pro | Anhangá Radar Pro | R$397 | R$99/mês (dashboard web) |

Convenção de nome: prefixo **"Anhangá"** fixo em todos os produtos (marca guarda-chuva) + termo descritivo carregando a palavra-chave de SEO (Atende/Agenda/Radar).

**Custo de conversa Meta:** repassado à parte, **ao custo, sem markup**. Em clientes de alto volume esse custo pode chegar a R$600/mês — embuti-lo na mensalidade distorceria a margem. Repasse sem markup prioriza transparência como diferencial de venda ("não lucramos em cima do seu volume de mensagens"); a receita da anhangá.tech fica concentrada em setup + mensalidade fixa.

## Trilha consultiva — "Projeto Sob Medida"

Ativada quando a necessidade do cliente passa do que os produtos padrão cobrem: integração com sistema próprio (PDV/ERP/planilha), automação de processo específico, ou combinação de produtos além dos add-ons padrão.

**Processo** (mais enxuto que o squad de 3 pessoas da Playbook Lab, adaptado ao porte do cliente):
1. Diagnóstico rápido (**gratuito**, mesmo padrão da Playbook Lab)
2. Proposta fechada de escopo/prazo/**preço por projeto** (não por hora)
3. Execução com check-in semanal leve (via WhatsApp, reaproveitando a lógica do Anhangá Radar em vez de um dashboard tipo ClickUp)
4. Entrega com documentação e portabilidade — sem amarração ao final do contrato

**Equipe:** alocação por projeto, não squad fixo — evita custo fixo que pequeno negócio não sustenta.

**Preço:** sem valor mínimo público no site (como a Playbook Lab) — tudo definido via conversa após o diagnóstico.

## Stack técnica recomendada (produtos)

- **n8n** — orquestração de fluxos, self-hosted, mesma ferramenta que a Playbook Lab usa. Licença Sustainable Use: permite usar como motor interno de um serviço vendido a clientes, proíbe revender o n8n em si como produto hospedado.
- **Chatwoot** — inbox unificado multicanal (WhatsApp/Instagram/site) com fallback de atendimento humano.
- **Supabase** — histórico de conversas, leads, config por cliente.
- **Cal.com** — agendamento (produto 2), open source, self-hostável.
- **Metabase** — BI/dashboard pro tier Pro do Painel (produto 5).
- **LLM via API paga** (Claude/GPT) pela qualidade em português; opção de modelo aberto self-hosted (Ollama) se o custo variável em alto volume justificar.
- **WhatsApp: Meta Cloud API oficial**, não a rota não-oficial (Evolution API/Baileys). Prioriza compliance e estabilidade sobre velocidade de setup — evita o risco de banimento do número do cliente recair sobre a anhangá.tech. Trade-off aceito: setup mais burocrático (verificação de empresa, aprovação de templates).

Comparado e descartado: Activepieces (MIT puro, ecossistema menor) e Windmill (mais performático/code-first, curva de aprendizado maior) como alternativas ao n8n.

## Posicionamento e marca

**Value proposition:** "A anhangá.tech é o guardião tecnológico do pequeno negócio brasileiro — IA que vigia seu atendimento, sua agenda e seus dados 24 horas por dia, pra você nunca mais perder uma venda por estar ocupado, fora do horário ou dormindo."

**Tagline:** "O guardião do seu atendimento"

**Diferenciação frente à Playbook Lab:**
- Público: pequeno negócio vs. empresas com time de vendas estruturado
- Modelo: produto com preço público + consultivo vs. só consultivo sem preço
- Transparência: repasse de custo Meta sem markup, comunicado abertamente vs. preço só na conversa
- Onboarding: mais rápido, sem TI interno necessário
- Identidade: raiz cultural brasileira (mitologia do Anhangá)

**Tom de voz:** acolhedor e direto, sem jargão de consultoria corporativa — fala como quem entende a correria de tocar o negócio sozinho.

**Mitologia do Anhangá** (entidade tupi-guarani, guardiã que vigia a floresta à noite, protege quem respeita limites): usada como **referência sutil**, não narrativa central de campanha. O nome carrega o conceito de "guardião/vigilância 24h", mas o discurso principal do site é direto e orientado a resultado — evita soar forçado pra quem não conhece a lenda.

## SEO e arquitetura do site

### Pesquisa de palavras-chave (OpenSEO, mercado BR/pt, 2026-08-03)

**Achado principal:** termos genéricos ("pequena empresa") têm volume nacional muito baixo — "atendimento automático whatsapp" 390/mês, "assistente virtual whatsapp" 590/mês, "agendamento automático whatsapp" 20/mês. Quem procura automação não busca pelo termo genérico do produto, busca pelo **nome do próprio negócio**.

**Padrão de busca real identificado:** o termo dominante é **"sistema para [segmento]"** — não "chatbot para X" nem "agendamento para X" (volume quase zero nessas variações). Usar "Sistema para [Segmento]" como padrão de título/URL das páginas verticais.

**Ranking de verticais por oportunidade** (volume/mês, dificuldade):

| Vertical | Volume | Dificuldade |
|---|---|---|
| Restaurante | 1.600 | 8 |
| Oficina mecânica | 1.000 | 7 |
| Salão de beleza | 880 | 22 |
| Barbearia | 590 | 0 |
| Academia | 480 | 10 |
| Clínica de estética | 320 | 3 |
| Petshop | 320 | 4 |
| Dentista | 140 | 18 |

Descartados por alta dificuldade x baixo retorno: advogado (480, KD 77), imobiliária (480, KD 100), consultório médico (90, KD 100) — provavelmente dominados por players grandes de software jurídico/imobiliário/saúde.

**6 verticais priorizadas no lançamento:** restaurante, oficina mecânica, salão de beleza, barbearia, academia, e clínica de estética **ou** petshop (empate técnico — em aberto).

**Achado bônus pro conteúdo:** "agente de ia" tem 8.100 buscas/mês, dificuldade 4 — ótimo tema de topo de funil pro blog/Materiais. "n8n whatsapp" (720/mês) é conteúdo mais técnico, atrai público avançado, não o comprador direto.

### Decisão de arquitetura: landing pages verticais

O produto por baixo continua genérico (decisão de escopo mantida) — cada segmento ganha uma **página própria** otimizada pro termo vertical, apontando pro mesmo produto. SEO programático: validar com essas 6 verticais primeiro, expandir depois.

### Mapa de rotas

```
/                              → Home (hero com caminho duplo: produto pronto vs. sob medida)
/atendente-ia                  → Anhangá Atende (produto genérico)
/atendente-ia/sistema-para-restaurante
/atendente-ia/sistema-para-oficina-mecanica
/atendente-ia/sistema-para-salao-de-beleza
/atendente-ia/sistema-para-barbearia
/atendente-ia/sistema-para-academia
/atendente-ia/sistema-para-clinica-de-estetica (ou petshop, a definir)
/agendamento                   → Anhangá Agenda (produto genérico)
/agendamento/sistema-para-restaurante
/agendamento/sistema-para-oficina-mecanica
/agendamento/sistema-para-salao-de-beleza
/agendamento/sistema-para-barbearia
/agendamento/sistema-para-academia
/agendamento/sistema-para-clinica-de-estetica (ou petshop, a definir)
/painel                        → Anhangá Radar (produto genérico, sem página vertical — sem sinal de demanda)
/precos                        → tabela comparativa dos 3 produtos (Básico/Pro)
/consultoria                   → trilha consultiva "Projeto Sob Medida" (sem preço, CTA "agende uma conversa")
/materiais                     → conteúdo/blog: cauda longa + "agente de ia" (topo de funil) + "n8n whatsapp" (técnico)
/sobre                         → história da marca, equipe, referência sutil à mitologia
/contato                       → CTA WhatsApp + formulário
```

**Menu:** Produtos (dropdown Atendente/Agenda/Radar) · Preços · Consultoria · Materiais · Sobre · Contato

**Estrutura de página de produto:** H1 com palavra-chave → dor/problema → como funciona → o que está incluso (setup+mensalidade) → FAQ → CTA "contratar".

## Estado do site e próximos passos

O código do site vive neste repositório. Estado técnico (build, CI, dependências) está documentado no [README](./README.md); decisões de infraestrutura e o incidente do Dependabot estão no histórico de commits/PRs.

O trabalho que falta — reescrever a Home, construir as páginas de produto, preços, consultoria, sobre, materiais, contato, e as 12 páginas verticais — está rastreado como [issues abertas](https://github.com/felipewilliam2/anhanga-tech-site/issues) no repositório, usando os templates em `.github/ISSUE_TEMPLATE/`. Comece pela issue de roteador/arquitetura multi-página — é bloqueante pras demais.

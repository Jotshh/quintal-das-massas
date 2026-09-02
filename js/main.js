// ---------- DADOS DO CARDÁPIO ----------
const WHATSAPP_NUMBER = "5567992959371"; // 55 + DDD 67 + número

const icons = {
    petiscos: '<path d="M12 3v9M12 3c-2 0-3 1.5-3 3.5S10 12 12 12s3-2 3-5.5S14 3 12 3z"/><path d="M12 12v9"/>',
    jantinha: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
    "prato-dois": '<circle cx="9" cy="12" r="6"/><circle cx="17" cy="12" r="3.5"/>',
    "carnes-pedra": '<path d="M4 15c0-5 3.5-9 8-9s8 4 8 9-3.5 4-8 4-8 1-8-4z"/><path d="M9 9l3 3"/>',
    jacare: '<path d="M3 13c3-4 6-5 9-5s5 1 7 3l2-1-1 3 1 3-2-1c-2 2-4 3-7 3s-6-1-9-5z"/><circle cx="17" cy="10" r=".6" fill="currentColor"/>',
    vegano: '<path d="M6 20c-1-7 2-13 12-14-1 9-5 12-12 14z"/><path d="M6 20c1-4 3-7 6-9"/>',
    kids: '<circle cx="12" cy="8" r="3.4"/><path d="M5 20c1-4.5 4-7 7-7s6 2.5 7 7"/>',
    sobremesas: '<path d="M6 11h12l-1.5 8h-9L6 11z"/><path d="M9 11c0-3 1-5 3-6.5C14 6 15 8 15 11"/>',
    bebidas: '<path d="M7 4h10l-1.5 15a2 2 0 0 1-2 1.8h-3a2 2 0 0 1-2-1.8L7 4z"/><path d="M7.8 9h8.4"/>',
    adicionais: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M7.5 12h9"/>',
};

const menu = [
    {
        id: "petiscos",
        title: "Petiscos",
        items: [
            { name: "Batata", price: 25, desc: "Molho de alho" },
            { name: "Batata com Cheddar e Bacon", price: 45, desc: "Molho de cheddar e bacon" },
            { name: "Batata Pantaneira", price: 50, desc: "Creme de queijo e carne de sol" },
            { name: "Anel de Cebola", price: 30, desc: "Creme de alho" },
            { name: "Dadinho de Tapioca", price: 70, desc: "Geleia de pimenta" },
            { name: "Croquete de Costela", price: 60, desc: "Geleia de pimenta" },
            { name: "Filé Acebolado", price: 70, desc: "Batata frita" },
        ]
    },
    {
        id: "jantinha",
        title: "Jantinha (individual)",
        items: [
            { name: "Frango", price: 30, desc: "Arroz, frango grelhado, batata frita e vinagrete" },
            { name: "Pantaneiro", price: 30, desc: "Carreteiro, ovo, mandioca e vinagrete" },
            { name: "Peixe", price: 35, desc: "Arroz, peixe grelhado, batata frita e vinagrete" },
            { name: "Isca de Filé", price: 45, desc: "Arroz, isca de filé acebolado, batata frita e vinagrete" },
        ]
    },
    {
        id: "prato-dois",
        title: "Prato para dois",
        items: [
            { name: "Filé ao Molho 4 Queijo", price: 130, desc: "Arroz e batata frita" },
            { name: "Baião de Dois", price: 80, desc: "Vinagrete de abacaxi e mandioca" },
            { name: "Prato Pantaneiro", price: 80, desc: "Macarrão tropeiro, carreteiro, vinagrete e mandioca" },
            { name: "Frango ao Molho Mostarda", price: 70, desc: "Arroz e batata frita" },
            { name: "Arroz à Piamontese com Filé", price: 150, desc: "Farofa crocante" },
            { name: "Risoto de Camarão", price: 220, desc: "Farofa crocante e camarão recheado" },
            { name: "Peixe no Urucum", price: 160, desc: "Arroz e farofa de banana" },
            { name: "Nhoque de Cabotiá com Ragu de Fraldinha", price: 90, desc: "Arroz e farofa crocante" },
            { name: "Nhoque de Banana da Terra com Carne Seca", price: 95, desc: "Arroz e farofa crocante" },
            { name: "Rondelli 4 Queijos no Molho Branco", price: 100, desc: "Arroz e farofa crocante" },
            { name: "Rondelli de Tomate Seco e Rúcula", price: 95, desc: "Arroz e farofa crocante" },
            { name: "Lasanha de Costela", price: 95, desc: "Arroz e farofa crocante" },
        ]
    },
    {
        id: "carnes-pedra",
        title: "Carnes na pedra",
        items: [
            { name: "Picanha", price: 110, desc: "Arroz, mandioca, vinagrete e farofa" },
            { name: "Filé Completo", price: 130, desc: "Arroz, vinagrete de abacaxi, batata frita e farofa" },
            { name: "Porção de Filé com Queijo", price: 90, desc: "Mandioca" },
        ]
    },
    {
        id: "jacare",
        title: "Jacaré",
        items: [
            { name: "Jacaré à Romana", price: 150, desc: "Creme de alho e batata frita" },
            { name: "Jacaré ao Urucum", price: 230, desc: "Arroz e farofa de banana" },
            { name: "Linguiça de Jacaré", price: 260, desc: "Arroz, vinagrete de abacaxi, farofa e mandioca" },
        ]
    },
    {
        id: "vegano",
        title: "Vegano",
        items: [
            { name: "Porção de Falafel", price: 50, desc: "Geleia de pimenta" },
            { name: "Tropeiro Vegano", price: 80, desc: "Macarrão tropeiro, arroz, vinagrete e mandioca" },
        ]
    },
    {
        id: "kids",
        title: "Kids",
        items: [
            { name: "Filé (Kids)", price: 25, desc: "Arroz, filé e fritas" },
            { name: "Macarrão à Bolonhesa (Kids)", price: 25, desc: "Queijo ralado" },
        ]
    },
    {
        id: "sobremesas",
        title: "Sobremesas",
        items: [
            { name: "Petit Gâteau", price: 35, desc: "Sorvete e calda" },
            { name: "Brownie", price: 35, desc: "Sorvete e calda" },
        ]
    },
    {
        id: "bebidas",
        title: "Bebidas",
        subgroups: [
            {
                label: "Águas", items: [
                    { name: "Água Mineral Sferrie sem Gás 350ml", price: 5 },
                    { name: "Água Mineral Sferrie com Gás 350ml", price: 7 },
                    { name: "Água Tônica Antarctica 350ml", price: 8 },
                ]
            },
            {
                label: "Limoneto", items: [
                    { name: "H2O Limoneto sem Açúcar 350ml", price: 8 },
                ]
            },
            {
                label: "Refrigerantes", items: [
                    { name: "Coca-Cola Zero 1,5L", price: 15 },
                    { name: "Coca-Cola 1L", price: 12 },
                    { name: "Coca-Cola 310ml", price: 7 },
                    { name: "Sprite Mini 220ml", price: 5 },
                    { name: "Fanta Uva 220ml", price: 5 },
                    { name: "Fanta Laranja 220ml", price: 5 },
                    { name: "Coca-Cola sem Açúcar 350ml", price: 7 },
                ]
            },
            {
                label: "Sucos integrais", items: [
                    { name: "Suco Integral Gaseificado de Uva 275ml", price: 8 },
                    { name: "Suco Integral de Uva Garibaldi 1L", price: 25 },
                    { name: "Suco Integral de Uva Garibaldi 300ml", price: 12 },
                ]
            },
            {
                label: "Suco natural", items: [
                    { name: "Suco de Laranja 300ml", price: 10 },
                ]
            },
            {
                label: "Energéticos", items: [
                    { name: "Energético Monster 473ml", price: 15 },
                    { name: "Energético Red Bull sem Açúcar 250ml", price: 13 },
                ]
            },
            {
                label: "Cervejas", items: [
                    { name: "Corona Extra 330ml", price: 14 },
                    { name: "Heineken 330ml", price: 14 },
                    { name: "Stella Artois sem Glúten 330ml", price: 14 },
                ]
            },
        ]
    },
    {
        id: "adicionais",
        title: "Adicionais",
        items: [
            { name: "Arroz (500g)", price: 10 },
            { name: "Vinagrete (200g)", price: 10 },
            { name: "Vinagrete de Abacaxi (meio abacaxi)", price: 15 },
            { name: "Farofa (200g)", price: 7 },
            { name: "Farofa de Banana (200g)", price: 10 },
            { name: "Creme de Alho (50ml)", price: 3 },
        ]
    },
];

// ---------- RENDER MENU + TABS ----------
const tabsWrap = document.getElementById('catTabs');
const menuContent = document.getElementById('menuContent');
let itemCounter = 0;

function money(v) {
    return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function renderItemRow(item) {
    itemCounter++;
    const uid = 'item_' + itemCounter;
    item._uid = uid;
    return `
      <div class="item-row">
        <div class="item-main">
          <div class="item-title-line">
            <span class="item-name">${item.name}</span>
            <span class="item-dots"></span>
            <span class="item-price">R$ ${money(item.price)}</span>
          </div>
          ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ``}
        </div>
        <button class="item-add" aria-label="Adicionar ${item.name}" data-uid="${uid}">+</button>
      </div>
    `;
}

menu.forEach((cat, idx) => {
    // tab button
    const tabBtn = document.createElement('button');
    tabBtn.className = 'cat-tab' + (idx === 0 ? ' active' : '');
    tabBtn.textContent = cat.title;
    tabBtn.addEventListener('click', () => {
        document.getElementById('cat-' + cat.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tabsWrap.appendChild(tabBtn);

    // category block
    const block = document.createElement('div');
    block.className = 'category-block';
    block.id = 'cat-' + cat.id;

    const iconSvg = icons[cat.id]
        ? `<svg class="cat-icon" viewBox="0 0 24 24">${icons[cat.id]}</svg>`
        : '';
    let html = `<h3>${iconSvg}<span>${cat.title}</span></h3><div class="divider"><span class="dot"></span></div>`;

    if (cat.items) {
        cat.items.forEach(item => { html += renderItemRow(item); });
    }
    if (cat.subgroups) {
        cat.subgroups.forEach(sg => {
            html += `<div class="sub-label">${sg.label}</div>`;
            sg.items.forEach(item => { html += renderItemRow(item); });
        });
    }

    block.innerHTML = html;
    menuContent.appendChild(block);
});

// registry of all items by uid for cart logic
const itemRegistry = {};
menu.forEach(cat => {
    (cat.items || []).forEach(it => itemRegistry[it._uid] = it);
    (cat.subgroups || []).forEach(sg => sg.items.forEach(it => itemRegistry[it._uid] = it));
});

// highlight active tab on scroll
const catBlocks = menu.map(c => document.getElementById('cat-' + c.id));
const tabButtons = Array.from(tabsWrap.children);
window.addEventListener('scroll', () => {
    let activeIdx = 0;
    catBlocks.forEach((el, i) => {
        if (el.getBoundingClientRect().top - 160 <= 0) activeIdx = i;
    });
    tabButtons.forEach((b, i) => b.classList.toggle('active', i === activeIdx));
}, { passive: true });

// ---------- CARRINHO ----------
const cart = {}; // uid -> qty

function addToCart(uid) {
    cart[uid] = (cart[uid] || 0) + 1;
    renderCart();
}
function changeQty(uid, delta) {
    if (!cart[uid]) return;
    cart[uid] += delta;
    if (cart[uid] <= 0) delete cart[uid];
    renderCart();
}

menuContent.addEventListener('click', (e) => {
    const btn = e.target.closest('.item-add');
    if (!btn) return;
    addToCart(btn.dataset.uid);
    btn.textContent = '✓';
    setTimeout(() => { btn.textContent = '+'; }, 500);
});

function renderCart() {
    const wrap = document.getElementById('cartItemsWrap');
    const uids = Object.keys(cart);
    let total = 0;
    let count = 0;

    if (uids.length === 0) {
        wrap.innerHTML = `<div class="cart-empty">Seu pedido está vazio.<br>Adicione itens do cardápio.</div>`;
    } else {
        wrap.innerHTML = uids.map(uid => {
            const item = itemRegistry[uid];
            const qty = cart[uid];
            total += item.price * qty;
            count += qty;
            return `
          <div class="cart-line">
            <div class="cart-line-info">
              <div class="cart-line-name">${item.name}</div>
              <div class="cart-line-price">R$ ${money(item.price)} un.</div>
            </div>
            <div class="qty-control">
              <button class="qty-btn" data-uid="${uid}" data-delta="-1">−</button>
              <span class="qty-num">${qty}</span>
              <button class="qty-btn" data-uid="${uid}" data-delta="1">+</button>
            </div>
          </div>
        `;
        }).join('');
    }

    document.getElementById('cartTotal').textContent = 'R$ ' + money(total);
    document.getElementById('sendBtn').disabled = count === 0;

    const navCount = document.getElementById('navCartCount');
    const floating = document.getElementById('floatingCart');
    const floatingText = document.getElementById('floatingCartText');

    if (count > 0) {
        navCount.textContent = count;
        navCount.classList.remove('hidden');
        floating.classList.remove('hidden');
        floatingText.textContent = `Ver pedido · R$ ${money(total)}`;
    } else {
        navCount.classList.add('hidden');
        floating.classList.add('hidden');
    }
}

document.getElementById('cartItemsWrap').addEventListener('click', (e) => {
    const btn = e.target.closest('.qty-btn');
    if (!btn) return;
    changeQty(btn.dataset.uid, parseInt(btn.dataset.delta, 10));
});

function openCart() {
    document.getElementById('cartDrawer').classList.add('open');
    document.getElementById('cartOverlay').classList.add('open');
}
function closeCart() {
    document.getElementById('cartDrawer').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('open');
}

function sendToWhatsapp() {
    const uids = Object.keys(cart);
    if (uids.length === 0) return;

    let lines = [];
    lines.push('Olá! Gostaria de fazer o seguinte pedido no *Quintal das Massas*:');
    lines.push('');
    let total = 0;
    uids.forEach(uid => {
        const item = itemRegistry[uid];
        const qty = cart[uid];
        const subtotal = item.price * qty;
        total += subtotal;
        lines.push(`• ${qty}x ${item.name} — R$ ${money(subtotal)}`);
    });
    lines.push('');
    lines.push(`*Total: R$ ${money(total)}*`);
    lines.push('');
    lines.push('Aguardo confirmação da forma de entrega/retirada e pagamento. Obrigado!');

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

renderCart();

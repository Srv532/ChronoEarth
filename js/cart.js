/** Cart **/
const Cart = (function () {
    const CART_KEY = 'chronoearth-cart';
    const ORDER_KEY = 'chronoearth-order';
    const MAX_QTY = 10;
    function load(key, fallback) {
        try {
            return JSON.parse(localStorage.getItem(key)) || fallback;
        } catch (e) {
            return fallback;
        }
    }
    function save(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {}
    }
    function items() {
        const list = load(CART_KEY, []);
        return Array.isArray(list) ? list : [];
    }
    function store(list) {
        save(CART_KEY, list);
        showCount();
    }
    function findLine(list, id, size) {
        return list.find(function (line) {
            return line.id === id && line.size === size;
        });
    }
    function clamp(qty) {
        return Math.min(Math.max(Math.round(qty) || 1, 1), MAX_QTY);
    }
    function count() {
        return items().reduce(function (sum, line) { return sum + line.qty; }, 0);
    }
    function total() {
        return items().reduce(function (sum, line) { return sum + line.price * line.qty; }, 0);
    }
    function showCount() {
        const link = document.querySelector('.cart-link');
        if (link) link.textContent = 'Cart (' + count() + ')';
    }
    return {
        get: items,
        count: count,
        total: total,
        add: function (item) {
            const list = items();
            const line = findLine(list, item.id, item.size);
            if (line) {
                line.qty = clamp(line.qty + 1);
            } else {
                list.push({ id: item.id, name: item.name, price: item.price, size: item.size, qty: 1 });
            }
            store(list);
        },
        setQty: function (id, size, qty) {
            const list = items();
            const line = findLine(list, id, size);
            if (line) line.qty = clamp(qty);
            store(list);
        },
        remove: function (id, size) {
            store(items().filter(function (line) {
                return !(line.id === id && line.size === size);
            }));
        },
        clear: function () {
            store([]);
        },
        placeOrder: function (customerName) {
            save(ORDER_KEY, { name: customerName, items: items(), total: total() });
            store([]);
        },
        lastOrder: function () {
            return load(ORDER_KEY, null);
        },
        money: function (amount) {
            return '₹' + amount.toLocaleString('en-IN');
        },
        showCount: showCount
    };
})();
/** Nav cart link **/
(function () {
    const nav = document.querySelector('header nav');
    if (!nav) return;
    const link = document.createElement('a');
    link.href = 'checkout.html';
    link.className = 'cart-link';
    nav.appendChild(link);
    Cart.showCount();
})();

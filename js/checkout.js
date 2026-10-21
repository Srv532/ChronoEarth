/** Checkout **/
(function () {
    const form = document.querySelector('.checkout-form');
    const list = document.getElementById('cart-list');
    const sumItems = document.getElementById('sum-items');
    const sumTotal = document.getElementById('sum-total');
    const submit = form.querySelector('.co-submit');
    function make(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }
    /** Cart list **/
    function renderCart() {
        const items = Cart.get();
        list.textContent = '';
        if (items.length === 0) {
            const empty = make('p', 'cart-empty', 'Your cart is empty. ');
            const link = make('a', '', 'Browse the merchandise');
            link.href = 'merchandise.html';
            empty.appendChild(link);
            list.appendChild(empty);
        }
        items.forEach(function (line) {
            const row = make('div', 'cart-row');
            const info = make('div', 'cart-info');
            info.appendChild(make('strong', '', line.name));
            info.appendChild(make('small', '', 'Size: ' + line.size + ' · ' + Cart.money(line.price) + ' each'));
            const qty = make('input');
            qty.type = 'number';
            qty.min = 1;
            qty.max = 10;
            qty.value = line.qty;
            qty.setAttribute('aria-label', 'Quantity for ' + line.name);
            qty.addEventListener('change', function () {
                Cart.setQty(line.id, line.size, Number(qty.value));
                renderCart();
            });
            const lineTotal = make('span', 'cart-line-total', Cart.money(line.price * line.qty));
            const remove = make('button', 'cart-remove', 'Remove');
            remove.type = 'button';
            remove.addEventListener('click', function () {
                Cart.remove(line.id, line.size);
                renderCart();
            });
            row.appendChild(info);
            row.appendChild(qty);
            row.appendChild(lineTotal);
            row.appendChild(remove);
            list.appendChild(row);
        });
        if (items.length > 0) {
            const totalRow = make('p', 'cart-total');
            totalRow.appendChild(make('span', '', 'Total'));
            totalRow.appendChild(make('strong', '', Cart.money(Cart.total())));
            list.appendChild(totalRow);
        }
        sumItems.textContent = Cart.count();
        sumTotal.textContent = Cart.money(Cart.total());
        submit.disabled = items.length === 0;
        Cart.showCount();
    }
    /** Payment fields **/
    const FIELDS = {
        upi: ['upi-id'],
        card: ['card-no', 'card-name', 'card-exp', 'card-cvv'],
        netbanking: [],
        cod: []
    };
    function updatePaymentFields() {
        const method = form.querySelector('input[name="pay"]:checked').value;
        Object.keys(FIELDS).forEach(function (name) {
            const active = name === method;
            FIELDS[name].forEach(function (id) {
                const input = document.getElementById(id);
                input.required = active;
                input.disabled = !active;
            });
        });
    }
    form.querySelectorAll('input[name="pay"]').forEach(function (radio) {
        radio.addEventListener('change', updatePaymentFields);
    });
    /** Input format **/
    function digitsOnly(id, maxLength, format) {
        const input = document.getElementById(id);
        input.addEventListener('input', function () {
            const digits = input.value.replace(/\D/g, '').slice(0, maxLength);
            input.value = format ? format(digits) : digits;
        });
    }
    digitsOnly('card-no', 16, function (digits) { return digits.replace(/(\d{4})(?=\d)/g, '$1 '); });
    digitsOnly('card-exp', 4, function (digits) { return digits.length > 2 ? digits.slice(0, 2) + '/' + digits.slice(2) : digits; });
    digitsOnly('card-cvv', 4);
    digitsOnly('pin', 6);
    /** Place order **/
    form.addEventListener('submit', function (event) {
        if (Cart.count() === 0) {
            event.preventDefault();
            return;
        }
        Cart.placeOrder(document.getElementById('fullname').value.trim());
    });
    renderCart();
    updatePaymentFields();
})();

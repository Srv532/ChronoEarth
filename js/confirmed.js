/** Order recap **/
(function () {
    const order = Cart.lastOrder();
    if (!order || !order.items || order.items.length === 0) return;
    const done = document.querySelector('.co-done');
    const heading = done.querySelector('h1');
    const firstName = (order.name || '').split(' ')[0];
    if (firstName) heading.textContent = 'Thank you, ' + firstName + '!';
    const recap = document.createElement('ul');
    recap.className = 'order-recap';
    order.items.forEach(function (line) {
        const item = document.createElement('li');
        const label = document.createElement('span');
        label.textContent = line.name + ' (' + line.size + ') × ' + line.qty;
        const amount = document.createElement('span');
        amount.textContent = Cart.money(line.price * line.qty);
        item.appendChild(label);
        item.appendChild(amount);
        recap.appendChild(item);
    });
    const totalRow = document.createElement('li');
    totalRow.className = 'order-recap-total';
    const totalLabel = document.createElement('span');
    totalLabel.textContent = 'Total';
    const totalAmount = document.createElement('span');
    totalAmount.textContent = Cart.money(order.total);
    totalRow.appendChild(totalLabel);
    totalRow.appendChild(totalAmount);
    recap.appendChild(totalRow);
    heading.nextElementSibling.after(recap);
})();

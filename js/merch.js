/** Size, add to cart, buy now **/
(function () {
    const SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
    const APPAREL = ['T-Shirt', 'Shirt'];
    document.querySelectorAll('.merch-card').forEach(function (card) {
        const name = card.querySelector('h3').textContent.trim();
        const kind = card.querySelector('.merch-kind').textContent.trim();
        const price = parseInt(card.querySelector('.merch-price').textContent.replace(/\D/g, ''), 10);
        const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const buy = card.querySelector('.merch-buy');
        const buyNow = buy.querySelector('.merch-btn');
        let sizeSelect = null;
        if (APPAREL.indexOf(kind) !== -1) {
            sizeSelect = document.createElement('select');
            sizeSelect.className = 'merch-size';
            sizeSelect.setAttribute('aria-label', 'Size for ' + name);
            SIZES.forEach(function (size) {
                const option = document.createElement('option');
                option.textContent = size;
                option.selected = size === 'M';
                sizeSelect.appendChild(option);
            });
            buy.parentNode.insertBefore(sizeSelect, buy);
        }
        function currentItem() {
            return { id: id, name: name, price: price, size: sizeSelect ? sizeSelect.value : 'One size' };
        }
        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.className = 'merch-btn merch-btn-alt';
        addButton.textContent = 'Add to cart';
        addButton.addEventListener('click', function () {
            Cart.add(currentItem());
            addButton.textContent = 'Added ✓';
            setTimeout(function () { addButton.textContent = 'Add to cart'; }, 1000);
        });
        buyNow.addEventListener('click', function (event) {
            event.preventDefault();
            Cart.add(currentItem());
            window.location.href = buyNow.href;
        });
        const actions = document.createElement('div');
        actions.className = 'merch-actions';
        buy.replaceChild(actions, buyNow);
        actions.appendChild(addButton);
        actions.appendChild(buyNow);
    });
})();

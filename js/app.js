document.addEventListener('DOMContentLoaded', function () {

    const errorContainer = document.querySelector('.error-message');
    const form = document.querySelector('form');
    const quantity = document.querySelector('input[name=products-quantity]');
    const ordersMonth = document.querySelector('input[name=orders-quantity]');
    const packageSelect = document.querySelector('select[name=choose-package]');
    const accountingSelection = document.querySelector('input[name=accounting]');
    const terminalSelection = document.querySelector('input[name=terminal]');
    // const terminalSelection = form.elements[4];
    const numbersValidationMessage = quantity.dataset.errorText;
    const ordersMonthValidationMessage = ordersMonth.dataset.errorText;

    const productsCalculationBox = document.querySelector('.pricing-calculator__prices-price_products');
    const monthlyOrdersCalculationBox = document.querySelector('.pricing-calculator__prices-price_orders');
    const packageCalculationBox = document.querySelector('.pricing-calculator__prices-price_package');
    const accountingCalculationBox = document.querySelector('.pricing-calculator__prices-price_accounting');
    const terminalCalculationBox = document.querySelector('.pricing-calculator__prices-price_terminal');

    const productsSum = document.querySelector('.products_sum');
    const productsCalculation = document.querySelector('.products_calculation');
    const productPrice = 16;
    const ordersSum = document.querySelector('.orders_sum');
    const ordersCalculation = document.querySelector('.orders_calculation');
    const ordersPrice = 4.25;
    const packageChosen = document.querySelector('.package_chosen');
    const packageSum = document.querySelector('.package_sum');
    const accountingValue = document.querySelector('.accounting_value');
    const accountingSum = document.querySelector('.accounting_sum');
    const terminalValue = document.querySelector('.terminal_value');
    const terminalSum = document.querySelector('.terminal_sum');

    const totalBox = document.querySelector('.total');
    let total = document.querySelector('.total__total-price');
    let totalMonthlyOrders = 0;
    let totalQuantity = 0;
    let totalAccounting = 0;
    let totalTerminal = 0;
    let totalPackage = 0;


    quantity.addEventListener('input', function (event) {
        const quanitytyValue = quantity.value;


        if (quanitytyValue.includes('e') === true || quanitytyValue < 1) {
            errorContainer.innerText = numbersValidationMessage;
            totalQuantity = 0;
            productsSum.innerText = "$";
            productsCalculation.innerText = "";
            productsCalculationBox.classList.add('hidden');
            quantity.style.borderColor = "var(--main-red-color)";
            event.preventDefault();
        } else if (errorContainer) {
            event.preventDefault();
            productsCalculationBox.classList.remove('hidden');
            errorContainer.innerText = "";
            productsCalculation.innerText = quanitytyValue + " * " + productPrice;
            totalQuantity = quanitytyValue * productPrice;
            productsSum.innerText = "$" + totalQuantity;
            quantity.style.borderColor = "var(--main-blue-color)";
            return totalQuantity;
        }
    });

    ordersMonth.addEventListener('input', function (event) {
        const ordersMonthValue = ordersMonth.value;
        if (ordersMonthValue.includes('e') === true || ordersMonthValue < 1) {
            errorContainer.innerText = ordersMonthValidationMessage;
            totalMonthlyOrders = 0;
            ordersSum.innerText = "$";
            ordersCalculation.innerText = "";
            monthlyOrdersCalculationBox.classList.add('hidden');
            event.preventDefault();
            ordersMonth.style.borderColor = "var(--main-red-color)";
        } else if (errorContainer) {
            event.preventDefault();
            monthlyOrdersCalculationBox.classList.remove('hidden');
            errorContainer.innerText = "";
            ordersCalculation.innerText = ordersMonthValue + " * " + ordersPrice;
            totalMonthlyOrders = ordersMonthValue * ordersPrice;
            ordersSum.innerText = "$" + totalMonthlyOrders;
            ordersMonth.style.borderColor = "var(--main-blue-color)";
            return totalMonthlyOrders;
        }
    });

    packageSelect.addEventListener('change', function (event) {
        const packageChosenValue = packageSelect.value;
        packageChosen.innerText = packageChosenValue;
        if (packageChosenValue === "basic") {
            packageCalculationBox.classList.remove('hidden');
            totalPackage = "60";
            packageSum.innerText = "$" + totalPackage;
        } else if (packageChosenValue === "professional") {
            packageCalculationBox.classList.remove('hidden');
            totalPackage = "80";
            packageSum.innerText = "$" + totalPackage;
        } else {
            packageCalculationBox.classList.remove('hidden');
            totalPackage = "99";
            packageSum.innerText = "$" + totalPackage;
        }
    });

    accountingSelection.addEventListener('change', function (event) {
        const accountingSelectionValue = accountingSelection.checked;
        if (accountingSelectionValue === true) {
            accountingCalculationBox.classList.remove('hidden');
            accountingValue.innerText = "Accounting";
            totalAccounting = 35;
            accountingSum.innerText = "$" + totalAccounting;
        } else {
            accountingCalculationBox.classList.add('hidden');
            accountingValue.innerText = "";
            accountingSum.innerText = "$";
            totalAccounting = 0;
        }

    });

    terminalSelection.addEventListener('change', function (event) {
        const terminalSelectionValue = terminalSelection.checked;
        if (terminalSelectionValue === true) {
            terminalCalculationBox.classList.remove('hidden');
            terminalValue.innerText = "Terminal";
            totalTerminal = 5;
            terminalSum.innerText = "$" + totalTerminal;
        } else {
            terminalCalculationBox.classList.add('hidden');
            terminalValue.innerText = "";
            terminalSum.innerText = "$";
            totalTerminal = 0;
        }
    });


    form.addEventListener('change', function () {
        total.innerText = parseFloat(totalQuantity) + parseFloat(totalMonthlyOrders) + parseFloat(totalPackage) + parseFloat(totalAccounting) + parseFloat(totalTerminal);
        console.log(total.innerText);
        if (total.innerText > 0) {
            totalBox.classList.remove('hidden');
        } else {
            totalBox.classList.add('hidden');
        }
    });




    const lt768px = window.matchMedia('(max-width: 768px)');
    const burger = document.querySelector('.burger');
    const navbarMenu = document.querySelector('.navbar__menu');

    const clickMenu = function() {
        burger.classList.toggle("change");
        navbarMenu.classList.toggle("navbar__menu_disappear");
    };

    if (lt768px.matches) {
        burger.addEventListener('click', clickMenu);
    } else {
        burger.removeEventListener('click', clickMenu);
    }

    lt768px.addListener(function(lt768px) {
        if (lt768px.matches) {
            burger.addEventListener('click', clickMenu);
        } else {
            burger.removeEventListener('click', clickMenu);
        }
    })


    // function navbarToggle() {
    //     const lt768px = window.matchMedia('(max-width: 768px)');
    //     const burger = document.querySelector('.burger');
    //
    //     const navbarMenu = document.querySelector('.navbar__menu');
    //
    //     if (lt768px.matches === true) {
    //         burger.addEventListener('click', function () {
    //             burger.classList.toggle("change");
    //             navbarMenu.classList.toggle("navbar__menu_disappear");
    //         });
    //     }
    // }
    // navbarToggle();
    //
    // window.addEventListener('resize', function () {
    //
    //     navbarToggle();
    // });


});


function calcularDescuento() {
    const producto1 = parseFloat(document.getElementById('producto1').value) || 0;
    const producto2 = parseFloat(document.getElementById('producto2').value) || 0;
    const producto3 = parseFloat(document.getElementById('producto3').value) || 0;
    const producto4 = parseFloat(document.getElementById('producto4').value) || 0;
    const producto5 = parseFloat(document.getElementById('producto5').value) || 0;

    if ([producto1, producto2, producto3, producto4, producto5].some(value => value <= 0)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos deben tener un numero positivo.',
        });
        return;
    }

  
    const subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
    document.getElementById('subtotal').value = `L ${subtotal.toFixed(2)}`;

    let tasadesc = 0;
    if (subtotal >= 1000 && subtotal < 5000) {
        tasadesc = 10;
    } else if (subtotal >= 5000 && subtotal < 9000) {
        tasadesc = 20;
    } else if (subtotal >= 9000 && subtotal < 13000) {
        tasadesc = 30;
    } else if (subtotal >= 13000) {
        tasadesc = 40;
    }


    const descuento = (subtotal * tasadesc) / 100;
    const total = subtotal - descuento;

    document.getElementById('descuentoLabel').innerText = `Descuento ${tasadesc}%`;
    document.getElementById('descuento').value = `L ${descuento.toFixed(2)}`;
    document.getElementById('total').value = `L ${total.toFixed(2)}`;
}

function LimpiarForm() {
    document.getElementById('descuentoForm').reset();
    document.getElementById('descuentoLabel').innerText = "Descuento 0%";
    document.getElementById('subtotal').value = "";
    document.getElementById('descuento').value = "";
    document.getElementById('total').value = "";
}

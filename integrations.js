// Populate the "Other Useful APIs" section when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const apiReferenceDiv = document.getElementById('api-reference');
  apiReferenceDiv.innerHTML = `
    <div>
      <h3>Other Useful APIs</h3>
      <div>
        <a href="#">Remove Gmail User</a>
        <a href="#">API Reference</a>
      </div>
    </div>
  `;
});

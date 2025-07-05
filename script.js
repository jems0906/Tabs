const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add 'active' to clicked tab and its content
    tab.classList.add('active');
    const tabNum = tab.getAttribute('data-tab');
    document.querySelector(`.tab-content[data-content="${tabNum}"]`).classList.add('active');
  });
});

(() => {
  const controls = document.querySelector('.filters');
  if (!controls) return;
  const buttons = [...controls.querySelectorAll('button')];
  const groups = [...document.querySelectorAll('.library-group')];
  const status = document.querySelector('.result-count');
  function filter(category, updateUrl = false) {
    const valid = buttons.some(button => button.dataset.filter === category);
    const selected = valid ? category : 'all';
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selected)));
    groups.forEach(group => { group.hidden = selected !== 'all' && group.dataset.category !== selected; });
    const count = groups.filter(group => !group.hidden).reduce((sum, group) => sum + group.querySelectorAll('.library-row').length, 0);
    status.textContent = `${count} projects${selected === 'all' ? ' across four areas' : ' in ' + groups.find(group => group.dataset.category === selected).querySelector('h3').textContent}`;
    if (updateUrl) {
      const url = new URL(location.href);
      if (selected === 'all') url.searchParams.delete('category'); else url.searchParams.set('category', selected);
      url.hash = 'library';
      history.replaceState(null, '', url);
    }
  }
  controls.hidden = false;
  controls.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (button) filter(button.dataset.filter, true);
  });
  filter(new URL(location.href).searchParams.get('category') || 'all');
  window.addEventListener('popstate', () => filter(new URL(location.href).searchParams.get('category') || 'all'));
})();

(() => {
  if (document.querySelector('.meteor-entry')) return;
  const link = document.createElement('a');
  link.className = 'meteor-entry';
  link.href = '/phone-guide';
  link.setAttribute('aria-label', '查看择星：给岳父岳母的选机建议');
  link.textContent = '择星 · 选机建议';
  document.body.append(link);
})();

(function() {
  function $(sel, root){ return (root||document).querySelector(sel); }
  function $all(sel, root){ return Array.from((root||document).querySelectorAll(sel)); }

  // PUBLIC_INTERFACE
  function enhanceInputFocus(container) {
    /** Adds focus ring and border color transitions for input wrappers. */
    const inputs = $all('.input-field', container);
    inputs.forEach(inp => {
      inp.addEventListener('focus', () => {
        const box = inp.closest('div').querySelector('.style-30');
        if (box) {
          box.style.transition = 'box-shadow .15s ease, border-color .15s ease';
          box.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--color-129575').trim() || '#129575';
          box.style.boxShadow = '0 0 0 2px rgba(18,149,117,0.15)';
        }
      });
      inp.addEventListener('blur', () => {
        const box = inp.closest('div').querySelector('.style-30');
        if (box) {
          box.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--color-d9d9d9').trim() || '#d9d9d9';
          box.style.boxShadow = 'none';
        }
      });
    });
  }

  // PUBLIC_INTERFACE
  function bindPasswordToggle(container) {
    /** Binds a show/hide toggle button to the #password input when available. */
    const toggle = $('#toggle-password', container);
    const pwd = $('#password', container);
    if (toggle && pwd) {
      toggle.addEventListener('click', () => {
        const visible = pwd.type === 'text';
        pwd.type = visible ? 'password' : 'text';
        toggle.setAttribute('aria-label', visible ? 'Show password' : 'Hide password');
        toggle.textContent = visible ? '👁️' : '🙈';
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen-sign-in-11-235');
    if (!screen) return;
    enhanceInputFocus(screen);
    bindPasswordToggle(screen);
  });

  // Expose minimal API for possible reuse
  window._kaviaApp = Object.assign(window._kaviaApp || {}, {
    enhanceInputFocus,
    bindPasswordToggle
  });
})();

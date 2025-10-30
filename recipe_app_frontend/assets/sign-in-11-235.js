(function(){
  function $(sel, root){ return (root||document).querySelector(sel); }

  function bindFormBehaviors(container){
    const email = $('#email', container);
    const pwd = $('#password', container);
    const btn = $('#btn-signin', container);
    if (btn && email && pwd) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        // Basic guard to mirror simple UX
        const emailOk = email.value.trim().length > 0;
        const pwdOk = pwd.value.trim().length > 0;
        if (!emailOk || !pwdOk) {
          // Subtle visual nudge by setting border temporarily
          [email, pwd].forEach((inp) => {
            if (!inp.value.trim()) {
              const box = inp.closest('div').querySelector('.style-30');
              if (box){
                box.style.borderColor = '#fd3654';
                setTimeout(() => {
                  box.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--color-d9d9d9').trim() || '#d9d9d9';
                }, 900);
              }
            }
          });
          return;
        }
        // No real backend hook here; noop for demo
        console.log('Sign In clicked', { email: email.value });
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen-sign-in-11-235');
    if (!screen) return;
    bindFormBehaviors(screen);
  });
})();

function submitEducatorKit(form) {
  const email = form.email.value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return false;
  }
  
  const button = form.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Sending kit...';
  button.disabled = true;
  
  // Simulate delivery
  setTimeout(() => {
    alert(`✅ Starter Kit sent to ${email}!\n\nCheck your inbox (and spam folder). The kit includes:\n• 5 complete lesson plans\n• Ready-to-use slide decks\n• Student worksheets\n• Layerz Wallet quickstart guide\n• Assessment rubric\n\nWelcome to the LayerZoo educator community!`);
    button.textContent = 'Kit Sent ✓';
    form.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 3000);
  }, 1200);
  
  return false;
}
  const fetchButton = document.querySelector('#fetchButton');
  const outputMessage = document.querySelector('#output');

  fetchButton.addEventListener('click', async () => {
      try {
          const res = await axios.get('http://localhost:8000/cgi-bin/script.cgi');
          outputMessage.innerText = `${res.data}`;
      } catch (error) {
          console.error('Error:', error);
          outputMessage.innerText = 'Failed to fetch data';
      }
  });
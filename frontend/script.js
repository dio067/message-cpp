  const fetchButton = document.querySelector('#fetchButton');
  const outputMessage = document.querySelector('#output');

  fetchButton.addEventListener('click', async () => {
      try {
          const response = await axios.get('http://localhost:8000/cgi-bin/script.cgi');
          outputMessage.innerText = `${response.data}`;
      } catch (error) {
          console.error('Error:', error);
          outputMessage.innerText = 'Failed to fetch data';
      }
  });
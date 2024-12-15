function calculateCGPA() {
    // Retrieve regulation year
    const regulation = document.getElementById('regulation').value;
  
    // Semester weights for each regulation
    const weights = {
      "2010": [0.05, 0.05, 0.05, 0.15, 0.15, 0.20, 0.25, 0.10],
      "2016": [0.05, 0.05, 0.05, 0.10, 0.15, 0.20, 0.25, 0.15],
      "2022": [0.05, 0.05, 0.10, 0.10, 0.20, 0.20, 0.20, 0.10]
    };
  
    // Input semester GPAs
    const gpaInputs = [
      'semester1', 'semester2', 'semester3', 'semester4', 
      'semester5', 'semester6', 'semester7', 'semester8'
    ];
    const gpas = gpaInputs.map(id => parseFloat(document.getElementById(id).value) || 0);
  
    // Get weights for the selected regulation
    const selectedWeights = weights[regulation];
  
    // Calculate weighted CGPA
    const cgpa = gpas.reduce((acc, gpa, index) => acc + (gpa * selectedWeights[index]), 0);
  
    // Display result
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
  }
  
  function clearFields() {
    // Clear all input fields
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => input.value = '');
    
    // Clear result display
    document.getElementById('result').innerText = '';
  }
  
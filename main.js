function loadMenu() {
  var popupWindow = window.open('', '_blank', 'width=500,height=400');
  if (popupWindow) {
    // Load the menu by setting the HTML content of the popup window
    popupWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>RetroHax</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
          }
          #title {
            font-size: 36px;
            font-weight: bold;
            margin-top: 50px;
          }
          button {
            font-size: 18px;
            padding: 10px 20px;
            margin: 5px;
          }
        </style>
        <script>
          // Function to update the score in the parent window
          function updateScore(amount) {
            // Check if the parent window and the variable exist
            if (window.opener && window.opener._xn && window.opener._xn._WE && window.opener._xn._WE[100263] && window.opener._xn._WE[100263].gmlteam_score) {
              window.opener._xn._WE[100263].gmlteam_score[0] += amount;
            } else {
              // Log an error if the variable doesn't exist
              console.error("Failed to update score. Variable not found in the parent window.");
            }
          }
        </script>
      </head>
      <body>

        <div id="title">RetroHax</div>

        <!-- Button to increment score by 7 -->
        <button onclick="updateScore(7)">+7 Points</button>

        <!-- Button to increment score by 3 -->
        <button onclick="updateScore(3)">+3 Points</button>

      </body>
      </html>
    `);
  } else {
    // error handling
    window.alert("Failed to open popup window. Please check your browser's popup settings.");
  }
}
loadMenu()

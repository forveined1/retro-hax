function loadMenu() {
  var popupWindow = window.open('', '_blank', 'width=700,height=400');
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
          .title {
            font-size: 24px;
            font-weight: bold;
            margin: 20px 0;
          }
          .section {
            display: inline-block;
            margin: 20px;
          }
          .editTitle {
            font-size: 18px;
            margin-bottom: 10px;
          }
          .buttonContainer {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 20px;
          }
          button {
            font-size: 14px;
            padding: 8px 16px;
            margin: 3px;
          }
          input {
            font-size: 14px;
            padding: 8px;
            margin-bottom: 10px;
          }
        </style>
        <script>
          // Function to update the score in the parent window
          function updateScore(teamIndex, amount) {
            // Check if the parent window and the variable exist
            if (
              window.opener &&
              window.opener._xn &&
              window.opener._xn._WE &&
              window.opener._xn._WE[100263] &&
              window.opener._xn._WE[100263].gmlteam_score
            ) {
              window.opener._xn._WE[100263].gmlteam_score[teamIndex] += amount;
            } else {
              // Log an error if the variable doesn't exist
              console.error("Failed to update score. Variable not found in the parent window.");
            }
          }

          // Function to update coach credit in the parent window
          function updateCoachCredit() {
            // Get the new value from the input field
            var newCredit = parseInt(document.getElementById('coachCreditInput').value);

            // Check if the parent window and the variable exist
            if (
              window.opener &&
              window.opener._xn &&
              window.opener._xn._WE &&
              window.opener._xn._WE[100002] &&
              window.opener._xn._WE[100002].gmlcoach_credit
            ) {
              window.opener._xn._WE[100002].gmlcoach_credit = newCredit;
            } else {
              // Log an error if the variable doesn't exist
              console.error("Failed to update coach credit. Variable not found in the parent window.");
            }
          }
        </script>
      </head>
      <body>

        <div class="title">RetroHax</div>

        <div class="section">
          <div class="editTitle">Edit Away Team Score</div>

          <div class="buttonContainer">
            <!-- Button to increase the away team score by 7 -->
            <button onclick="updateScore(0, 7)">+7 Points</button>

            <!-- Button to increase the away team score by 3 -->
            <button onclick="updateScore(0, 3)">+3 Points</button>
          </div>
        </div>

        <div class="section">
          <div class="editTitle">Edit Home Team Score</div>

          <div class="buttonContainer">
            <!-- Button to increase the home team score by 7 -->
            <button onclick="updateScore(1, 7)">+7 Points</button>

            <!-- Button to increase the home team score by 3 -->
            <button onclick="updateScore(1, 3)">+3 Points</button>
          </div>
        </div>

        <div class="section">
          <div class="editTitle">Coach Credit</div>

          <div class="buttonContainer">
            <!-- Input field for typing the new value -->
            <input type="number" id="coachCreditInput" placeholder="New Coach Credit" />

            <!-- Button to update the coach credit -->
            <button onclick="updateCoachCredit()">Update Coach Credits</button>
          </div>
        </div>

      </body>
      </html>
    `);
  } else {
    // error handling
    window.alert("Failed to open popup window. Please check your browser's popup settings.");
  }
}
loadMenu();
